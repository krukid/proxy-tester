const request = require('request');
const geoip = require('geoip-lite');
const stats = require('./stats');
const { logOut, logErr } = require('./logger');
const TARGET_URL = 'http://icanhazip.com';

async function runner(gateway, { success, failure }) {
  return new Promise((resolve, reject) => {
    const proxy = gateway.addr;
    const country = gateway.ctr;
    request({ url: TARGET_URL, proxy }, function(err, res, body) {
      if (!err && res.statusCode === 200) {
        const ipaddr = body.trim();
        const lookup = geoip.lookup(ipaddr);
        const ipcountry = lookup ? lookup.country : '??';
        success(country, proxy, res, ipaddr, ipcountry);
      } else {
        failure(err, country, proxy, res, body);
      }
      resolve();
    });
  });
}

module.exports = (eventBus) => {
  eventBus.on('create', async (getter) => {
    const gateway = getter();
    if (gateway) {
      await runner(gateway, {
        success: (...args) => {
          eventBus.emit('success', ...args);
        },
        failure: (...args) => {
          eventBus.emit('failure', ...args);
        },
      });
      eventBus.emit('create', getter);
    }
  });
  
  eventBus.on('success', (targetCc, gw, res, ip, geoCc) => {
    logOut(`[success] ${ip}@${gw}:${targetCc}=${geoCc}`);
    stats(`${targetCc}=${gw}`, 'success');
    process.stdout.write(targetCc === geoCc ? '.' : '?');
  });
  
  eventBus.on('failure', (err, targetCc, gw, res, body) => {
    logErr(`[failure] ${gw}:${targetCc} (${res ? res.statusCode : '-1'})\n<body> ${body}\n<trace> ${err && err.stack}`);
    stats(`${targetCc}=${gw}`, 'failure');
    process.stdout.write('x');
  });
};

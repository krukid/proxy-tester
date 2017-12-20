const fs = require('fs');
const errStream = fs.createWriteStream(`${APP_ROOT}/output/err.txt`, { flags: 'a' });
const outStream = fs.createWriteStream(`${APP_ROOT}/output/out.txt`, { flags: 'a' });

const startLine = `[ START:${new Date()} ] -------------------\n`;
errStream.write(startLine);
outStream.write(startLine);

exports.logOut = (s) => {
  outStream.write(`${s}\n`);
};

exports.logErr = (s) => {
  errStream.write(`${s}\n`);
};

process.once('beforeExit', () => {
  const endLine = `[ END:${new Date()} ] -------------------\n`;
  errStream.end(endLine);
  outStream.end(endLine);
});

global.APP_ROOT = __dirname;

const stats = require('./lib/stats');
// const { getProxyCount, getProxyGateway } = require('./providers/geosurf');
const { getProxyCount, getProxyGateway } = require('./providers/balaclava');
const REPETITIONS = 10;
const FIBERS = 10;

const EventEmitter = require('events');
const eventBus = new EventEmitter();
require('./lib/workers')(eventBus);

const QUEUE = [];
for (let i = 0; i < getProxyCount(); i += 1) {
  for (let j = 0; j < REPETITIONS; j += 1) {
    QUEUE.push(getProxyGateway(i));
  }
}
console.log(`[info] Generated test queue (${QUEUE.length})`);

function fetchQueueItem() {
  if (QUEUE.length === 0) return null;
  const idx = Math.floor(Math.random() * QUEUE.length);
  const item = QUEUE[idx];
  QUEUE.splice(idx, 1);
  return item;
}

const WORKER_COUNT = Math.min(FIBERS, QUEUE.length);
for (let i = 0; i < WORKER_COUNT; i += 1) {
  eventBus.emit('create', fetchQueueItem);
}
console.log(`[info] Started workers (${WORKER_COUNT})`);

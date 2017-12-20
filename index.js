const stats = require('./stats');
const { PROXY_HOST, PROXY_GATEWAYS } = require('./providers/geosurf');
const REPETITIONS = 10;
const FIBERS = 10;

const EventEmitter = require('events');
const eventBus = new EventEmitter();
require('./workers')(eventBus);

const QUEUE = [];
for (let i = 0; i < PROXY_GATEWAYS.length; i += 1) {
  for (let j = 0; j < REPETITIONS; j += 1) {
    QUEUE.push(PROXY_GATEWAYS[i]);
  }
}
console.log(`Generated test queue (${QUEUE.length})`);

function fetchQueueItem() {
  if (QUEUE.length === 0) return null;
  const idx = Math.floor(Math.random() * QUEUE.length);
  const item = QUEUE[idx];
  QUEUE.splice(idx, 1);
  return { ...item, addr: `http://${PROXY_HOST}:${item.country_port}` };
}

const WORKER_COUNT = Math.min(FIBERS, QUEUE.length);
for (let i = 0; i < WORKER_COUNT; i += 1) {
  eventBus.emit('create', fetchQueueItem);
}
console.log(`Started workers (${WORKER_COUNT})`);

const columnify = require('columnify');

const db = {};

module.exports = (key, value) => {
  let count = 0;
  if (db[key] && db[key][value]) {
    count = db[key][value];
  }
  db[key] = { ...db[key], [value]: count + 1 };
};

const time0 = new Date();
process.once('beforeExit', () => {
  console.log(`\n[info] Test completed in ${(new Date() - time0) / 1000}s`);
  console.log(`[info] Printing stats...`);
  const entries = Object.keys(db).map((key) => {
    const { success = 0, failure = 0 } = db[key];
    const total = success + failure;
    const failureRate = failure / total * 100;
    return {
      key,
      success,
      failure,
      total,
      failureRate,
    }
  });
  console.log(columnify(entries));
});

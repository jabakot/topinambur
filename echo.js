const fetch = require("node-fetch");
const db = require("./db");

let toPing = [];
let stopJob = undefined;

const job = () =>
  toPing.forEach(v =>
    fetch(url)
      .then()
      .catch(console.error)
  );

const toMs = mins => mins * 60000;

const start = config => {
  toPing = db.read();
  stopJob = setInterval(job, toMs(3));
};

const stop = () => clearInterval(stopJob);

const addUrl = val => {
  if (Array.isArray(val)) {
    valforEach(v => toPing.push(v));
  } else if (typeof val === "string") {
    toPing.push(v);
    db.add(v);
  }
};

module.exports = {
  start,
  stop,
  addUrl
};

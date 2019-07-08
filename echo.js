const fetch = require("node-fetch");
const db = require("./db");

let toPing = [];
let stopJob = undefined;

const job = () => {
  toPing.forEach(url =>
    fetch(url)
      .then(v => console.log(v.status))
      .catch(console.error)
  );
};

const toMs = mins => mins * 60000;

const start = config => {
  toPing = [...db.read()];
  stopJob = setInterval(() => job(), toMs(1));
};

const stop = () => clearInterval(stopJob);

const addUrl = val => {
  if (Array.isArray(val)) {
    val.forEach(v => toPing.push(v));
  } else if (typeof val === "string") {
    toPing.push(val);
    db.add(val);
  }
};

module.exports = {
  start,
  stop,
  addUrl
};

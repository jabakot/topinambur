const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./db.json");
const db = low(adapter);

db.defaults({ ping: [] }).write();

read = () => {
  return db.get("ping").value();
};

const add = v => {
  const orm = db.get("ping");
  const vals = orm.value();
  console.log('#', vals, vals.indexOf(v) === -1);
  if (vals.indexOf(v) === -1) {
    orm.push(v).write();
  }
};

module.exports = {
  add,
  read
};

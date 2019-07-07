const cfg = require("./config");
const s = require("./server");
const e = require("./echo");

const config = cfg.get();
[e, s].forEach(el => el.start(config));

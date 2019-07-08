const server = require("fastify")({
  logger: false
});
const echo = require("./echo");
const db = require("./db");

init = config => {
  server.get("/", (req, res) => {
    res.send("I am topinambur -- the E C H O daddy!");
  });

  server.post("/add", (req, res) => {
    const { secret, source } = req.params;
    if (
      secret !== undefined &&
      secret === config.secret &&
      source !== undefined
    ) {
      echo.addUrl(source);
      res.send("success");
    }
    res.send("error");
  });

  server.get("/targets", (req, res) => {
    const { secret, user } = req.params;
    if (user === "admin" && secret === config.secret) {
      res.send(db.get());
      return;
    }
    res.send("targets?");
  });
};

const start = config => {
  init(config);
  server.listen(config.port, "0.0.0.0", (err, addr) => {
    if (err) throw err;
    console.log(`Server live on ${addr}`);
  });
};

module.exports = {
  start
};

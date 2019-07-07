if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

get = () => {
  const { secret } = process.env;
  return {
    port: process.env.$PORT || process.env.PORT || 8000,
    secret
  };
};

module.exports = {
  get
};

const config = {
  dialect: "sqlite",
  dbCredentials: {
    url: `db/msfs.sqlite`,
  },
  out: "db/schema",
};

console.log(config);

export default config;

// new config (dialect) works in this version range
// "drizzle-orm": "~0.31.0" to "~0.34.0"
// "drizzle-kit": "~0.22.0" to "~0.25.0"

// stops working in this version range
// "drizzle-orm": "~0.35.0" to "latest"
// "drizzle-kit": "~0.26.0" to "latest"

const config = {
  dialect: "sqlite",
  dbCredentials: {
    url: `db/msfs.sqlite`,
  },
  out: "db/schema",
};

console.log(config);

export default config;

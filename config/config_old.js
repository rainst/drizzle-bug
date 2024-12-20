// drizzle-orm: "~0.27.0"
// drizzle-kit: "~0.19.0"

const config = {
  driver: "better-sqlite",
  dbCredentials: {
    url: `db/msfs.sqlite`,
  },
  out: "db/schema_old",
};

console.log(config);

export default config;

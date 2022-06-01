export const dbConfig = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USER || "postgres",
  PASSWORD: process.env.DB_PASSWORD || "root",
  DB: process.env.DB || "carddb",
  DIALECT: process.env.DB_DIALECT || "pgSql",
  pool: {
    max: process.env.DB_POOL_MAX || 5,
    min: process.env.DB_POOL_MAX || 0,
    acquire: process.env.DB_POOL_ACQ || 30000,
    idle: process.env.DB_POOL_IDLE || 10000,
  },
};

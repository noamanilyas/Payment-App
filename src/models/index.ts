import { Sequelize } from "sequelize";
import { dbConfig } from "../core/config/db.config";
import { CardModel } from "./card.model";

enum Dialects {
  pgSql = "postgres",
}

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: Dialects[dbConfig.DIALECT],
  pool: {
    max: Number(dbConfig.pool.max),
    min: Number(dbConfig.pool.min),
    acquire: Number(dbConfig.pool.acquire),
    idle: Number(dbConfig.pool.idle),
  },
});

export const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  cards: CardModel(sequelize, Sequelize),
};

import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { db } from "./models/index";
import { routes } from "./routes/routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../docs/swagger.json";

dotenv.config();

const host = "localhost";
const port = Number(process.env.PORT || 1337);

export const app = express();

db.sequelize.sync();

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(routes);

export const server = app.listen(port, host, () => {
  console.info(`Server Listening at http://${host}:${port}`);
});

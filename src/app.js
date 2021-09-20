import express from "express";
import "dotenv/config";
import morgan from "morgan";
import home from "./routes/home";
import logger from "./config/logger";
logger.info("hello guys");

const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/public`));
app.use("/", home);

export default app;

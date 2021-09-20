import express from "express";
import "dotenv/config";
import home from "./routes/home";

const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/public`));
app.use("/", home);

export default app;

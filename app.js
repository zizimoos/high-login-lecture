import express from "express";
import home from "./src/routes/home";

const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use("/", home);

export default app;

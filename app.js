import express from "express";
import home from "./src/routes/home";

const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use("/", home);

export default app;

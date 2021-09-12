import express from "express";
import home from "./routes/home";

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
app.use("/", home);

export default app;

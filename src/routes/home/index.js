import express from "express";
import { login, main } from "../../controller";
const router = express.Router();

router.get("/", main);
router.get("/login", login);

export default router;

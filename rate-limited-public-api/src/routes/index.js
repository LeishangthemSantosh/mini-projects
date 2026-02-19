import { Router } from "express";
import quotesRoute from "./quotes.route.js";

const router = Router();

router.use("/", quotesRoute);

export default router;

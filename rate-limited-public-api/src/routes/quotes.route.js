import { Router } from "express";
import { QuotesController } from "../controllers/quotes.controller.js";
import { rateLimitMiddleware } from "../middlewares/index.js";

const router = Router();
const quotesController = new QuotesController();

router.get("/quotes", rateLimitMiddleware, quotesController.getAllQuotes);

export default router;

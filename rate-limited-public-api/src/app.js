import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Rate Limited Public API",
  });
});

export default app;

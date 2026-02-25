import express from "express";
import appRouter from "./routers/index.js";
import redirectRouter from "./routers/redirect.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", appRouter);
app.use("/", redirectRouter);

app.use((req, res) => {
  return res.status(404).json({
    status: 404,
    success: false,
    message: "Api not found",
  });
});

export default app;

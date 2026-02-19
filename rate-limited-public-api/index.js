import app from "./src/app.js";
import "dotenv/config";
import { createServer } from "http";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

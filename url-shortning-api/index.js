import app from "./src/app.js";
import "dotenv/config";
import { createServer } from "http";
import dotenv from "dotenv";

dotenv.config();

const server = createServer(app);
const PORT = process.env.PORT || 8001;

server.listen(PORT, () => {
  console.log("Server start at PORT ", PORT);
});

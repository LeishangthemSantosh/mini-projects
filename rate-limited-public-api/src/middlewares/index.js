import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE_PATH = path.join(__dirname, "../storage/store.json");

let memoryStore = {};

export const rateLimitMiddleware = (req, res, next) => {
  loadFromFile();
  const ALLOW_REQUEST_PER_MINUTE = 10;
  const MINIMUM_INTERVAL_MS = (60 * 1000) / ALLOW_REQUEST_PER_MINUTE;
  const ip = req.connection.remoteAddress;

  const lastTimestamp = memoryStore[ip];

  // get current timestamp
  const currentTimestamp = Date.now();

  const requestTimeDiff = currentTimestamp - lastTimestamp;

  if (requestTimeDiff < MINIMUM_INTERVAL_MS) {
    return res.status(429).send("Too many request");
  }

  // Save new timestamp and ip
  memoryStore[ip] = currentTimestamp;
  saveToFIle();

  next();
};

const loadFromFile = () => {
  if (fs.existsSync(FILE_PATH)) {
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    memoryStore = JSON.parse(data || {});
  }
};

const saveToFIle = () => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(memoryStore, null, 2));
};

const getItem = (key) => {
  return memoryStore[key];
};

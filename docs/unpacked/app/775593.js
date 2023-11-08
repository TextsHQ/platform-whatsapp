Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JOB_PRIORITY = exports.DEFAULT_JOB_TIMEOUT_MS = exports.DEFAULT_JOB_PRIORITY = exports.DEFAULT_CONCURRENCY = undefined;
const r = require("../vendor/654302.js")({
  SKIP: "SKIP_PRIORITIZATION",
  UI_ACTION: "UI_ACTION",
  LOW: "LOW",
  HIGH: "HIGH",
  OFFLINE: "OFFLINE",
  HISTORY_SYNC: "HISTORY_SYNC",
  BEST_EFFORT: "BEST_EFFORT"
});
exports.JOB_PRIORITY = r;
exports.DEFAULT_CONCURRENCY = 1;
const i = r.LOW;
exports.DEFAULT_JOB_PRIORITY = i;
exports.DEFAULT_JOB_TIMEOUT_MS = 10000;
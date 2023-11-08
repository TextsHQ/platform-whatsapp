Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsHaltDetector = exports.DEFAULT_THRESHOLD = exports.DEFAULT_INTERVAL = undefined;
var r = require("./14361.js");
exports.DEFAULT_THRESHOLD = 3000;
exports.DEFAULT_INTERVAL = 10000;
const i = new r.BaseJsHaltDetector(10000, 3000);
exports.jsHaltDetector = i;
i.startDetection();
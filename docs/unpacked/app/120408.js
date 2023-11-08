Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcFtsStorageWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  WebcFtsStorage: [3642, {
    ftsTotalSize: [1, i]
  }, [1, 1, 1], "regular"]
});
exports.WebcFtsStorageWamEvent = a;
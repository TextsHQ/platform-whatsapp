Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcStorageStatWamEvent = undefined;
var r = require("./901032.js");
const {
  BOOLEAN: i,
  INTEGER: a
} = r.TYPES;
const o = (0, r.defineEvents)({
  WebcStorageStat: [1504, {
    webcAgeOfStorage: [3, a],
    webcPackingEnabled: [4, i],
    webcStorageQuota: [2, a],
    webcStorageUsage: [1, a]
  }, [1, 1, 1], "regular"]
});
exports.WebcStorageStatWamEvent = o;
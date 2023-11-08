Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyncdKeyCountWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  SyncdKeyCount: [3978, {
    keysUsedInSnapshotCount: [1, i],
    p80MuationsPerKey: [2, i],
    p95MuationsPerKey: [3, i],
    syncdSessionLengthDays: [4, i],
    totalKeyCount: [5, i]
  }, [1, 1, 1], "regular"]
});
exports.SyncdKeyCountWamEvent = a;
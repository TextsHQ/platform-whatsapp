Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcDbOpenWamEvent = undefined;
var r = require("./901032.js");
const {
  BOOLEAN: i,
  INTEGER: a,
  STRING: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  WebcDbOpen: [1940, {
    webcDbName: [1, o],
    webcDbOpenNumAttempts: [3, a],
    webcDbOpenWasSuccess: [2, i]
  }, [1, 1, 1], "regular"]
});
exports.WebcDbOpenWamEvent = s;
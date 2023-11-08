Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PsIdUpdateWamEvent = undefined;
var r = require("./901032.js");
var i = require("./216391.js");
const {
  BOOLEAN: a,
  INTEGER: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  PsIdUpdate: [2862, {
    isFromWamsys: [4, a],
    psIdAction: [2, i.PS_ID_ACTION],
    psIdKey: [1, o],
    psIdRotationFrequence: [3, o]
  }, [1, 1, 1], "regular"]
});
exports.PsIdUpdateWamEvent = s;
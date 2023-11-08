Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcMediaLoadWamEvent = undefined;
var r = require("./901032.js");
var i = require("./427219.js");
const {
  TIMER: a
} = r.TYPES;
const o = (0, r.defineEvents)({
  WebcMediaLoad: [1202, {
    webcMediaLoadResult: [2, i.WEBC_MEDIA_LOAD_RESULT_CODE],
    webcMediaLoadT: [1, a]
  }, [1, 1, 1], "regular"]
});
exports.WebcMediaLoadWamEvent = o;
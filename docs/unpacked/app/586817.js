Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrekeysDepletionWamEvent = undefined;
var r = require("./901032.js");
var i = require("./718451.js");
var a = require("./86575.js");
var o = require("./147402.js");
const s = (0, r.defineEvents)({
  PrekeysDepletion: [3014, {
    deviceSizeBucket: [3, o.SIZE_BUCKET],
    messageType: [2, i.MESSAGE_TYPE],
    prekeysFetchReason: [1, a.PREKEYS_FETCH_CONTEXT]
  }, [1, 1, 1], "regular"]
});
exports.PrekeysDepletionWamEvent = s;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FmxActionWamEvent = undefined;
var r = require("./901032.js");
var i = require("./604106.js");
var a = require("./283136.js");
var o = require("./348506.js");
const {
  BOOLEAN: s,
  INTEGER: l
} = r.TYPES;
const u = (0, r.defineEvents)({
  FmxAction: [4444, {
    commonGroupNum: [1, l],
    countryShown: [2, s],
    fmxEntryPoint: [3, i.FMX_ENTRY_POINT],
    fmxEvent: [4, a.FMX_EVENT],
    highlightGroupType: [6, o.HIGHLIGHT_GROUP_TYPE],
    isSenderSmb: [7, s],
    notAContactShown: [5, s]
  }, [1, 1, 1], "regular"]
});
exports.FmxActionWamEvent = u;
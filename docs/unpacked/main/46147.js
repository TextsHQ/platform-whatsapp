Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LwiEntryPointImpressionWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./846377.js");
var o = require("./885764.js");
const {
  BOOLEAN: l,
  INTEGER: i,
  STRING: u
} = a.TYPES;
const s = (0, a.defineEvents)({
  LwiEntryPointImpression: [2906, {
    businessToolsSessionId: [2, u],
    catalogSessionId: [1, u],
    itemsCount: [7, i],
    lwiEntryPoint: [3, r.LWI_ENTRY_POINT],
    lwiSubEntryPoint: [6, o.LWI_SUB_ENTRY_POINT],
    statusSessionId: [5, i],
    userHasLinkedFbPage: [4, l]
  }, [1, 1, 1], "regular"]
});
exports.LwiEntryPointImpressionWamEvent = s;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LwiEntryTapWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./846377.js");
var o = require("./885764.js");
var l = require("./733397.js");
const {
  BOOLEAN: i,
  INTEGER: u,
  STRING: s
} = a.TYPES;
const c = (0, a.defineEvents)({
  LwiEntryTap: [2770, {
    businessToolsSessionId: [4, s],
    catalogSessionId: [2, s],
    itemsCount: [11, u],
    lwiEntryPoint: [3, r.LWI_ENTRY_POINT],
    lwiFlowId: [1, s],
    lwiSubEntryPoint: [7, o.LWI_SUB_ENTRY_POINT],
    statusSessionId: [6, u],
    statusTypeMedia: [12, l.STATUS_TYPE_MEDIA],
    userHasLinkedFbPage: [5, i],
    waCampaignId: [10, s]
  }, [1, 1, 1], "regular"]
});
exports.LwiEntryTapWamEvent = c;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TsNavigationWamEvent = undefined;
var r = require("./901032.js");
var i = require("./460416.js");
var a = require("./402579.js");
var o = require("./21008.js");
const {
  INTEGER: s,
  STRING: l
} = r.TYPES;
const u = (0, r.defineEvents)({
  TsNavigation: [4334, {
    cid: [19, l],
    groupSize: [1, s],
    navigationDestination: [2, a.TS_SURFACE],
    navigationSource: [3, a.TS_SURFACE],
    relativeTimestampMs: [4, s],
    threadType: [7, i.THREAD_TYPE],
    tsSessionId: [5, s],
    typeOfGroup: [6, o.TYPE_OF_GROUP_ENUM]
  }, [1, 1, 1], "regular"]
});
exports.TsNavigationWamEvent = u;
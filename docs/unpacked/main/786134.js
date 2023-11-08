Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeepLinkOpenWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("../app/632726.js");
var o = require("./583324.js");
var l = require("./521040.js");
const {
  BOOLEAN: i,
  STRING: u
} = a.TYPES;
const s = (0, a.defineEvents)({
  DeepLinkOpen: [2136, {
    deepLinkOpenFrom: [2, r.DEEP_LINK_OPEN_FROM],
    deepLinkSessionId: [6, u],
    deepLinkType: [3, o.DEEP_LINK_TYPE],
    isContact: [4, i],
    linkOwnerType: [5, l.OWNER_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.DeepLinkOpenWamEvent = s;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewOnceScreenshotActionsWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./230862.js");
var o = require("./18831.js");
const {
  BOOLEAN: l,
  STRING: i
} = a.TYPES;
const u = (0, a.defineEvents)({
  ViewOnceScreenshotActions: [3606, {
    isAGroup: [1, l],
    threadId: [2, i],
    voMessageType: [3, r.VO_MESSAGE_TYPE],
    voSsAction: [4, o.VO_SS_ACTION]
  }, [1, 1, 1], "regular"]
});
exports.ViewOnceScreenshotActionsWamEvent = u;
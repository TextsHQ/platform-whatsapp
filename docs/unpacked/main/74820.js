Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeepInChatErrorsWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./799606.js");
var o = require("./483618.js");
const {
  BOOLEAN: l,
  INTEGER: i
} = a.TYPES;
const u = (0, a.defineEvents)({
  KeepInChatErrors: [3698, {
    canEditDmSettings: [7, l],
    isAGroup: [2, l],
    isAdmin: [3, l],
    kicAction: [4, r.KIC_ACTION_TYPE],
    kicErrorCode: [5, o.KIC_ERROR_CODE_TYPE],
    kicMessageEphemeralityDuration: [6, i]
  }, [1, 1, 1], "regular"]
});
exports.KeepInChatErrorsWamEvent = u;
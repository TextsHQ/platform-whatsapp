Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UiRevokeActionWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./59911.js");
const {
  INTEGER: o,
  STRING: l
} = a.TYPES;
const i = (0, a.defineEvents)({
  UiRevokeAction: [3298, {
    messageAction: [1, r.UI_REVOKE_ACTION_TYPE],
    uiRevokeActionDuration: [2, o],
    uiRevokeActionSessionId: [3, l]
  }, [1, 1, 1], "regular"]
});
exports.UiRevokeActionWamEvent = i;
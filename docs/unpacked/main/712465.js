Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachmentTrayActionsWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./500173.js");
var o = require("./521839.js");
var l = require("../app/749286.js");
var i = require("./43608.js");
const {
  BOOLEAN: u,
  INTEGER: s
} = a.TYPES;
const c = (0, a.defineEvents)({
  AttachmentTrayActions: [3980, {
    actionDurationMs: [1, s],
    attachmentTrayAction: [2, o.ATTACHMENT_TRAY_ACTION_TYPE],
    attachmentTrayActionTarget: [3, r.ATTACHMENT_TRAY_ACTION_TARGET_TYPE],
    groupSizeBucket: [4, l.CLIENT_GROUP_SIZE_BUCKET],
    isAGroup: [5, u],
    isSuccessful: [6, u],
    sendMediaType: [7, i.SEND_MEDIA_TYPE_TYPE],
    sendTime: [8, s]
  }, [1, 1, 1], "regular"]
});
exports.AttachmentTrayActionsWamEvent = c;
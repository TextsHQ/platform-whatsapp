Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditMessageSendWamEvent = undefined;
var r = require("./901032.js");
var i = require("./616615.js");
var a = require("./684290.js");
var o = require("./718451.js");
var s = require("./21008.js");
const {
  BOOLEAN: l,
  INTEGER: u
} = r.TYPES;
const c = (0, r.defineEvents)({
  EditMessageSend: [3990, {
    editDuration: [1, u],
    editType: [2, i.EDIT_TYPE],
    mediaType: [8, a.MEDIA_TYPE],
    messageSendResultIsTerminal: [3, l],
    messageType: [4, o.MESSAGE_TYPE],
    resendCount: [5, u],
    retryCount: [6, u],
    typeOfGroup: [9, s.TYPE_OF_GROUP_ENUM]
  }, [1, 1, 1], "regular"]
});
exports.EditMessageSendWamEvent = c;
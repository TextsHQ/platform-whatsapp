Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageSecretErrorsWamEvent = undefined;
var r = require("./901032.js");
var i = require("./684290.js");
var a = require("./408959.js");
var o = require("./107443.js");
const s = (0, r.defineEvents)({
  MessageSecretErrors: [3686, {
    messageMediaType: [3, i.MEDIA_TYPE],
    messageSecretAllowedList: [1, a.MESSAGE_SECRET_ALLOWED_TYPE],
    messageSecretError: [2, o.MESSAGE_SECRET_ERROR_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.MessageSecretErrorsWamEvent = s;
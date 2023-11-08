Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  if (!e) {
    return i.UPLOAD_ORIGIN_TYPE.UNKNOWN;
  }
  if ((0, r.unproxy)(e).isNewsletter) {
    return i.UPLOAD_ORIGIN_TYPE.CHANNEL;
  }
  if ((0, r.unproxy)(e).isGroup) {
    return i.UPLOAD_ORIGIN_TYPE.CHAT_GROUP;
  } else {
    return i.UPLOAD_ORIGIN_TYPE.CHAT_PERSONAL;
  }
};
var r = require("./163139.js");
var i = require("./495588.js");
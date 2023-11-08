Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STATUSJID_USERJID = exports.ENUM_IMAGE_VIDEO = exports.ENUM_BLOCKED_UNBLOCKED = undefined;
var r = require("./418987.js");
exports.ENUM_BLOCKED_UNBLOCKED = {
  blocked: "blocked",
  unblocked: "unblocked"
};
exports.ENUM_IMAGE_VIDEO = {
  image: "image",
  video: "video"
};
const i = {
  validators: [r.validateStatusJid, r.validateUserJid],
  typeName: "StatusJid|UserJid"
};
exports.STATUSJID_USERJID = i;
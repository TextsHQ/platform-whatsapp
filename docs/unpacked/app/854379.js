Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chatJidToChatWid = function (e) {
  return (0, i.toChatWid)((0, i.createWid)(e));
};
exports.deviceJidToDeviceWid = function (e) {
  return (0, i.createDeviceWid)(e);
};
exports.deviceJidToUserWid = function (e) {
  return (0, i.toUserWid)((0, i.createWid)(e));
};
exports.groupJidToWid = function (e) {
  return (0, i.createWid)(e);
};
exports.jidWithTypeToWid = function (e) {
  const t = (0, r.extractJidFromJidWithType)(e);
  return (0, i.createWid)(t);
};
exports.newsletterJidToWid = function (e) {
  return (0, i.createWid)(e);
};
exports.userJidToUserWid = function (e) {
  return (0, i.createUserWid)(e);
};
var r = require("./714443.js");
var i = require("./669050.js");
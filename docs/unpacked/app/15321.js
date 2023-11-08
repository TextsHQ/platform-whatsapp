var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContactChecksum = function () {
  return a.default.getUser(i.KEYS.CONTACT_CHECKSUM_MODEL_STORAGE);
};
exports.getInitialGroupPhash = function (e) {
  const t = a.default.getUser(i.KEYS.INITIAL_GROUP_PHASH);
  try {
    return JSON.parse(t)[e];
  } catch (e) {
    return null;
  }
};
exports.getInitialGroupPhashMap = function () {
  const e = a.default.getUser(i.KEYS.INITIAL_GROUP_PHASH);
  try {
    return JSON.parse(e);
  } catch (e) {
    return null;
  }
};
exports.setContactChecksum = function (e) {
  a.default.setUser(i.KEYS.CONTACT_CHECKSUM_MODEL_STORAGE, e);
};
exports.setInitialGroupPhash = function (e) {
  a.default.setUser(i.KEYS.INITIAL_GROUP_PHASH, JSON.stringify(e));
};
var i = require("./94872.js");
var a = r(require("./53575.js"));
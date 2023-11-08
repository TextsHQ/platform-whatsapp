var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupTypeFromChatWid = function () {
  return s.apply(this, arguments);
};
exports.isCagIncognitoFromChatWid = function () {
  return l.apply(this, arguments);
};
exports.isCagIncognitoFromGroupMetadata = u;
var i = r(require("../vendor/348926.js"));
var a = require("./185212.js");
var o = require("./862159.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    if (e != null && e.isGroup()) {
      const t = yield (0, a.getGroupMetadata)(e);
      if (t != null) {
        return (0, o.groupTypeToWamEnum)((0, o.getGroupTypeFromGroupMetadata)(t));
      }
    }
  })).apply(this, arguments);
}
function l() {
  return (l = (0, i.default)(function* (e) {
    const t = yield (0, a.getGroupMetadata)(e);
    if (t == null) {
      return null;
    } else {
      return u(t);
    }
  })).apply(this, arguments);
}
function u(e) {
  return (0, o.getGroupTypeFromGroupMetadata)(e) === o.GroupType.LINKED_ANNOUNCEMENT_GROUP && (e == null ? undefined : e.incognito) === true;
}
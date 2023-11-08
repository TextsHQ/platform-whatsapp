Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeContentTypePayOrMessageWithTypeMixinGroup = function (e, t) {
  if (t.isContentTypePay) {
    return (0, i.mergeContentTypePayMixin)(e);
  }
  if (t.messageWithType) {
    return (0, a.mergeMessageWithTypeMixin)(e, t.messageWithType);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./981358.js");
var a = require("./763492.js");
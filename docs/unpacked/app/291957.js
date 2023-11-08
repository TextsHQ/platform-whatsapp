Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USyncLidProtocol = undefined;
exports.lidParser = function (e) {
  e.assertTag("lid");
  const t = e.maybeChild("error");
  if (t) {
    return {
      errorCode: t.attrInt("code"),
      errorText: t.attrString("text")
    };
  }
  return e.maybeAttrLidUserJid("val");
};
var r = require("./716358.js");
var i = require("./355813.js");
exports.USyncLidProtocol = class {
  getName() {
    return "lid";
  }
  getQueryElement() {
    return (0, r.wap)("lid", null);
  }
  getUserElement(e) {
    const t = e.getLid();
    if (t) {
      return (0, r.wap)("lid", {
        jid: t ? (0, i.USER_JID)(t) : r.DROP_ATTR
      });
    } else {
      return null;
    }
  }
};
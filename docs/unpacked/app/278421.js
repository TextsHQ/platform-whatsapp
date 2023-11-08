Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USyncContactProtocol = undefined;
exports.contactParser = function (e) {
  e.assertTag("contact");
  const t = e.maybeChild("error");
  if (t) {
    return {
      errorCode: t.attrInt("code"),
      errorText: t.attrString("text")
    };
  }
  const n = {
    type: e.attrString("type")
  };
  if (e.hasAttr("username")) {
    n.username = e.attrString("username");
  }
  return n;
};
var r = require("./716358.js");
exports.USyncContactProtocol = class {
  getName() {
    return "contact";
  }
  getQueryElement() {
    return (0, r.wap)("contact", null);
  }
  getUserElement(e) {
    const t = e.getPhone();
    const n = e.getUsername();
    if (t != null) {
      return (0, r.wap)("contact", null, t);
    } else if (n != null) {
      return (0, r.wap)("contact", {
        username: (0, r.CUSTOM_STRING)(n)
      });
    } else {
      return null;
    }
  }
};
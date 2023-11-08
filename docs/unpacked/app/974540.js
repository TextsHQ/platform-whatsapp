Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USyncUsernameProtocol = undefined;
exports.usernameParser = function (e) {
  e.assertTag("username");
  const t = e.maybeChild("error");
  if (t) {
    return {
      errorCode: t.attrInt("code"),
      errorText: t.attrString("text")
    };
  }
  if (e.hasContent()) {
    return e.contentString();
  }
  return null;
};
var r = require("./716358.js");
exports.USyncUsernameProtocol = class {
  getName() {
    return "username";
  }
  getQueryElement() {
    return (0, r.wap)("username", null);
  }
  getUserElement() {
    return null;
  }
};
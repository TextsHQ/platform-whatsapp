Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USyncPictureProtocol = undefined;
exports.pictureParser = function (e) {
  e.assertTag("picture");
  const t = e.maybeChild("error");
  if (t) {
    return {
      errorCode: t.attrInt("code"),
      errorText: t.attrString("text")
    };
  }
  return {
    id: e.attrInt("id")
  };
};
var r = require("./716358.js");
exports.USyncPictureProtocol = class {
  getName() {
    return "picture";
  }
  getQueryElement() {
    return (0, r.wap)("picture", null);
  }
  getUserElement() {
    return null;
  }
};
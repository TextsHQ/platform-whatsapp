Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USyncStatusProtocol = undefined;
exports.statusParser = function (e) {
  e.assertTag("status");
  const t = e.maybeChild("error");
  if (t) {
    return {
      errorCode: t.attrInt("code"),
      errorText: t.attrString("text")
    };
  }
  if (!e.hasContent()) {
    if (e.hasAttr("code") && e.attrInt("code") === 401) {
      return null;
    } else {
      return i.fbt._("Hey there! I am using WhatsApp.", null, {
        hk: "1lXNBq"
      }).toString();
    }
  }
  if (e.contentString().length !== 0) {
    return e.contentString();
  } else {
    return i.fbt._("Hey there! I am using WhatsApp.", null, {
      hk: "1lXNBq"
    }).toString();
  }
};
var r = require("./716358.js");
var i = require("../vendor/548360.js");
exports.USyncStatusProtocol = class {
  getName() {
    return "status";
  }
  getQueryElement() {
    return (0, r.wap)("status", null);
  }
  getUserElement() {
    return null;
  }
};
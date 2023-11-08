Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USyncDisappearingModeProtocol = undefined;
exports.disappearingModeParser = function (e) {
  e.assertTag("disappearing_mode");
  const t = e.maybeChild("error");
  if (t) {
    return {
      errorCode: t.attrInt("code"),
      errorText: t.attrString("text")
    };
  }
  const n = e.attrInt("duration", 0);
  const r = e.attrInt("t");
  return {
    duration: n,
    t: r
  };
};
var r = require("./716358.js");
exports.USyncDisappearingModeProtocol = class {
  getName() {
    return "disappearing_mode";
  }
  getQueryElement() {
    return (0, r.wap)("disappearing_mode", null);
  }
  getUserElement() {
    return null;
  }
};
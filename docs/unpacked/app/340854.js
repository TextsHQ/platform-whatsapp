Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USyncTextStatusProtocol = undefined;
exports.textStatusParser = function (e) {
  e.assertTag("text_status");
  const t = e.maybeChild("error");
  if (t) {
    return {
      errorCode: t.attrInt("code"),
      errorText: t.attrString("text")
    };
  }
  const n = e.hasAttr("text") ? e.attrString("text") : undefined;
  const r = e.hasChild("emoji") ? e.child("emoji") : undefined;
  const i = (r == null ? undefined : r.hasAttr("content")) ? r == null ? undefined : r.attrString("content") : undefined;
  const a = e.hasAttr("ephemeral_duration_sec") ? e.attrInt("ephemeral_duration_sec") : undefined;
  const o = e.hasAttr("last_update_time") ? e.attrString("last_update_time") : undefined;
  return {
    text: n,
    emoji: i,
    ephemeralDurationSeconds: a,
    lastUpdateTime: o
  };
};
var r = require("./716358.js");
exports.USyncTextStatusProtocol = class {
  getName() {
    return "text_status";
  }
  getQueryElement() {
    return (0, r.wap)("text_status", null);
  }
  getUserElement() {
    return null;
  }
};
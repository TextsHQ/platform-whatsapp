Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIqResponse = function (e, t, n) {
  const a = e.content;
  if (a && Array.isArray(a) && a[0]) {
    const t = a[0];
    if (t.tag === "error") {
      const a = t.attrs || {};
      let o;
      if (n) {
        o = typeof n == "function" ? n(e) : n.parseOrThrow(t);
      }
      const s = o;
      return {
        success: false,
        errorCode: parseInt(a.code, 10),
        errorText: (0, r.decodeAsString)(a.text) || "",
        errorType: (0, r.decodeAsString)(a.type) || "",
        errorBackoff: parseInt(a.backoff, 10),
        toString: i,
        customError: s
      };
    }
  }
  if (typeof t == "function") {
    return {
      success: true,
      result: t(e)
    };
  } else {
    return {
      success: true,
      result: t.parseOrThrow(e)
    };
  }
};
var r = require("./716358.js");
function i() {
  return `IqError ${this.errorCode}: ${this.errorText}`;
}
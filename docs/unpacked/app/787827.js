var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDesktopOs = undefined;
exports.compareOSVersions = d;
exports.getUserDesktopOs = function () {
  if (o !== undefined) {
    return o;
  }
  o = function () {
    switch (i.default.info().os.toLowerCase()) {
      case "windows":
        return a.WINDOWS;
      case "mac os":
        return a.MACOS;
    }
    return null;
  }();
  return o;
};
exports.isWebUserOnSupportedMacOSForCatalystAsync = c;
exports.isWebUserOnSupportedMacOSForCatalystSync = function () {
  if (l == null) {
    c();
  }
  return l;
};
exports.isWebUserOnSupportedWindowsOSForUWPAsync = u;
exports.isWebUserOnSupportedWindowsOSForUWPSync = function () {
  if (s == null) {
    u();
  }
  return s;
};
var i = r(require("./524173.js"));
const a = require("../vendor/76672.js").Mirrored(["WINDOWS", "MACOS"]);
let o;
exports.UserDesktopOs = a;
let s = null;
let l = null;
function u() {
  var e;
  var t;
  if (s != null) {
    return Promise.resolve(s);
  } else {
    return Promise.resolve((e = self.navigator) === null || e === undefined || (t = e.userAgentData) === null || t === undefined ? undefined : t.getHighEntropyValues(["platformVersion"])).then(e => {
      var t;
      if ((e == null ? undefined : e.platformVersion) != null && ((t = e.platform) === null || t === undefined ? undefined : t.toLowerCase()) === "windows" && e.platformVersion != null) {
        s = d("8.0.0", e.platformVersion) <= 0;
      } else {
        const e = i.default.info();
        s = e.os === "Windows" && parseInt(e.version, 10) >= 10;
      }
      return s;
    });
  }
}
function c() {
  var e;
  var t;
  if (l != null) {
    return Promise.resolve(l);
  } else {
    return Promise.resolve((e = self.navigator) === null || e === undefined || (t = e.userAgentData) === null || t === undefined ? undefined : t.getHighEntropyValues(["platformVersion"])).then(e => {
      var t;
      var n;
      if ((e == null ? undefined : e.platformVersion) != null && ((t = e.platform) === null || t === undefined ? undefined : t.toLowerCase()) === "macos" && e.platformVersion != null) {
        l = d("11.0.0", e.platformVersion) <= 0;
      }
      return (n = l) === null || n === undefined || n;
    });
  }
}
function d(e, t) {
  return e.localeCompare(t, undefined, {
    numeric: true,
    sensitivity: "base"
  });
}
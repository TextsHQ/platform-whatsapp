Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOfficialClient = exports.isLegitErrorStack = undefined;
var r = require("./368170.js");
var i = require("./130945.js");
const a = () => {
  try {
    const {
      stack: e
    } = new Error();
    const t = e.split("\n").filter(e => Boolean(e.trim())).pop();
    if (t == null) {
      __LOG__(3, undefined, undefined, undefined, ["uc"])`A caller is not found ${e}`;
      return true;
    }
    if (!t.includes(".whatsapp.com")) {
      __LOG__(3, undefined, undefined, undefined, ["uc"])`Caller ${t}`;
      return false;
    }
  } catch (e) {
    __LOG__(3, undefined, undefined, undefined, ["uc"])`Cannot analyze UC ${e.stack}`;
  }
  return true;
};
exports.isLegitErrorStack = a;
{
  const e = "webpackChunkwhatsapp_web_client";
  const t = window[e];
  if (t != null) {
    Object.defineProperty(window, e, {
      get() {
        if (!a()) {
          try {
            i.Global.set({
              ocVersion: 0
            });
          } catch (e) {
            __LOG__(3, undefined, undefined, undefined, ["uc"])`Cannot set ocVersion ${e.stack}`;
          }
        }
        return t;
      }
    });
  }
}
const o = r.UA.isElectron || !(typeof process != "undefined" && ((s = process.versions) === null || s === undefined ? undefined : s.electron) != null || (() => {
  const e = typeof self != "undefined" ? self.navigator : null;
  return Boolean(e.webdriver);
})()) && (!r.UA.isChrome || !/HeadlessChrome/.test(window.navigator.userAgent));
var s;
exports.isOfficialClient = o;
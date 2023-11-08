var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBugnubTaskUrl = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./508247.js");
var o = require("./445729.js");
var s = require("./94602.js");
var l = require("./368170.js");
var u = require("./757453.js");
var c = require("./459857.js");
function d() {
  return (d = (0, i.default)(function* (e) {
    var t;
    const n = (t = (0, c.getMaybeMeUser)()) === null || t === undefined ? undefined : t.user;
    let r = null;
    switch (o.Conn.platform) {
      case s.PLATFORMS.ANDROID:
        r = "Android";
        break;
      case s.PLATFORMS.IPHONE:
        r = "iPhone";
        break;
      case s.PLATFORMS.SMBA:
        r = "SMB - Android";
        break;
      case s.PLATFORMS.SMBI:
        r = "SMB - iPhone";
        break;
      default:
        r = "Choose an option";
    }
    let i = "";
    switch (l.UA.browser) {
      case l.BROWSER_TYPE.CHROME:
        i = "Chrome";
        break;
      case l.BROWSER_TYPE.SAFARI:
        i = "Safari";
        break;
      case l.BROWSER_TYPE.FIREFOX:
        i = "Firefox";
        break;
      case l.BROWSER_TYPE.EDGE:
        i = "Microsoft Edge";
        break;
      case l.BROWSER_TYPE.OPERA:
        i = "Opera";
    }
    const d = ["Description:\n", "Link to crash logs", `https://www.internalfb.com/intern/bunny/?q=waflb+${n}`, `time of log: ${new Date().toString()}\n`, `Primary Platform: ${r}`];
    if (i !== "") {
      d.push(`Browser: ${i}`);
    }
    if (e != null) {
      d.push("Error string:", `${e}`);
    }
    const p = yield (0, u.getWhatsAppWebExternalBetaJoinedIdb)();
    const f = {
      first_question: "Messaging",
      platform: "Web (Browser)",
      version: `${a.VERSION_STR}${p ? " (joined beta)" : ""}`,
      bug: d.join("\n"),
      logs: "I understand and give consent",
      number: n != null ? n : ""
    };
    return `https://www.internalfb.com/butterfly/form/777724432837431?default_responses=${encodeURIComponent(JSON.stringify(f))}`;
  })).apply(this, arguments);
}
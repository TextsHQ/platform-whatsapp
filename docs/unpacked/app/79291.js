var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/288306.js"));
var a = r(require("../vendor/402525.js"));
var o = require("./417405.js");
var s = require("./904704.js");
var l = require("./301055.js");
var u = require("./724976.js");
var c = require("./437362.js");
var d = require("./698210.js");
var p = r(require("./665810.js"));
var f = require("./755985.js");
const _ = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
const g = "https://l.wl.co/l";
var m = {
  URL_REGEX: _,
  build(e, t) {
    const n = new p.default();
    (0, a.default)(t || {}, (e, t) => {
      n.set(t, e);
    });
    return `${e}?${n.toString()}`;
  },
  canMuckHistory() {
    var e;
    if ((0, f.isWorker)()) {
      __LOG__(4, undefined, new Error())`WAWebURLUtils: should not call canMuckHistory() from worker runtimes`;
      return false;
    } else {
      return !(!((e = window.history) === null || e === undefined ? undefined : e.pushState) || !self.location);
    }
  },
  relToAbs: e => new URL(e, self.location.href).href,
  hostname: (0, i.default)(function (e) {
    try {
      return new URL(this.isHttp(e) ? e : "http://" + e).hostname;
    } catch (e) {
      return "";
    }
  }),
  withoutWww: function (e) {
    return e.split("www.").join("");
  },
  isHttp: e => e && (e.toLowerCase().substring(0, 8) === "https://" || e.toLowerCase().substring(0, 7) === "http://"),
  isHttps: e => e && e.toLowerCase().substring(0, 8) === "https://",
  hasValidUrlScheme(e) {
    const t = e.trim();
    return ["irc://", "ftp://", "mailto:", "http://", "https://", "whatsapp://", "ms-windows-store://"].some(e => t.toLowerCase().indexOf(e) === 0);
  },
  isBlob: e => (0, u.isString)(e) && e.substring(0, 5) === "blob:",
  isData: e => (0, u.isString)(e) && e.substring(0, 5) === "data:",
  parseDataURL(e) {
    const t = e.indexOf(":");
    const n = e.indexOf(";");
    const r = e.indexOf(",");
    return {
      mimetype: e.substring(t + 1, n),
      data: e.substring(r + 1)
    };
  },
  dataURLtoFile(e) {
    const t = this.parseDataURL(e).mimetype;
    return (0, d.createFile)([(0, c.dataURLtoBlob)(e)], "", {
      type: t
    });
  },
  GSM_NAME: "gme-whatsappinc",
  GSM_NUMS: "LM4NgcjF-X_EedaZ6MwPVSH0Sac=",
  gsmURL(e, t) {
    const n = t.replace(/\-/g, "+").replace(/_/g, "/");
    const r = (0, o.decodeB64)(n);
    const i = new URL(e);
    const a = (i.pathname || "") + (i.search || "");
    const u = s.Binary.build(a).readByteArray();
    return (0, l.hmacSha1)(r, u).then(t => `${e}&signature=${(0, o.encodeB64UrlSafe)(t)}`);
  },
  thumbToCSSURL(e) {
    return `url("${this.isHttp(e) || e.startsWith("data:") ? e : `data:image/jpeg;base64,${e}`}")`;
  },
  thumbAsBackgroundImage(e) {
    if (e) {
      return {
        backgroundImage: this.thumbToCSSURL(e)
      };
    } else {
      return {};
    }
  },
  isValid: e => _.test(e),
  toMaliciousSiteRedirect: e => e === "" || e.indexOf(g) === 0 ? e : `${g}?u=${encodeURIComponent(e)}`
};
exports.default = m;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UA = exports.OS_TYPE = exports.BROWSER_TYPE = undefined;
exports.gteVersion = o;
exports.parseUA = l;
var i = r(require("../vendor/42238.js"));
exports.BROWSER_TYPE = {
  CHROME: "chrome",
  CHROMIUM: "chromium",
  FIREFOX: "firefox",
  SAFARI: "safari",
  IE: "ie",
  OPERA: "opera",
  EDGE: "edge"
};
function a(e, t) {
  let n;
  let r;
  const i = /(\.0)+[^\.]*$/;
  const a = (e + "").replace(i, "").split(".");
  const o = (t + "").replace(i, "").split(".");
  const s = Math.min(a.length, o.length);
  for (n = 0; n < s; n++) {
    r = parseInt(a[n], 10) - parseInt(o[n], 10);
    if (r !== 0) {
      return r;
    }
  }
  return a.length - o.length;
}
function o(e, t) {
  return a(e, t) >= 0;
}
function s(e, t) {
  return a(e, t) < 0;
}
function l(e) {
  const t = new i.default();
  t.setUA(e || "");
  const n = (t.getBrowser().name || "").toUpperCase();
  const r = t.getBrowser().version || "0.0.0";
  const a = (t.getEngine().name || "").toUpperCase();
  const l = (t.getOS().name || "").toUpperCase();
  const u = t.getOS().version || "0.0.0";
  const c = n === "SAFARI";
  const d = n === "CHROME";
  const p = a === "GECKO";
  const f = a === "BLINK";
  const _ = !d && !c && `${n}`.includes("OCULUS");
  let g = false;
  switch (l) {
    case "MAC OS":
      if (d) {
        g = o(u, "10.10") && o(r, "41.0.0");
      } else if (o(u, "10.7")) {
        g = true;
      }
      break;
    case "WINDOWS":
      if (o(u, "8.1") && (p || d && o(r, "41.0.0"))) {
        g = true;
      }
  }
  const m = c || d && s(r, "76");
  return {
    isWebkit: !a || a === "WEBKIT",
    isGecko: p,
    isTrident: a === "TRIDENT" || a === "EDGEHTML",
    isSafari: c,
    isElectron: false,
    isBlink: f,
    isBuggyVideoLoad: d && o(r, "76") || f && !d,
    hasEmoji: g,
    troublesWithLotsOfVideos: d,
    supportsEmojiEllipsification: !m,
    isBrokenGetUserMedia: d && s(r, "50"),
    isLocalStorageBroken: c && o(r, "14.1") && s(r, "14.1.2"),
    os: l.toLowerCase(),
    osVersion: u,
    browser: n.toLowerCase(),
    browserVersion: r,
    parser: t,
    isChrome: d,
    isOculusBroswer: _
  };
}
exports.OS_TYPE = {
  WINDOWS: "windows",
  MAC: "mac os",
  CHROMEOS: "chromium os"
};
const u = l(typeof self != "undefined" ? self.navigator.userAgent : null);
exports.UA = u;
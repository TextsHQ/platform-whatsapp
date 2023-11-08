var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLATFORMS = undefined;
exports.checkForUpdates = function () {
  return m.apply(this, arguments);
};
exports.updatePoll = exports.hasUpdate = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./508247.js");
var o = r(require("./391349.js"));
var s = r(require("./219368.js"));
var l = require("./366320.js");
var u = require("./233895.js");
var c = require("./350906.js");
var d = r(require("./556869.js"));
const p = `${a.DYN_ORIGIN}check-update`;
const f = {
  WEB: "web",
  PWA: "web",
  DARWIN: "darwin",
  WIN32: "win32",
  MACSTORE: "darwin-store",
  WINSTORE: "win32-store",
  DARWIN_BETA: "darwin-beta",
  WIN32_BETA: "win32-beta"
};
exports.PLATFORMS = f;
const _ = e => [e.isBroken, e.isBelowSoft, e.isBelowHard, e.beta].some(Boolean);
exports.hasUpdate = _;
const g = new o.default({
  name: "updater",
  interval: 1800,
  restingInterval: 3600,
  randomIntervalExtension: 180
});
function m() {
  return (m = (0, i.default)(function* () {
    const e = f[(0, c.getWamPlatform)()];
    const t = u.SANITIZED_VERSION_STR;
    let r = null;
    if (!navigator.onLine) {
      __LOG__(2)`Update check skipped because user is offline.`;
      return false;
    }
    try {
      const n = yield (0, s.default)(`${p}?version=${t}&platform=${e}`);
      if (!n.ok) {
        throw (0, d.default)(n.statusText);
      }
      r = yield n.json();
      const i = new Date().toISOString();
      __LOG__(2)`Updater: Checked at ${i} ${JSON.stringify({
        response: r,
        version: t
      })}`;
    } catch (e) {
      __LOG__(4, undefined, new Error())`Updater: Version check failed`;
    }
    if (!r || !_(r)) {
      return false;
    }
    const {
      isBelowHard: i,
      isBelowSoft: a,
      hardUpdateTime: o,
      currentVersion: g,
      isBroken: m,
      beta: h
    } = r;
    __LOG__(2)`Updater: App will update. ${JSON.stringify({
      response: r,
      version: t
    })}`;
    const y = i ? o : null;
    if (e === "web") {
      l.Updater.update(g, a, y);
    } else if (m) {
      require("./973981.js").Stream.needsManualDownload = true;
    } else {
      l.Updater.update(undefined, a, y, h);
    }
    return true;
  })).apply(this, arguments);
}
exports.updatePoll = g;
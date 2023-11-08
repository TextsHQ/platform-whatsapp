var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.THIS_TAB = undefined;
exports.currentTabHasMutex = function () {
  return (c() || "").includes(u);
};
exports.getMutex = c;
exports.getNoTakeover = function () {
  return !!l.default.getTS(s.KEYS.NO_TAKEOVER);
};
exports.localTakeoverSuccess = function () {
  const e = {
    wa_tab_src: u
  };
  (0, i.default)(a.default, "localStorage").setItem(s.KEYS.LOCAL_TAKEOVER_OK, JSON.stringify(e));
  (0, i.default)(a.default, "localStorage").removeItem(s.KEYS.LOCAL_TAKEOVER_OK);
};
exports.mutexFilter = function (e) {
  if (e.key !== s.KEYS.WHATSAPP_MUTEX) {
    return false;
  }
  if (!(e.newValue || "").includes(u)) {
    return true;
  }
  return false;
};
exports.parseMutex = function (e) {
  const t = e ? JSON.parse(e) : "";
  if (t) {
    return t.toString().split(/:/).pop();
  } else {
    return t;
  }
};
exports.removeMutex = function () {
  l.default.set(s.KEYS.WHATSAPP_MUTEX, null, {
    storage: o.default
  });
};
exports.setMutex = function (e) {
  const t = e ? u + ":" + e : e;
  l.default.set(s.KEYS.WHATSAPP_MUTEX, t, {
    storage: o.default
  });
};
exports.setNoTakeover = function (e) {
  l.default.setTS(s.KEYS.NO_TAKEOVER, e);
};
exports.takeoverFilter = function (e) {
  if (e.key !== s.KEYS.LOCAL_TAKEOVER_OK) {
    return false;
  }
  if (!(e.newValue || "").includes(u)) {
    return true;
  }
  return false;
};
var i = r(require("./670983.js"));
var a = r(require("./174285.js"));
var o = r(require("./236642.js"));
var s = require("./94872.js");
var l = r(require("./53575.js"));
const u = "x" + Math.round(Math.random() * 1000000000);
function c() {
  return l.default.getPSIgnoringCache(s.KEYS.WHATSAPP_MUTEX);
}
exports.THIS_TAB = u;
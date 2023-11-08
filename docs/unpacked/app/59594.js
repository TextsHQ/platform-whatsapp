var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearAllUtmFromLocalStorage = function () {
  o.default.setUser(a.KEYS.CHAT_UTM, JSON.stringify({}));
};
exports.getAllUtmsFromLocalStorage = s;
exports.getUtmFromLocalStorage = function (e) {
  const t = o.default.getUser(a.KEYS.CHAT_UTM);
  if (t == null) {
    return null;
  }
  try {
    return JSON.parse(t)[e];
  } catch (e) {
    return null;
  }
};
exports.persistUtmtoLocalStorage = function (e, t) {
  const n = s();
  const r = Date.now();
  n[e] = (0, i.default)({
    addedTime: r
  }, t);
  o.default.setUser(a.KEYS.CHAT_UTM, JSON.stringify(n));
};
exports.removeUtmFromLocalStorage = function (e) {
  const t = s();
  delete t[e];
  o.default.setUser(a.KEYS.CHAT_UTM, JSON.stringify(t));
};
var i = r(require("../vendor/81109.js"));
var a = require("./94872.js");
var o = r(require("./53575.js"));
function s() {
  const e = o.default.getUser(a.KEYS.CHAT_UTM);
  if (e == null) {
    return {};
  }
  try {
    var t;
    if ((t = JSON.parse(e)) !== null && t !== undefined) {
      return t;
    } else {
      return {};
    }
  } catch (e) {
    return {};
  }
}
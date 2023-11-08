var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearAllLocalState = function () {
  return _.apply(this, arguments);
};
exports.clearAllTemporaryStorageData = function () {
  s.default.clear(f());
};
var i = r(require("../vendor/348926.js"));
var a = require("./591547.js");
var o = r(require("./236642.js"));
var s = r(require("./737065.js"));
var l = require("./248877.js");
var u = require("./94872.js");
var c = r(require("./53575.js"));
var d = require("./128378.js");
function p() {
  const e = c.default.get(u.KEYS.PRESERVED_USER_KEYS, {
    storage: o.default
  });
  const t = e instanceof Array ? [...d.LS_PRESERVE_KEYS, ...e.filter(e => typeof e == "string")] : d.LS_PRESERVE_KEYS;
  return c.default.getKeys(o.default, t, true);
}
function f() {
  return c.default.getKeys(s.default, d.TS_PRESERVE_KEYS, true);
}
function _() {
  return (_ = (0, i.default)(function* () {
    const e = p();
    const t = [s.default.clear(f()), o.default.clear(e)];
    t.push(a.Logger.clearLogs());
    (0, l.clearCookies)();
    yield Promise.all(t);
  })).apply(this, arguments);
}
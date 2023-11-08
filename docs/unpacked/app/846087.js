var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getABPropConfigs = function () {
  return (0, s.initializeWithoutGKs)().then(() => (0, u.getAbpropConfigsTable)().all().then(e => e));
};
exports.getConfigValue = function (e) {
  const t = a.ABPropConfigs[e];
  if (t == null) {
    __LOG__(4, true, new Error(), true)`invalid ABProps config name`;
    SEND_LOGS("invalid ABProps config name: " + e);
    return Promise.reject((0, c.default)("invalid ABProps config name"));
  }
  const [n, r, i, o] = t;
  const l = i;
  return (0, s.initializeWithoutGKs)().then(() => (0, u.getAbpropConfigsTable)().get(String(n)).then(e => e ? d(e.configValue, r, l) : l));
};
exports.parseConfigValue = d;
exports.setConfigAccessed = function (e) {
  return (0, l.getStorage)().lock(["abpropConfigs"], function () {
    var t = (0, i.default)(function* (t) {
      let [n] = t;
      const r = yield n.get(String(e));
      if (r != null && (r == null ? undefined : r.hasAccessed) !== true) {
        yield n.merge(String(e), {
          hasAccessed: true
        });
      }
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
exports.updateABPropConfigs = function (e) {
  return (0, l.getStorage)().lock(["abpropConfigs"], function () {
    var t = (0, i.default)(function* (t) {
      let [n] = t;
      const r = yield n.all();
      const i = new Map();
      r.forEach(e => {
        if (!(e.configExpoKey == null && e.overriddenConfigValue == null)) {
          i.set(e.configCode, {
            configCode: e.configCode,
            configValue: e.configValue,
            configExpoKey: e.configExpoKey,
            hasAccessed: e.hasAccessed,
            overriddenConfigValue: e.overriddenConfigValue
          });
        }
      });
      let a = false;
      const s = [];
      e.forEach((e, t) => {
        let n = false;
        const r = i.get(String(t));
        if (r) {
          const i = r.configExpoKey;
          if (i != null && e.configExpoKey !== i) {
            o.exposureKeys.delete(i);
            a = true;
            o.accessedConfigs.delete(t);
          } else if (i != null) {
            n = r.hasAccessed;
          }
        }
        s.push({
          configCode: String(t),
          configValue: e.configValue,
          configExpoKey: e.configExpoKey,
          hasAccessed: n,
          overriddenConfigValue: r == null ? undefined : r.overriddenConfigValue
        });
      });
      if (a) {
        (0, o.updateGlobalExpoKey)();
      }
      yield n.clear();
      yield n.bulkCreate(s);
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/348926.js"));
var a = require("./94728.js");
var o = require("./744655.js");
var s = require("./535157.js");
var l = require("./732011.js");
var u = require("./321289.js");
var c = r(require("./556869.js"));
function d(e, t, n) {
  if (e == null || t == null) {
    return n;
  } else if (t === "bool") {
    return e === "1" || e === "True" || e === "true";
  } else if (t === "int") {
    return parseInt(e, 10);
  } else if (t === "float") {
    return parseFloat(e);
  } else {
    return e;
  }
}
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncABProps = g;
exports.syncABPropsTask = function () {
  return h.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./74002.js");
var o = require("./8304.js");
var s = require("./287461.js");
var l = require("./744655.js");
var u = require("./183660.js");
var c = require("./817600.js");
var d = require("./917406.js");
var p = require("./846087.js");
var f = require("./780549.js");
var _ = require("./446715.js");
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* () {
    let e;
    let t = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
    if (t) {
      e = (0, u.getHash)();
    }
    const n = yield (0, a.getAbPropsProtocol)(e);
    if (!n.success) {
      return false;
    }
    const {
      abKey: r,
      hash: i,
      refresh: o,
      props: s
    } = n.value;
    const d = Date.now();
    (0, l.updateGlobalABKey)(r != null ? r : "");
    (0, u.updateAttributesLocalStorage)(r, e, o, d);
    if (i == null) {
      return false;
    }
    try {
      yield (0, p.updateABPropConfigs)((0, c.parseABProps)(s));
      return true;
    } catch (e) {
      __LOG__(4, true, new Error(), true)`update ABProps config table failed`;
      SEND_LOGS("update ABProps config table failed when syncing ABProps");
    }
    return false;
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* () {
    let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
    const t = (0, u.isABPropsAfterFirstSync)();
    let n = 3;
    for (; n-- > 0;) {
      try {
        const n = {
          service_improvement_opt_out_flag: (0, s.getABPropConfigValue)("service_improvement_opt_out_flag")
        };
        if (t) {
          n.pnh_group_lid = (0, s.getABPropConfigValue)("pnh_group_lid");
        }
        if (yield g(t && e)) {
          yield (0, d.updateABPropsFromStorage)();
          return void f.Cmd.onAbPropsUpdate(n);
        }
      } catch (e) {
        if (n === 0) {
          __LOG__(4, true, new Error(), true)`failed to sync ABProps`;
          SEND_LOGS("failed to sync ABProps");
        }
        yield (0, o.delayMs)(Math.random() * 10000);
      }
    }
  })).apply(this, arguments);
}
f.Cmd.on("on_ab_props_update", function () {
  var e = (0, i.default)(function* (e) {
    const {
      pnh_group_lid: t,
      service_improvement_opt_out_flag: n
    } = e;
    yield Promise.all([(0, _.ensureNonCriticalDataSyncIsInitialized)(), t != null ? (0, _.handlePnhGroupLidABPropConfigValueChange)(t) : undefined]);
    (0, _.handleServiceImprovementOptOutFlagABPropConfigValueChange)(n);
  });
  return function () {
    return e.apply(this, arguments);
  };
}());
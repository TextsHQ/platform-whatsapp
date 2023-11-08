var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WRITE_THROTTLE_INTERVAL = undefined;
exports.add = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, o.getABKey)() || "abkey";
  p = p.concat(e.map(_(t)));
  f();
};
exports.clear = function () {
  return v.apply(this, arguments);
};
exports.createRows = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, o.getABKey)() || "abkey";
  return e.map(_(t));
};
exports.deleteRange = T;
exports.getFromBottom = h;
exports.rowCount = E;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/823493.js"));
var o = require("./183660.js");
var s = require("./508247.js");
var l = require("./786950.js");
var u = require("./109959.js");
exports.WRITE_THROTTLE_INTERVAL = 200;
const c = 100000;
const d = parseInt(s.BUILD_ID, 10) || 0;
let p = [];
const f = (0, a.default)(() => b(), 200);
function _(e) {
  return function (t) {
    return function (e, t) {
      return {
        marker_id: e.marker_id,
        method: e.method,
        action_id: e.action_id,
        duration_ns: e.duration_ns,
        marker_type: e.marker_type,
        sample_rate: e.sample_rate,
        points: e.points,
        instance_id: e.instance_id,
        metadata: e.metadata || {
          application_analytics: {
            time_since_qpl_module_init: 0
          }
        },
        flags: e.flags,
        annotations_bool_array: e.annotations_bool_array,
        annotations_bool: e.annotations_bool,
        annotations_double_array: e.annotations_double_array,
        annotations_double: e.annotations_double,
        annotations_int_array: e.annotations_int_array,
        annotations_int: e.annotations_int,
        annotations_string_array: e.annotations_string_array,
        annotations: e.annotations,
        app_version: s.VERSION_BASE,
        app_build_number: d,
        wa_ab_key2: t
      };
    }(t, e);
  };
}
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* () {
    try {
      yield (0, u.initialize)();
    } catch (e) {
      __LOG__(4, true, new Error(), true)`QPL Storage, error calling initializeQplStorage, error ${e}`;
      SEND_LOGS("QPL Storage init error");
      throw e;
    }
  })).apply(this, arguments);
}
function h() {
  return y.apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e) {
    yield g();
    return (0, u.getQplEventsTable)().all({
      limit: e,
      offset: 0
    });
  })).apply(this, arguments);
}
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* () {
    yield g();
    return (0, u.getQplEventsTable)().count();
  })).apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* () {
    yield g();
    return (0, u.getQplEventsTable)().clear(true);
  })).apply(this, arguments);
}
function T() {
  return M.apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e, t) {
    yield g();
    return (0, u.getQplEventsTable)().bulkDeleteRange(["id"], e - 1, t + 1).then(() => {});
  })).apply(this, arguments);
}
let A = null;
function b() {
  return C.apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* () {
    yield g();
    if (A) {
      A.then(b);
    } else if (p.length > 0) {
      const e = p;
      p = [];
      try {
        const t = yield E();
        if (t + e.length > c) {
          (0, l.maxStorageEventCountReached)();
          const n = t + e.length - c;
          yield P(n);
        }
      } catch (e) {
        __LOG__(4, true, new Error(), true)`QPL Storage, error during checking for excessive events ${e}`;
        return void SEND_LOGS("QPL Storage, error saving events");
      }
      A = (0, u.getQplEventsTable)().bulkCreate(e).then(() => {
        A = null;
      }).catch(e => {
        __LOG__(4, true, new Error(), true)`QPL Storage, error saving events ${e}`;
        SEND_LOGS("QPL Storage, error saving events");
        A = null;
      });
    }
  })).apply(this, arguments);
}
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, i.default)(function* (e) {
    const t = yield h(e);
    const n = t[0].id || 0;
    const r = t[t.length - 1].id || 0;
    yield T(n, r);
  })).apply(this, arguments);
}
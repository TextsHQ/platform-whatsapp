var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkE2eDebugEventInCoreWam = function (e) {
  const t = Object.keys(e);
  if (t.length === 0) {
    return false;
  }
  for (let n = 0; n < S.length; n++) {
    const r = S[n];
    let i = 0;
    for (let n = 0; n < t.length && r[t[n]] === e[t[n]]; n++) {
      i++;
    }
    if (i === t.length) {
      return true;
    }
  }
  return false;
};
exports.commitToCoreWam = function (e) {
  if (!h) {
    return Promise.resolve();
  }
  if (!(0, u.getABPropConfigValue)("web_abprop_core_wam_runtime")) {
    return Promise.resolve();
  }
  if (!y) {
    A();
  }
  const t = function (e) {
    return {
      id: e.id,
      channel: e.wamChannel,
      psIdIntValue: e.privateStatsIdInt,
      fields: M(e),
      weight: e.weight,
      rawFields: [],
      debug: f
    };
  }(e);
  return (0, o.logAsync)(t.channel, t.id, t.psIdIntValue, t.fields, t.rawFields, t.weight, t.debug);
};
exports.debugData = undefined;
exports.deinitializeCoreWam = function () {
  h = false;
};
exports.doNotUseJustForTestUnloadCoreWamRuntime = function () {
  y = false;
};
exports.getCoreWamSinkInitPromises = function () {
  return E;
};
exports.initializeCoreWam = function (e) {
  if (h) {
    return;
  }
  if (!m) {
    (0, o.enableDebugMode)();
    m = true;
  }
  g = e;
  A();
  h = true;
};
exports.setToCoreWam = function (e, t) {
  if (!h) {
    return;
  }
  if (!(0, u.getABPropConfigValue)("web_abprop_core_wam_runtime")) {
    return;
  }
  if (!y) {
    A();
  }
  (0, o.logAttributes)(T(e, t), f);
};
exports.updatePrivateStatIdsToCore = function (e) {
  if (!h) {
    return;
  }
  if (!(0, u.getABPropConfigValue)("web_abprop_core_wam_runtime")) {
    return;
  }
  (0, o.updatePrivateStatsIds)(e);
};
exports.uploadPrivateCoreWamEvents = function () {
  return (0, s.getFinishedStreamBuffers)("private").then(e => {
    const t = e.map(e => (0, c.default)((0, i.encodeB64)(e.content), e.key).then(e => {}));
    return Promise.all(t);
  }).then(() => {});
};
exports.uploadRegularCoreWamEvents = function () {
  return (0, s.getFinishedStreamBuffers)("regular").then(e => {
    const t = e.map(e => (0, d.default)((0, i.encodeB64)(e.content), e.key).then(t => (0, s.removeBufferByKey)(e.key)));
    return Promise.all(t);
  }).then(() => {});
};
r(require("../vendor/81109.js"));
var i = require("./417405.js");
var a = require("./733847.js");
var o = require("./536389.js");
var s = require("./975276.js");
var l = require("./3549.js");
var u = require("./287461.js");
var c = r(require("./361927.js"));
var d = r(require("./460325.js"));
var p = require("./901032.js");
const f = {
  name: "console-test",
  fieldIds: [],
  fieldTypes: [],
  fields: []
};
exports.debugData = f;
const _ = Object.freeze({
  integer: l.TYPES.INT,
  string: l.TYPES.STRING,
  boolean: l.TYPES.BOOL,
  number: l.TYPES.FLOAT,
  timer: l.TYPES.INT
});
let g;
let m = false;
let h = false;
let y = false;
const E = [];
const S = [];
function v(e) {
  if (_[e] === undefined) {
    return l.TYPES.INT;
  } else {
    return _[e];
  }
}
function T(e, t) {
  const n = [];
  n.push([...e.channels], e.id, v(e.type), t != null ? t : null);
  return n;
}
function M(e) {
  const t = Object.keys(e.all);
  const n = [];
  for (let r = 0; r < t.length; r++) {
    const i = p.metrics.getEvent(e.$className, t[r]);
    const a = e.all[t[r]];
    n.push(i.id, v(i.type), a);
  }
  return n;
}
function A() {
  if ((0, u.getABPropConfigValue)("web_abprop_core_wam_runtime")) {
    E.push((0, s.initializeWAMSink)("backend", "regular", () => (0, a.rescheduleNow)("sendCoreWamRegularMetrics")));
    E.push((0, s.initializeWAMSink)("backend", "private", () => (0, a.rescheduleNow)("sendCoreWamPrivateMetrics")));
    Object.keys(g).forEach(e => {
      (0, o.logAttributes)(function (e, t) {
        return T(p.metrics.getGlobal(e), t);
      }(e, g[e]), f);
    });
    y = true;
  }
}
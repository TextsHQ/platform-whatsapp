Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = undefined;
exports.startMetric = function (e, t, r) {
  if (r == null) {
    n++;
  }
  const a = r != null ? r : n;
  i(r == null ? {
    name: e,
    stage: "START",
    instanceKey: a,
    annotations: t
  } : {
    name: e,
    stage: "RESUME",
    instanceKey: a,
    annotations: t
  });
  return {
    addPoint(t, n) {
      i({
        name: e,
        stage: "POINT",
        reason: t,
        instanceKey: a,
        annotations: n
      });
    },
    addAnnotations(t) {
      i({
        name: e,
        stage: "ANNOTATE",
        instanceKey: a,
        annotations: t
      });
    },
    endSuccess(t) {
      i({
        name: e,
        stage: "SUCCESS",
        instanceKey: a,
        annotations: t
      });
    },
    endFail(t, n) {
      i({
        name: e,
        stage: "FAIL",
        reason: t,
        instanceKey: a,
        annotations: n
      });
    },
    getFlowDetails: () => ({
      name: e,
      instanceKey: a
    })
  };
};
exports.subscribe = undefined;
let n = 0;
const r = function () {
  const e = [];
  return {
    subscribe: function (t) {
      e.push(t);
    },
    notify: function (t) {
      if (e.length === 0) {
        __LOG__(3)`[PRE] There are no subscribers to PRE events`;
      }
      e.forEach(e => {
        e(t);
      });
    },
    clear: function () {
      __LOG__(3)`Removing all listeners from PRE_METRICS`;
      e.length = 0;
    }
  };
}();
const i = r.notify;
const a = r.clear;
exports.clear = a;
const o = r.subscribe;
exports.subscribe = o;
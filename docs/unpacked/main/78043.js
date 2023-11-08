var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHandlersMap = exports.MediaEvents = undefined;
var r = a(require("../app/257008.js"));
const o = Object.freeze({
  OnPlay: "onPlay",
  OnPause: "onPause",
  OnEnd: "onEnd",
  OnTimeUpdate: "onTimeUpdate",
  OnLoad: "onLoad",
  OnMetadataLoad: "onMetadataLoad",
  OnMute: "onMute",
  OnUnmute: "onUnmute",
  OnResume: "onResume"
});
exports.MediaEvents = o;
exports.createHandlersMap = () => {
  const e = {};
  const t = t => e[t];
  const n = (n, a) => {
    if (!a) {
      return;
    }
    const r = t(n);
    if (r) {
      r.add(a);
    } else {
      e[n] = new Set([a]);
    }
  };
  return {
    execute: function (e) {
      for (var n, a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) {
        r[o - 1] = arguments[o];
      }
      if (!((n = t(e)) === null || n === undefined)) {
        n.forEach(e => {
          e(...r);
        });
      }
    },
    set: n,
    remove: (t, n) => {
      var a;
      if (!((a = e[t]) === null || a === undefined)) {
        a.delete(n);
      }
    },
    clear: () => {
      Object.values(e).forEach(e => e.clear());
    },
    bulkSet: e => {
      (0, r.default)(e).forEach(e => {
        let [t, a] = e;
        return n(t, a);
      });
    }
  };
};
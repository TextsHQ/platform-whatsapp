var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAddListenerOnce = function () {
  const e = (0, s.useRef)();
  const t = (0, s.useCallback)((t, n, r, a) => {
    e.current = u(t, n, r, (0, i.default)((0, i.default)({}, a), {}, {
      once: true
    }));
  }, []);
  const n = (0, s.useCallback)(() => {
    var t;
    if (!((t = e.current) === null || t === undefined)) {
      t.call(e);
    }
  }, []);
  (0, s.useEffect)(() => n, [n]);
  return [t, n];
};
exports.useListener = function (e, t, n, r) {
  const i = (0, l.default)(n);
  const a = c(t);
  (0, s.useLayoutEffect)(() => {
    if (n != null) {
      return u(e, t, i, r);
    }
  }, [e, n == null, a]);
};
exports.useListeners = function (e) {
  const t = e.map(e => {
    let {
      callback: t
    } = e;
    return t;
  });
  const n = (0, s.useRef)(t);
  n.current = t;
  const r = e.map(e => {
    let {
      source: t,
      eventOrEvents: n
    } = e;
    return `${(0, a.default)(t)},${c(n)}`;
  }).join("-");
  (0, s.useLayoutEffect)(() => {
    const t = e.map((e, t) => {
      let {
        source: r,
        eventOrEvents: i,
        opts: a
      } = e;
      return u(r, i, function () {
        for (var e, r, i = arguments.length, a = new Array(i), o = 0; o < i; o++) {
          a[o] = arguments[o];
        }
        if ((e = (r = n.current)[t]) === null || e === undefined) {
          return undefined;
        } else {
          return e.call(r, ...a);
        }
      }, a);
    });
    return () => t.forEach(e => e());
  }, [r]);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("./270441.js"));
var o = require("./337159.js");
var s = require("../vendor/667294.js");
var l = r(require("./17533.js"));
function u(e, t, n, r) {
  if (e == null) {
    return () => {};
  }
  const i = function (e, t) {
    if (Array.isArray(t)) {
      if ((0, o.isEventsType)(e)) {
        return [t.join(" ")];
      } else {
        return t;
      }
    }
    return [t];
  }(e, t).map(t => new o.Listener(e, t, function () {
    if (r == null ? undefined : r.once) {
      a();
    }
    n(...arguments);
  }, r));
  i.forEach(e => {
    e.engage();
  });
  const a = () => {
    i.forEach(e => {
      e.disengage();
    });
  };
  return a;
}
function c(e) {
  if (Array.isArray(e)) {
    return e.join("\0");
  } else {
    return e;
  }
}
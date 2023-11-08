var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StateHookMissingModelError = undefined;
exports.useModelValues = function (e, t, n) {
  if (e == null) {
    __LOG__(4, undefined, new Error(), true)`useModelValues hook received an unexpected \`null\` model`;
    SEND_LOGS("state-hook-null-model");
    throw new u("Unknown");
  }
  const r = c(e, t, n);
  return (0, a.default)(r, "values");
};
exports.useOptionalModelValues = c;
var i = require("./477689.js");
var a = r(require("./670983.js"));
var o = r(require("./243382.js"));
var s = require("./163139.js");
var l = require("../vendor/667294.js");
class u extends (0, i.customError)("StateHookMissingModelError") {
  constructor(e) {
    super(`Received a null value for model key: ${e}`);
  }
}
function c(e, t, n) {
  const {
    isStrong: r = true,
    componentName: i
  } = n != null ? n : {};
  const a = e ? (0, s.unproxy)(e) : null;
  const u = (0, l.useRef)();
  function c() {
    if (!a) {
      return null;
    }
    if (u.current == null) {
      if (!a) {
        return null;
      }
      u.current = new o.default(i != null ? i : "Hook(useModelValues)", a.proxyName, Array.from(new Set(t)), r, true);
    }
    return u.current;
  }
  const [d, p] = (0, l.useState)(() => {
    const e = c();
    if (!e) {
      return null;
    }
    const t = e.getModelAndValidate(a);
    if (t) {
      return e.createProxy(t);
    } else {
      return null;
    }
  });
  const f = (0, l.useCallback)((e, t) => {
    const n = e.getModelAndValidate(t);
    p(n ? e.createProxy(n) : null);
  }, []);
  (0, l.useEffect)(() => {
    const e = c();
    if (!e || !d) {
      return;
    }
    const t = e.getModel(a);
    e.attachConcern(t, d.proxyBitMask, f);
    return () => {
      e.detachConcern(t, f);
    };
  }, [a, d, f]);
  const [_, g] = (0, l.useState)(a);
  const m = c();
  if (_ !== a && m) {
    if (_) {
      m.detachConcern(_, f);
    }
    const e = m.getModelAndValidate(a);
    g(e);
    p(e ? m.createProxy(e) : null);
  }
  if (!(m || d == null)) {
    p(null);
  }
  return d;
}
exports.StateHookMissingModelError = u;
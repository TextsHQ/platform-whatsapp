Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappedError = exports.UnimplementedMethod = exports.TimeoutError = exports.HttpError = exports.AggregateError = undefined;
exports.customError = r;
exports.hasSupressedQuotaExceededError = function () {
  return l;
};
exports.obtainErrorSummary = function (e) {
  return JSON.stringify(e, Object.getOwnPropertyNames(e));
};
exports.supressQuotaExceededError = function (e) {
  if (e == null || e.name !== "QuotaExceededError") {
    throw e;
  }
  l = true;
};
const n = Object.create(Error.prototype, {
  constructor: {
    value: undefined,
    writable: true,
    configurable: true
  }
});
function r(e) {
  let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
  let r = arguments.length > 2 ? arguments[2] : undefined;
  function i(n) {
    const r = Error.call(this, n);
    this.message = n;
    r.name = e;
    this.name = e;
    if (t) {
      this.stack = r.stack;
    }
  }
  i.prototype = Object.create(r ? r.prototype : n);
  i.prototype.constructor = i;
  return i;
}
class i extends r("AggregateError", true) {
  constructor(e, t) {
    super(t != null && t.length > 0 ? t : function (e) {
      if (e.length === 0) {
        return "No errors";
      } else if (e.length === 1) {
        return e[0].message;
      } else {
        return e.map(e => "- " + e.message).join("\n");
      }
    }(e));
    this.errors = e;
  }
}
exports.AggregateError = i;
class a extends r("TimeoutError", false) {}
exports.TimeoutError = a;
class o extends r("HttpError", false) {
  constructor(e, t) {
    super(e);
    this.code = t;
  }
}
exports.HttpError = o;
class s extends r("UnimplementedMethod") {}
exports.UnimplementedMethod = s;
let l = false;
class u extends Error {
  constructor(e, t) {
    super(e);
    this.inner = t;
  }
}
exports.WrappedError = u;
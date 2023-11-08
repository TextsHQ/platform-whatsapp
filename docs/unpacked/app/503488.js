Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./369463.js");
var i = require("./958396.js");
var a = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = o(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (s && (s.get || s.set)) {
        Object.defineProperty(r, a, s);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./542137.js"));
function o(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (o = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
var s = new class {
  constructor() {
    this._handleMessage = (e, t) => {
      const n = t.data;
      const o = (0, r.unwrapInvocationPayload)(n);
      if (o != null) {
        const {
          method: t,
          args: n,
          invocationId: r
        } = o;
        a.get()[t](...n).then(t => {
          e.postMessage((0, i.buildResponsePayload)(r, t));
        });
      }
    };
  }
  respondTo(e) {
    e.addEventListener("message", t => this._handleMessage(e, t));
    e.start();
  }
}();
exports.default = s;
var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadUserReport = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../app/996588.js"));
var i = require("../app/801506.js");
var u = require("./408827.js");
var s = require("../app/757453.js");
var c = a(require("../app/794938.js"));
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function f() {
  return (f = (0, o.default)(function* (e, t, n, a, o, d, f) {
    try {
      __LOG__(2)`UploadUserReport:uploadUserReport uploading`;
      __LOG__(2, true)`UploadUserReport:uploadUserReport description: ${a}`;
      const p = yield l.upload({
        reason: l.USER_REPORT,
        immediate: false,
        isHighPri: true,
        logType: l.LogType.SUPPORT
      });
      const m = (0, s.getLoginTokens)().server;
      const h = new FormData();
      if (m) {
        h.append("tok", m);
      }
      if (e != null) {
        h.append("user", String(e));
      }
      h.append("email", t);
      if (p) {
        h.append("crashlog", p);
      }
      h.append("desc", a);
      o.map((e, t) => {
        h.append(`screenshot-${t}`, e);
      });
      const g = (0, u.getDebugInfo)({
        supportTag: d,
        entityId: f
      });
      const E = (0, r.default)((0, r.default)({}, g), {}, {
        subject: n
      });
      h.append("info", JSON.stringify(E));
      __LOG__(2)`UploadUserReport:uploadUserReport submitting`;
      yield c.default.post(i.TICKET_URL, h);
      __LOG__(2)`UploadUserReport:uploadUserReport succeeded`;
    } catch (e) {
      __LOG__(2)`UploadUserReport:uploadUserReport failed ${String(e)}`;
    }
  })).apply(this, arguments);
}
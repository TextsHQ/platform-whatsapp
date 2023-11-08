var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingNewsletterPreviewModal = function (e) {
  let {
    identifier: t,
    chatEntryPoint: n,
    onSuccess: a
  } = e;
  const [g, E] = (0, h.useState)(true);
  const [v, _] = (0, h.useState)(null);
  const [y, C] = (0, h.useState)(null);
  function b() {
    return (b = (0, r.default)(function* () {
      const e = yield (0, l.getGeosuspendedInYourCountryString)();
      f.ToastManager.open(h.default.createElement(d.Toast, {
        msg: e,
        id: M
      }));
    })).apply(this, arguments);
  }
  (0, h.useEffect)(() => {
    (0, u.loadNewsletterPreviewChat)(t).then(e => {
      if (e == null) {
        throw (0, p.default)("Chat not found");
      }
      _(e);
    }).catch(e => {
      __LOG__(3)`[LoadingNewsletterPreviewModal] Failed to load preview for ${t}`;
      C(e);
    }).finally(() => {
      E(false);
    });
  }, []);
  if (g) {
    return h.default.createElement(s.Modal, null, h.default.createElement(i.Loading, null));
  }
  if (v != null) {
    c.ModalManager.close();
    return void a(v);
  }
  c.ModalManager.close();
  __LOG__(3)`[openNewsletterPreviewChat] Failed to load preview for ${t}`;
  const M = (0, o.genId)();
  if ((y == null ? undefined : y.status) === 405) {
    f.ToastManager.open(h.default.createElement(d.Toast, {
      msg: m.fbt._("This channel is closed to new followers. Try again later.", null, {
        hk: "f0KCo"
      }),
      id: M
    }));
  } else if ((y == null ? undefined : y.status) === 451) {
    (function () {
      b.apply(this, arguments);
    })();
  } else {
    f.ToastManager.open(h.default.createElement(d.Toast, {
      msg: m.fbt._("Could not load channel", null, {
        hk: "UJols"
      }),
      id: M
    }));
  }
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/328620.js");
var l = require("./949359.js");
var i = require("./811720.js");
var u = require("./367863.js");
var s = require("../app/118612.js");
var c = require("../app/114850.js");
var d = require("../app/625786.js");
var f = require("../app/390737.js");
var p = a(require("../app/556869.js"));
var m = require("../vendor/548360.js");
var h = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
}(require("../vendor/667294.js"));
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
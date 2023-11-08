var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebGeosuspensionAppealSection = function (e) {
  const {
    chatId: t,
    country: n
  } = e;
  const a = (0, f.useCallback)(() => {
    const e = (0, i.genId)();
    u.ToastManager.open(f.default.createElement(i.Toast, {
      msg: d.fbt._("Review submitted successfuly", null, {
        hk: "3YNFLz"
      }),
      id: e
    }));
  }, []);
  const m = (0, f.useCallback)(() => {
    r.ModalManager.close();
    a();
  }, [t, n]);
  const h = (0, f.useCallback)(() => {
    r.ModalManager.open(f.default.createElement(l.default, {
      onSubmitAppeal: m
    }));
  }, [m]);
  if (!(0, o.isNewsletterGeosuspendAppealsEnabled)()) {
    return null;
  }
  const g = d.fbt._("Request Review", null, {
    hk: "49Fb1E"
  });
  return f.default.createElement("div", {
    className: (0, p.default)([s.uiMargin.top8])
  }, f.default.createElement(c.WDSButtonSecondary, {
    onClick: h
  }, g));
};
var r = require("../app/114850.js");
var o = require("../app/73225.js");
var l = a(require("./394719.js"));
var i = require("../app/625786.js");
var u = require("../app/390737.js");
var s = require("../app/676345.js");
var c = require("../app/617425.js");
var d = require("../vendor/548360.js");
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
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
var p = a(require("../app/156720.js"));
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
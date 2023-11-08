var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    chat: t
  } = e;
  const [n, a] = (0, p.useState)(false);
  const m = f.fbt._("Delete group?", null, {
    hk: "1QtjnZ"
  });
  const h = f.fbt._("Deleting this group will not delete any downloaded content from your device.", null, {
    hk: "4E0BLo"
  });
  const g = f.fbt._("Delete group for me", null, {
    hk: "4oV9N2"
  });
  return p.default.createElement(r.ConfirmPopup, {
    title: m,
    onOK: () => {
      a(true);
      if (!u.default.online) {
        d.ToastManager.open(p.default.createElement(c.Toast, {
          msg: f.fbt._("Couldn't leave group. Please try again.", null, {
            hk: "3ANQLk"
          })
        }));
        return void a(false);
      }
      (0, l.sendExitGroup)(t).then(e => {
        if (e) {
          (0, o.sendDelete)(t);
        }
      }).finally(() => {
        i.ModalManager.close();
        a(false);
      });
    },
    okSpinner: n,
    okText: g,
    onCancel: () => {
      i.ModalManager.close();
    }
  }, p.default.createElement(s.TextDiv, {
    theme: "muted"
  }, h));
};
var r = require("../app/103440.js");
var o = require("./95049.js");
var l = require("../app/887440.js");
var i = require("../app/114850.js");
var u = a(require("../app/99398.js"));
var s = require("../app/180519.js");
var c = require("../app/625786.js");
var d = require("../app/390737.js");
var f = require("../vendor/548360.js");
var p = function (e, t) {
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
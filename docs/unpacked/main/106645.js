var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnfollowNewsletterConfirmationModal = function (e) {
  let {
    chat: t,
    eventSurface: n
  } = e;
  const [a, h] = (0, m.useState)(false);
  const g = (0, m.useCallback)(() => {
    const e = (0, r.genId)();
    d.ToastManager.open(m.default.createElement(c.Toast, {
      msg: p.fbt._("Failed to unfollow channel", null, {
        hk: "2FbQCd"
      }),
      id: e
    }));
  }, []);
  const E = (0, m.useCallback)(() => {
    h(true);
    (0, s.unsubscribeFromNewsletterAction)(t, {
      deleteLocalModels: false,
      eventSurface: n
    }).catch(() => {
      g();
    }).finally(() => {
      i.ModalManager.close();
      h(false);
    });
  }, [t, g, n]);
  return m.default.createElement(o.ConfirmPopup, {
    onOK: E,
    okText: (0, l.default)("Unfollow"),
    okDisabled: a,
    cancelDisabled: a,
    okSpinner: a,
    onCancel: () => i.ModalManager.close()
  }, m.default.createElement(f.WDSTextTitle, null, p.fbt._("Are you sure you want to unfollow \"{channel_name}\"?", [p.fbt._param("channel_name", m.default.createElement(u.Name, {
    chat: t,
    titlify: true
  }))], {
    hk: "4ARZbV"
  })));
};
var r = require("../app/328620.js");
var o = require("../app/103440.js");
var l = a(require("../app/395767.js"));
var i = require("../app/114850.js");
var u = require("../app/21645.js");
var s = require("./229476.js");
var c = require("../app/625786.js");
var d = require("../app/390737.js");
var f = require("../app/851488.js");
var p = require("../vendor/548360.js");
var m = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
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
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
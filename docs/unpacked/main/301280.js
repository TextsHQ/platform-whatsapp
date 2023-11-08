Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("../app/103440.js");
var r = require("../app/690495.js");
var o = require("../app/114850.js");
var l = require("../app/939716.js");
var i = require("../app/375399.js");
var u = require("../app/180519.js");
var s = require("../app/676345.js");
var c = require("../vendor/548360.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
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
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
var p = (0, d.forwardRef)(function (e, t) {
  let {
    failedEditedMsg: n
  } = e;
  (0, l.canEditText)(n);
  const f = c.fbt._("Try Again", null, {
    hk: "28eBwm"
  });
  const p = c.fbt._("Cancel", null, {
    hk: "1h9niz"
  });
  const m = c.fbt._("Your edited message was not sent. Please try again.", null, {
    hk: "4EvRVE"
  });
  return d.default.createElement(a.ConfirmPopup, {
    ref: t,
    okText: f,
    onOK: () => {
      o.ModalManager.close();
      return (0, i.resendLatestEdit)(n);
    },
    cancelText: p,
    onCancel: () => {
      o.ModalManager.close();
    }
  }, d.default.createElement(r.FlexRow, {
    align: "center",
    justify: "center"
  }, d.default.createElement(u.TextParagraph, {
    xstyle: [s.uiMargin.top16, s.uiMargin.bottom32]
  }, m)));
});
exports.default = p;
var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("./87979.js"));
var o = a(require("./685550.js"));
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = u(t);
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
var i = require("./839062.js");
function u(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (u = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const s = require("../vendor/76672.js").Mirrored(["SentForAdminReview", "ReportedMsg"]);
function c(e, t) {
  const [n, a] = (0, i.useFlow)(s.SentForAdminReview, {
    transitions: i.FlowTransitions.DrawerRight
  });
  const [u, c] = (0, l.useState)(null);
  if (a.step == null) {
    return null;
  }
  let d;
  switch (a.step) {
    case s.SentForAdminReview:
      d = l.default.createElement(r.default, {
        chat: e.chat,
        key: `rta-drawer-${e.chat.id.toString()}`,
        onClose: e.onClose,
        onMsgFooterClick: e => {
          c(e);
          a.push(s.ReportedMsg);
        }
      });
      break;
    case s.ReportedMsg:
      d = u != null ? l.default.createElement(o.default, {
        key: `rta-reporter-drawer-${e.chat.id.toString()}`,
        msg: u,
        onBack: () => a.pop()
      }) : null;
  }
  return l.default.createElement(n, {
    flow: a,
    ref: t,
    displayName: "SentForAdminReviewFlow"
  }, d);
}
var d = (0, l.forwardRef)(c);
exports.default = d;
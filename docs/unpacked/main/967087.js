Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("../app/103440.js");
var r = require("../app/690495.js");
var o = require("../app/180519.js");
var l = require("../app/676345.js");
var i = function (e, t) {
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
var s = (0, i.forwardRef)(function (e, t) {
  let {
    okText: n,
    onOk: u,
    modalText: s,
    type: c,
    titleText: d = null,
    cancelText: f = null,
    onCancel: p = null
  } = e;
  return i.default.createElement(a.ConfirmPopup, {
    ref: t,
    type: c,
    title: d,
    okText: n,
    onOK: u,
    cancelText: f,
    onCancel: p
  }, i.default.createElement(r.FlexRow, {
    align: "center",
    justify: "center"
  }, i.default.createElement(o.TextParagraph, {
    xstyle: [Boolean(d) === false && l.uiMargin.top16, l.uiMargin.bottom32]
  }, s)));
});
exports.default = s;
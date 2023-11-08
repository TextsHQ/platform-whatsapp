var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterPrivacyMsgBar = function (e) {
  let {
    onDismiss: t
  } = e;
  const n = (0, f.useCallback)(() => {
    i.ModalManager.open(f.default.createElement(u.NewsletterPhoneNumberNux, null));
  }, []);
  const a = f.default.createElement(r.SelectableLink, {
    className: (0, p.default)(h.learnMore),
    id: "data-sharing-learn-more-link",
    selectable: true,
    onClick: n
  }, (0, o.default)("Learn more"));
  return f.default.createElement(l.FlexRow, {
    align: "center"
  }, f.default.createElement(l.FlexItem, {
    grow: 1
  }, f.default.createElement("span", {
    className: (0, p.default)(h.container)
  }, d.fbt._("This channel has added privacy for your profile and phone number.", null, {
    hk: "32ztpZ"
  }), " ", a)), f.default.createElement(l.FlexItem, {
    grow: 0,
    basis: 0,
    align: "center"
  }, f.default.createElement(c.default, {
    onClick: t,
    xstyle: h.dismissButton
  }, f.default.createElement(s.RoundXInvIcon, {
    height: 15
  }))));
};
var r = require("../app/306703.js");
var o = a(require("../app/395767.js"));
var l = require("../app/690495.js");
var i = require("../app/114850.js");
var u = require("./620973.js");
var s = require("./102546.js");
var c = a(require("../app/625903.js"));
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
const h = {
  container: {
    whiteSpace: "bbv8nyr4"
  },
  learnMore: {
    cursor: "ajgl1lbb"
  },
  dismissButton: {
    display: "p357zi0d"
  }
};
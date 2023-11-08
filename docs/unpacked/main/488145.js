var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/103440.js");
var o = require("../vendor/548360.js");
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
var i = a(require("../app/156720.js"));
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
const s = {
  fontSize: "enbbiyaj",
  lineHeight: "l85iiqla"
};
const c = (0, l.forwardRef)((e, t) => {
  const n = o.fbt._("Dismiss yourself as community admin?", null, {
    hk: "4wt5mu"
  });
  const a = o.fbt._("You won't be able to send announcements, manage the community or use other admin tools.", null, {
    hk: "1huBlC"
  });
  return l.default.createElement(r.ConfirmPopup, {
    ref: t,
    title: n,
    onOK: e.onDemote,
    onCancel: e.onCancel
  }, l.default.createElement("div", {
    className: (0, i.default)(s)
  }, a));
});
c.displayName = "CommunityAdminSelfDemoteConfirmPopup";
const d = (0, l.forwardRef)((e, t) => l.default.createElement(r.ConfirmPopup, {
  ref: t,
  onOK: e.onOK
}, l.default.createElement("div", {
  className: (0, i.default)(s)
}, o.fbt._("You cannot dismiss yourself as an admin because you created the community.", null, {
  hk: "378ju1"
}))));
function f(e, t) {
  const {
    onDemote: n,
    onCancel: a,
    onFailure: r,
    isCommunityOwner: o = false
  } = e;
  if (o) {
    return l.default.createElement(d, {
      ref: t,
      onOK: r
    });
  } else {
    return l.default.createElement(c, {
      ref: t,
      onDemote: n,
      onCancel: a
    });
  }
}
d.displayName = "CommunityAdminSelfDemoteForbiddenPopup";
var p = (0, l.forwardRef)(f);
exports.default = p;
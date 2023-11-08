var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MembershipApprovalRequestsBanner = undefined;
exports.useMembershipApprovalRequestsBanner = function (e) {
  const t = (0, v.useModelValues)(e, ["id", "groupMetadata"]);
  const {
    id: n
  } = t;
  const a = (0, v.useOptionalModelValues)(t.groupMetadata, ["participants"]);
  const o = Boolean(a == null ? undefined : a.participants.iAmAdmin());
  const l = S(t);
  const i = (0, c.getMembershipApprovalRequestsBannerNuxKey)(n.toString());
  const [u, s] = (0, _.default)(i);
  return [o && l > 0 && u && (0, r.getABPropConfigValue)("group_join_request_m2_banner_on_conversation"), s];
};
var r = require("../app/287461.js");
var o = a(require("./222437.js"));
var l = require("../app/900316.js");
var i = require("../app/690495.js");
var u = a(require("../app/469733.js"));
var s = a(require("./596090.js"));
var c = require("../app/95589.js");
var d = require("./828720.js");
var f = require("../app/180519.js");
var p = require("../app/392632.js");
var m = require("../app/676345.js");
var h = require("../vendor/548360.js");
var g = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = C(t);
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
a(require("../app/156720.js"));
var E = a(require("../app/524578.js"));
var v = require("../app/655241.js");
var _ = a(require("./157558.js"));
var y = a(require("../app/321201.js"));
function C(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (C = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const b = {
  banner: {
    backgroundColor: "ihvf49ua"
  },
  icon: {
    color: "sbs3osm6"
  }
};
const M = (0, g.forwardRef)((e, t) => {
  var n;
  const {
    onClose: a,
    chat: c
  } = e;
  const E = (0, y.default)();
  const v = S(c);
  return g.default.createElement(p.UIE, {
    displayName: "MembershipApprovalRequestsBanner",
    escapable: true
  }, g.default.createElement(o.default, {
    ref: t,
    xstyle: (0, r.getABPropConfigValue)("group_join_request_m3") && b.banner,
    onClick: () => {
      l.DrawerManager.openDrawerRight(g.default.createElement(s.default, {
        chat: c,
        onBack: () => l.DrawerManager.closeDrawerRight()
      }), {
        transition: "slide-left",
        uim: E
      });
      a();
    },
    onClose: a
  }, g.default.createElement(i.FlexRow, {
    align: "center"
  }, g.default.createElement(u.default, {
    xstyle: m.uiPadding.end20
  }, g.default.createElement(d.PendingParticipantsIcon, {
    xstyle: b.icon,
    width: 20,
    height: 20
  })), g.default.createElement(u.default, null, g.default.createElement(f.TextSpan, {
    theme: "muted"
  }, (n = h.fbt._plural(v, "pendingRequests"), h.fbt._({
    "*": "{=m0} {pendingRequests} requests to join",
    _1: "{=m0} 1 request to join"
  }, [n, h.fbt._implicitParam("=m0", g.default.createElement(f.TextSpan, {
    color: "accent",
    weight: (0, r.getABPropConfigValue)("group_join_request_m3") ? "semibold" : "normal"
  }, h.fbt._({
    "*": "Review",
    _1: "Review"
  }, [n], {
    hk: "oBL7I"
  })))], {
    hk: "4uawDA"
  })))))));
});
function S(e) {
  const t = (0, v.useModelValues)(e, ["groupMetadata"]);
  const n = (0, v.useOptionalModelValues)(t.groupMetadata, ["membershipApprovalRequests"]);
  const a = n == null ? undefined : n.membershipApprovalRequests;
  return (0, E.default)(a, ["add", "remove", "reset"], () => {
    var e;
    if ((e = a == null ? undefined : a.length) !== null && e !== undefined) {
      return e;
    } else {
      return 0;
    }
  });
}
exports.MembershipApprovalRequestsBanner = M;
M.displayName = "MembershipApprovalRequestsBanner";
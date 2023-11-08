var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportToAdminNewReportBanner = undefined;
exports.useReportToAdminNewReportBanner = function (e) {
  const t = (0, C.useModelValues)(e, ["id", "groupMetadata"]);
  const n = function (e) {
    const t = (0, C.useModelValues)(e, ["groupMetadata"]);
    const n = (0, C.useOptionalModelValues)(t.groupMetadata, ["lastReportToAdminTimestamp"]);
    const a = n == null ? undefined : n.lastReportToAdminTimestamp;
    if (a == null) {
      return false;
    }
    return (0, r.unixTime)() - a <= d.REVOKE_WINDOW + d.REVOKE_WINDOW_RECEIVER_MARGIN;
  }(t);
  return [w(t) && n, () => {
    (0, f.clearLastReportTimestamp)(t);
  }];
};
var r = require("../app/632157.js");
var o = require("../app/287461.js");
var l = a(require("./222437.js"));
var i = require("../app/900316.js");
var u = require("../app/690495.js");
var s = a(require("../app/469733.js"));
var c = require("../app/299950.js");
var d = require("../app/140661.js");
var f = require("./176514.js");
var p = a(require("./979588.js"));
var m = require("../app/163139.js");
var h = require("../app/180519.js");
var g = require("../app/392632.js");
var E = require("../app/676345.js");
var v = require("./972349.js");
var _ = require("../vendor/548360.js");
var y = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = M(t);
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
var C = require("../app/655241.js");
var b = a(require("../app/321201.js"));
function M(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (M = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const S = {
  banner: {
    backgroundColor: "ihvf49ua"
  },
  icon: {
    color: "sbs3osm6"
  }
};
const T = (0, y.forwardRef)((e, t) => {
  const {
    onClose: n,
    chat: a
  } = e;
  const r = (0, b.default)();
  return y.default.createElement(g.UIE, {
    displayName: "ReportToAdminNewReportBanner",
    escapable: true
  }, y.default.createElement(l.default, {
    ref: t,
    xstyle: S.banner,
    onClick: () => {
      i.DrawerManager.openDrawerRight(y.default.createElement(p.default, {
        chat: (0, m.unproxy)(a),
        ref: t,
        onClose: () => i.DrawerManager.closeDrawerRight(),
        key: `rta-${a.id.toString()}`
      }), {
        transition: "slide-left",
        uim: r,
        focusType: c.FocusType.TABBABLE
      });
      n();
    },
    onClose: n
  }, y.default.createElement(u.FlexRow, {
    xstyle: E.uiMargin.top6,
    align: "center"
  }, y.default.createElement(s.default, {
    xstyle: E.uiPadding.end20
  }, y.default.createElement(v.WarningBubbleIcon, {
    xstyle: S.icon,
    width: 20,
    height: 20
  })), y.default.createElement(s.default, {
    xstyle: E.uiMargin.bottom6
  }, y.default.createElement(h.TextSpan, {
    theme: "muted"
  }, _.fbt._("{=m0} sent for admin review", [_.fbt._implicitParam("=m0", y.default.createElement(h.TextSpan, {
    color: "accent",
    weight: "semibold"
  }, _.fbt._("New Messages", null, {
    hk: "mAwOV"
  })))], {
    hk: "2SLRsM"
  }))))));
});
function w(e) {
  const t = (0, C.useOptionalModelValues)(e.groupMetadata, ["reportToAdminMode"]);
  return (0, o.getABPropConfigValue)("report_to_admin_kill_switch") && (t == null ? undefined : t.reportToAdminMode) === true;
}
exports.ReportToAdminNewReportBanner = T;
T.displayName = "ReportToAdminNewReportBanner";
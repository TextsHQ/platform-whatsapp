var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubgroupSuggestionsBanner = undefined;
exports.useSubgroupSuggestionsBanner = function (e) {
  var t;
  var n;
  var a;
  const r = (t = e.groupMetadata) === null || t === undefined ? undefined : t.getParentGroupChat();
  const l = function (e) {
    var t;
    return (0, E.default)(e == null || (t = e.groupMetadata) === null || t === undefined ? undefined : t.subgroupSuggestions, ["add", "remove", "reset"], () => {
      var t;
      var n;
      if ((t = e == null || (n = e.groupMetadata) === null || n === undefined ? undefined : n.getSubgroupSuggestions().length) !== null && t !== undefined) {
        return t;
      } else {
        return 0;
      }
    });
  }(r);
  const i = (r == null ? undefined : r.id) ? r.id.toString() : "";
  const u = (0, c.getSubgroupSuggestionsBannerNuxKey)(i);
  const d = (0, E.default)((n = e.groupMetadata) === null || n === undefined ? undefined : n.participants, ["bulk_add", "bulk_remove", "reset", "change:isAdmin"], () => {
    var t;
    return Boolean((t = e.groupMetadata) === null || t === undefined ? undefined : t.participants.iAmAdmin());
  });
  const [f, p] = (0, v.default)(u);
  return [((a = e.groupMetadata) === null || a === undefined ? undefined : a.groupType) === s.GroupType.LINKED_ANNOUNCEMENT_GROUP && Boolean(r) && l > 0 && d && f && (0, o.memberSuggestedGroupsEnabled)(), p, l];
};
var r = require("../app/780549.js");
var o = require("../app/174834.js");
var l = a(require("./222437.js"));
var i = require("../app/690495.js");
var u = a(require("../app/469733.js"));
var s = require("../app/862159.js");
var c = require("../app/95589.js");
var d = require("./104423.js");
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
  var n = _(t);
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
var v = a(require("./157558.js"));
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const y = {
  banner: {
    backgroundColor: "ihvf49ua"
  },
  icon: {
    color: "gywm1g0h"
  }
};
const C = (0, g.forwardRef)((e, t) => {
  var n;
  const {
    onClose: a,
    chat: o,
    subgroupSuggestionsCount: s
  } = e;
  return g.default.createElement(p.UIE, {
    displayName: "SubgroupSuggestionsBanner",
    escapable: true
  }, g.default.createElement(l.default, {
    ref: t,
    xstyle: y.banner,
    onClick: () => {
      var e;
      const t = (e = o.groupMetadata) === null || e === undefined ? undefined : e.parentGroup;
      if (t) {
        r.Cmd.openCommunityPendingGroupsDrawer(t);
        a();
      }
    },
    onClose: a
  }, g.default.createElement(i.FlexRow, {
    align: "center"
  }, g.default.createElement(u.default, {
    xstyle: m.uiPadding.end18
  }, g.default.createElement(d.SubgroupsNuxIcon, {
    xstyle: y.icon,
    height: 20
  })), g.default.createElement(u.default, null, g.default.createElement(f.TextSpan, {
    theme: "muted"
  }, (n = h.fbt._plural(s, "group_suggestions"), h.fbt._({
    "*": "{=m0} {group_suggestions} group suggestions",
    _1: "{=m0} 1 group suggestion"
  }, [n, h.fbt._implicitParam("=m0", g.default.createElement(f.TextSpan, {
    color: "accent",
    weight: "semibold"
  }, h.fbt._({
    "*": "Review",
    _1: "Review"
  }, [n], {
    hk: "wa7Ha"
  })))], {
    hk: "1Cv3OI"
  })))))));
});
exports.SubgroupSuggestionsBanner = C;
C.displayName = "SubgroupSuggestionsBanner";
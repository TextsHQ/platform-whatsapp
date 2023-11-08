var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuotedMsgAdminGroupName = undefined;
var r = require("../app/287461.js");
var o = require("../app/351053.js");
var l = require("../app/396574.js");
var i = require("../app/780549.js");
var u = require("../app/305521.js");
var s = require("../app/581354.js");
var c = a(require("../app/667845.js"));
var d = a(require("./173543.js"));
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
var m = a(require("../app/156720.js"));
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
const g = {
  description: {
    color: "q70jrbp7",
    paddingTop: "qomlamqu",
    fontSize: "f8jlpxt4",
    fontWeight: "m1e7cby3",
    lineHeight: "l1l4so3b"
  },
  msgBody: {
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flexGrow: "ggj6brxn",
    alignItems: "gndfcl4n",
    paddingTop: "qomlamqu",
    paddingEnd: "btzf6ewn",
    paddingBottom: "pjbr9b9i",
    paddingStart: "nu34rnf1",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  msgBodyComposePreview: {
    paddingTop: "fbgy3m38",
    paddingEnd: "btzf6ewn",
    paddingBottom: "n0ziumnz",
    paddingStart: "chuyt2sy"
  },
  column: {
    flexDirection: "f8m0rgwh",
    alignItems: "gpmkiw74",
    textAlign: "ljrqcn24"
  }
};
function E(e, t) {
  var n;
  const {
    isComposePreview: a = false,
    quotedGroupJid: h,
    quotedGroupSubject: E,
    quotedParentGroupJid: v
  } = e;
  const _ = (n = c.default.get(h)) === null || n === undefined ? undefined : n.participants;
  const y = v != null && (0, r.getABPropConfigValue)("parent_group_tap_to_add_enabled");
  const [C, b] = (0, p.useState)(false);
  const M = () => !C && !a;
  (0, p.useImperativeHandle)(t, () => ({
    hoverable: M
  }));
  const S = E != null ? E : (() => {
    const e = o.ChatCollection.get(h);
    if (e == null) {
      return undefined;
    } else {
      return e.formattedTitle;
    }
  })();
  if (S == null) {
    return null;
  }
  const T = (0, l.classnamesConvertMeToStylexPlease)({
    [d.default.hover]: C,
    [d.default.composeBoxQuotedMsg]: a,
    [d.default.quotedMsg]: true
  });
  const w = y ? f.fbt._("{subgroup-name}", [f.fbt._param("subgroup-name", S)], {
    hk: "1oCLyG"
  }) : null;
  const A = y ? p.default.createElement(u.EmojiText, {
    xstyle: g.description,
    text: f.fbt._("Request to join", null, {
      hk: "3GbuOB"
    })
  }) : null;
  return p.default.createElement("div", {
    onMouseOver: () => {
      b(true);
    },
    onMouseEnter: () => {
      b(true);
    },
    onMouseLeave: () => {
      b(false);
    },
    className: T
  }, p.default.createElement("div", {
    className: d.default.msg,
    role: a ? "none" : "button",
    onClick: () => {
      if (!(y && (_ == null || !_.iAmMember()))) {
        (0, s.findChat)(h, "quotedMsgAdminGroupName").then(e => i.Cmd.openChatBottom(e));
      }
    }
  }, p.default.createElement("span", {
    className: d.default.colorBar
  }), p.default.createElement("div", {
    className: (0, m.default)(g.msgBody, a && g.msgBodyComposePreview, y && g.column)
  }, p.default.createElement(u.EmojiText, {
    className: "quoted-mention",
    text: w != null ? w : f.fbt._("Group • {groupName}", [f.fbt._param("groupName", S)], {
      hk: "3ydYea"
    }),
    direction: "auto",
    key: "status"
  }), A)));
}
const v = (0, p.forwardRef)(E);
exports.QuotedMsgAdminGroupName = v;
v.displayName = "QuotedMsgAdminGroupName";
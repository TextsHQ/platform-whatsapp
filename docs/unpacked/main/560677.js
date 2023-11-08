var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangeNumberNotificationBanner = undefined;
exports.onChangeNumberNotificationClick = S;
var r = a(require("../app/670983.js"));
var o = a(require("../app/692629.js"));
var l = require("../app/351053.js");
var i = require("./239523.js");
var u = require("../app/780549.js");
var s = require("../app/877171.js");
var c = require("../app/177938.js");
var d = require("../app/660666.js");
var f = a(require("./222437.js"));
var p = require("../app/714574.js");
var m = require("../app/180519.js");
var h = require("../app/931019.js");
var g = require("../vendor/548360.js");
var E = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = y(t);
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
var v = a(require("../app/156720.js"));
var _ = require("../app/655241.js");
function y(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (y = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const C = {
  marginStart: "jwvfxh5v"
};
const b = {
  display: "p357zi0d",
  alignItems: "gndfcl4n"
};
const M = {
  flexGrow: "ggj6brxn",
  color: "pm5hny62"
};
function S(e, t) {
  const n = l.ChatCollection.gadd(e);
  if (!n.changeNumberOldJid) {
    n.changeNumberOldJid = t;
  }
  n.changeNumberNewJid = undefined;
  u.Cmd.openChatFromUnread(n).then(e => {
    if (e) {
      s.ComposeBoxActions.focus(n);
    }
  });
}
const T = (0, E.forwardRef)((e, t) => {
  const n = (0, _.useModelValues)(e.chat, ["changeNumberOldJid", "changeNumberNewJid", "id", "showChangeNumberNotification"]);
  const {
    changeNumberOldJid: a,
    changeNumberNewJid: l,
    id: u
  } = n;
  const s = a === undefined && l !== undefined;
  const y = a !== undefined && l === undefined;
  const T = (0, E.useMemo)(() => {
    const e = a || u;
    const t = c.ContactCollection.get(e);
    const n = t != null && ((0, d.getIsMyContact)(t) || (t == null ? undefined : t.id.isLid())) ? (0, p.getFormattedName)(t) : (0, h.widToFormattedUser)(e);
    if (y) {
      return g.fbt._("{name} changed their phone number. You're currently chatting with their new number.", [g.fbt._param("name", n)], {
        hk: "3G9LoK"
      });
    } else {
      return g.fbt._("{name} changed their phone number to a new number.", [g.fbt._param("name", n)], {
        hk: "2D0P7f"
      });
    }
  }, [a, u, y]);
  if (!n.showChangeNumberNotification) {
    return null;
  }
  const w = s ? E.default.createElement("div", {
    className: (0, v.default)(C)
  }, E.default.createElement(o.default, {
    onClick: () => {
      const {
        changeNumberNewJid: e
      } = n;
      const t = n.id;
      S((0, r.default)(e, "changeNumberNewJid"), t);
    },
    type: "plain-white",
    nowrap: true
  }, g.fbt._("Message new number", null, {
    hk: "4pjpb0"
  }))) : null;
  return E.default.createElement(f.default, {
    ref: t,
    onClose: () => {
      (0, i.sendDismissChangeNumber)(n);
    }
  }, E.default.createElement("div", {
    className: (0, v.default)(b)
  }, E.default.createElement(m.TextSpan, {
    theme: "plain",
    className: (0, v.default)(M)
  }, T), w));
});
exports.ChangeNumberNotificationBanner = T;
T.displayName = "ChangeNumberNotificationBanner";
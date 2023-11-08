var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    chat: t
  } = e;
  const [n, a] = (0, f.useState)(() => false);
  const m = (0, f.useMemo)(() => {
    if (t.kind != null) {
      switch (t.kind) {
        case r.ChatKindType.Group:
          return d.fbt._("Clear this chat?", null, {
            hk: "2L0fh7"
          });
        case r.ChatKindType.Chat:
          return d.fbt._("Clear this chat?", null, {
            hk: "RFq4U"
          });
        case r.ChatKindType.Broadcast:
          return d.fbt._("Clear this chat?", null, {
            hk: "1TyQoK"
          });
        case r.ChatKindType.Newsletter:
        case r.ChatKindType.Community:
          return "";
      }
    }
    return "";
  }, [t.kind]);
  const _ = f.default.createElement("div", {
    className: (0, p.default)(h)
  }, f.default.createElement("div", {
    className: (0, p.default)(g)
  }, f.default.createElement(o.CheckBox, {
    onChange: () => {
      a(!n);
    },
    checked: n,
    id: "menu-icon-clear-chat"
  })), f.default.createElement("label", {
    htmlFor: "menu-icon-clear-chat",
    className: (0, p.default)(E)
  }, d.fbt._("Keep starred messages", null, {
    hk: "2KaiFp"
  })));
  const y = f.default.createElement("div", null, f.default.createElement("div", {
    className: (0, p.default)(v)
  }, f.default.createElement(s.TextParagraph, {
    theme: "muted"
  }, d.fbt._("This chat will be empty but will remain in your chat list.", null, {
    hk: "2jrXuN"
  }))), _);
  return f.default.createElement(l.ConfirmPopup, {
    title: m,
    onOK: () => {
      t.pendingAction++;
      if (t.isPSA) {
        const e = t.msgs.last();
        (0, c.logChatPSARemove)(e, 5, 14);
      }
      (0, u.sendClear)(t, n).finally(() => {
        t.pendingAction--;
      });
      i.ModalManager.close();
    },
    okText: d.fbt._("Clear chat", null, {
      hk: "46a4GH"
    }),
    onCancel: () => {
      i.ModalManager.close();
    }
  }, y);
};
var r = require("../app/953213.js");
var o = require("./468926.js");
var l = require("../app/103440.js");
var i = require("../app/114850.js");
var u = require("../app/383510.js");
var s = require("../app/180519.js");
var c = require("../app/369084.js");
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
  display: "p357zi0d",
  paddingBottom: "przvwfww",
  marginTop: "iy2cu22y",
  marginEnd: "jnwc1y2a",
  fontSize: "f8jlpxt4",
  lineHeight: "e4qy2s3t"
};
const g = {
  display: "l7jjieqr",
  flex: "kk3akd72",
  marginEnd: "spjzgwxb",
  verticalAlign: "kbne4t5p",
  transition: "haigt2tc"
};
const E = {
  flex: "a1m9qzja",
  cursor: "ajgl1lbb",
  transition: "haigt2tc"
};
const v = {
  paddingTop: "b97gdkd1"
};
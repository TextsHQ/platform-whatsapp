var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    contact: t,
    disabled: n = false,
    customSecondaryText: a,
    active: o,
    allowBlockedContacts: m,
    ephemeralIcon: g,
    onSelect: E,
    theme: v
  } = e;
  const [_, y] = (0, f.useState)(null);
  const [C, b, M, S, T, w, A] = (0, p.useContactValues)(t.id, [l.getId, l.getIsGroup, u.getIsContactBlocked, u.getPendingAction, l.getShortName, l.getName, l.getIsMe]);
  const P = () => {
    y(null);
  };
  const O = () => {
    P();
    t.addPendingAction((0, r.unblockContact)(t)).then(() => E()).catch(() => {});
  };
  let k;
  if (_) {
    k = f.default.createElement(s.UIE, {
      displayName: "ChatContextMenu",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true
    }, f.default.createElement(c.default, {
      contextMenu: _
    }));
  }
  let D = "chat-checkbox";
  if (n || M && !m) {
    D = v === "multi-select-chat-list" ? "chat-checkbox-disabled" : "chat-checkbox-no-delete";
  }
  return f.default.createElement(f.default.Fragment, null, f.default.createElement(h, {
    theme: D,
    active: o,
    contact: t,
    onClick: n ? null : e => {
      if (!n) {
        if (m) {
          E();
        } else if (_) {
          P();
        } else if (M) {
          (e => {
            const t = [f.default.createElement(i.DropdownItem, {
              testid: "unblock-contact-in-multi-select",
              key: "unblock",
              action: O
            }, d.fbt._("Unblock {contact}", [d.fbt._param("contact", T || w)], {
              hk: "gGXD1"
            }))];
            y({
              contactId: C.toString(),
              menu: t,
              anchor: e.anchor,
              event: e.event
            });
          })({
            event: e
          });
        } else {
          E();
        }
      }
    },
    secondary: M && !m ? d.fbt._("Blocked. Click to unblock", null, {
      hk: "1eYigB"
    }) : a || null,
    waitIdle: true,
    ephemeralIcon: g,
    hideStatus: A,
    showMessageYourselfName: A
  }), k);
};
var r = require("../app/547979.js");
var o = require("./822652.js");
var l = require("../app/660666.js");
var i = require("../app/675085.js");
var u = require("../app/714574.js");
var s = require("../app/392632.js");
var c = a(require("../app/37875.js"));
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
var p = require("../app/379811.js");
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
const h = (0, o.ContactFactory)();
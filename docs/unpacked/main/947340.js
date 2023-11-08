var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    newsletter: t,
    onCancel: n
  } = e;
  const [a, r] = function () {
    const [e, t] = (0, v.useState)(null);
    const n = [];
    const a = () => {
      t(null);
    };
    let r;
    if (e) {
      r = v.default.createElement(m.UIE, {
        displayName: "NewsletterSubscribersContextMenu",
        escapable: true,
        popable: true,
        dismissOnWindowResize: true,
        requestDismiss: a
      }, v.default.createElement(h.default, {
        contextMenu: e
      }));
    }
    return [r, (e, a) => {
      const r = (0, l.getIsMe)(a) ? E.fbt._("Message yourself", null, {
        hk: "3XPgqF"
      }) : E.fbt._("Message {author}", [E.fbt._param("author", (0, d.getFormattedUser)(a))], {
        hk: "3MFIRJ"
      });
      n.push(v.default.createElement(u.DropdownItem, {
        key: "message author",
        ariaLabel: r,
        action: b.bind(null, a.id),
        addSpacing: true
      }, v.default.createElement(s.EmojiText, {
        text: r,
        xstyle: C.dropdownText
      })));
      const o = e.type === "click" ? undefined : e.target;
      t({
        contactId: a.id,
        menu: n,
        anchor: o,
        event: e.anchor ? undefined : e
      });
    }];
  }();
  const [c] = (0, _.default)(t, (0, p.getMaxSubscriberNumber)(), g.ValidCachedNewsletterSubscriberKeys.FULL, true);
  const f = new Map(c.map(e => {
    let {
      contact: {
        id: t
      },
      role: n
    } = e;
    return [t, n];
  }));
  return v.default.createElement(v.default.Fragment, null, v.default.createElement(i.default, {
    title: (0, o.getSearchForChannelFollowersText)(),
    filter: () => true,
    onCancel: n,
    contacts: c.map(e => {
      let {
        contact: t
      } = e;
      return t;
    }),
    newsletterRoles: f,
    isNewsletter: true,
    openContextOnClick: true,
    contextEnabled: () => false,
    contextMenu: () => true,
    onContext: r
  }), a);
};
var r = require("../app/780549.js");
var o = require("./949359.js");
var l = require("../app/660666.js");
var i = a(require("./402085.js"));
var u = require("../app/675085.js");
var s = require("../app/305521.js");
var c = require("../app/581354.js");
var d = require("../app/714574.js");
var f = require("../app/114850.js");
var p = require("../app/73225.js");
var m = require("../app/392632.js");
var h = a(require("../app/37875.js"));
var g = require("./803214.js");
var E = require("../vendor/548360.js");
var v = function (e, t) {
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
a(require("../app/156720.js"));
var _ = a(require("./637782.js"));
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
  dropdownText: {
    display: "p357zi0d",
    alignItems: "gndfcl4n"
  }
};
const b = e => {
  (0, c.findChat)(e, "newsletterFollowerList").then(e => {
    f.ModalManager.close();
    r.Cmd.openChatFromUnread(e);
  });
};
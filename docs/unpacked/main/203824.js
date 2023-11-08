var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/984330.js");
var l = require("../app/174834.js");
var i = a(require("./908081.js"));
var u = a(require("./324093.js"));
var s = require("./626194.js");
var c = a(require("./969358.js"));
var d = require("../app/114850.js");
var f = require("../app/997772.js");
var p = a(require("./749857.js"));
var m = a(require("./506784.js"));
var h = require("./388444.js");
var g = require("../app/625786.js");
var E = require("../app/390737.js");
var v = require("../app/454905.js");
var _ = require("../app/757453.js");
var y = require("../app/851488.js");
var C = a(require("../app/556869.js"));
var b = require("../vendor/548360.js");
var M = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = T(t);
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
var S = a(require("../app/156720.js"));
function T(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (T = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const w = {
  marginTop: "c46o30wg",
  marginEnd: "jnwc1y2a",
  marginBottom: "du8bjn1j",
  marginStart: "svoq16ka",
  fontSize: "enbbiyaj",
  color: "jq3rn4u7",
  lineHeight: "r5qsrrlp"
};
function A(e, t) {
  let {
    category: n,
    onClose: a
  } = e;
  const [T, A] = (0, M.useState)(() => {
    var e;
    var t;
    var a;
    const r = (0, _.getUserPrivacySettings)();
    switch (n) {
      case "about":
        if ((e = r.about) !== null && e !== undefined) {
          return e;
        } else {
          return f.VISIBILITY.all;
        }
      case "profilePicture":
        if ((t = r.profilePicture) !== null && t !== undefined) {
          return t;
        } else {
          return f.VISIBILITY.all;
        }
      case "groupAdd":
        if ((a = r.groupAdd) !== null && a !== undefined) {
          return a;
        } else {
          return f.VISIBILITY.all;
        }
    }
  });
  function k() {
    return D.apply(this, arguments);
  }
  function D() {
    return (D = (0, r.default)(function* (e) {
      if (e === T) {
        return;
      }
      A(e);
      const t = (0, h.privacyWebNameToServerName)(n);
      if (t === "readreceipts" || t === "online" || t === "calladd") {
        throw (0, C.default)(`visibility_edit_drawer: category can not be ${t}`);
      }
      try {
        switch (e) {
          case f.VISIBILITY.none:
            if (t === "groupadd" || t === "calladd") {
              throw (0, C.default)("visibility_edit_drawer: groupadd/calladd can not be none");
            }
            return void (yield (0, h.setPrivacyForOneCategory)({
              name: t,
              value: "none"
            }));
          case f.VISIBILITY.contacts:
            return void (yield (0, h.setPrivacyForOneCategory)({
              name: t,
              value: "contacts"
            }));
          case f.VISIBILITY.all:
            yield (0, h.setPrivacyForOneCategory)({
              name: t,
              value: "all"
            });
        }
      } catch (e) {
        A(T);
        if (!(e instanceof o.ServerStatusCodeError && e.statusCode === 409)) {
          __LOG__(3, undefined, undefined, true)`visibility_edit_drawer: set visiblity option failed ${e.stack}`;
          SEND_LOGS("visibility_edit_drawer: set visiblity option failed");
        }
        E.ToastManager.open(M.default.createElement(g.Toast, {
          msg: b.fbt._("Failed to update privacy settings. Please try again.", null, {
            hk: "h89q3"
          })
        }));
      }
    })).apply(this, arguments);
  }
  const I = M.default.createElement(p.default, {
    text: b.fbt._("Everyone", null, {
      hk: "3oWv8q"
    }),
    testid: "everyone",
    selected: T === f.VISIBILITY.all,
    onClick: () => {
      k(f.VISIBILITY.all);
    }
  });
  const R = M.default.createElement(p.default, {
    text: b.fbt._("My contacts", null, {
      hk: "3jgOvC"
    }),
    testid: "my-contacts",
    selected: T === f.VISIBILITY.contacts,
    onClick: () => {
      k(f.VISIBILITY.contacts);
    }
  });
  const N = M.default.createElement(p.default, {
    text: b.fbt._("My contacts except...", null, {
      hk: "2tCWPL"
    }),
    testid: "my-contacts-except",
    selected: T === f.VISIBILITY.contact_blacklist,
    onClick: () => {
      d.ModalManager.open(M.default.createElement(m.default, {
        category: n,
        onConfirm: () => {
          A(f.VISIBILITY.contact_blacklist);
        }
      }));
    }
  });
  const x = n === "groupAdd" ? null : M.default.createElement(p.default, {
    text: b.fbt._("Nobody", null, {
      hk: "ghOKj"
    }),
    testid: "nobody",
    selected: T === f.VISIBILITY.none,
    onClick: () => {
      k(f.VISIBILITY.none);
    }
  });
  const L = n === "groupAdd" ? M.default.createElement(y.WDSTextMuted, {
    margin: [20, 0],
    color: "secondary"
  }, b.fbt._("Admins who can't add you to a group will have the option of inviting you privately instead.", null, {
    hk: "2dA7i1"
  })) : null;
  const j = n === "groupAdd" && (0, l.communityAnnouncementImprovementM3Enabled)() ? M.default.createElement(y.WDSTextMuted, {
    margin: [20, 0],
    color: "secondary"
  }, b.fbt._("This setting does not apply to community announcement groups. If you're added to a community, you'll always be added to a community announcement group.", null, {
    hk: "1rp968"
  })) : null;
  return M.default.createElement(i.default, {
    ref: t
  }, M.default.createElement(s.DrawerHeader, {
    testid: `drawer-title-${n}`,
    title: P(n),
    onBack: a,
    focusBackOrCancel: true,
    type: (0, v.topMenuRedesignEnabled)() ? s.DRAWER_HEADER_TYPE.SMALL : s.DRAWER_HEADER_TYPE.LARGE
  }), M.default.createElement(u.default, null, M.default.createElement(c.default, {
    theme: "padding-no-vertical",
    animation: false
  }, M.default.createElement("div", {
    className: (0, S.default)(w)
  }, O(n)), M.default.createElement("div", {
    role: "radiogroup",
    "aria-label": O(n)
  }, I, R, N, x, L, j))));
}
function P(e) {
  switch (e) {
    case "about":
      return b.fbt._("About", null, {
        hk: "3PhlvU"
      });
    case "profilePicture":
      return b.fbt._("Profile photo", null, {
        hk: "rs5RE"
      });
    case "groupAdd":
      return b.fbt._("Groups", null, {
        hk: "3ajQWI"
      });
  }
}
function O(e) {
  switch (e) {
    case "about":
      return b.fbt._("Who can see my About", null, {
        hk: "2MFyDi"
      });
    case "profilePicture":
      return b.fbt._("Who can see my Profile Photo", null, {
        hk: "4iDmTO"
      });
    case "groupAdd":
      return b.fbt._("Who can add me to groups", null, {
        hk: "3Q0mva"
      });
  }
}
var k = (0, M.forwardRef)(A);
exports.default = k;
var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/670983.js"));
var o = a(require("./908081.js"));
var l = a(require("./831269.js"));
var i = a(require("./324093.js"));
var u = require("./626194.js");
var s = a(require("./969358.js"));
var c = require("../app/682144.js");
var d = a(require("./561535.js"));
var f = require("../app/114850.js");
var p = require("../app/180519.js");
var m = require("../app/454905.js");
var h = require("../app/676345.js");
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
var v = a(require("../app/156720.js"));
var _ = a(require("../app/401715.js"));
var y = require("../app/655241.js");
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
function b(e, t) {
  const {
    chat: n,
    fromInfo: a = false,
    onBack: l
  } = e;
  const p = (0, y.useOptionalModelValues)(e.chat.groupMetadata, ["allowNonAdminSubGroupCreation"]);
  const v = (0, _.default)();
  return E.default.createElement(o.default, {
    ref: t,
    testid: "community-settings-drawer"
  }, E.default.createElement(u.DrawerHeader, {
    title: g.fbt._("Community settings", null, {
      hk: "434ru0"
    }),
    type: a || (0, m.topMenuRedesignEnabled)() ? u.DRAWER_HEADER_TYPE.SMALL : u.DRAWER_HEADER_TYPE.LARGE,
    onBack: l
  }), E.default.createElement("div", {
    role: "complementary",
    ref: v,
    tabIndex: "-1",
    "aria-label": g.fbt._("Community settings drawer", null, {
      hk: "1mBNO4"
    })
  }, E.default.createElement(i.default, null, E.default.createElement(s.default, {
    title: g.fbt._("Community permissions", null, {
      hk: "26EFSX"
    }),
    titleXStyle: h.uiPadding.top20
  }, E.default.createElement(M, {
    isEnabled: Boolean(p == null ? undefined : p.allowNonAdminSubGroupCreation),
    onClick: () => {
      f.ModalManager.open(E.default.createElement(d.default, {
        settingType: c.GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION,
        chat: n,
        groupMetadata: (0, r.default)(n.groupMetadata, "chat.groupMetadata")
      }), {
        transition: "modal"
      });
    }
  })))));
}
const M = e => {
  let {
    isEnabled: t,
    onClick: n
  } = e;
  const a = g.fbt._("Who can add new groups", null, {
    hk: "4mGFGE"
  });
  return E.default.createElement(l.default, {
    onClick: n,
    multiline: true,
    testid: "who-can-add-new-groups-setting",
    ariaLabel: a
  }, E.default.createElement("div", {
    className: (0, v.default)(h.uiMargin.bottom2)
  }, E.default.createElement(p.WDSTextTitle, null, a)), E.default.createElement(p.WDSTextMuted, {
    testid: "who-can-add-new-groups-setting-state"
  }, t ? g.fbt._("Everyone", null, {
    hk: "2uuapZ"
  }) : g.fbt._("Only community admins", null, {
    hk: "2irdfr"
  })));
};
var S = (0, E.forwardRef)(b);
exports.default = S;
var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    chat: t,
    xstyle: n,
    readOnly: a,
    adminFunnelLogger: r,
    HoverIcon: o,
    showAddIconOverlay: l = true,
    size: s,
    showOutline: d,
    testId: h
  } = e;
  const [E, v] = (0, f.useState)(false);
  const _ = (0, m.useModelValues)(t.contact, ["id", "profilePicThumb"]);
  const y = (0, m.useOptionalModelValues)(t.contact.profilePicThumb, ["imgFull"]);
  const C = (0, f.useCallback)((e, n, a) => {
    r.logImageSetEvent(a);
    r.logEvent(c.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP);
    v(true);
    g(t, n, r).finally(() => {
      v(false);
    });
  }, [t, r]);
  return f.default.createElement("div", {
    className: (0, p.default)(n)
  }, f.default.createElement(u.PhotoPickerLoadable, {
    testid: h != null ? h : "newsletter-photo-picker",
    type: i.PhotoPickerType.NEWSLETTER,
    id: _.id,
    attachToChat: true,
    startImage: y == null ? undefined : y.imgFull,
    readOnly: a,
    onImageSet: C,
    pending: E,
    HoverIcon: o,
    showAddIconOverlay: l,
    size: s,
    showOutline: d
  }));
};
var r = require("../app/328620.js");
var o = require("./172365.js");
var l = a(require("../app/395767.js"));
var i = require("./588792.js");
var u = require("./511696.js");
var s = require("../app/390737.js");
var c = require("./269430.js");
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
var p = a(require("../app/156720.js"));
var m = require("../app/655241.js");
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
function g(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, r.genId)();
  const i = (0, o.editNewsletterMetadataAction)(e, {
    editPicture: true
  }, {
    picture: t != null ? t : null
  });
  const u = new r.ActionType(t != null ? d.fbt._("Setting channel icon", null, {
    hk: "3qGzgv"
  }) : d.fbt._("Removing channel icon", null, {
    hk: "3KXsMC"
  }));
  const p = i.then(() => {
    n.logEvent(c.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_SUCCESS);
    return new r.ActionType(t != null ? d.fbt._("Channel icon set", null, {
      hk: "M0iEh"
    }) : d.fbt._("Channel icon removed", null, {
      hk: "31cA0l"
    }));
  }).catch(() => {
    n.logEvent(c.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_FAILURE);
    __LOG__(3)`newsletter:handleEditPhoto dropped`;
    return new r.ActionType(t != null ? d.fbt._("Couldn't set channel icon", null, {
      hk: "GsVmy"
    }) : d.fbt._("Couldn't remove channel icon", null, {
      hk: "2pGDJs"
    }), {
      actionText: (0, l.default)("Try again"),
      actionHandler: () => g(e, t, n, a)
    });
  });
  s.ToastManager.open(f.default.createElement(r.ActionToast, {
    id: a,
    initialAction: u,
    pendingAction: p
  }));
  return i;
}
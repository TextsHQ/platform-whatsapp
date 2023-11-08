var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    chat: t,
    msgList: n,
    toastPosition: a,
    isMsgVisible: o,
    onDelete: l,
    onEnd: u,
    fromChannelAlerts: f
  } = e;
  const [p, m] = (0, O.useFlow)(j.DeleteRevoke);
  const [h, g] = (0, D.default)(true);
  const E = function (e) {
    return e.reduce((e, t) => {
      const n = (0, v.canSenderRevokeMsg)(t);
      const a = (0, v.canAdminRevokeMsg)(t);
      const o = (0, v.canBotResponseBeRevokeByInvoker)(t);
      const l = e.sender + (n || o ? 1 : 0);
      const i = e.admin + (a && !o ? 1 : 0);
      return {
        sender: l,
        admin: i,
        canRevoke: e.canRevoke && (n || a || o) && i <= 1,
        revokeDurations: [...e.revokeDurations, (0, r.unixTime)() - t.t]
      };
    }, {
      sender: 0,
      admin: 0,
      canRevoke: true,
      revokeDurations: []
    });
  }(n);
  const [y, C] = function (e) {
    const [t, n] = (0, k.default)(b.NUX.SENDER_REVOKE_LEGAL_DISCLAIMER_NUX_NEW);
    const [a, o] = (0, k.default)(b.NUX.ADMIN_REVOKE_LEGAL_DISCLAIMER_NUX);
    let l;
    let i = false;
    if (e.canRevoke) {
      let u = e.admin > 0;
      if (!a && e.sender) {
        u = false;
      }
      [i, l] = u ? [a, o] : [t, n];
      if (!(e.admin !== 0 || e.revokeDurations.some(e => e >= r.HOUR_SECONDS))) {
        i = false;
      }
    }
    return [i, l];
  }(E);
  const S = () => {
    i.Cmd.sendDeleteMsgs(t, n, h, null, a);
    d.DrawerManager.existsDrawerRight(e => {
      if (e && o) {
        n.forEach(e => {
          if (o(e.id, true)) {
            d.DrawerManager.closeDrawerRight();
          }
        });
      }
    });
    if (!(l == null)) {
      l();
    }
    if (!(u == null)) {
      u();
    }
    m.end();
  };
  const T = () => {
    if (E.admin > 0) {
      M.UiRevokeActionHelper.revokeConfirmed();
    }
    if (n.length > 0) {
      i.Cmd.sendRevokeMsgs(t, n, {
        clearMedia: h,
        toastPosition: a
      });
    }
    if (!(u == null)) {
      u();
    }
    if (y && !t.isNewsletter) {
      m.push(j.RevokeNux);
    } else {
      m.end();
    }
  };
  const w = () => {
    if (E.admin === 0 && E.sender > 0) {
      M.UiRevokeActionHelper.senderRevoke();
    } else if (E.admin > 0 && E.sender === 0) {
      M.UiRevokeActionHelper.adminRevoke();
    } else {
      M.UiRevokeActionHelper.adminAndSenderRevoke();
    }
    if (E.admin > 0 && !t.isNewsletter) {
      m.push(j.RevokeConfirm);
    } else {
      T();
    }
  };
  const P = () => {
    if (!(C == null)) {
      C();
    }
    m.end();
  };
  if (!m.step) {
    return;
  }
  let I;
  switch (m.step) {
    case j.DeleteRevoke:
      I = t.isNewsletter ? A.default.createElement(c.default, {
        msgList: n,
        onRevoke: w,
        onCancel: m.end,
        fromChannelAlerts: f
      }) : A.default.createElement(B, {
        msgList: n,
        revokable: E,
        clearMedia: h,
        onDelete: S,
        onRevoke: w,
        onCancel: m.end,
        onToggleClearMedia: g
      });
      break;
    case j.RevokeConfirm:
      {
        const e = n.filter(e => (0, v.canAdminRevokeMsg)(e))[0];
        const t = (0, _.getSender)(e);
        if (t == null) {
          return;
        }
        const a = s.ContactCollection.assertGet(t);
        I = A.default.createElement(F, {
          onConfirm: T,
          onCancel: () => m.pop(),
          contact: a
        });
        break;
      }
    case j.RevokeNux:
      I = A.default.createElement(G, {
        revokable: E,
        onOk: P
      });
  }
  return A.default.createElement(p, {
    requestDismiss: () => {
      M.UiRevokeActionHelper.endSession();
    },
    flow: m
  }, I);
};
var r = require("../app/632157.js");
var o = a(require("../app/692629.js"));
var l = require("./468926.js");
var i = require("../app/780549.js");
var u = require("../app/103440.js");
var s = require("../app/177938.js");
var c = a(require("./10160.js"));
var d = require("../app/900316.js");
var f = require("../app/753233.js");
var p = require("../app/258105.js");
var m = a(require("../app/395767.js"));
var h = require("../app/163755.js");
var g = require("../app/81644.js");
var E = require("../app/118612.js");
var v = require("../app/939716.js");
var _ = require("../app/787742.js");
var y = require("../app/373070.js");
var C = require("../app/21645.js");
var b = require("../app/95589.js");
var M = require("./774401.js");
var S = require("../app/392632.js");
var T = require("../app/617425.js");
var w = require("../vendor/548360.js");
var A = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = I(t);
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
var P = a(require("../app/156720.js"));
var O = require("./839062.js");
var k = a(require("./157558.js"));
var D = a(require("../app/305988.js"));
function I(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (I = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const R = {
  display: "p357zi0d",
  fontSize: "f8jlpxt4",
  lineHeight: "a4ywakfo",
  marginEnd: "jnwc1y2a",
  marginTop: "iy2cu22y",
  paddingBottom: "przvwfww"
};
const N = {
  display: "l7jjieqr",
  flexGrow: "tvf2evcx",
  flexShrink: "oq44ahr5",
  flexBasis: "lb5m6g5c",
  marginEnd: "spjzgwxb",
  verticalAlign: "kbne4t5p"
};
const x = {
  flexGrow: "ggj6brxn",
  flexShrink: "m0h2a7mj",
  flexBasis: "lb5m6g5c"
};
const L = {
  transitionProperty: "cr6d9hz6",
  transitionDuration: "p4t1lx4y",
  transitionTimingFunction: "pu4k07i0"
};
const j = require("../vendor/76672.js").Mirrored(["DeleteRevoke", "RevokeConfirm", "RevokeNux"]);
const B = (0, A.forwardRef)((e, t) => {
  const {
    msgList: n,
    revokable: a,
    clearMedia: r,
    onCancel: i,
    onRevoke: u,
    onDelete: c,
    onToggleClearMedia: d
  } = e;
  let f;
  if (n.some(e => (0, h.getAsMms)(e) && e.type !== y.MSG_TYPE.STICKER)) {
    f = A.default.createElement("div", {
      className: (0, P.default)(R),
      onClick: d,
      key: 0
    }, A.default.createElement("div", {
      className: (0, P.default)(N, L)
    }, A.default.createElement(l.CheckBox, {
      onChange: d,
      checked: r
    })), A.default.createElement("div", {
      className: (0, P.default)(x, L)
    }, w.fbt._("Delete file from your phone", null, {
      hk: "2UUqlL"
    })));
  }
  let p;
  let m = null;
  let b = null;
  if (a.canRevoke && a.admin > 0) {
    const e = n.filter(e => (0, v.canAdminRevokeMsg)(e))[0];
    const t = (0, _.getSender)(e);
    if (t == null) {
      return;
    }
    const a = s.ContactCollection.assertGet(t);
    p = w.fbt._("Delete message from {name}?", [w.fbt._param("name", A.default.createElement(C.ContactName, {
      contact: a
    }))], {
      hk: "y3z6S"
    });
  } else {
    p = n.length === 1 && (0, _.getIsEdited)(n[0]) && (0, _.getIsFailed)(n[0]) ? w.fbt._("Your edited message was not sent. You can always delete the message.", null, {
      hk: "s9M5N"
    }) : w.fbt._({
      "*": "Delete messages?",
      _1: "Delete message?"
    }, [w.fbt._plural(n.length)], {
      hk: "1LYizX"
    });
  }
  const M = A.default.createElement(o.default, {
    testid: "popup-controls-delete",
    type: a.canRevoke ? "secondary" : "primary",
    onClick: c,
    key: 2
  }, w.fbt._("Delete for me", null, {
    hk: "3RtLsV"
  }));
  const S = A.default.createElement(o.default, {
    type: "secondary",
    onClick: i,
    key: 0
  }, w.fbt._("Cancel", null, {
    hk: "H0gNq"
  }));
  if (a.canRevoke) {
    m = A.default.createElement(o.default, {
      testid: "popup-controls-revoke",
      type: "secondary",
      onClick: u,
      key: 1
    }, w.fbt._("Delete for everyone", null, {
      hk: "2McSeU"
    }));
  }
  b = m ? A.default.createElement(T.ButtonGroup, {
    direction: "vertical",
    align: "end"
  }, m, M, S) : A.default.createElement(T.ButtonGroup, {
    direction: "horizontal"
  }, S, M);
  return A.default.createElement(g.HotKeys, {
    ref: t,
    handlers: {
      escape: i
    }
  }, A.default.createElement(E.Modal, {
    actions: b
  }, p, f));
});
B.displayName = "DeleteRevokeMsgPopup";
const F = (0, A.forwardRef)((e, t) => {
  let {
    onConfirm: n,
    onCancel: a,
    contact: r
  } = e;
  return A.default.createElement(u.ConfirmPopup, {
    ref: t,
    okText: w.fbt._("Delete for everyone", null, {
      hk: "2McSeU"
    }),
    onOK: n,
    cancelText: w.fbt._("Cancel", null, {
      hk: "H0gNq"
    }),
    onCancel: a
  }, w.fbt._("As an admin, you are deleting {name}'s message for everyone in this chat. They will see that you deleted the message.", [w.fbt._param("name", A.default.createElement(C.ContactName, {
    contact: r
  }))], {
    hk: "2S00vI"
  }));
});
F.displayName = "RevokeConfirmPopup";
const G = (0, A.forwardRef)((e, t) => {
  let {
    revokable: n,
    onOk: a
  } = e;
  const r = [A.default.createElement(o.default, {
    type: "secondary",
    onClick: U,
    key: 1
  }, w.fbt._("Learn more", null, {
    hk: "1rcCLt"
  })), A.default.createElement(o.default, {
    type: "primary",
    onClick: a,
    key: 0
  }, (0, m.default)("OK"))];
  let l;
  if (n.sender === 1 && n.admin === 0) {
    l = w.fbt._("This message will be deleted for everyone in this chat on the latest version of WhatsApp.", null, {
      hk: "1ZHL3y"
    });
  } else if (n.sender > 1 && n.admin === 0) {
    l = w.fbt._("Messages you selected will be deleted for everyone on the latest version of WhatsApp in this chat.", null, {
      hk: "1kFtBh"
    });
  } else if (n.sender === 0 && n.admin === 1) {
    l = w.fbt._("This message will be deleted for everyone in this chat on the latest version of WhatsApp.", null, {
      hk: "1VfzfV"
    });
  } else if (n.sender > 0 && n.admin === 1) {
    l = w.fbt._("Messages you selected will be deleted for everyone on the latest version of WhatsApp in this chat.", null, {
      hk: "3bWKI0"
    });
  }
  return A.default.createElement(S.UIE, {
    displayName: "MsgRevokeNuxModal",
    escapable: false
  }, A.default.createElement(g.HotKeys, {
    ref: t,
    handlers: {
      enter: a
    }
  }, A.default.createElement(E.Modal, {
    actions: r
  }, A.default.createElement("div", {
    className: (0, P.default)(x, L)
  }, l))));
});
function U() {
  (0, f.openExternalLink)((0, p.getRevokeFaqUrl)());
}
G.displayName = "RevokeNuxPopup";
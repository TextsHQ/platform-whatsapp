var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const [n, a] = (0, R.useState)(B.Loading);
  const [L, j] = (0, R.useState)(undefined);
  const [F, G] = (0, R.useState)(undefined);
  const [U, W] = (0, R.useState)(undefined);
  const [H, V] = (0, R.useState)(undefined);
  const [q, Y, z, K, Q, X, Z, J] = (0, N.useMsgValues)(e.msg.id, [P.getId, P.getTo, P.getInviteCode, P.getInviteCodeExp, P.getInviteGrp, P.getIsGroupsV4InviteExpired, P.getFrom, P.getIsSentByMe]);
  const $ = (0, v.getChat)(e.msg.unsafe());
  (0, R.useEffect)(() => {
    if ((0, y.shouldSendInviteRequest)()) {
      (0, S.queryGroupInviteMessageProfilePicURL)((0, D.createWid)(Q), z, K.toString(), Z).then(e => {
        V(e);
      }).catch((0, l.filteredCatch)(i.ServerStatusCodeError, e => {
        if (e.status !== 404) {
          __LOG__(3)`group_invite_modal: fetch group profile pic with error ${e.status}`;
        }
      }));
      if (J) {
        const e = u.ChatCollection.assertGet((0, D.createWid)(Q));
        if (e.groupMetadata) {
          C.default.find(e.id).finally(() => {
            G(e.groupMetadata);
            W(e.formattedTitle || e.name);
            a(B.Success);
          });
        }
      } else {
        (0, T.queryGroupInviteV4Info)(z, K.toString(), Q, Z).then(e => {
          const {
            status: t,
            phashMatch: n
          } = e;
          const l = (0, o.default)(e, x);
          if (t != null && t >= 400) {
            a(B.Error);
            j((0, y.getGroupInviteAcceptErrorStr)(new i.ServerStatusCodeError(t)));
          } else if (e.id || n === true) {
            const t = n === true ? C.default.assertGet(Q) : new b.default((0, r.default)({}, l));
            G(t);
            W(e.subject);
            a(B.Success);
          } else {
            a(B.Error);
            j((0, y.getGroupInviteAcceptErrorStr)(null));
          }
        }).catch((0, l.filteredCatch)(w.Unmount, () => {}));
      }
    }
  }, []);
  const ee = e => {
    let t = e;
    if (e) {
      t = e;
    } else if (F) {
      t = F.id;
    }
    if (t) {
      s.Cmd.openChatFromUnread(u.ChatCollection.assertGet(t));
    }
    A.ModalManager.close();
  };
  const te = () => {
    const e = u.ChatCollection.assertGet((0, D.createWid)(Q)).groupMetadata;
    A.ModalManager.open(R.default.createElement(d.ConfirmPopup, {
      onOK: () => {
        A.ModalManager.close();
        if (!(e == null)) {
          e.revokeGroupsV4AddInvite([Y]).then(e => {
            k.ToastManager.open(R.default.createElement(O.Toast, {
              msg: e != null && e >= 400 ? (0, y.getGroupInviteRevokeErrorStr)(e) : I.fbt._("Invite reset", null, {
                hk: "MgErr"
              })
            }));
          });
        }
      },
      okText: I.fbt._("Reset link", null, {
        hk: "2Zb3R4"
      }),
      onCancel: () => A.ModalManager.close(),
      cancelText: I.fbt._("Cancel", null, {
        hk: "H0gNq"
      })
    }, R.default.createElement(m.EmojiText, {
      text: I.fbt._("Reset invite for {participant}? If you reset the invite, {participant} won't be able to use it to join this group.", [I.fbt._param("participant", (0, E.getFormattedName)($.contact))], {
        hk: "y3tyS"
      })
    })));
  };
  const ne = () => {
    a(B.Loading);
    (0, T.joinGroupViaInviteV4)(z, K.toString(), Q, Z).then(e => {
      if (e.status === 200) {
        return (0, g.findChat)((0, D.createWid)(Q), "newGroupsV4InviteModal");
      }
      throw e.status;
    }).then(e => {
      s.Cmd.openChatFromUnread(e).then(t => {
        if (t) {
          a(B.Success);
          c.ComposeBoxActions.focus(e);
        }
      });
      A.ModalManager.close();
    }).catch((0, l.filteredCatch)(w.Unmount, () => {})).catch(e => {
      a(B.Error);
      j((0, y.getGroupInviteAcceptErrorStr)(new i.ServerStatusCodeError(e), F == null ? undefined : F.groupType));
    });
  };
  const ae = () => {
    A.ModalManager.close();
  };
  const re = I.fbt._("Cancel", null, {
    hk: "2oWWgu"
  });
  if (!F) {
    let e;
    e = n === B.Loading ? R.default.createElement(h.Loading, null) : L;
    return R.default.createElement(d.ConfirmPopup, {
      onCancel: ae
    }, e);
  }
  const {
    groupType: oe,
    id: le
  } = F;
  const ie = (0, y.getGroupInviteSubtitle)({
    groupMetadata: F
  });
  const ue = oe === M.GroupType.LINKED_ANNOUNCEMENT_GROUP;
  let se;
  if (!(J || ue)) {
    se = F.participants.filter(e => {
      const t = f.ContactCollection.get(e.id);
      return t != null && (0, p.getIsMyContact)(t);
    });
  }
  const ce = F.hasJoined();
  let de;
  if (J) {
    de = te;
  } else if (ce) {
    de = ee;
  } else if (!X) {
    de = ne;
  }
  const fe = X ? "" : (0, y.getGroupInviteActionText)({
    inGroup: ce,
    groupType: oe,
    isSentByMe: J
  });
  const pe = F.displayedDesc;
  return R.default.createElement(_.default, {
    image: {
      src: H || "",
      groupId: le
    },
    title: U,
    subtitle: ie,
    contacts: se,
    description: pe,
    actionText: fe,
    onAction: de,
    onCancel: ae,
    cancelText: re,
    finePrint: {
      text: L != null ? L : (0, y.getFinePrint)({
        groupType: oe
      }),
      isError: L != null
    },
    participantsCount: (t = F.size) !== null && t !== undefined ? t : F.participants.length,
    groupType: F.groupType,
    loading: n === B.Loading,
    source: e.source
  });
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/122583.js");
var i = require("../app/984330.js");
var u = require("../app/351053.js");
var s = require("../app/780549.js");
var c = require("../app/877171.js");
var d = require("../app/103440.js");
var f = require("../app/177938.js");
var p = require("../app/660666.js");
var m = require("../app/305521.js");
var h = require("./811720.js");
var g = require("../app/581354.js");
var E = require("../app/714574.js");
var v = require("../app/163755.js");
var _ = a(require("./223965.js"));
var y = require("./148999.js");
var C = a(require("../app/667845.js"));
var b = a(require("../app/572147.js"));
var M = require("../app/862159.js");
var S = require("./95019.js");
var T = require("../app/878253.js");
var w = j(require("../app/288057.js"));
var A = require("../app/114850.js");
var P = require("../app/787742.js");
var O = require("../app/625786.js");
var k = require("../app/390737.js");
var D = require("../app/669050.js");
var I = require("../vendor/548360.js");
var R = j(require("../vendor/667294.js"));
var N = require("./871210.js");
const x = ["status", "phashMatch"];
function L(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (L = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function j(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = L(t);
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
}
const B = require("../vendor/76672.js").Mirrored(["Loading", "Success", "Error"]);
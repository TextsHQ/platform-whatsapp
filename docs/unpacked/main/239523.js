var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendDeleteMsgs = function (e, t, n) {
  const a = (0, b.unproxy)(e);
  if (a.promises.sendDeleteMsgs) {
    return a.promises.sendDeleteMsgs;
  }
  a.promises.sendDeleteMsgs = (0, c.sendDeleteMsgs)(t, n, a.id).then(() => {
    t.forEach(e => {
      e.delete();
    });
    return t.length;
  }).catch((0, o.filteredCatch)(s.ServerStatusCodeError, () => {
    let e = 0;
    t.forEach(t => {
      if (t.ack === i.ACK.FAILED || t.isExpired()) {
        t.delete();
        e++;
      }
    });
    return e;
  })).finally(() => {
    a.promises.sendDeleteMsgs = null;
  });
  return a.promises.sendDeleteMsgs;
};
exports.sendDismissChangeNumber = function e(t) {
  const n = (0, b.unproxy)(t);
  if (n.promises.sendDismissChangeNumber) {
    return n.promises.sendDismissChangeNumber;
  }
  const a = Promise.resolve({
    status: 200
  });
  n.promises.sendDismissChangeNumber = a;
  const r = new u.ActionType(T.fbt._("Dismissing change number notification.", null, {
    hk: "XSlwz"
  }));
  const o = a.then(e => e.status === 200 ? new u.ActionType(T.fbt._("Change number notification dismissed.", null, {
    hk: "1QpySR"
  })) : e.status >= 400 ? new u.ActionType(T.fbt._("Couldn't dismiss change number notification.", null, {
    hk: "4BWKLI"
  })) : undefined).catch(() => {
    __LOG__(3)`models:chat:sendDismissChangeNumber dropped`;
    return new u.ActionType(T.fbt._("Couldn't dismiss change number notification.", null, {
      hk: "4BWKLI"
    }), {
      actionText: T.fbt._("Try again.", null, {
        hk: "262nZi"
      }),
      actionHandler: () => e(n)
    });
  });
  M.ToastManager.open(w.default.createElement(u.ActionToast, {
    initialAction: r,
    pendingAction: o
  }));
  return a.then(e => {
    if (e.status === 200) {
      return (0, p.updateChatTable)(n.id, {
        changeNumberNewJid: undefined,
        changeNumberOldJid: undefined
      }).then(() => {
        n.changeNumberOldJid = n.changeNumberNewJid = undefined;
      });
    }
  }).finally(() => {
    n.promises.sendDismissChangeNumber = null;
  });
};
exports.sendGroupInviteMessage = function () {
  return A.apply(this, arguments);
};
exports.sendRevokeMsgs = function (e, t, n) {
  const a = (0, b.unproxy)(e);
  if (a.promises.sendRevokeMsgs) {
    return a.promises.sendRevokeMsgs;
  }
  return a.promises.sendRevokeMsgs = Promise.all(t.map(e => (0, _.sendRevoke)(e, (0, g.canSenderRevokeMsg)(e) || (0, g.canBotResponseBeRevokeByInvoker)(e) ? f.Revoke.Sender : f.Revoke.Admin, n))).finally(() => {
    a.promises.sendRevokeMsgs = null;
  });
};
exports.sendStarMsgs = function (e, t, n) {
  const a = (0, b.unproxy)(e);
  if (a.promises.sendStarMsgs) {
    return a.promises.sendStarMsgs;
  }
  return a.promises.sendStarMsgs = (0, d.sendStarMsgs)(a.id, t, n).then(() => {
    t.forEach(e => {
      e.set("star", n);
    });
    if (n) {
      (0, C.addStarredMsgs)(t);
      if ((0, h.isFavoriteStickersEnabled)()) {
        const e = t.filter(e => e.type === v.MSG_TYPE.STICKER);
        (0, m.addStickerMsgsToFavorites)(e);
      }
    } else {
      (0, C.removeStarredMsgs)(t);
    }
  }).finally(() => {
    a.promises.sendStarMsgs = null;
  });
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/122583.js");
var l = require("../app/632157.js");
var i = require("../app/402994.js");
var u = require("../app/328620.js");
var s = require("../app/984330.js");
var c = require("./708668.js");
var d = require("../app/502746.js");
var f = require("../app/780549.js");
var p = require("../app/840089.js");
var m = require("./225446.js");
var h = require("../app/97858.js");
var g = require("../app/939716.js");
var E = a(require("../app/565754.js"));
var v = require("../app/373070.js");
var _ = require("../app/132255.js");
var y = require("../app/918602.js");
var C = require("../app/802703.js");
var b = require("../app/163139.js");
var M = require("../app/390737.js");
var S = require("../app/459857.js");
var T = require("../vendor/548360.js");
var w = a(require("../vendor/667294.js"));
function A() {
  return (A = (0, r.default)(function* (e, t, n, a, r, o, u) {
    const s = (0, b.unproxy)(e);
    const c = (0, S.getMaybeMeUser)();
    const d = {
      ack: i.ACK.CLOCK,
      from: c,
      id: new E.default({
        from: c,
        to: s.id,
        id: yield E.default.newId(),
        participant: undefined,
        selfDir: "out"
      }),
      local: true,
      self: "out",
      t: (0, l.unixTime)(),
      to: s.id,
      type: "groups_v4_invite",
      isNewMsg: true,
      inviteGrpJpegThum: u,
      inviteCode: a,
      inviteCodeExp: r,
      inviteGrp: t,
      inviteGrpName: n,
      comment: o
    };
    return (0, y.addAndSendMsgToChat)(s, d)[1];
  })).apply(this, arguments);
}
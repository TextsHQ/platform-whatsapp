var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runBulkKeepInChatUX = k;
exports.runBulkUndoKeepInChatUX = N;
exports.runKeepInChatUX = function (e, t) {
  return k([e], t);
};
exports.runUndoKeepInChatUX = function (e, t) {
  return N([e], t);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/477689.js");
var l = require("../app/780549.js");
var i = require("./469151.js");
var u = require("../app/163755.js");
var s = require("./170235.js");
var c = require("./42808.js");
var d = require("./933615.js");
var f = require("./900755.js");
var p = require("./740789.js");
var m = require("./316789.js");
var h = require("./353688.js");
var g = require("./571156.js");
var E = require("./978752.js");
var v = require("../app/114850.js");
var _ = require("../app/787742.js");
var y = require("../app/435711.js");
var C = a(require("../app/99398.js"));
var b = require("../app/533494.js");
var M = require("./483618.js");
var S = require("./280511.js");
var T = a(require("../vendor/667294.js"));
const w = require("../vendor/76672.js")({
  EXPIRED: "msg_is_expired",
  CANCELLED: "user_cancelled_operation",
  EMPTY: "no_applicable_messages",
  EXITED_SENDER: "exited_sender",
  EXITED_ME_USER: "exited_me_user",
  SENDER_SUPERPOWER: "sender_superpower"
});
class A extends (0, o.customError)("KeepFailedError") {
  constructor(e) {
    super(e);
    this.reason = e;
  }
}
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, r.default)(function* (e, t) {
    const n = e.find(e => (0, u.getChat)(e).isGroup && !(0, y.iAmGroupParticipant)(e));
    if (n != null) {
      v.ModalManager.open(T.default.createElement(p.WarningKICMeUserExitedModal, {
        action: "keep",
        message: n
      }));
      return Promise.reject(new A(w.EXITED_ME_USER));
    }
    const a = yield L(e);
    if (a != null) {
      v.ModalManager.open(T.default.createElement(p.WarningKICSenderExitedModal, {
        action: "keep",
        message: a
      }));
      return Promise.reject(new A(w.EXITED_SENDER));
    }
    const r = e.find(e => e.isExpired());
    if (r) {
      v.ModalManager.open(T.default.createElement(d.WarningKeepExpiredModal, {
        expiredMessage: r
      }));
      return Promise.reject(new A(w.EXPIRED));
    }
    const o = e.map(e => e.keepIsLockedForMeSenderSuperpower());
    const l = yield Promise.all(o);
    if (l.some(e => e)) {
      const t = l.findIndex(e => e);
      v.ModalManager.open(T.default.createElement(c.WarningCannotKeepSenderSuperpower, {
        message: e[t]
      }));
      return Promise.reject(new A(w.SENDER_SUPERPOWER));
    }
    yield Promise.all(e.map(e => (0, s.keepMessage)(e, t)));
  })).apply(this, arguments);
}
function k() {
  return D.apply(this, arguments);
}
function D() {
  return (D = (0, r.default)(function* (e, t) {
    const n = (0, u.getChat)(e[0]);
    if ((0, E.shouldShowKicNux)(n)) {
      yield (0, E.openKicNux)(n, S.TRIGGER_TYPE.KEEP_MESSAGE_FIRST_TIME);
    }
    if (!C.default.online) {
      B(e[0], b.KeepType.KEEP_FOR_ALL);
      return v.ModalManager.open(T.default.createElement(f.WarningKeepOfflineModal, null));
    }
    const a = e.filter(e => !(0, _.getIsKept)(e) && e.canShowKeepOption());
    if (!a.length) {
      throw new A(w.EMPTY);
    }
    yield P(a, t);
  })).apply(this, arguments);
}
function I() {
  return R.apply(this, arguments);
}
function R() {
  return (R = (0, r.default)(function* (e, t, n) {
    yield Promise.all(e.map(e => (0, s.undoKeepMessage)(e, t, n)));
  })).apply(this, arguments);
}
function N() {
  return x.apply(this, arguments);
}
function x() {
  return (x = (0, r.default)(function* (e, t) {
    const n = (0, u.getChat)(e[0]);
    if ((0, E.shouldShowKicNux)(n)) {
      yield (0, E.openKicNux)(n, S.TRIGGER_TYPE.KEEP_MESSAGE_FIRST_TIME);
    }
    if (!C.default.online) {
      B(e[0], b.KeepType.UNDO_KEEP_FOR_ALL);
      return v.ModalManager.open(T.default.createElement(f.WarningKeepOfflineModal, null));
    }
    const a = e.find(e => e.isExpired());
    const r = e.some(e => (0, _.getIsSentByMe)(e));
    const o = e.some(e => e.isPastUnkeepExpirationLimit());
    const i = e.find(e => (0, u.getChat)(e).isGroup && !(0, y.iAmGroupParticipant)(e));
    const s = yield L(e);
    return new Promise((n, c) => {
      const d = () => {
        n(I(e, {
          deleteExpired: true
        }, t));
      };
      const f = () => {
        const t = e[0];
        if (!t) {
          __LOG__(4, undefined, new Error(), true)`Attempting to DFM an empty array of messages`;
          return void SEND_LOGS("unkeep-DFM-empty-array");
        }
        if (!e.every(e => (0, u.getChat)(e) === (0, u.getChat)(t))) {
          __LOG__(4, undefined, new Error(), true)`Attempting to DFM an array of messages with mismatched chats`;
          return void SEND_LOGS("unkeep-DFM-chat-mismatch");
        }
        l.Cmd.sendDeleteMsgs((0, u.getChat)(t), e, false, null, null);
      };
      if (i != null) {
        v.ModalManager.open(T.default.createElement(p.WarningKICMeUserExitedModal, {
          action: "unkeep",
          onClose: () => c(new A(w.EXITED_ME_USER)),
          message: i
        }));
      } else if (s != null) {
        v.ModalManager.open(T.default.createElement(p.WarningKICSenderExitedModal, {
          action: "unkeep",
          onClose: () => c(new A(w.EXITED_SENDER)),
          message: s
        }));
      } else if (a) {
        if (o) {
          v.ModalManager.open(T.default.createElement(h.WarningUnkeepLimitExpiredModal, {
            onDeleteForMe: f,
            expiredMessage: a
          }));
        } else {
          v.ModalManager.open(T.default.createElement(m.WarningUnkeepExpiredModal, {
            onConfirm: d,
            onCancel: () => c(new A(w.CANCELLED)),
            expiredMessage: a
          }));
        }
      } else {
        if (!r) {
          return d();
        }
        v.ModalManager.open(T.default.createElement(g.WarningUnkeepOwnMsgModal, {
          onConfirm: d,
          onCancel: () => c(new A(w.CANCELLED))
        }));
      }
    });
  })).apply(this, arguments);
}
function L() {
  return j.apply(this, arguments);
}
function j() {
  return (j = (0, r.default)(function* (e) {
    return (yield Promise.all(e.map(function () {
      var e = (0, r.default)(function* (e) {
        if (!(0, u.getChat)(e).isGroup) {
          return null;
        }
        if (yield e.senderIsGroupParticipant()) {
          return null;
        } else {
          return e;
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()))).find(e => e != null);
  })).apply(this, arguments);
}
function B(e, t) {
  const n = (0, i.getBaseErrorLog)(e, t);
  n.set({
    kicErrorCode: M.KIC_ERROR_CODE_TYPE.OFFLINE
  });
  n.commit();
}
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMsgIfAuthorized = function () {
  return M.apply(this, arguments);
};
exports.processKeyBundle = A;
exports.updateLocalSession = function () {
  return C.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./298002.js");
var s = require("./558763.js");
var l = require("./827467.js");
var u = require("./907539.js");
var c = require("./158071.js");
var d = r(require("./565754.js"));
var p = require("./772358.js");
var f = require("./373070.js");
var _ = require("./851698.js");
var g = require("./604538.js");
var m = require("./138706.js");
var h = require("./459857.js");
var y = require("./622195.js");
var E = require("./555202.js");
var S = require("./816793.js");
var v = require("./669050.js");
var T = r(require("./556869.js"));
function M() {
  return (M = (0, a.default)(function* (e, t, n, r, i) {
    const a = (0, h.getMaybeMeLidUser)();
    const l = (0, h.getMeUser)();
    const m = n.isLid() && a != null ? a : l;
    const v = new d.default({
      id: e,
      remote: t,
      fromMe: true,
      participant: t.isUser() ? undefined : m
    });
    let T;
    let M;
    let A;
    const b = yield (0, o.getSentAddonMsgRecord)(v);
    if (b != null) {
      A = i == null ? undefined : i.sentAddonRowId;
      M = b.selfMsgRow.rowId;
      T = {
        type: g.SendMessageRecordType.Addon,
        data: b.msgData
      };
    } else {
      const e = yield (0, _.getMessageTable)().get(String(v));
      if (!e) {
        __LOG__(3)`getMsgIfAuthorized: can not find msg ${v.toString()}.`;
        return null;
      }
      A = i == null ? undefined : i.rowId;
      M = e.type === f.MSG_TYPE.REVOKED ? e.protocolMessageRowId : e.rowId;
      const t = new p.Msg((0, u.messageFromDbRow)(e));
      T = {
        type: g.SendMessageRecordType.Message,
        data: t
      };
    }
    if (M == null) {
      __LOG__(3)`getMsgIfAuthorized: msg missing rowId ${v.toString()}.`;
      return null;
    }
    const C = yield (0, s.isRetryEligible)(v, n, A, M);
    if (T.type === g.SendMessageRecordType.Message) {
      yield T.data.waitForPrep();
    }
    __LOG__(2, undefined, undefined, undefined, ["messaging"])`getMsgIfAuthorized: ${e}, ${String(n)} retry eligibility ${C}`;
    let P = E.RETRY_REJECT_REASON.OTHER;
    let O = false;
    if (T.data.type === f.MSG_TYPE.REVOKED) {
      O = true;
      T.data.type = "protocol";
      T.data.subtype = T.data.subtype === "admin" ? "admin_revoke" : "sender_revoke";
    }
    switch (C) {
      case s.RetryEligibilityResult.ELIGIBLE:
        return T;
      case s.RetryEligibilityResult.INELIGIBLE_ALREADY_DELIVERED:
        P = E.RETRY_REJECT_REASON.DOUBLE_CHECKMARK;
        break;
      case s.RetryEligibilityResult.INELIGIBLE_CHANGED_IDENTITY:
        P = E.RETRY_REJECT_REASON.IDENTITY_CHANGE;
        break;
      default:
        P = E.RETRY_REJECT_REASON.OTHER;
    }
    new c.E2eRetryRejectWamEvent({
      senderDeviceType: n.isCompanion() ? y.DEVICE_TYPE.COMPANION : y.DEVICE_TYPE.PRIMARY,
      messageType: (0, S.getWamMessageType)(T.data),
      msgRetryCount: r,
      retryRevoke: O,
      retryRejectReason: P
    }).commit();
    return null;
  })).apply(this, arguments);
}
function A() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, a.default)(function* (e, t, n, r, a) {
    if (n != null && e && e.key) {
      if (a) {
        if (r == null) {
          __LOG__(2)`processKeyBundle: missing session for retry`;
          yield m.Session.deleteRemoteInfo(t);
          return false;
        } else if (r !== n) {
          __LOG__(2)`processKeyBundle: delete session because reg does not match, saved: ${r}, received: ${n}`;
          yield m.Session.deleteRemoteInfo(t);
          return false;
        } else {
          __LOG__(2)`processKeyBundle: update local session with the retry key bundle`;
          yield m.Session.createSignalSession((0, i.default)({
            wid: t,
            regId: n
          }, e));
          return true;
        }
      } else {
        __LOG__(2)`processKeyBundle: update local session with the retry key bundle`;
        yield m.Session.createSignalSession((0, i.default)({
          wid: t,
          regId: n
        }, e));
        return true;
      }
    } else {
      __LOG__(2)`processKeyBundle: skip due to missing key bundle`;
      return false;
    }
  })).apply(this, arguments);
}
function C() {
  return (C = (0, a.default)(function* (e, t) {
    const {
      from: r,
      keyBundle: i,
      offline: a,
      originalMsgId: o,
      participant: s,
      regId: u,
      retryCount: c
    } = t;
    const d = s || r;
    __LOG__(2)`updateLocalSession: retryCount: ${c}, offline: ${a.toString()}, has keyBundle: ${(!!i).toString()}`;
    if (e.isGroup()) {
      const t = require("./351053.js").ChatCollection.get(e);
      if (t && d) {
        (0, l.markForgetSenderKey)(t.id, [d]);
      }
    }
    const p = yield m.Session.getRemoteRegId(d);
    if ((0, v.toUserWid)(d).equals((0, h.getMeUser)()) && p !== u) {
      throw (0, T.default)(`updateLocalSession: detect registration Id change remote: ${u}, local: ${String(p)} for peer device`);
    }
    if (!(yield A(i, d, u, p, a))) {
      if (p != null && p !== u) {
        __LOG__(2)`updateLocalSession: delete session because reg does not match, saved: ${p}, received: ${u}`;
        yield m.Session.deleteRemoteSession(d);
      }
    }
    if (c === 2) {
      return m.Session.saveSessionBaseKey(d, o);
    }
    if (c > 2) {
      if (yield m.Session.hasSameBaseKey(d, o)) {
        __LOG__(2)`updateLocalSession: delete local session due to same base key`;
        return m.Session.deleteRemoteSession(d);
      }
    }
  })).apply(this, arguments);
}
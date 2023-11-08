var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return N.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/957557.js"));
var o = r(require("./670983.js"));
var s = require("./724976.js");
var l = require("./402994.js");
var u = require("./782029.js");
var c = r(require("./47558.js"));
var d = require("./608916.js");
var p = require("./164831.js");
var f = require("./767777.js");
var _ = require("./163755.js");
var g = require("./614198.js");
var m = require("./862159.js");
var h = require("./66055.js");
var y = require("./787742.js");
var E = require("./700846.js");
var S = r(require("./565754.js"));
var v = require("./772358.js");
var T = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = R(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./430231.js"));
var M = require("./373070.js");
var A = require("./360841.js");
var b = require("./295217.js");
var C = require("./132255.js");
var P = require("./826390.js");
var O = r(require("./947514.js"));
var I = r(require("./124928.js"));
function R(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (R = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function N() {
  return (N = (0, i.default)(function* (e, t, r, u) {
    const c = [];
    const p = [];
    const b = [];
    const P = require("./351053.js").ChatCollection;
    const O = require("./61113.js").MsgCollection;
    let R = 0;
    yield Promise.all(t.map(function () {
      var t = (0, i.default)(function* (t) {
        if (!(t.id instanceof S.default)) {
          R++;
          t.id = new S.default({
            from: t.from,
            to: t.to,
            id: t.id,
            participant: t.participant,
            selfDir: t.self
          });
        }
        if ((0, s.isString)(e) && I.default.isBroadcast(e)) {
          delete t.broadcast;
        }
        if (t.type === "ptt" && !t.id.fromMe && t.ack < l.ACK.CLOCK) {
          t.ack = l.ACK.CLOCK;
        }
        if (t.hydratedButtons != null) {
          D(t);
        }
        if (t.dynamicReplyButtons != null) {
          w(t);
        }
        let n = O.get(t.id);
        if (t.type === M.MSG_TYPE.PROTOCOL && t.subtype !== "ephemeral_setting" && t.subtype !== "share_phone_number") {
          switch (t.subtype) {
            case "admin_revoke":
              {
                var i;
                const e = (0, h.getAlternateMsgKey)(t.protocolMessageKey);
                n = (i = O.get(t.protocolMessageKey)) !== null && i !== undefined ? i : e != null ? O.get(e) : null;
                if (n) {
                  if ((0, y.getIsGroupMsg)(n)) {
                    if (I.default.equals(n.id.remote, t.id.remote)) {
                      __LOG__(2)`getMsgUpdates: admin revoked ${n.id.toString()}`;
                      const e = new v.Msg(t);
                      const r = (0, o.default)((0, _.getChat)(n).groupMetadata, "getChat(m).groupMetadata");
                      const i = (0, o.default)((0, y.getSender)(e), "getSender(revokeMsg)");
                      const a = r.isLidAddressingMode === true ? (0, h.normalizeWidToLid)(i) : (0, h.normalizeWidToPn)(i);
                      const s = a != null ? r.participants.get(a) : null;
                      if (!(s && s.isAdmin || a == null)) {
                        r.participants.add({
                          id: a,
                          isAdmin: true
                        }, {
                          merge: true
                        });
                        if (!s) {
                          const t = {
                            actionType: m.GROUP_ACTIONS.ADD,
                            participants: [{
                              id: a,
                              isAdmin: true,
                              isSuperAdmin: false
                            }],
                            reason: null
                          };
                          const r = yield (0, g.genGroupNotificationMsg)({
                            author: undefined,
                            chatId: (0, _.getChat)(n).id,
                            ts: e.t
                          }, t);
                          (0, E.handleSingleMsg)(r.from, r);
                        }
                        (0, d.markGroupParticipantStale)({
                          group: (0, _.getChat)(n).id
                        });
                      }
                      (0, C.revoke)(n, {
                        msgKey: e.id,
                        subtype: e.subtype,
                        sender: i,
                        revokeTimestamp: e.t
                      });
                    } else {
                      __LOG__(2)`getMsgUpdates: ${n.id.toString()} has not been revoked`;
                      __LOG__(4, undefined, new Error())`getMsgUpdates: admin revoke came for the different group than the original message was in`;
                    }
                  } else {
                    __LOG__(2)`getMsgUpdates: ${n.id.toString()} has not been revoked`;
                    __LOG__(4, undefined, new Error())`getMsgUpdates: admin revoke was sent to a non-group chat`;
                  }
                }
                break;
              }
            case "sender_revoke":
              {
                var N;
                const r = (0, h.getAlternateMsgKey)(t.protocolMessageKey);
                n = (N = O.get(t.protocolMessageKey)) !== null && N !== undefined ? N : r != null ? O.get(r) : null;
                if (n) {
                  var k;
                  var G;
                  const r = new v.Msg(t);
                  const i = (k = n) === null || k === undefined ? undefined : k.botTargetSenderJid;
                  if (i != null && ((G = n.id.participant) === null || G === undefined ? undefined : G.isBot()) && I.default.equals(i, (0, y.getSender)(r))) {
                    (0, C.revoke)(n, {
                      msgKey: r.id,
                      subtype: r.subtype,
                      sender: (0, y.getSender)(r),
                      revokeTimestamp: r.t
                    });
                  } else if (I.default.equals(...(0, h.normalizeUserWidsToLidOrPn)((0, y.getSender)(n), (0, y.getSender)(r)))) {
                    __LOG__(2)`getMsgUpdates: sender revoked ${n.id.toString()}`;
                    if (I.default.isStatusV3(e) && n.msgChunk) {
                      n.msgChunk.remove(n);
                    }
                    (0, C.revoke)(n, {
                      msgKey: r.id,
                      subtype: r.subtype,
                      sender: (0, y.getSender)(r),
                      revokeTimestamp: r.t
                    });
                  } else {
                    __LOG__(3)`getMsgUpdates: sender revoke: sender mismatch: ${r.id.toString()} <> ${n.id.toString()}`;
                  }
                }
                break;
              }
            case "bot_request_welcome":
              break;
            default:
              __LOG__(2)`unknown protocolMessage ${t.id.toString()}`;
          }
        } else if (n && !(0, _.getAsRevoked)(n)) {
          if (t.ack < n.ack) {
            delete t.ack;
          }
          for (const e in t) {
            if (t.hasOwnProperty(e) && t[e] === undefined) {
              delete t[e];
            }
          }
          if (r.isHistory) {
            t.isNewMsg = false;
          }
          const e = n.t ? (0, a.default)(t, ["t", "id", "from", "to"]) : t;
          const i = n.applyUpdate(e).then(() => n);
          b.push(i);
          if (I.default.isBroadcast(n.id.remote)) {
            const t = T.getBroadcastFanoutKeys(n);
            if (t) {
              t.forEach(t => {
                const r = O.get(t);
                if (r) {
                  b.push(r.applyUpdate(e).then(() => n));
                }
              });
            }
          }
          if (r.isHistory !== true || !n.recvFresh && !u || n.search) {
            if (r.isHistory && n.search) {
              n.search = false;
              __LOG__(3)`model:Msg:handle:processMM load search as history ${String(n.id)}`;
              c.push({
                id: n.id
              });
            } else if (r.add === "search") {
              c.push({
                id: n.id
              });
            }
          } else {
            __LOG__(3)`model:Msg:handle:processMM:${n.recvFresh ? "dup:" : "overlap:"}${String(n.id)}`;
            p.push(n);
          }
        } else {
          if (t.subtype === "payment_action_request_declined" || t.subtype === "payment_transaction_request_cancelled") {
            b.push((0, A.cancelOrDeclinePaymentRequest)(t));
          } else if (t.type === M.MSG_TYPE.PAYMENT && t.subtype === "send") {
            b.push((0, A.fulfillPaymentRequest)(t));
          }
          const e = P.get(t.id.remote);
          if (r.add === "search") {
            t.search = true;
          }
          if ((0, y.getIsUnreadType)(t) && t.id.fromMe && t.ack === l.ACK.CLOCK) {
            t.isSendFailure = true;
          }
          if (t.errorCode === f.SendFailureErrorCode.EditWindowExpired) {
            t.isSendFailure = true;
          }
          if (!r.update) {
            c.push(t);
          }
          if (!r.isHistory && r.add !== "search" && e) {
            b.push(L(t, e));
          }
          if (t.ephemeralOutOfSync) {
            __LOG__(2)`ephemeralOutOfSync msgId=${t.id.toString()} chatId=${e == null ? undefined : e.id.toString()}`;
          }
        }
      });
      return function () {
        return t.apply(this, arguments);
      };
    }()));
    if (R > 0) {
      __LOG__(2)`getMsgUpdates: el.id is not a MsgKey: ${R} of ${t.length} messages`;
    }
    return {
      filteredRecs: c,
      reorderRecs: p,
      updates: b
    };
  })).apply(this, arguments);
}
function D(e) {
  e.buttons = new P.TemplateButtonCollection();
  e.buttons.add(e.hydratedButtons.map((e, t) => {
    var n;
    var r;
    const i = `${e.index != null ? e.index : t}`;
    if (e.quickReplyButton) {
      return new O.default({
        id: i,
        displayText: e.quickReplyButton.displayText,
        selectionId: e.quickReplyButton.id,
        subtype: "quick_reply"
      });
    } else if (e.callButton) {
      return new O.default({
        id: i,
        displayText: e.callButton.displayText,
        phoneNumber: e.callButton.phoneNumber,
        subtype: "call"
      });
    } else {
      return new O.default({
        id: i,
        displayText: (n = e.urlButton) === null || n === undefined ? undefined : n.displayText,
        url: (r = e.urlButton) === null || r === undefined ? undefined : r.url,
        subtype: "url"
      });
    }
  }));
}
function w(e) {
  e.replyButtons = new u.ButtonCollection();
  e.replyButtons.add(e.dynamicReplyButtons.map(e => {
    let {
      buttonId: t,
      buttonText: n
    } = e;
    return new c.default({
      id: t,
      displayText: n == null ? undefined : n.displayText
    });
  }));
}
function L() {
  return k.apply(this, arguments);
}
function k() {
  return (k = (0, i.default)(function* (e, t) {
    if (!e.isNewMsg || !e.recvFresh) {
      __LOG__(3, undefined, undefined, true)`processLiveMessage should not be called with history message id ${e.id.toString()}`;
      SEND_LOGS("bad-process-live-message-call");
      return Promise.resolve();
    }
    if (e.type === M.MSG_TYPE.GP2 && e.subtype === "delete") {
      t.isReadOnly = true;
      (0, b.invalidateChatPollMsgs)(t);
    }
    yield (0, p.syncEphemeralSetting)(e, t);
  })).apply(this, arguments);
}
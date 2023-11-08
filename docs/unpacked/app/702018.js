var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beginningOfMessageRange = function (e, t, n) {
  const r = n != null ? function (e) {
    const t = e.toString(16);
    return (t.length - 1).toString(16) + t;
  }(n) : "";
  return `${e.toString()}_${t}_${r}`;
};
exports.endOfMessageRange = function (e, t) {
  return `${e.toString()}_${t}_g`;
};
exports.extractC2STimestampFromMessageRangeIndex = function (e) {
  if (e) {
    const t = e.split("_")[2];
    if (t) {
      return (0, d.undoOrderPreservingHex)(t);
    } else {
      return null;
    }
  }
  return null;
};
exports.getKeyMsgsFromChatHistory = function (e, t) {
  var r;
  const {
    getAddOnProviderForFutureproofMsg: i
  } = require("./944749.js");
  self.performance.now();
  const a = (0, o.getABPropConfigValue)("web_init_chat_max_unread_message_count");
  let s;
  let l;
  let u;
  let d;
  let _ = e.unreadCount;
  let h = (r = e.unreadDividerOffset) !== null && r !== undefined ? r : 0;
  let y = 0;
  const E = [];
  let v = 0;
  const T = require("./774348.js").r$;
  return (0, m.getMessageTable)().between(["internalId"], `${e.id}_/`, `${e.id}_g`, {
    reverse: true
  }, n => {
    y++;
    if (n.type === g.MSG_TYPE.PROTOCOL) {
      return false;
    }
    const r = (0, c.messageFromDbRow)(n);
    const o = b(n);
    if (o) {
      return false;
    }
    if (S(n)) {
      const e = i(r);
      if (n.futureproofReparsed === true) {
        return false;
      }
      if (!(0, p.futureproofReparsingNonAddOnsEnabled)() || o || t) {
        if (e == null ? undefined : e.canRenderInUi(r)) {
          if (a !== 0 && v >= a) {
            if (!d) {
              d = n.id;
            }
            if (!u) {
              __LOG__(3)`[init-from-storage] getKeyMsgsFromChatHistory: Exceeded limit ${a} to find a non futureproof reaction message`;
              u = n;
            }
            return true;
          } else {
            if (!t) {
              E.push(n);
            }
            v++;
            return false;
          }
        }
      } else {
        E.push(n);
      }
    }
    if (!d) {
      d = n.id;
    }
    if (!u) {
      u = n;
    }
    if (!(l || o || n.botPluginReferenceIndex != null || [g.MSG_TYPE.E2E_NOTIFICATION, g.MSG_TYPE.PROTOCOL, g.MSG_TYPE.DEBUG].includes(n.type))) {
      l = n;
    }
    if (!t && (l != null || y > 10)) {
      return true;
    }
    if (_ === 0 && h > 0) {
      if (n.type !== g.MSG_TYPE.REVOKED) {
        return true;
      }
      h -= 1;
      if (h === 0) {
        s = n.id.toString();
        return true;
      }
    }
    return !(!(_ === 0 && h === 0 || a !== 0 && e.unreadCount >= a) || !l) || !!(_ > 0 && (0, f.getIsUnreadType)(n) && (_ -= 1, _ === 0 && (s = n.id.toString(), h === 0)));
  }).then(() => {
    if (E.length) {
      T(E);
    }
    return {
      anchor: s,
      previewMsg: l || u,
      lastReceivedKey: d
    };
  });
};
exports.getMessagesBefore = function (e, t) {
  return (0, m.getMessageTable)().between(["internalId"], `${e}_/`, `${e}_g`, {
    reverse: true
  }, t);
};
exports.isBizBotDisclosureMessage = function (e) {
  return e.type === g.MSG_TYPE.NOTIFICATION_TEMPLATE && (e.subtype === "biz_bot_1p_disclosure" || e.subtype === "biz_bot_3p_disclosure");
};
exports.isFutureproof = S;
exports.isInitialEncryptionMessage = function (e) {
  return e.type === g.MSG_TYPE.E2E_NOTIFICATION && e.subtype === "encrypt" || e.type === g.MSG_TYPE.NOTIFICATION_TEMPLATE && e.subtype === "biz_privacy_mode_init_fb" || e.type === g.MSG_TYPE.NOTIFICATION_TEMPLATE && e.subtype === "biz_me_account_type_is_hosted";
};
exports.isSecuritySensitiveMessage = function (e) {
  var t;
  const n = new Map([[g.MSG_TYPE.GP2, ["remove", "add", "ephemeral", "invite", "leave"]], [g.MSG_TYPE.E2E_NOTIFICATION, ["encrypt", "encrypt_now", "e2e_identity_unavailable", "identity", "device", "chat_psa"]], [g.MSG_TYPE.NOTIFICATION_TEMPLATE, ["change_number", "masked_thread_created", "cag_masked_thread_created", "verified_initial_unknown", "verified_initial_low", "verified_initial_high", "verified_transition_any_to_none", "verified_transition_any_to_high", "verified_transition_high_to_low", "verified_transition_high_to_unknown", "verified_transition_unknown_to_low", "verified_transition_low_to_unknown", "verified_transition_none_to_low", "verified_transition_none_to_unknown", "payment_transaction_status_update_failed", "payment_transaction_status_update_refunded", "payment_transaction_status_update_refund_failed", "payment_transaction_status_receiver_pending_setup", "payment_transaction_status_receiver_success_after_hiccup", "payment_transaction_request_cancelled", "payment_action_account_setup_reminder", "payment_action_send_payment_reminder", "payment_action_send_payment_invitation", "payment_action_request_declined", "payment_action_request_expired"]]]);
  return ((t = n.get(e.type)) === null || t === undefined ? undefined : t.includes(e.subtype)) || false;
};
exports.queryChatMessageHelper = function () {
  return y.apply(this, arguments);
};
exports.queryChatVisibleMessageHelper = function () {
  return E.apply(this, arguments);
};
exports.shouldCreateChatWithMsgs = function (e) {
  return e.some(e => e.type !== g.MSG_TYPE.NOTIFICATION_TEMPLATE);
};
exports.shouldRenderInUI = v;
var i = r(require("../vendor/506479.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./287461.js");
var s = require("./402994.js");
var l = require("./558763.js");
var u = require("./354458.js");
var c = require("./907539.js");
var d = require("./878685.js");
var p = require("./97858.js");
var f = require("./787742.js");
var _ = r(require("./565754.js"));
var g = require("./373070.js");
var m = require("./851698.js");
const h = ["limit"];
function y() {
  return (y = (0, a.default)(function* (e, t, n) {
    const r = (yield (0, m.getMessageTable)().between(["internalId"], e, t, n)).filter(e => v(e));
    yield T(r);
    return r;
  })).apply(this, arguments);
}
function E() {
  return (E = (0, a.default)(function* (e, t, r, a) {
    let s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    const {
      limit: l
    } = r;
    const u = (0, i.default)(r, h);
    const d = (0, o.getABPropConfigValue)("web_init_chat_max_unread_message_count");
    const {
      getAddOnProviderForFutureproofMsg: f
    } = require("./944749.js");
    const _ = [];
    let g = 0;
    const y = e => a != null && g === a || !!v(e, s) && (g++, g > d && __LOG__(3)`queryChatVisibleMessageHelper: visibleMsgsCount exceeds the threshold`, false);
    self.performance.now();
    const E = yield (0, m.getMessageTable)().between(["internalId"], e, t, u, y);
    const M = E.filter(e => {
      if (S(e)) {
        const t = (0, c.messageFromDbRow)(e);
        const n = f(t);
        if (e.futureproofReparsed !== true && ((0, p.futureproofReparsingNonAddOnsEnabled)() && !n || (n == null ? undefined : n.canRenderInUi(t)) && !s.includes(e.id.toString()))) {
          _.push(e);
        }
      }
      return !!v(e, s);
    });
    if (_.length) {
      (0, require("./774348.js").r$)(_);
    }
    yield T(M);
    return M;
  })).apply(this, arguments);
}
function S(e) {
  return e.type === g.MSG_TYPE.UNKNOWN;
}
function v(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const {
    getAddOnProviderForFutureproofMsg: r
  } = require("./944749.js");
  const i = (0, c.messageFromDbRow)(e);
  const a = b(e);
  const o = r(i);
  return !a && (!S(e) || e.futureproofReparsed !== true) && !(o && o.canRenderInUi(i) && !t.includes(e.id.toString())) && e.type !== g.MSG_TYPE.DEBUG && !(!(0, u.isBizBot1pEnabled)() && e.type === g.MSG_TYPE.NOTIFICATION_TEMPLATE && e.subtype === "biz_bot_1p_disclosure");
}
function T() {
  return M.apply(this, arguments);
}
function M() {
  return (M = (0, a.default)(function* (e) {
    const t = A(e);
    if (t.length === 0) {
      return;
    }
    const n = yield (0, l.getHighestMsgAcks)(t.map(e => _.default.from(e.id)));
    const r = [];
    t.forEach(e => {
      const {
        ack: t,
        id: i
      } = e;
      const a = n.get(i);
      if (a != null) {
        if (a > t) {
          r.push({
            id: i,
            ack: a
          });
          e.ack = a;
        }
        if (r.length > 0) {
          __LOG__(2, undefined, undefined, undefined, ["message-store"])`maybeUpdateMsgAck: storing ack updates ${JSON.stringify(r)}`;
          (0, m.getMessageTable)().bulkCreateOrMerge(r);
        }
      }
    });
  })).apply(this, arguments);
}
function A(e) {
  return e.filter(e => {
    if (!(0, f.getIsUnreadType)(e)) {
      return false;
    }
    if (e.type === g.MSG_TYPE.CIPHERTEXT || e.type === g.MSG_TYPE.UNKNOWN || e.ack <= s.ACK.CLOCK) {
      return false;
    }
    const t = _.default.fromString(e.id);
    if (!t.fromMe) {
      return false;
    }
    if (t.remote.isGroup() && (e.rowId != null && e.rowId < 1000000000 || e.count == null)) {
      __LOG__(2, undefined, undefined, undefined, ["message-store"])`getMsgMayNeedAckUpdate: skip update for history group message ${e.id}`;
      return false;
    }
    if ((0, f.getIsAckPlayable)(e)) {
      if (e.ack === s.ACK.PLAYED) {
        return false;
      }
    } else if (e.ack === s.ACK.READ) {
      return false;
    }
    return true;
  });
}
function b(e) {
  return [g.MSG_TYPE.REACTION, g.MSG_TYPE.REACTION_ENC, g.MSG_TYPE.KEEP_IN_CHAT, g.MSG_TYPE.POLL_UPDATE, g.MSG_TYPE.PIN_MESSAGE].includes(e.type);
}
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processDecryptedMessageProto = function () {
  return $.apply(this, arguments);
};
exports.processMsgs = z;
exports.processPlaceholderMsg = function (e, t, n) {
  return A.processPlaceholderMessage(e, t, n);
};
exports.processPollUpdateVoteMsg = X;
exports.processReactionMsg = Q;
exports.processRenderableMsg = q;
var i = r(require("../vendor/348926.js"));
var a = require("./255462.js");
var o = require("./317851.js");
var s = require("./664179.js");
var l = require("./34214.js");
var u = require("./303754.js");
var c = require("./577743.js");
var d = require("./502280.js");
var p = require("./780549.js");
var f = require("./174834.js");
var _ = require("./944749.js");
var g = require("./817690.js");
var m = require("./800321.js");
var h = require("./177205.js");
var y = require("./189865.js");
var E = require("./257845.js");
var S = require("./778650.js");
var v = require("./789375.js");
var T = require("./212369.js");
var M = require("./483460.js");
var A = H(require("./593139.js"));
var b = require("./390053.js");
var C = require("./97858.js");
var P = require("./267420.js");
var O = require("./373070.js");
var I = require("./158924.js");
var R = require("./591800.js");
var N = require("./525119.js");
var D = require("./612919.js");
var w = require("./533494.js");
var L = require("./755985.js");
var k = require("./98742.js");
var G = H(require("./138706.js"));
var U = require("./459857.js");
var x = require("./117429.js");
var B = require("./943037.js");
var F = require("./630230.js");
var j = r(require("./124928.js"));
var Y = require("./766187.js");
var K = require("./394629.js");
var W = r(require("./393193.js"));
function V(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (V = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function H(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = V(t);
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
}
function $() {
  return ($ = (0, i.default)(function* (e) {
    const {
      decrypted: t,
      info: n,
      paymentInfo: r,
      e2eInfo: i,
      bizInfo: s,
      hsmInfo: l,
      isPadded: c = true,
      msgMeta: d,
      reparsing: p = false,
      msgBotInfo: f
    } = e;
    const m = i.e2eType !== u.CiphertextType.Msmsg && c ? (0, a.unpadPkcs7)(new Uint8Array(t)) : new Uint8Array(t);
    const M = (0, K.decodeProtobuf)(w.MessageSpec, m);
    (0, B.verifyProtobufMessageObjectKeys)(M);
    const A = (0, P.getFrom)(n);
    const C = i.retryCount > 0 && (0, P.placeholderCheck)(n) || p ? E.MessageOverwriteOption.RETRY : E.MessageOverwriteOption.NO_OVERWRITE;
    if (p) {
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`Reparsing processDecryptedMessageProto: msgId::${n.externalId}, message decrypted:`;
      const t = yield (0, P.parseMessage)({
        info: n,
        ciphertextType: i.e2eType,
        msgProtobuf: M,
        paymentInfo: r,
        bizInfo: s,
        hsmInfo: l,
        hidePlaceholder: i.hideFail,
        processDecryptedProtoParams: e,
        msgBotInfo: f
      });
      if (t.renderableMsgs != null) {
        const e = t.renderableMsgs;
        const [i] = e;
        const a = (0, o.isUnifiedInfraEnabledForType)(i.type) || Boolean((0, _.getAddOnProviderForMsg)(i));
        const l = [O.MSG_TYPE.DOCUMENT, O.MSG_TYPE.POLL_CREATION, O.MSG_TYPE.PTV];
        if (!a && !l.includes(i.type)) {
          return {
            hasInactiveMsg: false
          };
        }
        (0, S.renderableMessagesValidation)({
          renderableMsgs: e,
          msgMeta: d,
          info: n,
          proto: M,
          bizInfo: s
        });
        const {
          tasks: u,
          hasInactiveMsg: c
        } = z({
          renderableMsgs: e,
          reparsing: p,
          bizInfo: s,
          msgMeta: d,
          paymentInfo: r,
          info: n,
          messageOverwriteOption: C
        });
        yield Promise.all(u);
        __LOG__(2, undefined, undefined, undefined, ["messaging"])`Reparsed processDecryptedMessageProto: msgId::${n.externalId}, message decrypted:`;
        return {
          hasInactiveMsg: c
        };
      }
      __LOG__(4, undefined, new Error())`parsed render able msgs not reparsed as expected`;
    }
    yield (0, y.preProcessMsg)(n, M);
    if (n.type === E.MESSAGE_TYPE.PEER_BROADCAST && i.retryCount > 0) {
      const e = yield (0, g.getMsgByMsgKey)((0, P.messageInfoToKey)(n));
      if ((e == null ? undefined : e.broadcastParticipants) != null) {
        n.bclParticipants = e.broadcastParticipants;
        if (e.broadcastEphSettings != null) {
          n.bclEphSettings = e.broadcastEphSettings;
        }
      }
    }
    const R = yield (0, P.parseMessage)({
      info: n,
      ciphertextType: i.e2eType,
      msgProtobuf: M,
      paymentInfo: r,
      bizInfo: s,
      hsmInfo: l,
      hidePlaceholder: i.hideFail,
      processDecryptedProtoParams: e,
      msgBotInfo: f
    });
    let N = null;
    if (R.history) {
      N = I.PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY;
    } else if (R.appStateSyncKeyShare) {
      N = I.PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_SHARE;
    } else if (R.appStateSyncKeyRequest) {
      N = I.PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_REQUEST;
    } else if (R.peerDataOperationRequestResponseMessage) {
      N = I.PARSED_PROTOCOL_MESSAGE_TYPE.PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE;
    } else if (R.peerDataOperationRequestMessage) {
      N = I.PARSED_PROTOCOL_MESSAGE_TYPE.PEER_DATA_OPERATION_REQUEST_MESSAGE;
    }
    if ((0, L.isWorker)() && N && W.default) {
      yield W.default.updateDeferredMessages([{
        id: n.externalId,
        type: N,
        plaintext: m,
        info: n,
        paymentInfo: r,
        bizInfo: s
      }]);
    } else if (R.history) {
      (0, Y.workerSafeSendAndReceive)("handleHistorySyncNotification", {
        historySyncMetaData: R.history,
        from: A,
        externalId: n.externalId
      });
    } else if (R.appStateSyncKeyShare) {
      yield (0, Y.workerSafeSendAndReceive)("handleAppStateSyncKeyShare", {
        keyShare: R.appStateSyncKeyShare,
        from: A
      });
    } else if (R.appStateSyncKeyRequest) {
      (0, Y.workerSafeSendAndReceive)("handleAppStateSyncKeyRequest", {
        keyRequest: R.appStateSyncKeyRequest,
        from: A
      });
    } else if (R.peerDataOperationRequestResponseMessage) {
      (0, Y.workerSafeSendAndReceive)("handlePeerDataOperationRequestResponse", {
        stanzaId: n.externalId,
        response: R.peerDataOperationRequestResponseMessage
      });
    } else if (R.peerDataOperationRequestMessage) {
      (0, Y.workerSafeSendAndReceive)("handlePeerDataOperationRequest", {
        stanzaId: n.externalId,
        request: R.peerDataOperationRequestMessage
      });
    } else {
      if (!R.securityNotificationEnabled) {
        let e = false;
        if (R.deviceSent == null) {
          e = true;
        } else if (R.deviceSent.phash) {
          e = yield (0, S.validateBclHash)(R.deviceSent.phash, R.deviceSent.info);
        } else if (R.deviceSent.destination) {
          e = yield (0, S.validateMsgDestination)(R.deviceSent.destination, n);
        }
        if (!e) {
          throw new h.DeviceSentMessageError((0, P.getDeviceType)(n.author), F.DSM_ERROR.INVALID_DSM);
        }
        const {
          renderableMsgs: t
        } = R;
        (0, S.renderableMessagesValidation)({
          renderableMsgs: t,
          msgMeta: d,
          info: n,
          proto: M,
          bizInfo: s
        });
        const {
          tasks: i,
          hasInactiveMsg: a
        } = z({
          renderableMsgs: t,
          reparsing: p,
          bizInfo: s,
          msgMeta: d,
          paymentInfo: r,
          info: n,
          messageOverwriteOption: C
        });
        if (R.storeMsg != null) {
          b.messageProcessorCache.addMessages([{
            msg: R.storeMsg
          }], false);
        }
        if (R.senderKey != null) {
          i.push(G.Session.createGroupSignalSession(n.author, R.senderKey.groupId, R.senderKey.key));
        }
        if (n.pushname) {
          (0, v.updatePushname)(n.author, n.pushname, n.offline != null);
        }
        yield Promise.all(i);
        (0, T.logReceivedMessagesInWAM)(R.renderableMsgs, n.offline != null, n.ts * 1000, n.clientReceivedTsMillis, n.msgProcessStartTsMillis);
        return {
          hasInactiveMsg: a
        };
      }
      if ((0, U.getMe)() == null) {
        __LOG__(4, undefined, new Error(), true)`Me wid is empty during security notification parsing`;
        SEND_LOGS("Me wid is empty during security notification parsing");
      } else if (A != null && A instanceof j.default) {
        if ((0, U.isMePrimaryNonLid)(A)) {
          (0, x.setGlobalSecurityNotifications)(R.securityNotificationEnabled.isEnabled);
        } else {
          __LOG__(4, undefined, new Error(), true)`Handle security notification payload wid error`;
          SEND_LOGS("Handle security notification payload wid error");
        }
      } else {
        __LOG__(4, undefined, new Error(), true)`Handle security notification empty wid error`;
        SEND_LOGS("Handle security notification empty wid error");
      }
    }
    return {
      hasInactiveMsg: false
    };
  })).apply(this, arguments);
}
function z(e) {
  var t;
  var n;
  var r;
  var i;
  var a;
  var s;
  var u;
  var p;
  let {
    renderableMsgs: _,
    reparsing: g,
    bizInfo: m,
    msgMeta: h,
    paymentInfo: E,
    info: S,
    messageOverwriteOption: v
  } = e;
  const T = [];
  let A = false;
  if (_[0] != null && (0, d.castToReactionMsgData)(_[0]) != null) {
    A = true;
    T.push(Q((0, d.assertReactionMsgData)(_[0]), S, g));
  } else if (((t = _[0]) === null || t === undefined ? undefined : t.type) === O.MSG_TYPE.COMMENT && (0, f.isCommentMessageReceiverEnabled)()) {
    T.push(ee(_[0], S, g));
  } else if (_[0] != null && (0, d.castToReactionEncMsgData)(_[0]) != null) {
    A = true;
    T.push(function () {
      return J.apply(this, arguments);
    }((0, d.assertReactionEncMsgData)(_[0]), S, g));
  } else if (_[0] != null && (0, c.castToPollVoteEncryptedMsgData)(_[0]) != null) {
    T.push(X((0, c.assertPollVoteEncryptedMsgData)(_[0]), S, g));
  } else if (((n = _[0]) === null || n === undefined ? undefined : n.type) === O.MSG_TYPE.KEEP_IN_CHAT) {
    A = true;
    T.push((0, y.processKeepInChatMsg)(_[0], S, g));
  } else if ((0, M.receiveTextEditEnabled)() && ((r = _[0]) === null || r === undefined ? undefined : r.type) === O.MSG_TYPE.PROTOCOL && ((i = _[0]) === null || i === undefined ? undefined : i.subtype) === "message_edit") {
    T.push((0, y.processEditProtocolMsg)(_[0], S, g));
  } else if (((a = _[0]) === null || a === undefined ? undefined : a.type) === O.MSG_TYPE.PROTOCOL && ((s = _[0]) === null || s === undefined ? undefined : s.subtype) === "ephemeral_sync_response") {
    T.push((0, y.processEphemeralSyncResponseMsg)(_[0], S, g));
  } else if ((0, R.isPinnedMessagesM1ReceiverEnabled)() && ((u = _[0]) === null || u === undefined ? undefined : u.type) === O.MSG_TYPE.PIN_MESSAGE && !(0, o.isUnifiedPinAddonInfraEnabled)()) {
    A = true;
    T.push((0, y.processPinMsg)(_[0], S, g));
  } else if ((0, o.isUnifiedInfraEnabledForType)((p = _[0]) === null || p === undefined ? undefined : p.type) && (0, l.castToAddonMsgData)(_[0]) != null) {
    A = true;
    T.push(ee(_[0], S, g));
  } else if (_.length > 0) {
    T.push(q(_, S, E, m, h, v, g));
  }
  return {
    tasks: T,
    hasInactiveMsg: A
  };
}
function q(e, t, n, r, i, a, o) {
  return A.processRenderableMessages(e, t, n, r, i, a, o);
}
function J() {
  return (J = (0, i.default)(function* (e, t, n) {
    if ((0, C.cagReactionsReceive)()) {
      const r = yield (0, k.getGroupMetadataTable)().get(t.chat.toString());
      if (Boolean(r == null ? undefined : r.incognito) && Boolean(r == null ? undefined : r.defaultSubgroup)) {
        const r = yield (0, y.convertEncReactionToReaction)(e);
        if (r != null) {
          return Q(r, t, n);
        }
      }
    }
  })).apply(this, arguments);
}
function Q(e, t, n) {
  return A.processReactionMessage(e, t, n);
}
function X() {
  return Z.apply(this, arguments);
}
function Z() {
  return (Z = (0, i.default)(function* (e, t, n) {
    const r = t.offline != null && !n;
    const i = (0, N.isMatFullyEnabled)() ? yield (0, D.processPollUpdateMatMessages)(e) : e;
    const a = (0, m.getMessageCache)().addMessages([{
      msg: i
    }], !r);
    if (n || p.Cmd.isMainStreamReadyMd && p.Cmd.isOfflineDeliveryEnd) {
      yield a;
    }
  })).apply(this, arguments);
}
function ee() {
  return te.apply(this, arguments);
}
function te() {
  return (te = (0, i.default)(function* (e, t, n) {
    const r = t.offline != null && !n;
    let i;
    const a = (0, l.castToAddonMsgData)(e);
    if ((0, N.isMatFullyEnabled)() && a != null) {
      const {
        parentKey: e
      } = (0, s.getAddonProcessor)(a.type);
      i = yield (0, D.processAddonMatMessages)(a, e);
    } else {
      i = e;
    }
    const o = (0, m.getMessageCache)().addMessages([{
      msg: i
    }], !r);
    if (n || p.Cmd.isMainStreamReadyMd && p.Cmd.isOfflineDeliveryEnd) {
      yield o;
    }
  })).apply(this, arguments);
}
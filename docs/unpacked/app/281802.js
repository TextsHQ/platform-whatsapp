var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleIncomingCallOffer = function (e, t) {
  o.default.processIncomingCall(e.call_id, e.peer_jid, {
    isVideo: e.isVideoCall,
    canHandleLocally: e.isVideoCall ? c.default.isVideoCallEnabled() : c.default.isVoiceCallEnabled(),
    offerTime: e.t,
    isSilenced: e.isSilenced,
    offerReceivedWhileOffline: e.is_offline
  });
  if (!function (e) {
    if (e) {
      return c.default.isVideoCallEnabled();
    } else {
      return c.default.isVoiceCallEnabled();
    }
  }(e.isVideoCall)) {
    return void u.default.Voip.handleIncomingSignalingMessage(e, t);
  }
  const n = e.call_id;
  o.default.pendingOffers[n] = new a.Resolvable();
  o.default.pendingOffers[n].resolve(Promise.all([(0, p.default)(e, t), u.default.Voip.getNumParticipantsFromCallOffer(t)]).then(r => {
    let [{
      result: i,
      retryCount: a
    }, l] = r;
    let d = true;
    if (l > 0) {
      __LOG__(4, undefined, new Error())`voip:incoming: Ignoring call offer since group calling is disabled`;
      d = false;
    }
    d = e.isVideoCall ? d && c.default.isVideoCallEnabled() : d && c.default.isVoiceCallEnabled();
    switch (i) {
      case s.E2EProcessResult.SUCCESS:
        !function (e, t, n) {
          const r = e.call_id;
          o.default.processIncomingCall(r, e.peer_jid, {
            isVideo: e.isVideoCall,
            canHandleLocally: n != null && n,
            offerTime: e.t
          });
          if (n === false) {
            o.default.cleanupPendingOffer(r);
          }
          u.default.Voip.handleIncomingSignalingMessage(e, t);
        }(e, t, d);
        break;
      case s.E2EProcessResult.RETRY:
        __LOG__(2)`voip:handleIncomingCallOffer reject call because of enc retry`;
        (function () {
          _.apply(this, arguments);
        })(e, a);
        break;
      case s.E2EProcessResult.PARSE_ERROR:
        __LOG__(2)`voip:handleIncomingCallOffer ending call because of enc parse error`;
        u.default.Voip.endCall(n);
        break;
      default:
        throw (0, f.default)("invalid e2e result type");
    }
  }).finally(() => {
    delete o.default.pendingOffers[n];
  }));
};
exports.handleIncomingEncRekey = function () {
  return Promise.reject((0, f.default)("incoming enc rekey is not expected in web"));
};
exports.handleIncomingSignalingMsg = function (e, t) {
  u.default.Voip.handleIncomingSignalingMessage(e, t);
};
var i = r(require("../vendor/348926.js"));
var a = require("./950376.js");
var o = r(require("./247665.js"));
var s = require("./257845.js");
var l = require("./326314.js");
var u = r(require("./961745.js"));
var c = r(require("./571256.js"));
var d = require("./549227.js");
var p = r(require("./471815.js"));
var f = r(require("./556869.js"));
function _() {
  return (_ = (0, i.default)(function* (e) {
    var t;
    var n;
    let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const i = yield l.waSignalStore.getRegistrationInfo();
    if (!i) {
      throw (0, f.default)("No registration info found");
    }
    const {
      registrationId: a
    } = i;
    const o = r + 1;
    u.default.Voip.rejectCallWithoutCallCtx(e.call_id, (t = e.peer_jid) === null || t === undefined ? undefined : t.toString({
      legacy: true
    }), (n = e.call_creator) === null || n === undefined ? undefined : n.toString({
      legacy: true
    }), d.ENC_RETRY_RECEIPT_ATTRS.SINGLE_PARTICIPANT, o, a);
    if (o === 5) {
      __LOG__(2)`voip:rejectCallWithReasonEnc max retry reached, uploading fieldstats`;
      u.default.Voip.processMissedIncomingCallMaxRetry(e);
    }
  })).apply(this, arguments);
}
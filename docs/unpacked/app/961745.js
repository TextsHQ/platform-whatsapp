var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./65889.js");
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = l(t);
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
}(require("./549227.js"));
var s = r(require("./556869.js"));
function l(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (l = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
var u = {
  Voip: {
    init: () => Promise.resolve(false),
    updateAudioVideoSwitch: () => {},
    cleanup: () => {},
    refresh: () => {},
    callStart: () => {},
    groupCallStart: () => {},
    sendGroupCallInvite: () => {},
    endCall: () => Promise.resolve(),
    callEndByHandledRemotely: () => {},
    acceptCall: () => {},
    rejectCall: () => {},
    rejectCallWithoutCallCtx: () => {},
    resendEncRekeyRetry: () => {},
    processMissedIncomingCallMaxRetry: () => {},
    mute: () => {},
    videoTurnCameraOn: () => {},
    videoTurnCameraOff: () => {},
    videoStreamPause: () => {},
    videoStreamResume: () => {},
    videoRequestUpgrade: () => {},
    videoAcceptUpgrade: () => {},
    videoRejectUpgrade: () => {},
    videoCancelUpgrade: () => {},
    updateNetworkMedium: () => {},
    handleIncomingSignalingMessage: (e, t) => (0, i.default)(function* () {
      const n = o.TYPE_NAME[e.type];
      __LOG__(2)`voip:handleIncomingSignalingMsg: type: "${n}" msg: `;
      const [r, i] = yield Promise.all([(0, a.requireCallCollection)(), (0, a.requireVoipCommonDisabled)()]);
      const s = r.get(e.call_id);
      if (!(s == null ? undefined : s.canHandleLocally)) {
        i.handleIncomingSignalingMessage(e, t);
      }
    })(),
    isInitialized: () => false,
    cleanupVideoBuffer: () => {},
    notifyDeviceIdentityChangedOrDeleted: () => {},
    getNumParticipantsFromCallOffer: () => Promise.reject((0, s.default)("web calling not inialized bar"))
  },
  checkVoipCapability: function () {
    return Promise.resolve(false);
  }
};
exports.default = u;
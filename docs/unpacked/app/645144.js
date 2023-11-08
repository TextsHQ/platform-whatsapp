var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  let {
    messageProtobuf: r,
    baseMessage: c,
    msgContext: d
  } = e;
  const {
    protocolMessage: p
  } = r;
  if (p == null || d !== "relay" || p.type !== u.Message$ProtocolMessage$Type.EPHEMERAL_SYNC_RESPONSE) {
    return;
  }
  const {
    ephemeralExpiration: f,
    ephemeralSettingTimestamp: _,
    disappearingMode: g
  } = p;
  if (f == null || _ == null || g == null) {
    return void __LOG__(3)`EPHEMERAL_SYNC_RESPONSE msg does not contain all fields`;
  }
  let m;
  if (p.disappearingMode != null) {
    m = (0, s.protoToDisappearingMode)(p, p.disappearingMode);
  }
  return {
    msgData: (0, i.default)((0, i.default)({}, c), {}, {
      type: l.MSG_TYPE.PROTOCOL,
      subtype: "ephemeral_sync_response",
      ephemeralDuration: f,
      ephemeralSettingTimestamp: (0, a.numberOrThrowIfTooLarge)(_),
      disappearingModeInitiator: (0, o.default)((0, s.protoToDisappearingModeInitiator)(c, g), "protoToDisappearingModeInitiator(baseMessage, disappearingMode)"),
      disappearingModeTrigger: (t = m) === null || t === undefined ? undefined : t.disappearingModeTrigger,
      disappearingModeInitiatedByMe: (n = m) === null || n === undefined ? undefined : n.initiatedByMe
    }),
    contextInfo: null
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./229079.js");
var o = r(require("./670983.js"));
var s = require("./974637.js");
var l = require("./373070.js");
var u = require("./533494.js");
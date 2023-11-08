var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  let {
    messageProtobuf: r,
    baseMessage: l
  } = e;
  const {
    protocolMessage: u
  } = r;
  if (u == null) {
    return;
  }
  if (u.type !== s.Message$ProtocolMessage$Type.EPHEMERAL_SETTING) {
    return;
  }
  let c;
  if (u.disappearingMode != null) {
    c = (0, a.protoToDisappearingMode)(u, u.disappearingMode);
  }
  return {
    msgData: (0, i.default)((0, i.default)({}, l), {}, {
      type: o.MSG_TYPE.PROTOCOL,
      subtype: "ephemeral_setting",
      ephemeralDuration: u.ephemeralExpiration,
      disappearingModeTrigger: (t = c) === null || t === undefined ? undefined : t.disappearingModeTrigger,
      disappearingModeInitiatedByMe: (n = c) === null || n === undefined ? undefined : n.initiatedByMe
    }),
    contextInfo: undefined
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./974637.js");
var o = require("./373070.js");
var s = require("./533494.js");
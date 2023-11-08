var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n,
    bizInfo: r,
    bizSource: d,
    msgContext: p
  } = e;
  const {
    buttonsMessage: f
  } = t;
  if (f == null) {
    return;
  }
  const {
    buttons: _ = [],
    headerType: g
  } = f;
  const m = s.default.cast((0, o.getBizNativeFlowName)({
    buttonsMessage: f
  }));
  if (m == null && (r == null ? undefined : r.nativeFlowName) == null) {
    return;
  }
  if (!(0, o.shouldParseNFM)(m, r) || (0, o.hasUnsupportedButtons)(_)) {
    return {
      msgData: (0, i.default)((0, i.default)({}, n), {}, {
        type: l.MSG_TYPE.UNKNOWN,
        subtype: "phone_only_feature"
      }),
      contextInfo: f.contextInfo
    };
  }
  if (g === c.Message$ButtonsMessage$HeaderType.UNKNOWN || !new Set(c.Message$ButtonsMessage$HeaderType.members()).has(g)) {
    return {
      msgData: (0, i.default)((0, i.default)({}, n), {}, {
        type: l.MSG_TYPE.UNKNOWN,
        subtype: undefined
      }),
      contextInfo: f.contextInfo
    };
  }
  const h = (0, a.parseButtonsMessageProto)({
    buttonsMessage: f,
    baseMessage: n,
    msgContext: p
  });
  if (m == null) {
    return;
  }
  const y = (0, i.default)((0, i.default)({}, h), {}, {
    type: l.MSG_TYPE.NATIVE_FLOW,
    nativeFlowName: s.default.cast(m),
    nativeFlowButtons: _
  });
  if (!y.nativeFlowName || !(0, u.isValidNativeFlowMessage)(y, d)) {
    return {
      msgData: (0, i.default)((0, i.default)({}, n), {}, {
        type: l.MSG_TYPE.UNKNOWN,
        subtype: "phone_only_feature"
      }),
      contextInfo: f.contextInfo
    };
  }
  return {
    msgData: y,
    contextInfo: f.contextInfo
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./878797.js");
var o = require("./974637.js");
var s = r(require("./753110.js"));
var l = require("./373070.js");
var u = require("./903373.js");
var c = require("./533494.js");
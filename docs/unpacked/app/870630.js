var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n,
    bizInfo: r,
    msgContext: c
  } = e;
  const {
    buttonsMessage: d
  } = t;
  if (d == null) {
    return;
  }
  const {
    buttons: p = [],
    headerType: f
  } = d;
  if (s.default.cast((0, o.getBizNativeFlowName)({
    buttonsMessage: d
  })) != null || (r == null ? undefined : r.nativeFlowName) != null) {
    return;
  }
  if ((0, o.hasUnsupportedButtons)(p)) {
    return {
      msgData: (0, i.default)((0, i.default)({}, n), {}, {
        type: l.MSG_TYPE.UNKNOWN,
        subtype: "phone_only_feature"
      }),
      contextInfo: d.contextInfo
    };
  }
  if (f === u.Message$ButtonsMessage$HeaderType.UNKNOWN || !new Set(u.Message$ButtonsMessage$HeaderType.members()).has(f)) {
    return {
      msgData: (0, i.default)((0, i.default)({}, n), {}, {
        type: l.MSG_TYPE.UNKNOWN
      }),
      contextInfo: d.contextInfo
    };
  }
  const _ = (0, a.parseButtonsMessageProto)({
    buttonsMessage: d,
    baseMessage: n,
    msgContext: c
  });
  if (p.length) {
    return {
      msgData: (0, i.default)((0, i.default)({}, _), {}, {
        isDynamicReplyButtonsMsg: true,
        dynamicReplyButtons: p
      }),
      contextInfo: d.contextInfo
    };
  }
  return {
    msgData: _,
    contextInfo: d.contextInfo
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./878797.js");
var o = require("./974637.js");
var s = r(require("./753110.js"));
var l = require("./373070.js");
var u = require("./533494.js");
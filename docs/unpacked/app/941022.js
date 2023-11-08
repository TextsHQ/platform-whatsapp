var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n
  } = e;
  const {
    protocolMessage: r
  } = t;
  if (r == null) {
    return;
  }
  if (r.type !== o.Message$ProtocolMessage$Type.SHARE_PHONE_NUMBER) {
    return;
  }
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: a.MSG_TYPE.PROTOCOL,
      subtype: "share_phone_number"
    }),
    contextInfo: undefined
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./373070.js");
var o = require("./533494.js");
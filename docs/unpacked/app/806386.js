var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  let {
    messageProtobuf: n,
    baseMessage: r
  } = e;
  if (((t = n.protocolMessage) === null || t === undefined ? undefined : t.type) !== o.Message$ProtocolMessage$Type.REQUEST_WELCOME_MESSAGE) {
    return;
  }
  return {
    msgData: (0, i.default)((0, i.default)({}, r), {}, {
      type: a.MSG_TYPE.PROTOCOL,
      subtype: "bot_request_welcome"
    }),
    contextInfo: null
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./373070.js");
var o = require("./533494.js");
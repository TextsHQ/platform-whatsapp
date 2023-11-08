var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t
  } = e;
  return {
    protocolMessage: (0, i.default)({
      key: (0, a.encodeKey)(t.protocolMessageKey),
      type: o.Message$ProtocolMessage$Type.REVOKE
    }, t.botTargetSenderJid instanceof s.default ? {
      invokerJid: t.botTargetSenderJid.toJid()
    } : {})
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./974637.js");
var o = require("./533494.js");
var s = r(require("./124928.js"));
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n,
    msgContext: r
  } = e;
  const {
    ptvMessage: l
  } = t;
  if (l == null) {
    return;
  }
  if (!(0, o.isPtvReceivingEnabled)()) {
    return {
      msgData: (0, i.default)((0, i.default)({}, n), {}, {
        type: a.MSG_TYPE.UNKNOWN,
        futureproofType: a.MSG_TYPE.PTV
      }),
      contextInfo: l == null ? undefined : l.contextInfo
    };
  }
  return (0, s.parseVideoOrPtvMessageProto)({
    messageProtobuf: t,
    baseMessage: n,
    msgContext: r,
    type: a.MSG_TYPE.PTV
  });
};
var i = r(require("../vendor/81109.js"));
var a = require("./373070.js");
var o = require("./989199.js");
var s = require("./473637.js");
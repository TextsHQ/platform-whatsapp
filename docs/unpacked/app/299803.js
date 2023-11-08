Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n,
    msgContext: a
  } = e;
  const {
    audioMessage: o
  } = t;
  if (o == null) {
    return;
  }
  const {
    ptt: s
  } = o;
  if (s !== true) {
    return;
  }
  return (0, r.parseAudioOrPttMessageProto)({
    messageProtobuf: t,
    baseMessage: n,
    type: i.MSG_TYPE.PTT,
    msgContext: a
  });
};
var r = require("./484852.js");
var i = require("./373070.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n,
    editAttr: a,
    msgContext: o
  } = e;
  if (a !== r.EDIT_ATTR.SENDER_REVOKE) {
    return;
  }
  return (0, i.parseProtocolRevokeMessageProto)({
    messageProtobuf: t,
    baseMessage: n,
    editAttr: a,
    msgContext: o
  });
};
var r = require("./402994.js");
var i = require("./612246.js");
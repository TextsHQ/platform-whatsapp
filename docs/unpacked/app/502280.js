var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertReactionEncMsgData = function (e) {
  const t = s(e);
  (0, a.default)(t != null, "assertReactionEncMsgData: invalid reaction enc message object");
  return t;
};
exports.assertReactionMsgData = function (e) {
  const t = o(e);
  (0, a.default)(t != null, "assertReactionMsgData: invalid reaction message object");
  return t;
};
exports.castToReactionEncMsgData = s;
exports.castToReactionMsgData = o;
var i = require("./373070.js");
var a = r(require("../vendor/441143.js"));
function o(e) {
  if (e.type === i.MSG_TYPE.REACTION) {
    return e;
  } else {
    return null;
  }
}
function s(e) {
  if (e.type === i.MSG_TYPE.REACTION_ENC) {
    return e;
  } else {
    return null;
  }
}
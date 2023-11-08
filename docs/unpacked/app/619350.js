var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.msgToBaseMsgInfo = exports.msgDataToBaseMsgInfo = undefined;
var i = r(require("./670983.js"));
var a = r(require("./556869.js"));
exports.msgToBaseMsgInfo = e => {
  var t;
  return {
    id: e.id,
    from: e.from,
    to: e.to,
    type: e.type,
    t: e.t,
    ack: e.ack,
    count: null,
    author: e.author,
    notifyName: e.notifyName,
    invis: (t = e.invis) !== null && t !== undefined && t,
    subtype: e.subtype
  };
};
exports.msgDataToBaseMsgInfo = e => {
  try {
    return {
      id: (t = e).id,
      from: (0, i.default)(t.from, "msg.from"),
      to: (0, i.default)(t.to, "msg.to"),
      type: t.type,
      t: (0, i.default)(t.t, "msg.t"),
      ack: (0, i.default)(t.ack, "msg.ack"),
      count: null,
      author: t.author,
      notifyName: t.notifyName,
      invis: (n = t.invis) !== null && n !== undefined && n,
      subtype: t.subtype
    };
  } catch (t) {
    __LOG__(3, undefined, undefined, true, ["messaging"])`msgData: type:${e.type} error:${t}`;
    SEND_LOGS("BaseMsgInfo: MsgData doesn't have required fields", 1, "messaging");
    throw (0, a.default)("Invalid MsgData object");
  }
  var t;
  var n;
};
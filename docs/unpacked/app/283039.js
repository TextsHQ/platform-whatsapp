Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHandleChatState = function (e) {
  var t;
  var n;
  const s = (t = e.individualMessage) === null || t === undefined ? undefined : t.handleIndividualChatState;
  const l = (n = e.groupMessage) === null || n === undefined ? undefined : n.handleGroupChatState;
  return function (e) {
    if (s == null && l == null) {
      return o;
    }
    const {
      parsedRequest: {
        composingOrPausedMixinGroup: t,
        fromUserOrGroupMixinGroup: n
      }
    } = (0, a.receiveServerNotificationRPC)(e);
    const u = (0, r.parseChatStatus)(t);
    var c;
    var d;
    if (n.name === "FromUser") {
      if ((c = s == null ? undefined : s({
        status: u,
        jid: n.value.from
      }).then(i.makeResult)) !== null && c !== undefined) {
        return c;
      } else {
        return o;
      }
    } else {
      n.name;
      if ((d = l == null ? undefined : l({
        status: u,
        jid: n.value.from,
        participant: n.value.participant,
        participantPn: n.value.participantPn
      }).then(i.makeResult)) !== null && d !== undefined) {
        return d;
      } else {
        return o;
      }
    }
  };
};
var r = require("./206213.js");
var i = require("./135781.js");
var a = require("./394842.js");
const o = Promise.resolve((0, i.makeResult)("NO_ACK"));
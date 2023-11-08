var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleIndividualChatState = exports.handleGroupChatState = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./482503.js"));
var o = require("./854379.js");
var s = require("./487837.js");
const l = function () {
  var e = (0, i.default)(function* (e) {
    let {
      jid: t,
      status: n
    } = e;
    const r = (0, o.userJidToUserWid)(t);
    yield (0, a.default)({
      id: r,
      type: n
    });
    return "NO_ACK";
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.handleIndividualChatState = l;
const u = function () {
  var e = (0, i.default)(function* (e) {
    let {
      jid: t,
      status: n,
      participant: r,
      participantPn: i
    } = e;
    const l = (0, o.chatJidToChatWid)(t);
    const u = (0, o.userJidToUserWid)(r);
    const c = i == null ? null : (0, o.userJidToUserWid)(i);
    if (c != null) {
      yield (0, s.createLidPnMappingsJob)([{
        lid: u,
        pn: c
      }], true);
    }
    yield (0, a.default)({
      id: l,
      type: n,
      participant: u
    });
    return "NO_ACK";
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.handleGroupChatState = u;
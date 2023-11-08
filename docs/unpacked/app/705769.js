var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.protobufFromVote = function () {
  return l.apply(this, arguments);
};
exports.voteFromProtobuf = function (e) {
  let {
    voteProtobuf: t,
    pollVoteMsgKey: n,
    parentMsgKey: r,
    sender: i,
    senderTimestampMs: s,
    t: l,
    optionLocalIdMap: u,
    ack: c,
    read: d
  } = e;
  return {
    msgKey: n,
    parentMsgKey: (0, o.default)(r, "parentMsgKey"),
    selectedOptionLocalIds: t.selectedOptions.map(u.getLocalIdForHash),
    senderTimestampMs: (0, a.numberOrThrowIfTooLarge)(s),
    t: (0, a.maybeNumberOrThrowIfTooLarge)(l),
    sender: i,
    ack: c,
    read: d
  };
};
var i = r(require("../vendor/348926.js"));
var a = require("./229079.js");
var o = r(require("./670983.js"));
var s = require("./823980.js");
function l() {
  return (l = (0, i.default)(function* (e, t) {
    const n = yield (0, s.createOptionLocalIdMap)(t);
    const r = e.selectedOptionLocalIds.map(n.getHashForLocalId);
    return {
      selectedOptions: r.length === 0 ? null : r
    };
  })).apply(this, arguments);
}
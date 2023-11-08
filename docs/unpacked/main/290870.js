Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMessageAriaDescription = function (e, t) {
  const [n, p, m, h, g, E] = (0, f.useMsgValues)(e.id, [i.getType, i.getSubtype, r.getText, i.getInitialPageSize, i.getPollName, r.getMediaData, i.getType]);
  if (!(0, l.messageCustomAriaLabelEnabled)() && !t.atLeastOnceKeyboardUser) {
    return null;
  }
  const v = e.mentionMap();
  const _ = {
    type: n,
    subtype: p,
    isGif: E == null ? undefined : E.isGif,
    quotedMsg: (0, d.getQuotedMsgObj)(e),
    senderWid: (0, i.getSender)(e)
  };
  const y = (0, r.getAsPollCreation)(e);
  let C = null;
  const b = (0, i.getId)(e);
  if (y != null) {
    const [t] = s.PollVoteCollection.getForParent([b]);
    const n = t.toArray();
    const a = (0, i.getPollOptions)(e);
    if (y && a) {
      const e = (0, c.aggregateVotes)(n, a);
      C = (0, c.getOptionWithCount)(e);
    }
  }
  let M = null;
  if (e.type === u.MSG_TYPE.REVOKED) {
    const t = (0, r.getAsRevoked)(e);
    M = t ? (0, a.formatRevokedMsg)(t) : null;
  }
  const S = {
    pollName: g,
    optionsWithCounts: C,
    mediaData: E,
    revokedLabel: M
  };
  return (0, o.getMessageTextLabel)({
    messageText: m,
    mentionMap: v,
    ariaLabelMessageType: _,
    ariaMessageSpecific: S,
    initialPageSize: h
  });
};
var a = require("../app/386826.js");
var r = require("../app/163755.js");
var o = require("./115900.js");
var l = require("../app/97858.js");
var i = require("../app/787742.js");
var u = require("../app/373070.js");
var s = require("../app/344400.js");
var c = require("./620283.js");
var d = require("../app/592978.js");
var f = require("./871210.js");
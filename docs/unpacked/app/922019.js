Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OFFLINE_COUNT_TOO_HIGH_THRESHOLD = undefined;
exports.maybePostOfflineCountTooHigh = function (e) {
  var t;
  const {
    msgInfo: n,
    msgMeta: s,
    encs: l
  } = e;
  const u = parseInt(n.offline, 10);
  if (Number.isNaN(u) || u < 11) {
    return;
  }
  const c = new i.OfflineCountTooHighWamEvent({
    offlineCount: u,
    stanzaType: a.STANZA_TYPE.MESSAGE,
    mediaType: (0, r.getMetricMediaType)({
      encMediaType: (t = l.find(e => e.encMediaType != null)) === null || t === undefined ? undefined : t.encMediaType,
      msgType: s.type,
      msgPollType: s.pollType
    })
  });
  const d = (0, o.getMessageTypeFromMsgInfoType)(n.type);
  if (d != null) {
    c.messageType = d;
  }
  c.commitAndWaitForFlush().catch(e => {
    __LOG__(3, undefined, undefined, undefined, ["messaging"])`Failed to post OfflineCountTooHigh metric: ${e}`;
  });
};
var r = require("./973776.js");
var i = require("./529862.js");
var a = require("./86736.js");
var o = require("./816793.js");
exports.OFFLINE_COUNT_TOO_HIGH_THRESHOLD = 11;
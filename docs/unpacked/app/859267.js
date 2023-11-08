var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postFailureE2eMessageRecvMetric = function () {
  return _.apply(this, arguments);
};
exports.postSuccessE2eMessageRecvMetric = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./973776.js");
var s = require("./540587.js");
var l = require("./862159.js");
var u = require("./883310.js");
var c = require("./800277.js");
function d() {
  return p.apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e) {
    let {
      enc: t,
      from: n,
      msgMeta: r,
      msgInfo: i
    } = e;
    const d = r.type === u.STANZA_MSG_TYPES.reaction;
    const p = new s.E2eMessageRecvWamEvent({
      e2eCiphertextType: (0, o.getMetricE2eCiphertextType)(t.e2eType),
      e2eCiphertextVersion: o.CIPHERTEXT_VERSION,
      e2eSuccessful: false,
      messageMediaType: (0, o.getMetricMediaType)({
        encMediaType: t.encMediaType,
        msgType: r.type,
        msgPollType: r.pollType
      }),
      retryCount: t.retryCount,
      editType: (0, o.getMetricEditType)(i.edit)
    });
    const f = (0, o.getMetricE2eDestination)(n);
    if (f) {
      p.e2eDestination = f;
    }
    const _ = i.chat;
    if (_.isGroup()) {
      const e = yield (0, a.frontendSendAndReceive)("getGroupMetadata", {
        groupWid: _
      });
      if (e != null) {
        const t = e.isIncognitoCag;
        if (t != null) {
          p.isLid = t && d;
        }
        const n = (0, l.groupTypeToWamEnum)((0, l.getGroupTypeFromGroupMetadata)(e));
        p.typeOfGroup = n;
      }
    } else {
      p.isLid = _.isLid();
    }
    if (i.author.isBot()) {
      if (i.chat.isBot()) {
        p.agentEngagementType = c.AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT;
      } else {
        p.agentEngagementType = c.AGENT_ENGAGEMENT_ENUM_TYPE.INVOKED;
      }
    }
    return p;
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e) {
    const t = yield d(e);
    t.e2eSuccessful = true;
    t.weight = 1000;
    t.commit();
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* (e) {
    const t = yield d(e);
    t.e2eSuccessful = false;
    t.weight = 1;
    t.commit();
  })).apply(this, arguments);
}
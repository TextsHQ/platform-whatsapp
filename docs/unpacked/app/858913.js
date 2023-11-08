Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postFailureDirectE2eMessageSendMetric = function (e) {
  const t = l(e);
  t.e2eSuccessful = false;
  t.weight = 1;
  t.commit();
};
exports.postSuccessDirectE2eMessageSendMetric = function (e) {
  const t = l(e);
  t.e2eSuccessful = true;
  t.commit();
};
var r = require("./973776.js");
var i = require("./609218.js");
var a = require("./800277.js");
var o = require("./616615.js");
var s = require("./816793.js");
function l(e) {
  let {
    to: t,
    retryCount: n,
    type: l,
    msg: u,
    editType: c = o.EDIT_TYPE.NOT_EDITED
  } = e;
  const d = new i.E2eMessageSendWamEvent({
    e2eCiphertextVersion: r.CIPHERTEXT_VERSION,
    isLid: t.isLid(),
    retryCount: n,
    editType: c
  });
  const p = (0, r.getMetricE2eDestination)(t);
  if (p) {
    d.e2eDestination = p;
  }
  if (l != null) {
    d.e2eCiphertextType = (0, r.getMetricE2eCiphertextType)(l);
  }
  if (u) {
    d.messageMediaType = (0, s.getWamMediaType)(u);
    if (t.isBot()) {
      if (u.id.remote.isBot()) {
        d.agentEngagementType = a.AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT;
      } else {
        d.agentEngagementType = a.AGENT_ENGAGEMENT_ENUM_TYPE.INVOKED;
      }
    }
  }
  return d;
}
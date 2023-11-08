Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AckParser = undefined;
exports.ackMatchesTemplate = function (e, t) {
  return e.id === t.id && (t.class === undefined || e.class === t.class) && (t.type === undefined || e.type === t.type) && (t.from === undefined || a(e.from, t.from)) && (t.participant === undefined || e.participant === t.participant) && (t.recipient === undefined || e.recipient === t.recipient) && (t.ts === undefined || e.ts === t.ts);
};
exports.fromJidsAreEqual = a;
var r = require("./418987.js");
const i = new (require("./347387.js").WapParser)("ack", e => {
  e.assertTag("ack");
  return {
    id: e.attrString("id"),
    ts: e.maybeAttrString("t"),
    class: e.attrString("class"),
    type: e.maybeAttrString("type"),
    from: e.attrJidWithType(),
    participant: e.hasAttr("participant") ? e.attrDeviceJid("participant") : null,
    recipient: e.hasAttr("recipient") ? e.attrUserJid("recipient") : null
  };
});
function a(e, t) {
  if ((0, r.extractFromJid)(e) === t) {
    return true;
  }
  if (e.userJid != null) {
    return (0, r.defaultDeviceJidForUser)(e.userJid) === t;
  }
  if (e.deviceJid != null) {
    const {
      deviceJid: n
    } = e;
    return (0, r.extractDeviceId)(n) === 0 && (0, r.extractUserJid)(n) === t;
  }
  return false;
}
exports.AckParser = i;
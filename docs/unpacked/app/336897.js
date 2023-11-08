Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collectionNameToMetric = u;
exports.constructMsgKeySegments = function (e) {
  return s(e.id);
};
exports.constructStarMsgKeyFromMsgKey = function (e) {
  return (0, r.buildIndex)(i.Actions.Star, s(e));
};
exports.extractParticipantForSync = l;
exports.uploadCriticalEventMetric = function (e, t) {
  const n = new a.MdCriticalEventWamEvent({
    mdCriticalEventCode: e
  });
  if (t != null) {
    n.collection = u(t);
  }
  n.commit();
};
var r = require("./24756.js");
var i = require("./122393.js");
var a = require("./977817.js");
var o = require("./896771.js");
function s(e) {
  const t = l(e);
  return [e.remote.toString({
    legacy: true
  }), e.id, e.fromMe ? "1" : "0", t];
}
function l(e) {
  let t = "0";
  if (!(!e.participant || e.remote.isUser() || e.fromMe)) {
    t = e.participant.toString({
      legacy: true
    });
  }
  return t;
}
function u(e) {
  switch (e) {
    case i.CollectionName.CriticalBlock:
      return o.COLLECTION.CRITICAL_BLOCK;
    case i.CollectionName.CriticalUnblockLow:
      return o.COLLECTION.CRITICAL_UNBLOCK_LOW;
    case i.CollectionName.Regular:
      return o.COLLECTION.REGULAR;
    case i.CollectionName.RegularHigh:
      return o.COLLECTION.REGULAR_HIGH;
    case i.CollectionName.RegularLow:
      return o.COLLECTION.REGULAR_LOW;
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.augmentedCagGroupMetadataParticipantList = function (e) {
  const t = e.participants.iAmAdmin();
  const n = e.participants.toArray();
  const i = [];
  const a = [];
  if (t) {
    for (const e of n) {
      i.push(e.id);
      a.push((0, r.getCurrentLid)(e.id));
    }
  } else {
    for (const e of n) {
      if (e.id.isLid()) {
        i.push(e.id);
      } else {
        a.push((0, r.getCurrentLid)(e.id));
      }
    }
  }
  return [...i, ...a].filter(Boolean);
};
exports.augmentedCagGroupParticipantList = function (e, t) {
  const n = [];
  if (e) {
    for (const e of t) {
      n.push(e.id);
      if (e.lid) {
        n.push(e.lid);
      }
    }
    return n;
  }
  for (const e of t) {
    if (e.id.isLid()) {
      n.push(e.id);
    } else if (e.lid) {
      n.push(e.lid);
    }
  }
  return n;
};
var r = require("./12643.js");
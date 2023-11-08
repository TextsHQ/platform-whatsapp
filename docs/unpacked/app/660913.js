Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addParticipantsJob = function (e, t, n, o, s, l) {
  return (0, a.createNonPersistedJob)("addParticipants", e => (0, i.addParticipants)(e), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted({
    group: e,
    participants: t,
    version: n,
    prevVersion: o,
    isOffline: s,
    reason: l
  });
};
exports.demoteCommunityParticipantsJob = function (e, t, n) {
  return (0, a.createNonPersistedJob)("demoteCommunityParticipants", e => (0, i.demoteCommmunityParticipants)(e), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted({
    group: e,
    participants: t,
    isOffline: n
  });
};
exports.demoteParticipantsJob = function (e, t, n, o, s, l) {
  return (0, a.createNonPersistedJob)("demoteParticipants", e => (0, i.demoteParticipants)(e), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted({
    group: e,
    participants: t,
    version: n,
    prevVersion: o,
    groupMetadata: s,
    isOffline: l
  });
};
exports.promoteCommunityParticipantsJob = function (e, t, n) {
  return (0, a.createNonPersistedJob)("promoteCommunityParticipants", e => (0, i.promoteCommmunityParticipants)(e), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted({
    group: e,
    participants: t,
    isOffline: n
  });
};
exports.promoteParticipantsJob = function (e, t, n, o, s, l) {
  return (0, a.createNonPersistedJob)("promoteParticipants", e => (0, i.promoteParticipants)(e), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted({
    group: e,
    participants: t,
    version: n,
    prevVersion: o,
    groupMetadata: s,
    isOffline: l
  });
};
exports.removeParticipantsJob = function (e, t, n, o, s, l, u, c, d) {
  return (0, a.createNonPersistedJob)("removeParticipants", e => (0, i.removeParticipants)(e), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted({
    group: e,
    participants: t,
    timestamp: n,
    author: o,
    version: s,
    prevVersion: l,
    reason: u,
    groupMetadata: c,
    isOffline: d
  });
};
exports.updateParticipantsJob = function (e) {
  return (0, a.createNonPersistedJob)("updateParticipants", e => (0, i.updateParticipants)(e), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted(e);
};
var r = require("./775593.js");
var i = require("./242382.js");
require("./862159.js");
var a = require("./899137.js");
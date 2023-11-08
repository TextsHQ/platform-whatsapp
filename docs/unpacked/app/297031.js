Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupMetadataJob = function (e) {
  return (0, o.createNonPersistedJob)("getGroupMetadata", e => (0, a.getGroupMetadataUNSAFE)(e), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted({
    groupWid: e
  });
};
exports.getGroupParticipantJob = function (e) {
  return (0, o.createNonPersistedJob)("getGroupParticipant", e => (0, i.getGroupParticipant)(e), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted({
    groupWid: e
  });
};
exports.markGroupParticipantStaleJob = function (e) {
  return (0, o.createNonPersistedJob)("markGroupParticipantStale", e => (0, i.markGroupParticipantStale)(e), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted({
    group: e
  });
};
exports.modifyGroupParticipantJob = function (e, t, n, a, s) {
  return (0, o.createNonPersistedJob)("modifyGroupParticipant", e => (0, i.modifyGroupParticipant)(e), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted({
    group: e,
    oldId: t,
    newId: n,
    prevVersion: a,
    newVersion: s
  });
};
exports.updateGroupMetadataTableJob = function (e) {
  return (0, o.createNonPersistedJob)("updateGroupMetadataTable", e => (0, a.updateGroupMetadataTable)(e), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted({
    groupInfos: e
  });
};
exports.updateGroupParticipantTableWithoutDeviceSyncJob = function (e) {
  return (0, o.createNonPersistedJob)("updateGroupParticipantTableWithoutDeviceSync", e => (0, i.updateGroupParticipantTableWithoutDeviceSync)(e), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted({
    groupInfos: e
  });
};
var r = require("./775593.js");
var i = require("./608916.js");
var a = require("./185212.js");
var o = require("./899137.js");
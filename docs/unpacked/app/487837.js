Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLidPnMappingsJob = function (e, t) {
  return (0, r.createNonPersistedJob)("createLidPnMappings", e => (0, i.createLidPnMappings)(e)).waitUntilCompleted({
    mappings: e,
    flushImmediately: t
  });
};
exports.updateLidMetadataJob = function (e) {
  return (0, r.createNonPersistedJob)("updateLidMetadata", e => (0, i.updateLidMetadata)(e)).waitUntilCompleted({
    updates: e
  });
};
var r = require("./899137.js");
var i = require("./987189.js");
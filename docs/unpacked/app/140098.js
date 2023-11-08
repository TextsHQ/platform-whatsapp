var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadExternalPatch = function () {
  return u.apply(this, arguments);
};
exports.downloadSnapshot = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./819416.js");
var o = require("./65461.js");
var s = r(require("./603370.js"));
function l() {
  return (l = (0, i.default)(function* (e, t) {
    const n = yield (0, a.getDbImpls)().downloadSyncBlob(t, "snapshot", e);
    const r = (0, o.decodeSyncdSnapshot)(e, n);
    return s.default.validateSnapshotProtobuf(e, r);
  })).apply(this, arguments);
}
function u() {
  return (u = (0, i.default)(function* (e, t) {
    const n = yield (0, a.getDbImpls)().downloadSyncBlob(t, "patch", e);
    return (0, o.decodeSyncdMutations)(e, n).mutations.map(t => s.default.validateMutationProtobuf(e, t));
  })).apply(this, arguments);
}
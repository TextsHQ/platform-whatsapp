var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateEncryptionKeysUnmemoized = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./562075.js");
var o = require("./47371.js");
var s = require("./347197.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    const t = yield u(e);
    return {
      indexKey: t.slice(0, o.INDEX_KEY_END),
      valueEncryptionKey: t.slice(o.INDEX_KEY_END, o.VALUE_ENCRYPTION_KEY_END),
      valueMacKey: t.slice(o.VALUE_ENCRYPTION_KEY_END, o.VALUE_MAC_KEY_END),
      snapshotMacKey: t.slice(o.VALUE_MAC_KEY_END, o.SNAPSHOT_MAC_KEY_END),
      patchMacKey: t.slice(o.SNAPSHOT_MAC_KEY_END, o.PATCH_MAC_KEY_END)
    };
  })).apply(this, arguments);
}
function u(e) {
  return (0, a.extractAndExpand)((0, s.fromSyncKeyData)(e), o.HKDF_INFO, o.DERIVED_KEY_LENGTH);
}
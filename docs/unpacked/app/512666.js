var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, o.getStorage)();
  const {
    addColumn: t,
    addEncryptedColumn: n,
    addUserDefinedPrimaryKey: r,
    addIndex: i
  } = (0, l.columnBuilder)(e.config);
  e.add("sync-keys").version((0, s.syncKeysCreateTable)(), [r("keyId"), t("timestamp"), t("fingerprint"), n("keyData", u.ENCRYPTED_VALUE_TYPE.ARRAY_BUFFER), t("keyEpoch"), i("keyEpoch")]).view(e => e);
};
exports.convertFromSyncKeyToRow = function (e) {
  const {
    keyId: t,
    keyData: n
  } = e;
  return (0, i.default)((0, i.default)({}, e), {}, {
    keyId: new Uint8Array((0, a.fromSyncKeyId)(t)),
    keyData: (0, a.fromSyncKeyData)(n)
  });
};
exports.convertToSyncKeyFromRow = function (e) {
  const {
    keyId: t,
    keyData: n
  } = e;
  return (0, i.default)((0, i.default)({}, e), {}, {
    keyId: (0, a.toSyncKeyId)(t.buffer),
    keyData: (0, a.toSyncKeyData)(n)
  });
};
exports.getSyncKeysTable = function () {
  return (0, o.getStorage)().table("sync-keys");
};
var i = r(require("../vendor/81109.js"));
var a = require("./347197.js");
var o = require("./732011.js");
var s = require("./612975.js");
var l = require("./322511.js");
var u = require("./918720.js");
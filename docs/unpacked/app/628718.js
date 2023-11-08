Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, i.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, o.columnBuilder)(e.config);
  e.add("missing-keys").version((0, a.missingKeysCreateTable)(), [n("keyHex"), t("keyId"), t("timestamp"), t("deviceResponses")]).view(e => e);
};
exports.convertFromMissingKeyToRow = function (e) {
  const {
    keyHex: t,
    keyId: n,
    timestamp: i,
    deviceResponses: a
  } = e;
  return {
    keyHex: t,
    keyId: (0, r.fromSyncKeyId)(n),
    timestamp: i,
    deviceResponses: a
  };
};
exports.convertToMissingKeyFromRow = function (e) {
  const {
    keyHex: t,
    keyId: n,
    timestamp: i,
    deviceResponses: a
  } = e;
  return {
    keyHex: t,
    keyId: (0, r.toSyncKeyId)(n),
    timestamp: i,
    deviceResponses: a
  };
};
exports.getMissingKeysTable = function () {
  return (0, i.getStorage)().table("missing-keys");
};
var r = require("./347197.js");
var i = require("./732011.js");
var a = require("./612975.js");
var o = require("./322511.js");
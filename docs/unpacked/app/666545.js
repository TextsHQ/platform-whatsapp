var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, s.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n,
    addIndex: r,
    addCompositeIndex: i
  } = (0, u.columnBuilder)(e.config);
  e.add("sync-actions").version((0, l.syncActionsCreateTable)(), [n("index"), t("keyId"), t("version"), t("actionState"), r("actionState"), t("modelId"), t("modelType"), i(["modelId", "modelType", "actionState"]), t("valueMac"), t("indexMac"), r("indexMac"), t("collection"), r("collection"), t("timestamp"), t("action"), r("action"), t("binarySyncAction"), t("binarySyncData")]).view(d);
};
exports.convertFromSyncActionToRow = function (e) {
  const {
    keyId: t
  } = e;
  return (0, i.default)((0, i.default)({}, e), {}, {
    keyId: (0, o.fromSyncKeyId)(t)
  });
};
exports.convertToSyncActionFromRow = function (e) {
  const {
    keyId: t
  } = e;
  return (0, i.default)((0, i.default)({}, e), {}, {
    keyId: (0, o.toSyncKeyId)(t)
  });
};
exports.getSyncActionsTable = function () {
  return (0, s.getStorage)().table("sync-actions");
};
var i = r(require("../vendor/81109.js"));
var a = require("./202038.js");
var o = require("./347197.js");
var s = require("./732011.js");
var l = require("./612975.js");
var u = require("./322511.js");
var c = r(require("./556869.js"));
function d(e) {
  const {
    index: t,
    binarySyncAction: n,
    actionState: r,
    version: i,
    keyId: o,
    modelId: s,
    modelType: l,
    indexMac: u,
    valueMac: d,
    collection: p,
    timestamp: f,
    action: _
  } = e;
  let {
    binarySyncData: g
  } = e;
  if (g == null) {
    if (n == null) {
      __LOG__(4, undefined, new Error(), true, ["syncd"])`syncd: binarySyncAction should not be null when binarySyncData is null`;
      SEND_LOGS("syncd: syncd binarySyncAction should not be null when binarySyncData is null", 1, "syncd");
      throw (0, c.default)("syncd: binarySyncAction should not be null when binarySyncData is null");
    }
    g = (0, a.syncActionToSyncData)(n);
  }
  return {
    index: t,
    binarySyncData: g,
    actionState: r,
    version: i,
    keyId: o,
    modelId: s,
    modelType: l,
    indexMac: u,
    valueMac: d,
    collection: p,
    timestamp: f,
    action: _
  };
}
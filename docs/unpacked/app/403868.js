var r = require("../vendor/595318.js");
exports.Z = undefined;
var i = r(require("./542817.js"));
var a = r(require("./367867.js"));
var o = {
  setLogoutState: e => {
    i.default.isLogoutInProgress = e;
    return a.default.invoke("setLogoutState", [e]);
  },
  sendLogs: (e, t) => require("./996588.js").sendLogs(e, t),
  deleteDbEncKeyCache: () => a.default.invoke("deleteDbEncKeyCache", []),
  initDatabaseEncnKey: e => a.default.invoke("initDatabaseEncnKey", [e]),
  generateFinalDbEncryptionAndFtsKey: e => a.default.invoke("generateFinalDbEncryptionAndFtsKey", [e]),
  setSchemaVersions: e => a.default.invoke("setSchemaVersions", [e])
};
exports.Z = o;
var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOptInBetaAction = function (e) {
  const t = function (e, t) {
    return (0, o.buildPendingMutation)({
      collection: l.CollectionName.Regular,
      indexArgs: [],
      value: {
        externalWebBetaAction: {
          isOptIn: t
        }
      },
      version: s.default.version,
      operation: r.SyncdMutation$SyncdOperation.SET,
      timestamp: e,
      action: s.default.action
    });
  }((0, i.unixTimeMs)(), e);
  return (0, c.lockForSync)([], [t], () => Promise.resolve()).then(() => (0, u.changeOptInStatusForExternalWebBeta)(e));
};
var r = require("../app/679905.js");
var o = require("../app/24756.js");
var l = require("../app/122393.js");
var i = require("../app/632157.js");
var u = require("../app/795715.js");
var s = a(require("../app/897815.js"));
var c = require("../app/480313.js");
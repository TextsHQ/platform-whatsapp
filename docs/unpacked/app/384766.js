var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeMessagesFromHistory = function (e) {
  const t = [];
  const n = [];
  return (0, u.initializeWithoutGKs)().then(() => {
    if (e.length > 0) {
      return (0, p.getMessageTable)().bulkGet(e, false).then(e => {
        e.forEach(e => {
          if ((e == null ? undefined : e.rowId) != null) {
            t.push(String(e.rowId));
          }
          const r = e == null ? undefined : e.botResponseTargetId;
          const i = e == null ? undefined : e.internalId;
          if ((e == null ? undefined : e.botPluginSearchProvider) != null && (e == null ? undefined : e.botPluginSearchUrl) != null && r != null && i != null) {
            n.push({
              internalId: i,
              targetId: r
            });
          }
        });
      });
    }
  }).then(() => (0, c.getStorage)().lock(["message", "label-association"], function () {
    var t = (0, i.default)(function* () {
      const t = (0, o.queryAndRemoveLocalLabelAssociation)(e.map(e => ({
        associationId: e,
        type: d.LabelAssociationType.Message
      })));
      try {
        if ((0, a.isBotReceiveEnabled)() && n.length > 0) {
          __LOG__(2)`[bot] Removing bot plugin msgs after delete for self`;
          yield (0, s.findAndDeleteAssociatedPluginMsg)(n);
        }
      } catch (e) {
        __LOG__(4, undefined, new Error(), true)`[bot] findAndDeleteAssociatedPluginMsg failed with error: ${e.name}, stack: ${e.stack}`;
        SEND_LOGS("Plugin carousel delete failed");
      }
      return Promise.all([(0, p.getMessageTable)().bulkRemove(e), t]);
    });
    return function () {
      return t.apply(this, arguments);
    };
  }())).then(() => {
    if (t.length > 0) {
      l.ftsLightClient.purge(t).catch(() => {});
    }
  }).then(() => {}).catch(e => {
    __LOG__(4, undefined, new Error())`removeMessagesFromHistory: error ${e}`;
    throw e;
  });
};
exports.removeStatusMessage = function (e) {
  const t = e.filter(e => e.includes("status@broadcast"));
  if (t.length > 0) {
    return (0, p.getMessageTable)().bulkRemove(t);
  }
  return Promise.resolve();
};
var i = r(require("../vendor/348926.js"));
var a = require("./354458.js");
var o = require("./610011.js");
var s = require("./488300.js");
var l = require("./271368.js");
var u = require("./535157.js");
var c = require("./732011.js");
var d = require("./362029.js");
var p = require("./851698.js");
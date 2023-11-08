var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._setDependency = function (e, t) {
  s.set(e, t);
};
exports.sort = function (e) {
  const t = [];
  const n = [];
  try {
    e.forEach(r => {
      t.push(r);
      const i = s.get(r.actionName);
      if (i != null) {
        e.forEach(e => {
          if (e !== r && i.includes(e.actionName) && function (e, t) {
            const n = e.actionHandler.getChatJidAndMessageKey(e);
            const r = t.actionHandler.getChatJidAndMessageKey(t);
            if (n && r) {
              return n.chatJid === r.chatJid && (n.messageKey == null || r.messageKey == null || n.messageKey === r.messageKey);
            }
            return false;
          }(e, r)) {
            if (e.timestamp < r.timestamp) {
              n.push([e, r]);
            } else {
              n.push([r, e]);
            }
          }
        });
      }
    });
    return o.default.array(t, n);
  } catch (e) {
    (0, a.reportSyncdFatalError)(a.SyncdFatalErrorType.CYCLIC_MUTATION_DEPENDENCY_IN_PATCH);
    throw new i.SyncdFatalError("cyclic mutation dependency in patch");
  }
};
var i = require("./256764.js");
var a = require("./787685.js");
var o = r(require("../vendor/150944.js"));
const s = new Map();
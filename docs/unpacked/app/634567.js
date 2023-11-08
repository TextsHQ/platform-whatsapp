Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDecisionTreeResult = function (e, t) {
  const n = (0, r.TAGS)(["decision tree"]);
  return t.then(e => e.success ? e.value : (e.error.type === "unknown-stanza" || (e.error.type, n.WARN`runtime-error: ${e.error.error.message}`, n.ERROR`runtime-error`), "NO_ACK")).catch(e => {
    n.ERROR`unexpected-runtime-error: ${e}`;
    return "NO_ACK";
  });
};
var r = require("./462545.js");
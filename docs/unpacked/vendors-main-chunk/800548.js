var r = require("./84260.js");
var i = require("./548854.js");
var o = require("../vendor/667294.js");
exports.createEmptyHistoryState = i.createEmptyHistoryState;
exports.HistoryPlugin = function ({
  externalHistoryState: e
}) {
  let [t] = r.useLexicalComposerContext();
  (function (e, t, n = 1000) {
    let r = o.useMemo(() => t || i.createEmptyHistoryState(), [t]);
    o.useEffect(() => i.registerHistory(e, r, n), [n, e, r]);
  })(t, e);
  return null;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorInitialStatePlugin = function (e) {
  const [t] = (0, o.useLexicalComposerContext)();
  const n = e.initialText == null ? "" : e.initialText;
  (0, a.useEffect)(() => {
    t.update(() => {
      (0, r.$setTextContent)(n, (0, r.isFocused)(t));
    }, {
      tag: "history-merge"
    });
  }, [t]);
  return null;
};
var o = require("./71671.js");
var r = require("./251922.js");
var a = require("../vendor/667294.js");
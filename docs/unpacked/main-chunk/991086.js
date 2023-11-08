Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorRefPlugin = function (e) {
  let {
    editorRef: t
  } = e;
  const [n] = (0, o.useLexicalComposerContext)();
  (0, r.useEffect)(() => {
    if (typeof t == "function") {
      t(n);
    } else if (t) {
      t.current = n;
    }
  }, [n, t]);
  return null;
};
var o = require("./71671.js");
var r = require("../vendor/667294.js");
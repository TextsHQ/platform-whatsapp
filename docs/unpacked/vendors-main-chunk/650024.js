var r = require("./84260.js");
var i = require("./932998.js");
var o = require("../vendor/667294.js");
var s = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined ? o.useLayoutEffect : o.useEffect;
exports.ClearEditorPlugin = function ({
  onClear: e
}) {
  let [t] = r.useLexicalComposerContext();
  s(() => t.registerCommand(i.CLEAR_EDITOR_COMMAND, () => {
    t.update(() => {
      if (e == null) {
        let e = i.$getRoot();
        let t = i.$getSelection();
        let n = i.$createParagraphNode();
        e.clear();
        e.append(n);
        if (t !== null) {
          n.select();
        }
      } else {
        e();
      }
    });
    return true;
  }, i.COMMAND_PRIORITY_EDITOR), [t, e]);
  return null;
};
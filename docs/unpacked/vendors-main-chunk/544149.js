var r = require("./84260.js");
var i = require("./932998.js");
var o = require("../vendor/667294.js");
let s = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
var l = s ? o.useLayoutEffect : o.useEffect;
let a = {
  tag: "history-merge"
};
exports.LexicalComposer = function ({
  initialConfig: e,
  children: t
}) {
  let n = o.useMemo(() => {
    const {
      theme: t,
      namespace: n,
      editor__DEPRECATED: o,
      nodes: l,
      onError: u,
      editorState: c
    } = e;
    const d = r.createLexicalComposerContext(null, t);
    let g = o || null;
    if (g === null) {
      const r = i.createEditor({
        editable: e.editable,
        namespace: n,
        nodes: l,
        onError: e => u(e, r),
        theme: t
      });
      !function (e, t) {
        if (t !== null) {
          if (t === undefined) {
            e.update(() => {
              var t = i.$getRoot();
              if (t.isEmpty()) {
                let n = i.$createParagraphNode();
                t.append(n);
                t = s ? document.activeElement : null;
                if (i.$getSelection() !== null || t !== null && t === e.getRootElement()) {
                  n.select();
                }
              }
            }, a);
          } else if (t !== null) {
            switch (typeof t) {
              case "string":
                let n = e.parseEditorState(t);
                e.setEditorState(n, a);
                break;
              case "object":
                e.setEditorState(t, a);
                break;
              case "function":
                e.update(() => {
                  if (i.$getRoot().isEmpty()) {
                    t(e);
                  }
                }, a);
            }
          }
        }
      }(r, c);
      g = r;
    }
    return [g, d];
  }, []);
  l(() => {
    let t = e.editable;
    let [r] = n;
    r.setEditable(t === undefined || t);
  }, []);
  return o.createElement(r.LexicalComposerContext.Provider, {
    value: n
  }, t);
};
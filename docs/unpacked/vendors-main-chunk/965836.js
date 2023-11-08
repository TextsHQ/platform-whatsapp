var r = require("./84260.js");
var i = require("../vendor/667294.js");
var o = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined ? i.useLayoutEffect : i.useEffect;
function s(e) {
  return {
    initialValueFn: () => e.isEditable(),
    subscribe: t => e.registerEditableListener(t)
  };
}
module.exports = function () {
  return function (e) {
    let [t] = r.useLexicalComposerContext();
    let n = i.useMemo(() => e(t), [t, e]);
    let s = i.useRef(n.initialValueFn());
    let [l, a] = i.useState(s.current);
    o(() => {
      let {
        initialValueFn: e,
        subscribe: t
      } = n;
      let r = e();
      if (s.current !== r) {
        s.current = r;
        a(r);
      }
      return t(e => {
        s.current = e;
        a(e);
      });
    }, [n, e]);
    return l;
  }(s);
};
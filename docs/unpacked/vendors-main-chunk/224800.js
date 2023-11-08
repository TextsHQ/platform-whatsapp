var r = require("./84260.js");
var i = require("./909722.js");
var o = require("../vendor/667294.js");
var s = require("./302977.js");
var l = require("./376969.js");
var a = require("../vendor/973935.js");
var u = require("./570573.js");
var c = require("./99299.js");
var d = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined ? o.useLayoutEffect : o.useEffect;
function g(e) {
  return e.getEditorState().read(s.$canShowPlaceholderCurry(e.isComposing()));
}
function f({
  content: e
}) {
  var [t] = r.useLexicalComposerContext();
  t = function (e) {
    let [t, n] = o.useState(() => g(e));
    d(() => {
      function t() {
        let t = g(e);
        n(t);
      }
      t();
      return l.mergeRegister(e.registerUpdateListener(() => {
        t();
      }), e.registerEditableListener(() => {
        t();
      }));
    }, [e]);
    return t;
  }(t);
  let n = i();
  if (t) {
    if (typeof e == "function") {
      return e(n);
    } else {
      return e;
    }
  } else {
    return null;
  }
}
exports.PlainTextPlugin = function ({
  contentEditable: e,
  placeholder: t,
  ErrorBoundary: n
}) {
  let [i] = r.useLexicalComposerContext();
  n = function (e, t) {
    let [n, r] = o.useState(() => e.getDecorators());
    d(() => e.registerDecoratorListener(e => {
      a.flushSync(() => {
        r(e);
      });
    }), [e]);
    o.useEffect(() => {
      r(e.getDecorators());
    }, [e]);
    return o.useMemo(() => {
      let r = [];
      let i = Object.keys(n);
      for (let s = 0; s < i.length; s++) {
        let l = i[s];
        let u = o.createElement(t, {
          onError: t => e._onError(t)
        }, o.createElement(o.Suspense, {
          fallback: null
        }, n[l]));
        let c = e.getElementByKey(l);
        if (c !== null) {
          r.push(a.createPortal(u, c, l));
        }
      }
      return r;
    }, [t, n, e]);
  }(i, n);
  (function (e) {
    d(() => l.mergeRegister(c.registerPlainText(e), u.registerDragonSupport(e)), [e]);
  })(i);
  return o.createElement(o.Fragment, null, e, o.createElement(f, {
    content: t
  }), n);
};
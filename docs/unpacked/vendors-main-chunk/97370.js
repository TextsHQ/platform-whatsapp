var r = require("./932998.js");
exports.registerDragonSupport = function (e) {
  let t = window.location.origin;
  let n = n => {
    if (n.origin === t) {
      var i = e.getRootElement();
      if (document.activeElement === i && typeof (i = n.data) == "string") {
        try {
          var o = JSON.parse(i);
        } catch (e) {
          return;
        }
        if (o && o.protocol === "nuanria_messaging" && o.type === "request" && (o = o.payload) && o.functionId === "makeChanges" && (o = o.args)) {
          const [t, i, s, l, a] = o;
          e.update(() => {
            const e = r.$getSelection();
            if (r.$isRangeSelection(e)) {
              var o = e.anchor;
              let u = o.getNode();
              let c = 0;
              let d = 0;
              if (r.$isTextNode(u) && t >= 0 && i >= 0) {
                c = t;
                d = t + i;
                e.setTextNodeRange(u, c, u, d);
              }
              if (!(c === d && s === "")) {
                e.insertRawText(s);
                u = o.getNode();
              }
              if (r.$isTextNode(u)) {
                c = l;
                d = l + a;
                c = c > (o = u.getTextContentSize()) ? o : c;
                d = d > o ? o : d;
                e.setTextNodeRange(u, c, u, d);
              }
              n.stopImmediatePropagation();
            }
          });
        }
      }
    }
  };
  window.addEventListener("message", n, true);
  return () => {
    window.removeEventListener("message", n, true);
  };
};
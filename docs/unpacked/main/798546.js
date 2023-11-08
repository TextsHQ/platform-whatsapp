var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, l.useRef)(false);
  const n = (0, i.default)(() => {
    const n = new o.RenderMarker(e);
    if (!(document.hasFocus() || t.current)) {
      n.commit(r.QuickLogActionType.CANCEL);
      t.current = true;
    }
    return n;
  });
  (0, u.useListener)(document, "blur", () => {
    if (!t.current) {
      n.current.commit(r.QuickLogActionType.CANCEL);
      t.current = true;
    }
  });
  (0, s.default)({
    onDOMCommit: () => {
      if (!t.current) {
        n.current.markDOMCommit();
      }
    },
    onMount: () => {
      if (!t.current) {
        n.current.markMounted();
      }
    },
    onBeforePaint: () => {
      if (!t.current) {
        n.current.markPaintedStart();
      }
    },
    onAfterPaint: () => {
      if (!t.current) {
        n.current.markPaintedEnd();
        n.current.commit(r.QuickLogActionType.SUCCESS);
        t.current = true;
      }
    },
    onError: () => {
      if (!t.current) {
        n.current.commit(r.QuickLogActionType.FAIL);
        t.current = true;
      }
    },
    onUnmount: () => {
      if (!t.current) {
        n.current.commit(r.QuickLogActionType.CANCEL);
        t.current = true;
      }
    }
  });
};
var r = require("../app/15842.js");
var o = require("./991706.js");
var l = require("../vendor/667294.js");
var i = a(require("../app/637660.js"));
var u = require("../app/808446.js");
var s = a(require("./308876.js"));
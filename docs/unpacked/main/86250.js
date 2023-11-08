var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/196127.js");
var o = require("../app/172259.js");
var l = a(require("../app/556869.js"));
var i = require("../vendor/667294.js");
var u = require("../app/655241.js");
var s = a(require("../app/558532.js"));
function c(e, t) {
  const n = (0, u.useModelValues)(e.mediaData, ["filehash", "mediaStage"]);
  const a = (0, i.useRef)(null);
  const c = (0, i.useMemo)(() => r.InMemoryMediaBlobCache.has(n.filehash), [n]);
  const d = e => {
    const t = r.InMemoryMediaBlobCache.get(e);
    if (!t) {
      throw (0, l.default)("Cannot call createURL when the blob does not exist.");
    }
    a.current = t;
    const n = new Blob([t], {
      type: t.type
    });
    return window.URL.createObjectURL(n);
  };
  const [f, p] = (0, i.useState)(() => c ? d(n.filehash) : null);
  (0, i.useEffect)(() => {
    if (!c && n.mediaStage === o.MEDIA_DATA_STAGE.RESOLVED && e.downloadMedia) {
      e.downloadMedia();
    }
  }, []);
  (0, s.default)(() => {
    var e;
    if (f) {
      e = f;
      window.URL.revokeObjectURL(e);
    }
  });
  const m = () => {
    const e = a.current;
    if (!e) {
      throw (0, l.default)("Cannot call refreshBlob when the blob does not exist.");
    }
    const t = new Blob([e], {
      type: e.type
    });
    const n = window.URL.createObjectURL(t);
    if (f) {
      window.URL.revokeObjectURL(f);
    }
    p(n);
  };
  (0, i.useEffect)(() => {
    const e = n.filehash;
    if (c && !f) {
      p(d(e));
    }
  }, [c, n.filehash, f]);
  (0, i.useImperativeHandle)(t, () => ({
    refreshBlob: m
  }));
  if (f) {
    return e.children(f);
  } else {
    return e.placeholderRenderer();
  }
}
var d = (0, i.forwardRef)(c);
exports.default = d;
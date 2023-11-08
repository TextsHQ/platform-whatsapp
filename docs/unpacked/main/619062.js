Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    mimetype: t,
    filename: n
  } = e;
  return (0, o.useMemo)(() => {
    var e;
    let o;
    let l;
    var i;
    var u;
    if (r.DOCUMENT_MIMETYPES.hasOwnProperty(t)) {
      o = (i = r.DOCUMENT_MIMETYPES[t]) === null || i === undefined || (u = i.ext) === null || u === undefined ? undefined : u.toLowerCase();
      l = t;
    }
    const s = n ? (0, a.getFileExtension)(n) : null;
    var c;
    if (o == null || s != null && o !== s) {
      o = s;
      l = o != null && (c = r.EXT_TO_MIME === null || r.EXT_TO_MIME === undefined ? undefined : r.EXT_TO_MIME[o]) !== null && c !== undefined ? c : null;
    }
    return {
      ext: o,
      mime: l,
      icon: l != null && ((e = r.DOCUMENT_MIMETYPES[l]) === null || e === undefined ? undefined : e.icon) || "icon-doc-generic"
    };
  }, [t, n]);
};
var a = require("../app/698210.js");
var r = require("../app/937484.js");
var o = require("../vendor/667294.js");
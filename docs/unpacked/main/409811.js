var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t,
    options: n
  } = e;
  if (t.isFromTemplate || t.isDynamicReplyButtonsMsg) {
    const e = t.pageCount > 0 ? u.fbt._({
      "*": "{count} pages",
      _1: "1 page"
    }, [u.fbt._plural(t.pageCount, "count")], {
      hk: "23rvsI"
    }).toString() : null;
    const a = (0, o.maybeAddFooter)(t.caption, t);
    if (a != null) {
      if (Boolean(n.unformat)) {
        return (0, l.default)(t, a);
      } else {
        return a;
      }
    } else {
      return (0, r.default)([a || i.default._("Document", null, {
        hk: "p3EXI"
      }).toString(), e]).join(" • ");
    }
  }
  if (t.isVcardOverMmsDocument && t.mediaData.parsedVcards) {
    return (0, o.formatParsedVcardsDisplayText)(t.mediaData.parsedVcards);
  }
  const a = (0, o.maybeAddFooter)(t.caption, t);
  if (a != null && a !== "" && t.isCaptionByUser) {
    return a;
  }
  const s = t.pageCount > 0 ? u.fbt._({
    "*": "{count} pages",
    _1: "1 page"
  }, [u.fbt._plural(t.pageCount, "count")], {
    hk: "23rvsI"
  }).toString() : null;
  return (0, r.default)([t.mediaData.filename || i.default._("Document", null, {
    hk: "p3EXI"
  }).toString(), s]).join(" • ");
};
var r = a(require("../vendor/639693.js"));
var o = require("./758669.js");
var l = a(require("../app/640391.js"));
var i = a(require("../app/286816.js"));
var u = require("../vendor/548360.js");
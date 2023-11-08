var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enrich = function (e, t) {
  let n;
  switch ((0, o.previewType)(t)) {
    case "pdf":
      n = l(e);
      break;
    case "msoffice":
      n = function () {
        return u.apply(this, arguments);
      }(e);
      break;
    default:
      n = Promise.resolve();
  }
  return (0, a.promiseTimeout)(n, 3000, "Document enrichment timeout").catch(() => null);
};
exports.enrichPdf = l;
var i = r(require("../vendor/348926.js"));
var a = require("./434517.js");
var o = require("./937484.js");
var s = require("./231170.js");
function l(e) {
  let t;
  return (0, s.fileToPdf)(e).then(e => {
    t = e;
    return (0, s.pdfToImg)(e, 1);
  }).catch(() => {
    __LOG__(2)`pdf preview generation failed`;
    return null;
  }).finally(() => {
    if (t) {
      (0, s.releasePdf)(t);
    }
  });
}
function u() {
  return (u = (0, i.default)(function* () {})).apply(this, arguments);
}
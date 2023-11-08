Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseErrorFields = undefined;
const r = new (require("./347387.js").WapParser)("parseErrorFields", e => {
  const t = [];
  e.forEachChildWithTag("field", e => {
    const n = e.hasAttr("detail") ? e.maybeAttrString("detail") : null;
    t.push({
      name: e.attrString("name"),
      reason: e.attrString("reason"),
      detail: n
    });
  });
  return t;
});
exports.parseErrorFields = r;
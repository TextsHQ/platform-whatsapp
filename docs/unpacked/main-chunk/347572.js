var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$createQuoteLineNode = u;
exports.$isQuoteLineNode = d;
exports.$transformToQuoteLineNode = function (e) {
  if (d(e)) {
    return e;
  }
  const t = u(e.getTextContent());
  e.replace(t);
  return t;
};
exports.QuoteLineNode = undefined;
var r = require("./14544.js");
var a = require("../app/396574.js");
var l = require("../app/175448.js");
var i = o(require("../app/556869.js"));
o(require("../app/156720.js"));
class s extends r.TextNode {
  static create(e) {
    return new s(e);
  }
  static getType() {
    return "quote-line";
  }
  static clone(e) {
    return new s(e.__text, e.__key);
  }
  static importJSON() {
    throw (0, i.default)("Deserialization of QuoteLineNode is unsupported");
  }
  createDOM(e) {
    const t = super.createDOM(e);
    t.className = (0, a.classnamesConvertMeToStylexPlease)(t.className, "qdx05og3 tfi3kv3m r5hqxq7o tatwgjk8 nnqp5cjw skc759kk l802hdyd flcm9zni jiaumjzp ckfn5qle izle6v5g");
    t.textContent = "　";
    t.dataset[l.PLAIN_TEXT_DATA_ATTR] = ">";
    return t;
  }
  updateDOM(e, t, n) {
    const o = super.updateDOM(e, t, n);
    t.textContent = "　";
    return o;
  }
  exportJSON() {
    throw (0, i.default)("Serialization of QuoteLineNode is unsupported");
  }
}
function u(e) {
  return new s(e).setMode("token");
}
function d(e) {
  return e instanceof s;
}
exports.QuoteLineNode = s;
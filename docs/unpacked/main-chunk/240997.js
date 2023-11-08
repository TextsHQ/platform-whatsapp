var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BidiParagraphNode = undefined;
var r = require("./14544.js");
var a = require("../app/12132.js");
var l = o(require("../app/932325.js"));
var i = require("./330007.js");
var s = require("./699306.js");
var u = require("./347572.js");
var d = o(require("../app/556869.js"));
class c extends r.ParagraphNode {
  static getType() {
    return "bidi-paragraph";
  }
  static clone(e) {
    return new c(e.__key);
  }
  updateDOM(e, t) {
    this.updateDOMDirection(t);
    this.updateDOMTextIndent(t);
    this.updateDOMMargin(t);
    return false;
  }
  static importJSON() {
    throw (0, d.default)("Deserialization of BidiParagraphNode is unsupported");
  }
  getTargetIndent() {
    if (this.getNumberNode() || this.getBulletNode()) {
      return 0.75;
    } else if (this.getQuoteLineNode()) {
      return 0.35;
    } else {
      return 0;
    }
  }
  getBulletNode() {
    const e = this.getFirstChild();
    if (e instanceof i.ListBulletNode) {
      return e;
    } else {
      return null;
    }
  }
  getNumberNode() {
    const e = this.getFirstChild();
    if (e instanceof s.ListNumberNode) {
      return e;
    } else {
      return null;
    }
  }
  getQuoteLineNode() {
    const e = this.getFirstChild();
    if (e instanceof u.QuoteLineNode) {
      return e;
    } else {
      return null;
    }
  }
  updateDOMTextIndent(e) {
    e.style.textIndent = "0";
    if (this.getBulletNode()) {
      e.style.textIndent = "-12px";
    }
    const t = this.getNumberNode();
    if (t) {
      e.style.textIndent = `-${t.getTextContentSize()}ch`;
    }
    if (this.getQuoteLineNode()) {
      e.style.textIndent = "-14px";
    }
  }
  updateDOMDirection(e) {
    let t = l.default.isRTL() ? "rtl" : "ltr";
    const n = this.getTextContent();
    if (n) {
      const e = (0, a.dir)(n);
      t = e != null ? e : t;
    }
    e.dir = t;
  }
  updateDOMMargin(e) {
    let t = 0;
    let n = 0;
    const o = this.getBulletNode() || this.getNumberNode();
    if (o) {
      const e = this.getPreviousSibling();
      const r = (e == null ? undefined : e.getBulletNode()) || (e == null ? undefined : e.getNumberNode());
      if (!(r && r.getType() === o.getType())) {
        t = 4;
      }
      const a = this.getNextSibling();
      const l = (a == null ? undefined : a.getBulletNode()) || (a == null ? undefined : a.getNumberNode());
      if (!(l && l.getType() === o.getType())) {
        n = 4;
      }
    }
    if (this.getQuoteLineNode()) {
      t = 4;
      n = 4;
    }
    e.style.marginTop = `${t}px`;
    e.style.marginBottom = `${n}px`;
  }
  exportJSON() {
    throw (0, d.default)("Serialization of BidiParagraphNode is unsupported");
  }
}
exports.BidiParagraphNode = c;
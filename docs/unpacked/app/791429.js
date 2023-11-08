var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Clipboard = exports.APP_TEXT_MIMETYPE = undefined;
var i = r(require("../vendor/396026.js"));
var a = r(require("../vendor/616579.js"));
var o = r(require("./733775.js"));
var s = require("./175448.js");
var l = require("./306703.js");
var u = r(require("./562815.js"));
var c = r(require("./554676.js"));
var d = r(require("./52755.js"));
exports.APP_TEXT_MIMETYPE = "application/whatsapp";
class p {
  constructor(e) {
    this._value = e || "";
  }
  append(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    this._value = [this.toString(), e].filter(e => e).join(t);
    return this;
  }
  prepend(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    this._value = [e, this.toString()].filter(e => e).join(t);
    return this;
  }
  toString() {
    return this._value;
  }
}
class f {
  static fromEl(e) {
    const t = (arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, s.isCopyable)(e)) ? (0, s.getAppTextTemplateData)(e) : null;
    return new f("", t);
  }
  static getTemplate(e) {
    let t = e;
    if (!t) {
      return null;
    }
    if (!(t instanceof HTMLElement)) {
      if (!t.parentElement) {
        return null;
      }
      t = t.parentElement;
    }
    let n = new f("${appText}");
    let r = t;
    let i = 5;
    let a = 0;
    let o = false;
    for (; r && a < i;) {
      if (r instanceof HTMLElement && (0, s.isCopyable)(r)) {
        n = f.fromEl(r, true).append(n.toString());
        o = o || !n.isPlainText();
        i = 5;
      } else {
        a++;
      }
      r = r.parentElement;
    }
    if (o) {
      return n.toString();
    } else {
      return null;
    }
  }
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    let t = arguments.length > 1 ? arguments[1] : undefined;
    this._innerAppText = new p(e);
    this._appTextTemplate = t;
  }
  append(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    this._innerAppText.append(e, t);
    return this;
  }
  prepend(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    this._innerAppText.prepend(e, t);
    return this;
  }
  isPlainText() {
    return Boolean(!this._appTextTemplate && this._appTextTemplate !== "");
  }
  toString() {
    if (this._appTextTemplate || this._appTextTemplate === "") {
      return this._appTextTemplate.replace(/\$\{appText\}/g, this._innerAppText.toString());
    } else {
      return this._innerAppText.toString();
    }
  }
}
class _ {
  constructor(e, t) {
    const n = e || "";
    this._plainText = new p(n);
    if (t) {
      this._appText = new f(n, t);
    }
  }
  static _copyableChildrenToClipboard(e) {
    const t = (0, s.findCopyableChildren)(e);
    return (0, a.default)(t, (e, t) => e.prepend(this.fromEl(t), "\n"), new _());
  }
  static _pruneRangeNodes(e, t, n) {
    let r = t.cloneContents().childNodes;
    let i = (0, d.default)(t);
    const a = [];
    const o = [];
    for (let t = 0; t < r.length; t++) {
      const s = r[t];
      const u = i[t].parentElement;
      if ((n || (0, l.isSelectable)(i[t]) || (0, l.hasSelectableChildren)(s)) && (e.contains(i[t]) || u && u.contains(e))) {
        a.push(s);
        o.push(i[t]);
      }
    }
    r = a;
    i = o;
    let s = n;
    if (r.length === 1) {
      const e = r[0];
      s = s || (0, l.isSelectable)(i[0]);
      if (!s) {
        r = (0, l.findSelectableChildren)(e, s);
        s = false;
      }
    }
    return {
      rangeNodes: r,
      parentIsSelectable: s
    };
  }
  static fromCopyableEl(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    const n = (0, s.getPrePlainTextData)(e) || "";
    const r = new _(n);
    const i = (0, s.getPlainTextData)(e);
    const o = (0, s.getAppTextTemplateData)(e);
    const c = new _("", o);
    if (i || i === "") {
      c.appendPlainText(i);
      return r.append(c);
    } else if (t || (0, l.isSelectable)(e)) {
      if ((0, u.default)(e, "br")) {
        return r.appendPlainText("\n");
      } else {
        (0, a.default)(e.childNodes, (e, t) => {
          const n = (0, u.default)(t, "div") ? "\n" : "";
          return e.prepend(this.fromSelectableNode(t), n);
        }, c);
        return r.append(c);
      }
    } else {
      c.append(this._copyableChildrenToClipboard(e));
      return r.append(c);
    }
  }
  static fromEl(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    if ((0, s.isCopyable)(e) || t) {
      return this.fromCopyableEl(e, t);
    } else {
      return this._copyableChildrenToClipboard(e);
    }
  }
  static fromNode(e, t) {
    if (e instanceof HTMLElement) {
      return this.fromEl(e, t);
    } else if (t) {
      return this.fromSelectableNode(e);
    } else {
      return new _();
    }
  }
  static fromRange(e, t) {
    const n = t.commonAncestorContainer;
    const r = f.getTemplate(n);
    const i = new _("", r);
    const o = (0, l.isSelectAll)(n) ? n : (0, l.findSelectAllParent)(n);
    if (o instanceof HTMLElement) {
      return i.append(this.fromCopyableEl(o));
    }
    const {
      parentIsSelectable: s,
      rangeNodes: u
    } = this._pruneRangeNodes(e, t, (0, l.isSelectable)(n));
    return (0, a.default)(u, (e, t) => {
      const n = this.fromNode(t, s);
      const r = s || n.toAppString().endsWith("\n") ? "" : "\n";
      return e.prepend(n, r);
    }, i);
  }
  static fromSelectableNode(e) {
    if ((0, c.default)(e)) {
      return new _(e.textContent);
    }
    if (!(e instanceof HTMLElement)) {
      return new _();
    }
    const t = new _();
    (0, o.default)(e, e => (0, c.default)(e) || (0, s.isCopyable)(e) ? [] : Array.from(e.childNodes), n => {
      let r;
      if ((0, s.isCopyable)(n) && n instanceof HTMLElement) {
        r = this.fromCopyableEl(n, true);
        t.append(r);
      } else if ((0, c.default)(n)) {
        t.appendPlainText(n.textContent);
      } else if ((0, u.default)(e, "br")) {
        t.appendPlainText("\n");
      }
    });
    return t;
  }
  static fromSelection(e, t) {
    const n = new _();
    return (0, i.default)(t.rangeCount).map(n => {
      const r = t.getRangeAt(n);
      return this.fromRange(e, r);
    }).reduce((e, t) => e.append(t, "\n"), n);
  }
  append(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    if (e.hasAppText()) {
      this._appText = this._appText || new f(this.toPlainString());
      this._appText.append(e.toAppString(), t);
    } else if (this.hasAppText()) {
      this._appText.append(e.toAppString(), t);
    }
    this._plainText.append(e.toPlainString(), t);
    return this;
  }
  appendPlainText(e) {
    this.append(new _(e));
    return this;
  }
  prepend(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    if (e.hasAppText()) {
      this._appText = this._appText || new f(this.toPlainString());
      this._appText.prepend(e.toAppString(), t);
    } else if (this.hasAppText()) {
      this._appText.prepend(e.toAppString(), t);
    }
    this._plainText.prepend(e.toPlainString(), t);
    return this;
  }
  hasAppText() {
    return Boolean(this._appText);
  }
  toAppText() {
    if (this.hasAppText()) {
      return this._appText;
    } else {
      return new f(this.toPlainString());
    }
  }
  toPlainString() {
    return this._plainText.toString();
  }
  toAppString() {
    if (this.hasAppText()) {
      return this._appText.toString();
    } else {
      return this.toPlainString();
    }
  }
}
exports.Clipboard = _;
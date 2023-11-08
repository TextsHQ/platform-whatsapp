var r = require("./986907.js");
var i = require("./389408.js");
var o = require("./376969.js");
var s = require("./932998.js");
function l(e, t) {
  if (document.caretRangeFromPoint !== undefined) {
    if ((e = document.caretRangeFromPoint(e, t)) === null) {
      return null;
    } else {
      return {
        node: e.startContainer,
        offset: e.startOffset
      };
    }
  } else if (document.caretPositionFromPoint !== "undefined") {
    if ((e = document.caretPositionFromPoint(e, t)) === null) {
      return null;
    } else {
      return {
        node: e.offsetNode,
        offset: e.offset
      };
    }
  } else {
    return null;
  }
}
let a = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
let u = a && "documentMode" in document ? document.documentMode : null;
if (a) {
  /Mac|iPod|iPhone|iPad/.test(navigator.platform);
}
if (a) {
  /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
}
let c = !(!a || !("InputEvent" in window) || u) && "getTargetRanges" in new window.InputEvent("input");
let d = a && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
let g = a && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
let f = a && /^(?=.*Chrome).*/i.test(navigator.userAgent);
let h = a && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !f;
let p = s.createCommand("DRAG_DROP_PASTE_FILE");
class _ extends s.ElementNode {
  static getType() {
    return "quote";
  }
  static clone(e) {
    return new _(e.__key);
  }
  constructor(e) {
    super(e);
  }
  createDOM(e) {
    let t = document.createElement("blockquote");
    o.addClassNamesToElement(t, e.theme.quote);
    return t;
  }
  updateDOM() {
    return false;
  }
  static importDOM() {
    return {
      blockquote: () => ({
        conversion: T,
        priority: 0
      })
    };
  }
  exportDOM(e) {
    ({
      element: e
    } = super.exportDOM(e));
    if (e && this.isEmpty()) {
      e.append(document.createElement("br"));
    }
    if (e) {
      var t = this.getFormatType();
      e.style.textAlign = t;
      if (t = this.getDirection()) {
        e.dir = t;
      }
    }
    return {
      element: e
    };
  }
  static importJSON(e) {
    let t = m();
    t.setFormat(e.format);
    t.setIndent(e.indent);
    t.setDirection(e.direction);
    return t;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "quote"
    };
  }
  insertNewAfter(e, t) {
    e = s.$createParagraphNode();
    let n = this.getDirection();
    e.setDirection(n);
    this.insertAfter(e, t);
    return e;
  }
  collapseAtStart() {
    let e = s.$createParagraphNode();
    this.getChildren().forEach(t => e.append(t));
    this.replace(e);
    return true;
  }
}
function m() {
  return s.$applyNodeReplacement(new _());
}
class y extends s.ElementNode {
  static getType() {
    return "heading";
  }
  static clone(e) {
    return new y(e.__tag, e.__key);
  }
  constructor(e, t) {
    super(t);
    this.__tag = e;
  }
  getTag() {
    return this.__tag;
  }
  createDOM(e) {
    let t = this.__tag;
    let n = document.createElement(t);
    if ((e = e.theme.heading) !== undefined) {
      o.addClassNamesToElement(n, e[t]);
    }
    return n;
  }
  updateDOM() {
    return false;
  }
  static importDOM() {
    return {
      h1: () => ({
        conversion: v,
        priority: 0
      }),
      h2: () => ({
        conversion: v,
        priority: 0
      }),
      h3: () => ({
        conversion: v,
        priority: 0
      }),
      h4: () => ({
        conversion: v,
        priority: 0
      }),
      h5: () => ({
        conversion: v,
        priority: 0
      }),
      h6: () => ({
        conversion: v,
        priority: 0
      }),
      p: e => (e = e.firstChild) !== null && N(e) ? {
        conversion: () => ({
          node: null
        }),
        priority: 3
      } : null,
      span: e => N(e) ? {
        conversion: () => ({
          node: E("h1")
        }),
        priority: 3
      } : null
    };
  }
  exportDOM(e) {
    ({
      element: e
    } = super.exportDOM(e));
    if (e && this.isEmpty()) {
      e.append(document.createElement("br"));
    }
    if (e) {
      var t = this.getFormatType();
      e.style.textAlign = t;
      if (t = this.getDirection()) {
        e.dir = t;
      }
    }
    return {
      element: e
    };
  }
  static importJSON(e) {
    let t = E(e.tag);
    t.setFormat(e.format);
    t.setIndent(e.indent);
    t.setDirection(e.direction);
    return t;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      tag: this.getTag(),
      type: "heading",
      version: 1
    };
  }
  insertNewAfter(e, t = true) {
    e = (e = e ? e.anchor.offset : 0) > 0 && e < this.getTextContentSize() ? E(this.getTag()) : s.$createParagraphNode();
    let n = this.getDirection();
    e.setDirection(n);
    this.insertAfter(e, t);
    return e;
  }
  collapseAtStart() {
    let e = this.isEmpty() ? s.$createParagraphNode() : E(this.getTag());
    this.getChildren().forEach(t => e.append(t));
    this.replace(e);
    return true;
  }
  extractWithChild() {
    return true;
  }
}
function N(e) {
  return e.nodeName.toLowerCase() === "span" && e.style.fontSize === "26pt";
}
function v(e) {
  let t = null;
  if (!((e = e.nodeName.toLowerCase()) !== "h1" && e !== "h2" && e !== "h3" && e !== "h4" && e !== "h5" && e !== "h6")) {
    t = E(e);
  }
  return {
    node: t
  };
}
function T() {
  return {
    node: m()
  };
}
function E(e) {
  return s.$applyNodeReplacement(new y(e));
}
function C(e) {
  let t = null;
  if (e instanceof DragEvent) {
    t = e.dataTransfer;
  } else if (e instanceof ClipboardEvent) {
    t = e.clipboardData;
  }
  if (t === null) {
    return [false, [], false];
  }
  var n = t.types;
  e = n.includes("Files");
  n = n.includes("text/html") || n.includes("text/plain");
  return [e, Array.from(t.files), n];
}
function x(e) {
  var t = s.$getSelection();
  if (!s.$isRangeSelection(t)) {
    return false;
  }
  let n = new Set();
  t = t.getNodes();
  for (let s = 0; s < t.length; s++) {
    var r = t[s];
    var i = r.getKey();
    if (!n.has(i)) {
      i = (r = o.$getNearestBlockElementAncestorOrThrow(r)).getKey();
      if (r.canIndent() && !n.has(i)) {
        n.add(i);
        e(r);
      }
    }
  }
  return n.size > 0;
}
function b(e) {
  e = s.$getNearestNodeFromDOMNode(e);
  return s.$isDecoratorNode(e);
}
exports.$createHeadingNode = E;
exports.$createQuoteNode = m;
exports.$isHeadingNode = function (e) {
  return e instanceof y;
};
exports.$isQuoteNode = function (e) {
  return e instanceof _;
};
exports.DRAG_DROP_PASTE = p;
exports.HeadingNode = y;
exports.QuoteNode = _;
exports.eventFiles = C;
exports.registerRichText = function (e) {
  return o.mergeRegister(e.registerCommand(s.CLICK_COMMAND, () => {
    const e = s.$getSelection();
    return !!s.$isNodeSelection(e) && (e.clear(), true);
  }, 0), e.registerCommand(s.DELETE_CHARACTER_COMMAND, e => {
    const t = s.$getSelection();
    return !!s.$isRangeSelection(t) && (t.deleteCharacter(e), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DELETE_WORD_COMMAND, e => {
    const t = s.$getSelection();
    return !!s.$isRangeSelection(t) && (t.deleteWord(e), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DELETE_LINE_COMMAND, e => {
    const t = s.$getSelection();
    return !!s.$isRangeSelection(t) && (t.deleteLine(e), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.CONTROLLED_TEXT_INSERTION_COMMAND, t => {
    const n = s.$getSelection();
    if (typeof t == "string") {
      if (s.$isRangeSelection(n)) {
        n.insertText(t);
      } else {
        s.DEPRECATED_$isGridSelection(n);
      }
    } else {
      if (!s.$isRangeSelection(n) && !s.DEPRECATED_$isGridSelection(n)) {
        return false;
      }
      const i = t.dataTransfer;
      if (i != null) {
        r.$insertDataTransferForRichText(i, n, e);
      } else if (s.$isRangeSelection(n) && (t = t.data)) {
        n.insertText(t);
      }
    }
    return true;
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.REMOVE_TEXT_COMMAND, () => {
    const e = s.$getSelection();
    return !!s.$isRangeSelection(e) && (e.removeText(), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.FORMAT_TEXT_COMMAND, e => {
    const t = s.$getSelection();
    return !!s.$isRangeSelection(t) && (t.formatText(e), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.FORMAT_ELEMENT_COMMAND, e => {
    var t = s.$getSelection();
    if (!s.$isRangeSelection(t) && !s.$isNodeSelection(t)) {
      return false;
    }
    t = t.getNodes();
    for (const n of t) {
      o.$getNearestBlockElementAncestorOrThrow(n).setFormat(e);
    }
    return true;
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INSERT_LINE_BREAK_COMMAND, e => {
    const t = s.$getSelection();
    return !!s.$isRangeSelection(t) && (t.insertLineBreak(e), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INSERT_PARAGRAPH_COMMAND, () => {
    const e = s.$getSelection();
    return !!s.$isRangeSelection(e) && (e.insertParagraph(), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INSERT_TAB_COMMAND, () => {
    s.$insertNodes([s.$createTabNode()]);
    return true;
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INDENT_CONTENT_COMMAND, () => x(e => {
    const t = e.getIndent();
    e.setIndent(t + 1);
  }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.OUTDENT_CONTENT_COMMAND, () => x(e => {
    const t = e.getIndent();
    if (t > 0) {
      e.setIndent(t - 1);
    }
  }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_UP_COMMAND, e => {
    var t = s.$getSelection();
    if (s.$isNodeSelection(t) && !b(e.target)) {
      if ((e = t.getNodes()).length > 0) {
        e[0].selectPrevious();
        return true;
      }
    } else if (s.$isRangeSelection(t) && (t = s.$getAdjacentNode(t.focus, true), s.$isDecoratorNode(t) && !t.isIsolated() && !t.isInline())) {
      t.selectPrevious();
      e.preventDefault();
      return true;
    }
    return false;
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_DOWN_COMMAND, e => {
    var t = s.$getSelection();
    if (s.$isNodeSelection(t)) {
      if ((e = t.getNodes()).length > 0) {
        e[0].selectNext(0, 0);
        return true;
      }
    } else if (s.$isRangeSelection(t)) {
      let n = t.focus;
      if (n.key === "root" && n.offset === s.$getRoot().getChildrenSize()) {
        e.preventDefault();
        return true;
      }
      t = s.$getAdjacentNode(t.focus, false);
      if (s.$isDecoratorNode(t) && !t.isIsolated() && !t.isInline()) {
        t.selectNext();
        e.preventDefault();
        return true;
      }
    }
    return false;
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_LEFT_COMMAND, e => {
    const t = s.$getSelection();
    if (s.$isNodeSelection(t)) {
      var n = t.getNodes();
      if (n.length > 0) {
        e.preventDefault();
        n[0].selectPrevious();
        return true;
      }
    }
    return !!s.$isRangeSelection(t) && !!i.$shouldOverrideDefaultCharacterSelection(t, true) && (n = e.shiftKey, e.preventDefault(), i.$moveCharacter(t, n, true), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_RIGHT_COMMAND, e => {
    const t = s.$getSelection();
    if (s.$isNodeSelection(t) && !b(e.target)) {
      var n = t.getNodes();
      if (n.length > 0) {
        e.preventDefault();
        n[0].selectNext(0, 0);
        return true;
      }
    }
    return !!s.$isRangeSelection(t) && (n = e.shiftKey, !!i.$shouldOverrideDefaultCharacterSelection(t, false) && (e.preventDefault(), i.$moveCharacter(t, n, false), true));
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_BACKSPACE_COMMAND, t => {
    if (b(t.target)) {
      return false;
    }
    const n = s.$getSelection();
    if (!s.$isRangeSelection(n)) {
      return false;
    }
    t.preventDefault();
    ({
      anchor: t
    } = n);
    const r = t.getNode();
    if (n.isCollapsed() && t.offset === 0 && !s.$isRootNode(r) && o.$getNearestBlockElementAncestorOrThrow(r).getIndent() > 0) {
      return e.dispatchCommand(s.OUTDENT_CONTENT_COMMAND, undefined);
    } else {
      return e.dispatchCommand(s.DELETE_CHARACTER_COMMAND, true);
    }
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_DELETE_COMMAND, t => {
    if (b(t.target)) {
      return false;
    }
    const n = s.$getSelection();
    return !!s.$isRangeSelection(n) && (t.preventDefault(), e.dispatchCommand(s.DELETE_CHARACTER_COMMAND, false));
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ENTER_COMMAND, t => {
    const n = s.$getSelection();
    if (!s.$isRangeSelection(n)) {
      return false;
    }
    if (t !== null) {
      if ((g || d || h) && c) {
        return false;
      }
      t.preventDefault();
      if (t.shiftKey) {
        return e.dispatchCommand(s.INSERT_LINE_BREAK_COMMAND, false);
      }
    }
    return e.dispatchCommand(s.INSERT_PARAGRAPH_COMMAND, undefined);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ESCAPE_COMMAND, () => {
    const t = s.$getSelection();
    return !!s.$isRangeSelection(t) && (e.blur(), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DROP_COMMAND, t => {
    const [, n] = C(t);
    if (n.length > 0) {
      var r = l(t.clientX, t.clientY);
      if (r !== null) {
        const {
          offset: t,
          node: o
        } = r;
        var i = s.$getNearestNodeFromDOMNode(o);
        if (i !== null) {
          r = s.$createRangeSelection();
          if (s.$isTextNode(i)) {
            r.anchor.set(i.getKey(), t, "text");
            r.focus.set(i.getKey(), t, "text");
          } else {
            const e = i.getParentOrThrow().getKey();
            i = i.getIndexWithinParent() + 1;
            r.anchor.set(e, i, "element");
            r.focus.set(e, i, "element");
          }
          r = s.$normalizeSelection__EXPERIMENTAL(r);
          s.$setSelection(r);
        }
        e.dispatchCommand(p, n);
      }
      t.preventDefault();
      return true;
    }
    t = s.$getSelection();
    return !!s.$isRangeSelection(t);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DRAGSTART_COMMAND, e => {
    [e] = C(e);
    const t = s.$getSelection();
    return !(e && !s.$isRangeSelection(t));
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DRAGOVER_COMMAND, e => {
    var [t] = C(e);
    const n = s.$getSelection();
    return !(t && !s.$isRangeSelection(n)) && ((t = l(e.clientX, e.clientY)) !== null && (t = s.$getNearestNodeFromDOMNode(t.node), s.$isDecoratorNode(t) && e.preventDefault()), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.COPY_COMMAND, t => {
    r.copyToClipboard(e, t instanceof ClipboardEvent ? t : null);
    return true;
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.CUT_COMMAND, t => {
    (async function (e, t) {
      await r.copyToClipboard(t, e instanceof ClipboardEvent ? e : null);
      t.update(() => {
        let e = s.$getSelection();
        if (s.$isRangeSelection(e)) {
          e.removeText();
        } else if (s.$isNodeSelection(e)) {
          e.getNodes().forEach(e => e.remove());
        }
      });
    })(t, e);
    return true;
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.PASTE_COMMAND, t => {
    const [, n, i] = C(t);
    if (n.length > 0 && !i) {
      e.dispatchCommand(p, n);
      return true;
    }
    if (s.isSelectionCapturedInDecoratorInput(t.target)) {
      return false;
    }
    const o = s.$getSelection();
    return !(!s.$isRangeSelection(o) && !s.DEPRECATED_$isGridSelection(o)) && (function (e, t) {
      e.preventDefault();
      t.update(() => {
        let n = s.$getSelection();
        let i = e instanceof InputEvent || e instanceof KeyboardEvent ? null : e.clipboardData;
        if (i != null && (s.$isRangeSelection(n) || s.DEPRECATED_$isGridSelection(n))) {
          r.$insertDataTransferForRichText(i, n, t);
        }
      }, {
        tag: "paste"
      });
    }(t, e), true);
  }, s.COMMAND_PRIORITY_EDITOR));
};
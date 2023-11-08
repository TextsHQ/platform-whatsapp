var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$getPreviousRangeSelection = function () {
  const e = (0, r.$getPreviousSelection)();
  if ((0, r.$isRangeSelection)(e)) {
    return e;
  } else {
    return null;
  }
};
exports.$getRangeSelection = c;
exports.$getSelectionParagraph = function () {
  var e;
  const t = c();
  const n = t == null || (e = t.getNodes()) === null || e === undefined ? undefined : e[0];
  if ((0, r.$isParagraphNode)(n)) {
    return n;
  }
  if ((0, r.$isTextNode)(n)) {
    return n.getParent();
  }
  return null;
};
exports.$getSiblingsOffset = function (e) {
  let t = 0;
  let n = e.getPreviousSibling();
  for (; n;) {
    if ((0, r.$isTextNode)(n)) {
      t += n.getTextContent().length;
    }
    n = n.getPreviousSibling();
  }
  return t;
};
exports.$getTextAnchor = i;
exports.$getTextUpToAnchor = function () {
  const e = i();
  if (!e) {
    return null;
  }
  return e.node.getTextContent().slice(0, e.point.offset);
};
exports.$insertLeadingSpace = d;
exports.$insertText = function (e, t) {
  var n;
  const {
    insertLeadingSpace: o = false
  } = t != null ? t : {};
  const a = (n = c()) !== null && n !== undefined ? n : (0, r.$getRoot)().selectEnd();
  const l = (0, r.$createTextNode)(e);
  a.insertNodes([l]);
  if (o) {
    d(l);
  }
};
exports.$insertTrailingSpace = function (e, t) {
  const {
    moveCaret: n = false
  } = t != null ? t : {};
  if (u(e)) {
    return;
  }
  let o = e;
  do {
    o = o.getNextSibling();
  } while (o && !(0, r.$isTextNode)(o));
  if (o && s(o)) {
    return void (n && o.select(1, 1));
  }
  const a = new r.TextNode(" ");
  e.insertAfter(a);
  if (n) {
    a.select();
  }
};
exports.$replaceTextNode = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new r.TextNode("");
  e.replace(t);
  t.selectNext(0, 0);
};
exports.$rootTextContent = function () {
  const e = (0, r.$getRoot)().getChildren();
  const t = [];
  for (const n of e) {
    t.push(n.getTextContent());
  }
  return t.join("\n");
};
exports.$setTextContent = p;
exports.$toTextNode = function (e) {
  const t = new r.TextNode(e.getTextContent());
  e.replace(t);
};
exports.NodeTypeAssertionError = undefined;
exports.assertParagraphNode = function (e) {
  if (!(0, r.$isParagraphNode)(e)) {
    throw new m("ParagraphNode", e);
  }
  return e;
};
exports.assertTextNode = function (e, t) {
  if (!(0, r.$isTextNode)(e)) {
    throw new m("TextNode", e, t);
  }
  return e;
};
exports.getTextContent = function (e) {
  return e.getEditorState().read(() => (0, r.$getRoot)().getChildren().map(e => e.getTextContent()).join("\n"));
};
exports.isCursorAtEnd = function (e) {
  return e.getEditorState().read(() => {
    const e = i();
    return !e || e.point.offset === e.node.getTextContentSize() && e.node === (0, r.$getRoot)().getLastDescendant();
  });
};
exports.isCursorAtStart = function (e) {
  return e.getEditorState().read(() => {
    const e = i();
    return !e || e.point.offset === 0 && e.node === (0, r.$getRoot)().getFirstDescendant();
  });
};
exports.isFocused = f;
exports.selectAll = function (e) {
  e.focus();
  e.update(() => {
    const e = c();
    if (e) {
      if (!(a.$selectAll === null || a.$selectAll === undefined)) {
        (0, a.$selectAll)(e);
      }
    }
  });
};
exports.setTextContent = function (e, t) {
  e.update(() => p(t, f(e)));
};
exports.textNodesIterator = function* e(t) {
  let n = t.getFirstChild();
  for (; n;) {
    var o;
    if ((0, r.$isTextNode)(n)) {
      yield n;
    } else {
      for (const t of e(n)) {
        yield t;
      }
    }
    n = (o = n) === null || o === undefined ? undefined : o.getNextSibling();
  }
};
var r = require("./14544.js");
var a = require("./461882.js");
var l = o(require("../app/670983.js"));
function i() {
  const e = c();
  if (e == null || !e.isCollapsed()) {
    return;
  }
  const t = e.anchor;
  if (t.type !== "text") {
    return;
  }
  const n = t.getNode();
  if ((0, r.$isTextNode)(n)) {
    return {
      point: t,
      node: n
    };
  } else {
    return undefined;
  }
}
function s(e) {
  return (0, r.$isTextNode)(e) && e.getTextContent()[0] === " ";
}
function u(e) {
  const t = (0, r.$isTextNode)(e) ? e.getTextContent() : "";
  return t[t.length - 1] === " ";
}
function d(e, t) {
  const {
    moveCaret: n = false
  } = t != null ? t : {};
  if (s(e) || !e.getPreviousSibling()) {
    return;
  }
  let o = e;
  do {
    o = o.getPreviousSibling();
  } while (o && !(0, r.$isTextNode)(o));
  if (o && u(o)) {
    if (n) {
      const e = o.getTextContent().length;
      o.select(e - 1, e);
    }
    return;
  }
  const a = new r.TextNode(" ");
  e.insertBefore(a);
  if (n) {
    a.select();
  }
}
function c() {
  const e = (0, r.$getSelection)();
  if ((0, r.$isRangeSelection)(e)) {
    return e;
  } else {
    return null;
  }
}
function f(e) {
  return !!e && document.activeElement === e.getRootElement();
}
class m extends Error {
  constructor(e, t, n) {
    var o;
    let r = `Expect node to be a ${e}, but received ${(o = t == null ? undefined : t.getType()) !== null && o !== undefined ? o : "undefined node"}`;
    if (n != null) {
      r += ` (context: ${n})`;
    }
    super(r);
    this.name = "NodeTypeAssertionError";
  }
}
function p(e, t) {
  const n = (0, r.$getRoot)();
  n.clear();
  const o = e.split(/\r?\n/);
  for (let e = 0; e < o.length; e++) {
    n.append((0, r.$createParagraphNode)());
    const t = (0, l.default)(n.getLastChild(), "root.getLastChild<ParagraphNode>()");
    const a = new r.TextNode(o[e]);
    t.append(a);
  }
  if (t) {
    n.selectEnd();
  } else {
    (0, r.$setSelection)(null);
  }
}
exports.NodeTypeAssertionError = m;
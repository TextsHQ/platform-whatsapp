var r = require("./389408.js");
var i = require("./932998.js");
function o(e, t) {
  for (let n of t) {
    if (e.type.startsWith(n)) {
      return true;
    }
  }
  return false;
}
function s(e, t) {
  for (; e !== i.$getRoot() && e != null;) {
    if (t(e)) {
      return e;
    }
    e = e.getParent();
  }
  return null;
}
function l(e) {
  return e.nodeType === 1;
}
exports.$splitNode = i.$splitNode;
exports.$dfs = function (e, t) {
  let n = [];
  e = (e || i.$getRoot()).getLatest();
  t = t || (i.$isElementNode(e) ? e.getLastDescendant() : e);
  for (var r = e, o = 0; (r = r.getParent()) !== null;) {
    o++;
  }
  for (r = o; e !== null && !e.is(t);) {
    n.push({
      depth: r,
      node: e
    });
    if (i.$isElementNode(e) && e.getChildrenSize() > 0) {
      e = e.getFirstChild();
      r++;
    } else {
      for (o = null; o === null && e !== null;) {
        if ((o = e.getNextSibling()) === null) {
          e = e.getParent();
          r--;
        } else {
          e = o;
        }
      }
    }
  }
  if (e !== null && e.is(t)) {
    n.push({
      depth: r,
      node: e
    });
  }
  return n;
};
exports.$findMatchingParent = s;
exports.$getNearestBlockElementAncestorOrThrow = function (e) {
  e = s(e, e => i.$isElementNode(e) && !e.isInline());
  if (!i.$isElementNode(e)) {
    throw Error("Minified Lexical error #4; visit https://lexical.dev/docs/error?code=4 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");
  }
  return e;
};
exports.$getNearestNodeOfType = function (e, t) {
  for (; e != null;) {
    if (e instanceof t) {
      return e;
    }
    e = e.getParent();
  }
  return null;
};
exports.$insertNodeToNearestRoot = function (e) {
  var t = i.$getSelection();
  if (i.$isRangeSelection(t)) {
    var {
      focus: n
    } = t;
    t = n.getNode();
    n = n.offset;
    if (i.$isRootOrShadowRoot(t)) {
      if ((n = t.getChildAtIndex(n)) == null) {
        t.append(e);
      } else {
        n.insertBefore(e);
      }
      e.selectNext();
    } else {
      let r;
      let o;
      if (i.$isTextNode(t)) {
        r = t.getParentOrThrow();
        o = t.getIndexWithinParent();
        if (n > 0) {
          o += 1;
          t.splitText(n);
        }
      } else {
        r = t;
        o = n;
      }
      [, t] = i.$splitNode(r, o);
      t.insertBefore(e);
      t.selectStart();
    }
  } else {
    if (i.$isNodeSelection(t) || i.DEPRECATED_$isGridSelection(t)) {
      (t = t.getNodes())[t.length - 1].getTopLevelElementOrThrow().insertAfter(e);
    } else {
      i.$getRoot().append(e);
    }
    t = i.$createParagraphNode();
    e.insertAfter(t);
    t.select();
  }
  return e.getLatest();
};
exports.$restoreEditorState = function (e, t) {
  let n = new Map();
  let o = e._pendingEditorState;
  for (let [e, o] of t._nodeMap) {
    let t = r.$cloneWithProperties(o);
    if (i.$isTextNode(t)) {
      t.__text = o.__text;
    }
    n.set(e, t);
  }
  if (o) {
    o._nodeMap = n;
  }
  e._dirtyType = 2;
  e = t._selection;
  i.$setSelection(e === null ? null : e.clone());
};
exports.$wrapNodeInElement = function (e, t) {
  t = t();
  e.replace(t);
  t.append(e);
  return t;
};
exports.addClassNamesToElement = function (e, ...t) {
  t.forEach(t => {
    if (typeof t == "string") {
      t = t.split(" ").filter(e => e !== "");
      e.classList.add(...t);
    }
  });
};
exports.isHTMLAnchorElement = function (e) {
  return l(e) && e.tagName === "A";
};
exports.isHTMLElement = l;
exports.isMimeType = o;
exports.mediaFileReader = function (e, t) {
  let n = e[Symbol.iterator]();
  return new Promise((e, r) => {
    let i = [];
    let s = () => {
      const {
        done: l,
        value: a
      } = n.next();
      if (l) {
        return e(i);
      }
      const u = new FileReader();
      u.addEventListener("error", r);
      u.addEventListener("load", () => {
        const e = u.result;
        if (typeof e == "string") {
          i.push({
            file: a,
            result: e
          });
        }
        s();
      });
      if (o(a, t)) {
        u.readAsDataURL(a);
      } else {
        s();
      }
    };
    s();
  });
};
exports.mergeRegister = function (...e) {
  return () => {
    e.forEach(e => e());
  };
};
exports.registerNestedElementResolver = function (e, t, n, r) {
  return e.registerNodeTransform(t, e => {
    e: {
      for (var i = e.getChildren(), o = 0; o < i.length; o++) {
        if (i[o] instanceof t) {
          i = null;
          break e;
        }
      }
      for (i = e; i !== null;) {
        o = i;
        if ((i = i.getParent()) instanceof t) {
          i = {
            child: o,
            parent: i
          };
          break e;
        }
      }
      i = null;
    }
    if (i !== null) {
      const {
        child: t,
        parent: s
      } = i;
      if (t.is(e)) {
        r(s, e);
        i = (e = t.getNextSiblings()).length;
        s.insertAfter(t);
        if (i !== 0) {
          o = n(s);
          t.insertAfter(o);
          for (let t = 0; t < i; t++) {
            o.append(e[t]);
          }
        }
        if (!(s.canBeEmpty() || s.getChildrenSize() !== 0)) {
          s.remove();
        }
      }
    }
  });
};
exports.removeClassNamesFromElement = function (e, ...t) {
  t.forEach(t => {
    if (typeof t == "string") {
      e.classList.remove(...t.split(" "));
    }
  });
};
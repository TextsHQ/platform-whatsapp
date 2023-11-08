var r = require("./932998.js");
function i(e, t = true) {
  return !e && (e = o(), t && (e = e.trim()), e === "");
}
function o() {
  return r.$getRoot().getTextContent();
}
function s(e) {
  if (!i(e, false)) {
    return false;
  }
  let t = (e = r.$getRoot().getChildren()).length;
  if (t > 1) {
    return false;
  }
  for (let i = 0; i < t; i++) {
    var n = e[i];
    if (r.$isDecoratorNode(n)) {
      return false;
    }
    if (r.$isElementNode(n)) {
      if (!r.$isParagraphNode(n) || n.__indent !== 0) {
        return false;
      }
      let e = (n = n.getChildren()).length;
      for (let t = 0; t < e; t++) {
        if (!r.$isTextNode(n[i])) {
          return false;
        }
      }
    }
  }
  return true;
}
exports.$canShowPlaceholder = s;
exports.$canShowPlaceholderCurry = function (e) {
  return () => s(e);
};
exports.$findTextIntersectionFromCharacters = function (e, t) {
  var n = e.getFirstChild();
  e = 0;
  e: for (; n !== null;) {
    if (r.$isElementNode(n)) {
      var i = n.getFirstChild();
      if (i !== null) {
        n = i;
        continue;
      }
    } else if (r.$isTextNode(n)) {
      if (e + (i = n.getTextContentSize()) > t) {
        return {
          node: n,
          offset: t - e
        };
      }
      e += i;
    }
    if ((i = n.getNextSibling()) === null) {
      for (n = n.getParent(); n !== null;) {
        if ((i = n.getNextSibling()) !== null) {
          n = i;
          continue e;
        }
        n = n.getParent();
      }
      break;
    }
    n = i;
  }
  return null;
};
exports.$isRootTextContentEmpty = i;
exports.$isRootTextContentEmptyCurry = function (e, t) {
  return () => i(e, t);
};
exports.$rootTextContent = o;
exports.registerLexicalTextEntity = function (e, t, n, i) {
  let o = e => {
    const t = r.$createTextNode(e.getTextContent());
    t.setFormat(e.getFormat());
    e.replace(t);
  };
  return [e.registerNodeTransform(r.TextNode, e => {
    if (e.isSimpleText()) {
      var s = e.getPreviousSibling();
      var l = e.getTextContent();
      var a = e;
      if (r.$isTextNode(s)) {
        var u = s.getTextContent();
        var c = t(u + l);
        if (s instanceof n) {
          if (c === null || s.getLatest().__mode !== 0) {
            return void o(s);
          }
          if ((c = c.end - u.length) > 0) {
            a = u + (a = l.slice(0, c));
            s.select();
            s.setTextContent(a);
            return void (c === l.length ? e.remove() : (s = l.slice(c), e.setTextContent(s)));
          }
        } else if (c === null || c.start < u.length) {
          return;
        }
      }
      for (;;) {
        l = c = (e = t(l)) === null ? "" : l.slice(e.end);
        if (c === "") {
          u = a.getNextSibling();
          if (r.$isTextNode(u)) {
            c = a.getTextContent() + u.getTextContent();
            if ((c = t(c)) === null) {
              if (u instanceof n) {
                o(u);
              } else {
                u.markDirty();
              }
              break;
            }
            if (c.start !== 0) {
              break;
            }
          }
        } else if ((u = t(c)) !== null && u.start === 0) {
          break;
        }
        if (e === null) {
          break;
        }
        if (e.start === 0 && r.$isTextNode(s) && s.isTextEntity()) {
          continue;
        }
        let d;
        if (e.start === 0) {
          [d, a] = a.splitText(e.end);
        } else {
          [, d, a] = a.splitText(e.start, e.end);
        }
        (e = i(d)).setFormat(d.getFormat());
        d.replace(e);
        if (a == null) {
          break;
        }
      }
    }
  }), e = e.registerNodeTransform(n, e => {
    var i = e.getTextContent();
    const s = t(i);
    if (s === null || s.start !== 0) {
      o(e);
    } else if (i.length > s.end) {
      e.splitText(s.end);
    } else {
      i = e.getPreviousSibling();
      if (r.$isTextNode(i) && i.isTextEntity()) {
        o(i);
        o(e);
      }
      i = e.getNextSibling();
      if (r.$isTextNode(i) && i.isTextEntity()) {
        o(i);
        if (e instanceof n) {
          o(e);
        }
      }
    }
  })];
};
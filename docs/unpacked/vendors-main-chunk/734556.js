let n = {};
let r = {};
let i = {};
let o = {};
let s = {};
let l = {};
let a = {};
let u = {};
let c = {};
let d = {};
let g = {};
let f = {};
let h = {};
let p = {};
let _ = {};
let m = {};
let y = {};
let N = {};
let v = {};
let T = {};
let E = {};
let C = {};
let x = {};
let b = {};
let S = {};
let A = {};
let O = {};
let w = {};
let k = {};
let R = {};
let D = {};
let M = {};
let $ = {};
let I = {};
let P = {};
function L(e) {
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?code=${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
let F = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
let B = F && "documentMode" in document ? document.documentMode : null;
let z = F && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
let W = F && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
let K = !(!F || !("InputEvent" in window) || B) && "getTargetRanges" in new window.InputEvent("input");
let U = F && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
let Y = F && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
let j = F && /^(?=.*Chrome).*/i.test(navigator.userAgent);
let H = F && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !j;
let G = U || Y || H ? " " : "​";
let V = W ? " " : G;
let J = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]/;
let Z = /^[^\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/;
let q = {
  bold: 1,
  code: 16,
  highlight: 128,
  italic: 2,
  strikethrough: 4,
  subscript: 32,
  superscript: 64,
  underline: 8
};
let X = {
  directionless: 1,
  unmergeable: 2
};
let Q = {
  center: 2,
  end: 6,
  justify: 4,
  left: 1,
  right: 3,
  start: 5
};
let ee = {
  2: "center",
  6: "end",
  4: "justify",
  1: "left",
  3: "right",
  5: "start"
};
let te = {
  normal: 0,
  segmented: 2,
  token: 1
};
let ne = {
  0: "normal",
  2: "segmented",
  1: "token"
};
let re = false;
let ie = 0;
function oe(e) {
  ie = e.timeStamp;
}
function se(e, t, n) {
  return t.__lexicalLineBreak === e || e[`__lexicalKey_${n._key}`] !== undefined;
}
function le(e, t, n) {
  re = true;
  let r = performance.now() - ie > 100;
  try {
    br(e, () => {
      let i = er() || function (e) {
        return e.getEditorState().read(() => {
          let e = er();
          if (e !== null) {
            return e.clone();
          } else {
            return null;
          }
        });
      }(e);
      var o = new Map();
      var s = e.getRootElement();
      var l = e._editorState;
      var a = e._blockCursorElement;
      let u = false;
      let c = "";
      for (var d = 0; d < t.length; d++) {
        var g = t[d];
        var f = g.type;
        var h = g.target;
        var p = Se(h, l);
        if (!(p === null && h !== s || Ar(p))) {
          if (f === "characterData") {
            if (g = r && wn(p)) {
              e: {
                f = h;
                var _ = p;
                if (Fn(g = i)) {
                  var m = g.anchor.getNode();
                  if (m.is(_) && g.format !== m.getFormat()) {
                    g = false;
                    break e;
                  }
                }
                g = f.nodeType === 3 && _.isAttached();
              }
            }
            if (g) {
              f = g = null;
              if ((_ = et(e._window)) !== null && _.anchorNode === h) {
                g = _.anchorOffset;
                f = _.focusOffset;
              }
              if ((h = h.nodeValue) !== null) {
                Pe(p, h, g, f, false);
              }
            }
          } else if (f === "childList") {
            u = true;
            f = g.addedNodes;
            _ = 0;
            for (; _ < f.length; _++) {
              var y = be(m = f[_]);
              var N = m.parentNode;
              if (!(N == null || m === a || y !== null || m.nodeName === "BR" && se(m, N, e))) {
                if (W && (y = m.innerText || m.nodeValue)) {
                  c += y;
                }
                N.removeChild(m);
              }
            }
            if ((f = (g = g.removedNodes).length) > 0) {
              _ = 0;
              m = 0;
              for (; m < f; m++) {
                if ((N = g[m]).nodeName === "BR" && se(N, h, e) || a === N) {
                  h.appendChild(N);
                  _++;
                }
              }
              if (f !== _) {
                if (h === s) {
                  p = l._nodeMap.get("root");
                }
                o.set(h, p);
              }
            }
          }
        }
      }
      if (o.size > 0) {
        for (let [t, n] of o) {
          if (wr(n)) {
            o = n.getChildrenKeys();
            s = t.firstChild;
            l = 0;
            o = n.getChildrenKeys();
            s = t.firstChild;
            l = 0;
            for (; l < o.length; l++) {
              if ((a = e.getElementByKey(o[l])) !== null) {
                if (s == null) {
                  t.appendChild(a);
                  s = a;
                } else if (s !== a) {
                  t.replaceChild(a, s);
                }
                s = s.nextSibling;
              }
            }
          } else if (wn(n)) {
            n.markDirty();
          }
        }
      }
      if ((o = n.takeRecords()).length > 0) {
        for (s = 0; s < o.length; s++) {
          l = (a = o[s]).addedNodes;
          a = a.target;
          d = 0;
          l = (a = o[s]).addedNodes;
          a = a.target;
          d = 0;
          for (; d < l.length; d++) {
            if (!((h = (p = l[d]).parentNode) == null || p.nodeName !== "BR" || se(p, a, e))) {
              h.removeChild(p);
            }
          }
        }
        n.takeRecords();
      }
      if (i !== null) {
        if (u) {
          i.dirty = true;
          ke(i);
        }
        if (W && We(e)) {
          i.insertRawText(c);
        }
      }
    });
  } finally {
    re = false;
  }
}
function ae(e) {
  let t = e._observer;
  if (t !== null) {
    le(e, t.takeRecords(), t);
  }
}
function ue(e) {
  if (ie === 0) {
    He(e).addEventListener("textInput", oe, true);
  }
  e._observer = new MutationObserver((t, n) => {
    le(e, t, n);
  });
}
let ce = 1;
let de = typeof queueMicrotask == "function" ? queueMicrotask : e => {
  Promise.resolve().then(e);
};
function ge(e) {
  let t = document.activeElement;
  if (t === null) {
    return false;
  }
  let n = t.nodeName;
  return Ar(Se(e)) && (n === "INPUT" || n === "TEXTAREA" || t.contentEditable === "true" && t.__lexicalEditor == null);
}
function fe(e, t, n) {
  let r = e.getRootElement();
  try {
    return r !== null && r.contains(t) && r.contains(n) && t !== null && !ge(t) && he(t) === e;
  } catch (e) {
    return false;
  }
}
function he(e) {
  for (; e != null;) {
    let t = e.__lexicalEditor;
    if (t != null) {
      return t;
    }
    e = Ye(e);
  }
  return null;
}
function pe(e) {
  return e.isToken() || e.isSegmented();
}
function _e(e) {
  for (; e != null;) {
    if (e.nodeType === 3) {
      return e;
    }
    e = e.firstChild;
  }
  return null;
}
function me(e, t, n) {
  if (e & (t = q[t]) && (n === null || (n & t) == 0)) {
    return e ^ t;
  } else if (n === null || n & t) {
    return e | t;
  } else {
    return e;
  }
}
function ye(e) {
  return wn(e) || fn(e) || Ar(e);
}
function Ne(e, t) {
  if (t != null) {
    e.__key = t;
  } else {
    hr();
    if (dr > 99) {
      L(14);
    }
    t = _r();
    var n = pr();
    var r = "" + ce++;
    n._nodeMap.set(r, e);
    if (wr(e)) {
      t._dirtyElements.set(r, true);
    } else {
      t._dirtyLeaves.add(r);
    }
    t._cloneNotNeeded.add(r);
    t._dirtyType = 1;
    e.__key = r;
  }
}
function ve(e) {
  var t = e.getParent();
  if (t !== null) {
    let i = e.getWritable();
    t = t.getWritable();
    var n = e.getPreviousSibling();
    e = e.getNextSibling();
    if (n === null) {
      if (e !== null) {
        var r = e.getWritable();
        t.__first = e.__key;
        r.__prev = null;
      } else {
        t.__first = null;
      }
    } else {
      r = n.getWritable();
      if (e !== null) {
        let t = e.getWritable();
        t.__prev = r.__key;
        r.__next = t.__key;
      } else {
        r.__next = null;
      }
      i.__prev = null;
    }
    if (e === null) {
      if (n !== null) {
        e = n.getWritable();
        t.__last = n.__key;
        e.__next = null;
      } else {
        t.__last = null;
      }
    } else {
      e = e.getWritable();
      if (n !== null) {
        (n = n.getWritable()).__next = e.__key;
        e.__prev = n.__key;
      } else {
        e.__prev = null;
      }
      i.__next = null;
    }
    t.__size--;
    i.__parent = null;
  }
}
function Te(e) {
  if (dr > 99) {
    L(14);
  }
  var t = e.getLatest();
  var n = t.__parent;
  var r = pr();
  let i = _r();
  let o = r._nodeMap;
  r = i._dirtyElements;
  if (n !== null) {
    e: for (; n !== null && !r.has(n);) {
      let e = o.get(n);
      if (e === undefined) {
        break;
      }
      r.set(n, false);
      n = e.__parent;
    }
  }
  t = t.__key;
  i._dirtyType = 1;
  if (wr(e)) {
    r.set(t, true);
  } else {
    i._dirtyLeaves.add(t);
  }
}
function Ee(e) {
  hr();
  var t = _r();
  let n = t._compositionKey;
  if (e !== n) {
    t._compositionKey = e;
    if (n !== null) {
      if ((t = xe(n)) !== null) {
        t.getWritable();
      }
    }
    if (e !== null) {
      if ((e = xe(e)) !== null) {
        e.getWritable();
      }
    }
  }
}
function Ce() {
  if (fr()) {
    return null;
  } else {
    return _r()._compositionKey;
  }
}
function xe(e, t) {
  if ((e = (t || pr())._nodeMap.get(e)) === undefined) {
    return null;
  } else {
    return e;
  }
}
function be(e, t) {
  if ((e = e[`__lexicalKey_${_r()._key}`]) !== undefined) {
    return xe(e, t);
  } else {
    return null;
  }
}
function Se(e, t) {
  for (; e != null;) {
    let n = be(e, t);
    if (n !== null) {
      return n;
    }
    e = Ye(e);
  }
  return null;
}
function Ae(e) {
  let t = Object.assign({}, e._decorators);
  return e._pendingDecorators = t;
}
function Oe(e) {
  return e.read(() => we().getTextContent());
}
function we() {
  return pr()._nodeMap.get("root");
}
function ke(e) {
  hr();
  let t = pr();
  if (e !== null) {
    e.dirty = true;
    e._cachedNodes = null;
  }
  t._selection = e;
}
function Re(e) {
  var t;
  var n = _r();
  e: {
    for (t = e; t != null;) {
      let e = t[`__lexicalKey_${n._key}`];
      if (e !== undefined) {
        t = e;
        break e;
      }
      t = Ye(t);
    }
    t = null;
  }
  if (t === null) {
    if (e === (n = n.getRootElement())) {
      return xe("root");
    } else {
      return null;
    }
  } else {
    return xe(t);
  }
}
function De(e) {
  return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e);
}
function Me(e) {
  let t = [];
  for (; e !== null;) {
    t.push(e);
    e = e._parentEditor;
  }
  return t;
}
function $e() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Ie(e, t, n) {
  if ((t = et(t._window)) !== null) {
    var r = t.anchorNode;
    var {
      anchorOffset: i,
      focusOffset: o
    } = t;
    if (r !== null && (t = r.nodeType === 3 ? r.nodeValue : null, r = Se(r), t !== null && wn(r))) {
      if (t === G && n) {
        t = n;
        o = i = n.length;
      }
      if (t !== null) {
        Pe(r, t, i, o, e);
      }
    }
  }
}
function Pe(e, t, n, r, i) {
  let o = e;
  if (o.isAttached() && (i || !o.isDirty())) {
    let u = o.isComposing();
    let c = t;
    if ((u || i) && t[t.length - 1] === G) {
      c = t.slice(0, -1);
    }
    t = o.getTextContent();
    if (i || c !== t) {
      if (c === "") {
        Ee(null);
        if (U || Y || H) {
          o.remove();
        } else {
          let e = _r();
          setTimeout(() => {
            e.update(() => {
              if (o.isAttached()) {
                o.remove();
              }
            });
          }, 20);
        }
      } else {
        i = o.getParent();
        t = tr();
        var s = o.getTextContentSize();
        var l = Ce();
        var a = o.getKey();
        if (o.isToken() || l !== null && a === l && !u || Fn(t) && (i !== null && !i.canInsertTextBefore() && t.anchor.offset === 0 || t.anchor.key === e.__key && t.anchor.offset === 0 && !o.canInsertTextBefore() || t.focus.key === e.__key && t.focus.offset === s && !o.canInsertTextAfter())) {
          o.markDirty();
        } else {
          if (Fn(e = er()) && n !== null && r !== null) {
            e.setTextNodeRange(o, n, o, r);
            if (o.isSegmented()) {
              n = On(n = o.getTextContent());
              o.replace(n);
              o = n;
            }
          }
          o.setTextContent(c);
        }
      }
    }
  }
}
function Le(e, t) {
  var n = e[t];
  if (typeof n == "string") {
    n = n.split(" ");
    return e[t] = n;
  } else {
    return n;
  }
}
function Fe(e, t, n, r, i) {
  if (n.size !== 0) {
    n = r.__key;
    if ((t = t.get(r.__type)) === undefined) {
      L(33);
    }
    r = t.klass;
    if ((t = e.get(r)) === undefined) {
      t = new Map();
      e.set(r, t);
    }
    r = (e = t.get(n)) === "destroyed" && i === "created";
    if (e === undefined || r) {
      t.set(n, r ? "updated" : i);
    }
  }
}
function Be(e, t, n) {
  let r = e.getParent();
  let i = n;
  if (r !== null) {
    if (t && n === 0) {
      i = e.getIndexWithinParent();
      e = r;
    } else if (!(t || n !== e.getChildrenSize())) {
      i = e.getIndexWithinParent() + 1;
      e = r;
    }
  }
  return e.getChildAtIndex(t ? i - 1 : i);
}
function ze(e, t) {
  var n = e.offset;
  if (e.type === "element") {
    return Be(e = e.getNode(), t, n);
  } else {
    e = e.getNode();
    if (t && n === 0 || !t && n === e.getTextContentSize()) {
      if ((n = t ? e.getPreviousSibling() : e.getNextSibling()) === null) {
        return Be(e.getParentOrThrow(), t, e.getIndexWithinParent() + (t ? 0 : 1));
      } else {
        return n;
      }
    } else {
      return null;
    }
  }
}
function We(e) {
  return (e = (e = He(e).event) && e.inputType) === "insertFromPaste" || e === "insertFromPasteAsQuotation";
}
function Ke(e) {
  return !Dr(e) && !e.isLastChild() && !e.isInline();
}
function Ue(e, t) {
  if ((e = e._keyToDOMMap.get(t)) === undefined) {
    L(75);
  }
  return e;
}
function Ye(e) {
  if ((e = e.assignedSlot || e.parentElement) !== null && e.nodeType === 11) {
    return e.host;
  } else {
    return e;
  }
}
function je(e, t) {
  for (e = e.getParent(); e !== null;) {
    if (e.is(t)) {
      return true;
    }
    e = e.getParent();
  }
  return false;
}
function He(e) {
  if ((e = e._window) === null) {
    L(78);
  }
  return e;
}
function Ge(e) {
  for (e = e.getParentOrThrow(); e !== null && !Ve(e);) {
    e = e.getParentOrThrow();
  }
  return e;
}
function Ve(e) {
  return Dr(e) || wr(e) && e.isShadowRoot();
}
function Je(e) {
  Ne(e = e.constructor.clone(e), null);
  return e;
}
function Ze(e) {
  var t = _r();
  let n = e.constructor.getType();
  if ((t = t._nodes.get(n)) === undefined) {
    L(97);
  }
  if ((t = t.replace) !== null) {
    if (!((t = t(e)) instanceof e.constructor)) {
      L(98);
    }
    return t;
  } else {
    return e;
  }
}
function qe(e, t) {
  if (!(!Dr(e = e.getParent()) || wr(t) || Ar(t))) {
    L(99);
  }
}
function Xe(e) {
  return (Ar(e) || wr(e) && !e.canBeEmpty()) && !e.isInline();
}
function Qe(e, t, n) {
  n.style.removeProperty("caret-color");
  t._blockCursorElement = null;
  if ((t = e.parentElement) !== null) {
    t.removeChild(e);
  }
}
function et(e) {
  if (F) {
    return (e || window).getSelection();
  } else {
    return null;
  }
}
function tt(e, t) {
  let n = e.getChildAtIndex(t);
  if (n == null) {
    n = e;
  }
  if (Ve(e)) {
    L(102);
  }
  let r = e => {
    const t = e.getParentOrThrow();
    const i = Ve(t);
    const o = e !== n || i ? Je(e) : e;
    if (i) {
      e.insertAfter(o);
      return [e, o, o];
    }
    const [s, l, a] = r(t);
    e = e.getNextSiblings();
    a.append(o, ...e);
    return [s, l, o];
  };
  let [i, o] = r(n);
  return [i, o];
}
function nt(e, t) {
  for (; e !== we() && e != null;) {
    if (t(e)) {
      return e;
    }
    e = e.getParent();
  }
  return null;
}
function rt(e) {
  let t = [];
  let n = [e];
  for (; n.length > 0;) {
    let r = n.pop();
    if (r === undefined) {
      L(112);
    }
    if (wr(r)) {
      n.unshift(...r.getChildren());
    }
    if (r !== e) {
      t.push(r);
    }
  }
  return t;
}
function it(e, t, n, r, i, o) {
  for (e = e.getFirstChild(); e !== null;) {
    let s = e.__key;
    if (e.__parent === t) {
      if (wr(e)) {
        it(e, s, n, r, i, o);
      }
      if (!n.has(s)) {
        o.delete(s);
      }
      i.push(s);
    }
    e = e.getNextSibling();
  }
}
function ot(e, t) {
  let n = e.__mode;
  let r = e.__format;
  e = e.__style;
  let i = t.__mode;
  let o = t.__format;
  t = t.__style;
  return !(n !== null && n !== i || r !== null && r !== o || e !== null && e !== t);
}
function st(e, t) {
  let n = e.mergeWithSibling(t);
  let r = _r()._normalizedNodes;
  r.add(e.__key);
  r.add(t.__key);
  return n;
}
function lt(e) {
  if (e.__text === "" && e.isSimpleText() && !e.isUnmergeable()) {
    e.remove();
  } else {
    for (var t; (t = e.getPreviousSibling()) !== null && wn(t) && t.isSimpleText() && !t.isUnmergeable();) {
      if (t.__text !== "") {
        if (ot(t, e)) {
          e = st(t, e);
        }
        break;
      }
      t.remove();
    }
    for (var n; (n = e.getNextSibling()) !== null && wn(n) && n.isSimpleText() && !n.isUnmergeable();) {
      if (n.__text !== "") {
        if (ot(e, n)) {
          st(e, n);
        }
        break;
      }
      n.remove();
    }
  }
}
function at(e) {
  ut(e.anchor);
  ut(e.focus);
  return e;
}
function ut(e) {
  for (; e.type === "element";) {
    var t = e.getNode();
    var n = e.offset;
    if (n === t.getChildrenSize()) {
      t = t.getChildAtIndex(n - 1);
      n = true;
    } else {
      t = t.getChildAtIndex(n);
      n = false;
    }
    if (wn(t)) {
      e.set(t.__key, n ? t.getTextContentSize() : 0, "text");
      break;
    }
    if (!wr(t)) {
      break;
    }
    e.set(t.__key, n ? t.getChildrenSize() : 0, "element");
  }
}
let ct;
let dt;
let gt;
let ft;
let ht;
let pt;
let _t;
let mt;
let yt;
let Nt;
let vt = "";
let Tt = "";
let Et = "";
let Ct = false;
let xt = false;
let bt = null;
function St(e, t) {
  let n = _t.get(e);
  if (t !== null) {
    let n = zt(e);
    if (n.parentNode === t) {
      t.removeChild(n);
    }
  }
  if (!mt.has(e)) {
    dt._keyToDOMMap.delete(e);
  }
  if (wr(n)) {
    At(e = Pt(n, _t), 0, e.length - 1, null);
  }
  if (n !== undefined) {
    Fe(Nt, gt, ft, n, "destroyed");
  }
}
function At(e, t, n, r) {
  for (; t <= n; ++t) {
    let n = e[t];
    if (n !== undefined) {
      St(n, r);
    }
  }
}
function Ot(e, t) {
  e.setProperty("text-align", t);
}
function wt(e, t) {
  var n = ct.theme.indent;
  if (typeof n == "string") {
    let r = e.classList.contains(n);
    if (t > 0 && !r) {
      e.classList.add(n);
    } else if (t < 1 && r) {
      e.classList.remove(n);
    }
  }
  n = getComputedStyle(e).getPropertyValue("--lexical-indent-base-value") || "40px";
  e.style.setProperty("padding-inline-start", t === 0 ? "" : `calc(${t} * ${n})`);
}
function kt(e, t) {
  e = e.style;
  if (t === 0) {
    Ot(e, "");
  } else if (t === 1) {
    Ot(e, "left");
  } else if (t === 2) {
    Ot(e, "center");
  } else if (t === 3) {
    Ot(e, "right");
  } else if (t === 4) {
    Ot(e, "justify");
  } else if (t === 5) {
    Ot(e, "start");
  } else if (t === 6) {
    Ot(e, "end");
  }
}
function Rt(e, t, n) {
  let r = mt.get(e);
  if (r === undefined) {
    L(60);
  }
  let i = r.createDOM(ct, dt);
  var o = dt._keyToDOMMap;
  i["__lexicalKey_" + dt._key] = e;
  o.set(e, i);
  if (wn(r)) {
    i.setAttribute("data-lexical-text", "true");
  } else if (Ar(r)) {
    i.setAttribute("data-lexical-decorator", "true");
  }
  if (wr(r)) {
    e = r.__indent;
    o = r.__size;
    if (e !== 0) {
      wt(i, e);
    }
    if (o !== 0) {
      --o;
      e = Pt(r, mt);
      var s = Tt;
      Tt = "";
      Dt(e, r, 0, o, i, null);
      It(r, i);
      Tt = s;
    }
    if ((e = r.__format) !== 0) {
      kt(i, e);
    }
    if (!r.isInline()) {
      $t(null, r, i);
    }
    if (Ke(r)) {
      vt += "\n\n";
      Et += "\n\n";
    }
  } else {
    o = r.getTextContent();
    if (Ar(r)) {
      if ((s = r.decorate(dt, ct)) !== null) {
        Ft(e, s);
      }
      i.contentEditable = "false";
    } else if (wn(r)) {
      if (!r.isDirectionless()) {
        Tt += o;
      }
    }
    vt += o;
    Et += o;
  }
  if (t !== null) {
    if (n != null) {
      t.insertBefore(i, n);
    } else if ((n = t.__lexicalLineBreak) != null) {
      t.insertBefore(i, n);
    } else {
      t.appendChild(i);
    }
  }
  Fe(Nt, gt, ft, r, "created");
  return i;
}
function Dt(e, t, n, r, i, o) {
  let s = vt;
  for (vt = ""; n <= r; ++n) {
    Rt(e[n], i, o);
  }
  if (Ke(t)) {
    vt += "\n\n";
  }
  i.__lexicalTextContent = vt;
  vt = s + vt;
}
function Mt(e, t) {
  return fn(e = t.get(e)) || Ar(e) && e.isInline();
}
function $t(e, t, n) {
  e = e !== null && (e.__size === 0 || Mt(e.__last, _t));
  t = t.__size === 0 || Mt(t.__last, mt);
  if (e) {
    if (!t) {
      if ((t = n.__lexicalLineBreak) != null) {
        n.removeChild(t);
      }
      n.__lexicalLineBreak = null;
    }
  } else if (t) {
    t = document.createElement("br");
    n.__lexicalLineBreak = t;
    n.appendChild(t);
  }
}
function It(e, t) {
  var n = t.__lexicalDir;
  if (t.__lexicalDirTextContent !== Tt || n !== bt) {
    let o = Tt === "";
    if (o) {
      var r = bt;
    } else {
      r = Tt;
      r = J.test(r) ? "rtl" : Z.test(r) ? "ltr" : null;
    }
    if (r !== n) {
      let s = t.classList;
      let l = ct.theme;
      var i = n !== null ? l[n] : undefined;
      let a = r !== null ? l[r] : undefined;
      if (i !== undefined) {
        if (typeof i == "string") {
          i = i.split(" ");
          i = l[n] = i;
        }
        s.remove(...i);
      }
      if (r === null || o && r === "ltr") {
        t.removeAttribute("dir");
      } else {
        if (a !== undefined) {
          if (typeof a == "string") {
            n = a.split(" ");
            a = l[r] = n;
          }
          if (a !== undefined) {
            s.add(...a);
          }
        }
        t.dir = r;
      }
      if (!xt) {
        e.getWritable().__dir = r;
      }
    }
    bt = r;
    t.__lexicalDirTextContent = Tt;
    t.__lexicalDir = r;
  }
}
function Pt(e, t) {
  let n = [];
  for (e = e.__first; e !== null;) {
    let r = t.get(e);
    if (r === undefined) {
      L(101);
    }
    n.push(e);
    e = r.__next;
  }
  return n;
}
function Lt(e, t) {
  var n = _t.get(e);
  var r = mt.get(e);
  if (!(n !== undefined && r !== undefined)) {
    L(61);
  }
  var i = Ct || pt.has(e) || ht.has(e);
  let o = Ue(dt, e);
  if (n === r && !i) {
    if (wr(n)) {
      if ((r = o.__lexicalTextContent) !== undefined) {
        vt += r;
        Et += r;
      }
      if ((r = o.__lexicalDirTextContent) !== undefined) {
        Tt += r;
      }
    } else {
      r = n.getTextContent();
      if (wn(n) && !n.isDirectionless()) {
        Tt += r;
      }
      Et += r;
      vt += r;
    }
    return o;
  }
  if (n !== r && i) {
    Fe(Nt, gt, ft, r, "updated");
  }
  if (r.updateDOM(n, o, ct)) {
    r = Rt(e, null, null);
    if (t === null) {
      L(62);
    }
    t.replaceChild(r, o);
    St(e, null);
    return r;
  }
  if (wr(n) && wr(r)) {
    if ((e = r.__indent) !== n.__indent) {
      wt(o, e);
    }
    if ((e = r.__format) !== n.__format) {
      kt(o, e);
    }
    if (i) {
      e = r;
      i = Tt;
      Tt = "";
      t = vt;
      var s = n.__size;
      var l = e.__size;
      vt = "";
      if (s === 1 && l === 1) {
        var a = n.__first;
        var u = e.__first;
        if (a === u) {
          Lt(a, o);
        } else {
          var c = zt(a);
          u = Rt(u, null, null);
          o.replaceChild(u, c);
          St(a, null);
        }
      } else {
        u = Pt(n, _t);
        var d = Pt(e, mt);
        if (s === 0) {
          if (l !== 0) {
            Dt(d, e, 0, l - 1, o, null);
          }
        } else if (l === 0) {
          if (s !== 0) {
            At(u, 0, s - 1, (a = o.__lexicalLineBreak == null) ? null : o);
            if (a) {
              o.textContent = "";
            }
          }
        } else {
          var g = u;
          u = d;
          d = s - 1;
          s = l - 1;
          let t = o.firstChild;
          let n = 0;
          for (l = 0; n <= d && l <= s;) {
            var f = g[n];
            let e = u[l];
            if (f === e) {
              t = Bt(Lt(e, o));
              n++;
              l++;
            } else {
              if (a === undefined) {
                a = new Set(g);
              }
              if (c === undefined) {
                c = new Set(u);
              }
              let r = c.has(f);
              let i = a.has(e);
              if (r) {
                if (i) {
                  if ((f = Ue(dt, e)) === t) {
                    t = Bt(Lt(e, o));
                  } else {
                    if (t != null) {
                      o.insertBefore(f, t);
                    } else {
                      o.appendChild(f);
                    }
                    Lt(e, o);
                  }
                  n++;
                } else {
                  Rt(e, o, t);
                }
                l++;
              } else {
                t = Bt(zt(f));
                St(f, o);
                n++;
              }
            }
          }
          c = l > s;
          if ((a = n > d) && !c) {
            Dt(u, e, l, s, o, a = (a = u[s + 1]) === undefined ? null : dt.getElementByKey(a));
          } else if (c && !a) {
            At(g, n, d, o);
          }
        }
      }
      if (Ke(e)) {
        vt += "\n\n";
      }
      o.__lexicalTextContent = vt;
      vt = t + vt;
      It(e, o);
      Tt = i;
      if (!(Dr(r) || r.isInline())) {
        $t(n, r, o);
      }
    }
    if (Ke(r)) {
      vt += "\n\n";
      Et += "\n\n";
    }
  } else {
    n = r.getTextContent();
    if (Ar(r)) {
      if ((i = r.decorate(dt, ct)) !== null) {
        Ft(e, i);
      }
    } else if (wn(r) && !r.isDirectionless()) {
      Tt += n;
    }
    vt += n;
    Et += n;
  }
  if (!xt && Dr(r) && r.__cachedText !== Et) {
    (r = r.getWritable()).__cachedText = Et;
  }
  return o;
}
function Ft(e, t) {
  let n = dt._pendingDecorators;
  let r = dt._decorators;
  if (n === null) {
    if (r[e] === t) {
      return;
    }
    n = Ae(dt);
  }
  n[e] = t;
}
function Bt(e) {
  if ((e = e.nextSibling) !== null && e === dt._blockCursorElement) {
    e = e.nextSibling;
  }
  return e;
}
function zt(e) {
  if ((e = yt.get(e)) === undefined) {
    L(75);
  }
  return e;
}
let Wt = Object.freeze({});
let Kt = [["keydown", function (e, t) {
  Ut = e.timeStamp;
  Yt = e.keyCode;
  if (!t.isComposing()) {
    var {
      keyCode: n,
      shiftKey: r,
      ctrlKey: s,
      metaKey: l,
      altKey: a
    } = e;
    if (!Er(t, p, e)) {
      if (n !== 39 || s || l || a) {
        if (n !== 39 || a || r || !s && !l) {
          if (n !== 37 || s || l || a) {
            if (n !== 37 || a || r || !s && !l) {
              if (n !== 38 || s || l) {
                if (n !== 40 || s || l) {
                  if (n === 13 && r) {
                    Zt = true;
                    Er(t, E, e);
                  } else if (n === 32) {
                    Er(t, C, e);
                  } else if (z && s && n === 79) {
                    e.preventDefault();
                    Zt = true;
                    Er(t, o, true);
                  } else if (n !== 13 || r) {
                    if (z ? a || l || !(n === 8 || n === 72 && s) : s || a || l || n !== 8) {
                      if (n === 27) {
                        Er(t, b, e);
                      } else if (z ? r || a || l || !(n === 46 || n === 68 && s) : s || a || l || n !== 46) {
                        if (n === 8 && (z ? a : s)) {
                          e.preventDefault();
                          Er(t, c, true);
                        } else if (n === 46 && (z ? a : s)) {
                          e.preventDefault();
                          Er(t, c, false);
                        } else if (z && l && n === 8) {
                          e.preventDefault();
                          Er(t, d, true);
                        } else if (z && l && n === 46) {
                          e.preventDefault();
                          Er(t, d, false);
                        } else if (n === 66 && !a && (z ? l : s)) {
                          e.preventDefault();
                          Er(t, g, "bold");
                        } else if (n === 85 && !a && (z ? l : s)) {
                          e.preventDefault();
                          Er(t, g, "underline");
                        } else if (n === 73 && !a && (z ? l : s)) {
                          e.preventDefault();
                          Er(t, g, "italic");
                        } else if (n !== 9 || a || s || l) {
                          if (n === 90 && !r && (z ? l : s)) {
                            e.preventDefault();
                            Er(t, f, undefined);
                          } else {
                            var u = z ? n === 90 && l && r : n === 89 && s || n === 90 && s && r;
                            if (u) {
                              e.preventDefault();
                              Er(t, h, undefined);
                            } else if (Kn(t._editorState._selection)) {
                              if (u = !r && n === 67 && (z ? l : s)) {
                                e.preventDefault();
                                Er(t, D, e);
                              } else if (u = !r && n === 88 && (z ? l : s)) {
                                e.preventDefault();
                                Er(t, M, e);
                              } else if (n === 65 && (z ? l : s)) {
                                e.preventDefault();
                                t.update(() => {
                                  let e = we();
                                  e.select(0, e.getChildrenSize());
                                });
                              }
                            }
                          }
                        } else {
                          Er(t, A, e);
                        }
                      } else if (n === 46) {
                        Er(t, S, e);
                      } else {
                        e.preventDefault();
                        Er(t, i, false);
                      }
                    } else if (n === 8) {
                      Er(t, x, e);
                    } else {
                      e.preventDefault();
                      Er(t, i, true);
                    }
                  } else {
                    Zt = false;
                    Er(t, E, e);
                  }
                } else {
                  Er(t, T, e);
                }
              } else {
                Er(t, v, e);
              }
            } else {
              Er(t, N, e);
            }
          } else {
            Er(t, y, e);
          }
        } else {
          Er(t, m, e);
        }
      } else {
        Er(t, _, e);
      }
      if (s || r || a || l) {
        Er(t, P, e);
      }
    }
  }
}], ["pointerdown", function (e, t) {
  let n = e.target;
  e = e.pointerType;
  if (n instanceof Node && e !== "touch") {
    br(t, () => {
      if (!Ar(Se(n))) {
        Jt = true;
      }
    });
  }
}], ["compositionstart", function (e, t) {
  br(t, () => {
    let n = er();
    if (Fn(n) && !t.isComposing()) {
      let r = n.anchor;
      let i = n.anchor.getNode();
      Ee(r.key);
      if (e.timeStamp < Ut + 30 || r.type === "element" || !n.isCollapsed() || i.getFormat() !== n.format || i.getStyle() !== n.style) {
        Er(t, l, V);
      }
    }
  });
}], ["compositionend", function (e, t) {
  if (W) {
    qt = true;
  } else {
    br(t, () => {
      rn(t, e.data);
    });
  }
}], ["input", function (e, t) {
  e.stopPropagation();
  br(t, () => {
    var n = er();
    var r = e.data;
    var i = nn(e);
    if (r != null && Fn(n) && Qt(n, i, r, e.timeStamp, false)) {
      if (qt) {
        rn(t, r);
        qt = false;
      }
      var o = n.anchor;
      var s = o.getNode();
      if ((i = et(t._window)) === null) {
        return;
      }
      let a = o.offset;
      if (o = K && !n.isCollapsed() && wn(s) && i.anchorNode !== null) {
        o = (s = s.getTextContent().slice(0, a) + r + s.getTextContent().slice(a + n.focus.offset)) === ((i = i.anchorNode).nodeType === 3 ? i.nodeValue : null);
      }
      if (!o) {
        Er(t, l, r);
      }
      r = r.length;
      if (W && r > 1 && e.inputType === "insertCompositionText" && !t.isComposing()) {
        n.anchor.offset -= r;
      }
      if (!(U || Y || H || !t.isComposing())) {
        Ut = 0;
        Ee(null);
      }
    } else {
      Ie(false, t, r !== null ? r : undefined);
      if (qt) {
        rn(t, r || undefined);
        qt = false;
      }
    }
    hr();
    ae(n = _r());
  });
  Ht = null;
}], ["click", function (e, t) {
  br(t, () => {
    let n = er();
    var i = et(t._window);
    let o = tr();
    if (i) {
      if (Fn(n)) {
        let t = n.anchor;
        var s = t.getNode();
        if (t.type === "element" && t.offset === 0 && n.isCollapsed() && !Dr(s) && we().getChildrenSize() === 1 && s.getTopLevelElementOrThrow().isEmpty() && o !== null && n.is(o)) {
          i.removeAllRanges();
          n.dirty = true;
        } else if (!(e.detail !== 3 || n.isCollapsed())) {
          if (s !== (i = n.focus.getNode())) {
            if (wr(s)) {
              s.select(0);
            } else {
              s.getParentOrThrow().select(0);
            }
          }
        }
      } else if (e.pointerType === "touch" && (s = i.anchorNode) !== null && ((s = s.nodeType) === 1 || s === 3)) {
        ke(i = Qn(o, i, t));
      }
    }
    Er(t, r, e);
  });
}], ["cut", Wt], ["copy", Wt], ["dragstart", Wt], ["dragover", Wt], ["dragend", Wt], ["paste", Wt], ["focus", Wt], ["blur", Wt], ["drop", Wt]];
if (K) {
  Kt.push(["beforeinput", (e, t) => function (e, t) {
    let n = e.inputType;
    let r = nn(e);
    if (!(n === "deleteCompositionText" || W && We(t))) {
      if (n !== "insertCompositionText") {
        br(t, () => {
          let p = er();
          if (n === "deleteContentBackward") {
            if (p === null) {
              var _ = tr();
              if (!Fn(_)) {
                return;
              }
              ke(_.clone());
            }
            if (Fn(p)) {
              return void (Yt === 229 && e.timeStamp < Ut + 30 && t.isComposing() && p.anchor.key === p.focus.key ? (Ee(null), Ut = 0, setTimeout(() => {
                br(t, () => {
                  Ee(null);
                });
              }, 30), Fn(p) && (_ = p.anchor.getNode(), _.markDirty(), p.format = _.getFormat(), p.style = _.getStyle())) : (e.preventDefault(), Er(t, i, true)));
            }
          }
          if (Fn(p)) {
            _ = e.data;
            if (Ht !== null) {
              Ie(false, t, Ht);
            }
            if (!(p.dirty && Ht === null || !p.isCollapsed() || Dr(p.anchor.getNode()) || r === null)) {
              p.applyDOMRange(r);
            }
            Ht = null;
            var m = p.focus;
            var y = p.anchor.getNode();
            m = m.getNode();
            if (n === "insertText" || n === "insertTranspose") {
              if (_ === "\n") {
                e.preventDefault();
                Er(t, o, false);
              } else if (_ === "\n\n") {
                e.preventDefault();
                Er(t, s, undefined);
              } else if (_ == null && e.dataTransfer) {
                _ = e.dataTransfer.getData("text/plain");
                e.preventDefault();
                p.insertRawText(_);
              } else if (_ != null && Qt(p, r, _, e.timeStamp, true)) {
                e.preventDefault();
                Er(t, l, _);
              } else {
                Ht = _;
              }
              jt = e.timeStamp;
            } else {
              e.preventDefault();
              switch (n) {
                case "insertFromYank":
                case "insertFromDrop":
                case "insertReplacementText":
                  Er(t, l, e);
                  break;
                case "insertFromComposition":
                  Ee(null);
                  Er(t, l, e);
                  break;
                case "insertLineBreak":
                  Ee(null);
                  Er(t, o, false);
                  break;
                case "insertParagraph":
                  Ee(null);
                  if (Zt) {
                    Zt = false;
                    Er(t, o, false);
                  } else {
                    Er(t, s, undefined);
                  }
                  break;
                case "insertFromPaste":
                case "insertFromPasteAsQuotation":
                  Er(t, a, e);
                  break;
                case "deleteByComposition":
                  if (function (e, t) {
                    return e !== t || wr(e) || wr(t) || !e.isToken() || !t.isToken();
                  }(y, m)) {
                    Er(t, u, undefined);
                  }
                  break;
                case "deleteByDrag":
                case "deleteByCut":
                  Er(t, u, undefined);
                  break;
                case "deleteContent":
                  Er(t, i, false);
                  break;
                case "deleteWordBackward":
                  Er(t, c, true);
                  break;
                case "deleteWordForward":
                  Er(t, c, false);
                  break;
                case "deleteHardLineBackward":
                case "deleteSoftLineBackward":
                  Er(t, d, true);
                  break;
                case "deleteContentForward":
                case "deleteHardLineForward":
                case "deleteSoftLineForward":
                  Er(t, d, false);
                  break;
                case "formatStrikeThrough":
                  Er(t, g, "strikethrough");
                  break;
                case "formatBold":
                  Er(t, g, "bold");
                  break;
                case "formatItalic":
                  Er(t, g, "italic");
                  break;
                case "formatUnderline":
                  Er(t, g, "underline");
                  break;
                case "historyUndo":
                  Er(t, f, undefined);
                  break;
                case "historyRedo":
                  Er(t, h, undefined);
              }
            }
          }
        });
      }
    }
  }(e, t)]);
}
let Ut = 0;
let Yt = 0;
let jt = 0;
let Ht = null;
let Gt = 0;
let Vt = false;
let Jt = false;
let Zt = false;
let qt = false;
let Xt = [0, "", 0, "root", 0];
function Qt(e, t, n, r, i) {
  let o = e.anchor;
  let s = e.focus;
  let l = o.getNode();
  var a = _r();
  let u = et(a._window);
  let c = u !== null ? u.anchorNode : null;
  let d = o.key;
  a = a.getElementByKey(d);
  let g = n.length;
  return d !== s.key || !wn(l) || (!i && (!K || jt < r + 50) || l.isDirty() && g < 2 || De(n)) && o.offset !== s.offset && !l.isComposing() || pe(l) || l.isDirty() && g > 1 || (i || !K) && a !== null && !l.isComposing() && c !== _e(a) || u !== null && t !== null && (!t.collapsed || t.startContainer !== u.anchorNode || t.startOffset !== u.anchorOffset) || l.getFormat() !== e.format || l.getStyle() !== e.style || function (e, t) {
    if (t.isSegmented()) {
      return true;
    }
    if (!e.isCollapsed()) {
      return false;
    }
    e = e.anchor.offset;
    let n = t.getParentOrThrow();
    let r = t.isToken();
    if (e === 0) {
      if (!(e = !t.canInsertTextBefore() || !n.canInsertTextBefore() || r)) {
        e = (wn(t = t.getPreviousSibling()) || wr(t) && t.isInline()) && !t.canInsertTextAfter();
      }
      return e;
    } else {
      return e === t.getTextContentSize() && (!t.canInsertTextAfter() || !n.canInsertTextAfter() || r);
    }
  }(e, l);
}
function en(e, t) {
  return e !== null && e.nodeValue !== null && e.nodeType === 3 && t !== 0 && t !== e.nodeValue.length;
}
function tn(e, t, r) {
  let {
    anchorNode: i,
    anchorOffset: o,
    focusNode: s,
    focusOffset: l
  } = e;
  if (!(Vt && (Vt = false, en(i, o) && en(s, l)))) {
    br(t, () => {
      if (r) {
        if (fe(t, i, s)) {
          var o = er();
          if (Fn(o)) {
            var l = o.anchor;
            var a = l.getNode();
            if (o.isCollapsed()) {
              if (e.type === "Range" && e.anchorNode === e.focusNode) {
                o.dirty = true;
              }
              var u = He(t).event;
              u = u ? u.timeStamp : performance.now();
              let [n, r, i, s, c] = Xt;
              if (u < c + 200 && l.offset === i && l.key === s) {
                o.format = n;
                o.style = r;
              } else if (l.type === "text") {
                o.format = a.getFormat();
                o.style = a.getStyle();
              } else if (l.type === "element") {
                o.format = 0;
                o.style = "";
              }
            } else {
              l = 255;
              a = false;
              let e = (u = o.getNodes()).length;
              for (let t = 0; t < e; t++) {
                let e = u[t];
                if (wn(e) && (a = true, (l &= e.getFormat()) === 0)) {
                  break;
                }
              }
              o.format = a ? l : 0;
            }
          }
          Er(t, n, undefined);
        }
      } else {
        ke(null);
      }
    });
  }
}
function nn(e) {
  if (e.getTargetRanges) {
    if ((e = e.getTargetRanges()).length === 0) {
      return null;
    } else {
      return e[0];
    }
  } else {
    return null;
  }
}
function rn(e, t) {
  var n = e._compositionKey;
  Ee(null);
  if (n !== null && t != null) {
    if (t === "") {
      t = xe(n);
      return void ((e = _e(e.getElementByKey(n))) !== null && e.nodeValue !== null && wn(t) && Pe(t, e.nodeValue, null, null, true));
    }
    if (t[t.length - 1] === "\n" && Fn(n = er())) {
      t = n.focus;
      n.anchor.set(t.key, t.offset, t.type);
      return void Er(e, E, null);
    }
  }
  Ie(true, e, t);
}
function on(e) {
  let t = e.__lexicalEventHandles;
  if (t === undefined) {
    t = [];
    e.__lexicalEventHandles = t;
  }
  return t;
}
let sn = new Map();
function ln(e) {
  let t = et((e = e.target) == null ? null : e.nodeType === 9 ? e.defaultView : e.ownerDocument.defaultView);
  if (t !== null) {
    var n = he(t.anchorNode);
    if (n !== null) {
      if (Jt) {
        Jt = false;
        br(n, () => {
          var e = tr();
          var r = t.anchorNode;
          if (r !== null && ((r = r.nodeType) === 1 || r === 3)) {
            ke(e = Qn(e, t, n));
          }
        });
      }
      var r = (e = (e = Me(n))[e.length - 1])._key;
      var i = sn.get(r);
      var o = i || e;
      if (o !== n) {
        tn(t, o, false);
      }
      tn(t, n, true);
      if (n !== e) {
        sn.set(r, n);
      } else if (i) {
        sn.delete(r);
      }
    }
  }
}
function an(e, t, n) {
  hr();
  var r = e.__key;
  let i = e.getParent();
  if (i !== null) {
    var o = function (e, t = 0) {
      if (t !== 0) {
        L(1);
      }
      if (!Fn(t = er()) || !wr(e)) {
        return t;
      }
      let {
        anchor: n,
        focus: r
      } = t;
      let i = n.getNode();
      let o = r.getNode();
      if (je(i, e)) {
        n.set(e.__key, 0, "element");
      }
      if (je(o, e)) {
        r.set(e.__key, 0, "element");
      }
      return t;
    }(e);
    var s = false;
    if (Fn(o) && t) {
      let t = o.anchor;
      let n = o.focus;
      if (t.key === r) {
        ir(t, e, i, e.getPreviousSibling(), e.getNextSibling());
        s = true;
      }
      if (n.key === r) {
        ir(n, e, i, e.getPreviousSibling(), e.getNextSibling());
        s = true;
      }
    }
    if (Fn(o) && t && !s) {
      r = e.getIndexWithinParent();
      ve(e);
      nr(o, i, r, -1);
    } else {
      ve(e);
    }
    if (!(n || Ve(i) || i.canBeEmpty() || !i.isEmpty())) {
      an(i, t);
    }
    if (t && Dr(i) && i.isEmpty()) {
      i.selectEnd();
    }
  }
}
class un {
  static getType() {
    L(64);
  }
  static clone() {
    L(65);
  }
  constructor(e) {
    this.__type = this.constructor.getType();
    this.__next = this.__prev = this.__parent = null;
    Ne(this, e);
  }
  getType() {
    return this.__type;
  }
  isAttached() {
    for (var e = this.__key; e !== null;) {
      if (e === "root") {
        return true;
      }
      if ((e = xe(e)) === null) {
        break;
      }
      e = e.__parent;
    }
    return false;
  }
  isSelected(e) {
    if ((e = e || er()) == null) {
      return false;
    }
    let t = e.getNodes().some(e => e.__key === this.__key);
    return (wn(this) || !Fn(e) || e.anchor.type !== "element" || e.focus.type !== "element" || e.anchor.key !== e.focus.key || e.anchor.offset !== e.focus.offset) && t;
  }
  getKey() {
    return this.__key;
  }
  getIndexWithinParent() {
    var e = this.getParent();
    if (e === null) {
      return -1;
    }
    e = e.getFirstChild();
    let t = 0;
    for (; e !== null;) {
      if (this.is(e)) {
        return t;
      }
      t++;
      e = e.getNextSibling();
    }
    return -1;
  }
  getParent() {
    let e = this.getLatest().__parent;
    if (e === null) {
      return null;
    } else {
      return xe(e);
    }
  }
  getParentOrThrow() {
    let e = this.getParent();
    if (e === null) {
      L(66);
    }
    return e;
  }
  getTopLevelElement() {
    let e = this;
    for (; e !== null;) {
      let t = e.getParent();
      if (Ve(t)) {
        return e;
      }
      e = t;
    }
    return null;
  }
  getTopLevelElementOrThrow() {
    let e = this.getTopLevelElement();
    if (e === null) {
      L(67);
    }
    return e;
  }
  getParents() {
    let e = [];
    let t = this.getParent();
    for (; t !== null;) {
      e.push(t);
      t = t.getParent();
    }
    return e;
  }
  getParentKeys() {
    let e = [];
    let t = this.getParent();
    for (; t !== null;) {
      e.push(t.__key);
      t = t.getParent();
    }
    return e;
  }
  getPreviousSibling() {
    let e = this.getLatest().__prev;
    if (e === null) {
      return null;
    } else {
      return xe(e);
    }
  }
  getPreviousSiblings() {
    let e = [];
    var t = this.getParent();
    if (t === null) {
      return e;
    }
    for (t = t.getFirstChild(); t !== null && !t.is(this);) {
      e.push(t);
      t = t.getNextSibling();
    }
    return e;
  }
  getNextSibling() {
    let e = this.getLatest().__next;
    if (e === null) {
      return null;
    } else {
      return xe(e);
    }
  }
  getNextSiblings() {
    let e = [];
    let t = this.getNextSibling();
    for (; t !== null;) {
      e.push(t);
      t = t.getNextSibling();
    }
    return e;
  }
  getCommonAncestor(e) {
    let t = this.getParents();
    var n = e.getParents();
    if (wr(this)) {
      t.unshift(this);
    }
    if (wr(e)) {
      n.unshift(e);
    }
    e = t.length;
    var r = n.length;
    if (e === 0 || r === 0 || t[e - 1] !== n[r - 1]) {
      return null;
    }
    n = new Set(n);
    r = 0;
    for (; r < e; r++) {
      let e = t[r];
      if (n.has(e)) {
        return e;
      }
    }
    return null;
  }
  is(e) {
    return e != null && this.__key === e.__key;
  }
  isBefore(e) {
    if (this === e) {
      return false;
    }
    if (e.isParentOf(this)) {
      return true;
    }
    if (this.isParentOf(e)) {
      return false;
    }
    var t = this.getCommonAncestor(e);
    let n = this;
    for (;;) {
      var r = n.getParentOrThrow();
      if (r === t) {
        r = n.getIndexWithinParent();
        break;
      }
      n = r;
    }
    for (n = e;;) {
      if ((e = n.getParentOrThrow()) === t) {
        t = n.getIndexWithinParent();
        break;
      }
      n = e;
    }
    return r < t;
  }
  isParentOf(e) {
    let t = this.__key;
    if (t === e.__key) {
      return false;
    }
    for (; e !== null;) {
      if (e.__key === t) {
        return true;
      }
      e = e.getParent();
    }
    return false;
  }
  getNodesBetween(e) {
    let t = this.isBefore(e);
    let n = [];
    let r = new Set();
    for (var i = this;;) {
      var o = i.__key;
      if (!r.has(o)) {
        r.add(o);
        n.push(i);
      }
      if (i === e) {
        break;
      }
      if ((o = wr(i) ? t ? i.getFirstChild() : i.getLastChild() : null) !== null) {
        i = o;
      } else if ((o = t ? i.getNextSibling() : i.getPreviousSibling()) !== null) {
        i = o;
      } else {
        i = i.getParentOrThrow();
        if (!r.has(i.__key)) {
          n.push(i);
        }
        if (i === e) {
          break;
        }
        o = i;
        do {
          if (o === null) {
            L(68);
          }
          i = t ? o.getNextSibling() : o.getPreviousSibling();
          if ((o = o.getParent()) !== null) {
            if (!(i !== null || r.has(o.__key))) {
              n.push(o);
            }
          }
        } while (i === null);
      }
    }
    if (!t) {
      n.reverse();
    }
    return n;
  }
  isDirty() {
    let e = _r()._dirtyLeaves;
    return e !== null && e.has(this.__key);
  }
  getLatest() {
    let e = xe(this.__key);
    if (e === null) {
      L(113);
    }
    return e;
  }
  getWritable() {
    hr();
    var e = pr();
    var t = _r();
    e = e._nodeMap;
    let n = this.__key;
    let r = this.getLatest();
    let i = r.__parent;
    t = t._cloneNotNeeded;
    var o = er();
    if (o !== null) {
      o._cachedNodes = null;
    }
    if (t.has(n)) {
      Te(r);
      return r;
    } else {
      (o = r.constructor.clone(r)).__parent = i;
      o.__next = r.__next;
      o.__prev = r.__prev;
      if (wr(r) && wr(o)) {
        o.__first = r.__first;
        o.__last = r.__last;
        o.__size = r.__size;
        o.__indent = r.__indent;
        o.__format = r.__format;
        o.__dir = r.__dir;
      } else if (wn(r) && wn(o)) {
        o.__format = r.__format;
        o.__style = r.__style;
        o.__mode = r.__mode;
        o.__detail = r.__detail;
      }
      t.add(n);
      o.__key = n;
      Te(o);
      e.set(n, o);
      return o;
    }
  }
  getTextContent() {
    return "";
  }
  getTextContentSize() {
    return this.getTextContent().length;
  }
  createDOM() {
    L(70);
  }
  updateDOM() {
    L(71);
  }
  exportDOM(e) {
    return {
      element: this.createDOM(e._config, e)
    };
  }
  exportJSON() {
    L(72);
  }
  static importJSON() {
    L(18);
  }
  static transform() {
    return null;
  }
  remove(e) {
    an(this, true, e);
  }
  replace(e, t) {
    hr();
    var n = er();
    if (n !== null) {
      n = n.clone();
    }
    qe(this, e);
    let r = this.getLatest();
    let i = this.__key;
    let o = e.__key;
    let s = e.getWritable();
    let l = (e = this.getParentOrThrow().getWritable()).__size;
    ve(s);
    let a = r.getPreviousSibling();
    let u = r.getNextSibling();
    let c = r.__prev;
    let d = r.__next;
    let g = r.__parent;
    an(r, false, true);
    if (a === null) {
      e.__first = o;
    } else {
      a.getWritable().__next = o;
    }
    s.__prev = c;
    if (u === null) {
      e.__last = o;
    } else {
      u.getWritable().__prev = o;
    }
    s.__next = d;
    s.__parent = g;
    e.__size = l;
    if (t) {
      this.getChildren().forEach(e => {
        s.append(e);
      });
    }
    if (Fn(n)) {
      ke(n);
      t = n.anchor;
      n = n.focus;
      if (t.key === i) {
        $n(t, s);
      }
      if (n.key === i) {
        $n(n, s);
      }
    }
    if (Ce() === i) {
      Ee(o);
    }
    return s;
  }
  insertAfter(e, t = true) {
    hr();
    qe(this, e);
    var n = this.getWritable();
    let r = e.getWritable();
    var i = r.getParent();
    let o = er();
    var s = false;
    var l = false;
    if (i !== null) {
      var a = e.getIndexWithinParent();
      ve(r);
      if (Fn(o)) {
        l = i.__key;
        s = o.anchor;
        i = o.focus;
        s = s.type === "element" && s.key === l && s.offset === a + 1;
        l = i.type === "element" && i.key === l && i.offset === a + 1;
      }
    }
    i = this.getNextSibling();
    a = this.getParentOrThrow().getWritable();
    let u = r.__key;
    let c = n.__next;
    if (i === null) {
      a.__last = u;
    } else {
      i.getWritable().__prev = u;
    }
    a.__size++;
    n.__next = u;
    r.__next = c;
    r.__prev = n.__key;
    r.__parent = n.__parent;
    if (t && Fn(o)) {
      nr(o, a, (t = this.getIndexWithinParent()) + 1);
      n = a.__key;
      if (s) {
        o.anchor.set(n, t + 2, "element");
      }
      if (l) {
        o.focus.set(n, t + 2, "element");
      }
    }
    return e;
  }
  insertBefore(e, t = true) {
    hr();
    qe(this, e);
    var n = this.getWritable();
    let r = e.getWritable();
    let i = r.__key;
    ve(r);
    let o = this.getPreviousSibling();
    let s = this.getParentOrThrow().getWritable();
    let l = n.__prev;
    let a = this.getIndexWithinParent();
    if (o === null) {
      s.__first = i;
    } else {
      o.getWritable().__next = i;
    }
    s.__size++;
    n.__prev = i;
    r.__prev = l;
    r.__next = n.__key;
    r.__parent = n.__parent;
    n = er();
    if (t && Fn(n)) {
      nr(n, t = this.getParentOrThrow(), a);
    }
    return e;
  }
  isParentRequired() {
    return false;
  }
  createParentElementNode() {
    return Fr();
  }
  selectPrevious(e, t) {
    hr();
    let n = this.getPreviousSibling();
    let r = this.getParentOrThrow();
    if (n === null) {
      return r.select(0, 0);
    } else if (wr(n)) {
      return n.select();
    } else if (wn(n)) {
      return n.select(e, t);
    } else {
      e = n.getIndexWithinParent() + 1;
      return r.select(e, e);
    }
  }
  selectNext(e, t) {
    hr();
    let n = this.getNextSibling();
    let r = this.getParentOrThrow();
    if (n === null) {
      return r.select();
    } else if (wr(n)) {
      return n.select(0, 0);
    } else if (wn(n)) {
      return n.select(e, t);
    } else {
      e = n.getIndexWithinParent();
      return r.select(e, e);
    }
  }
  markDirty() {
    this.getWritable();
  }
}
class cn extends un {
  static getType() {
    return "linebreak";
  }
  static clone(e) {
    return new cn(e.__key);
  }
  constructor(e) {
    super(e);
  }
  getTextContent() {
    return "\n";
  }
  createDOM() {
    return document.createElement("br");
  }
  updateDOM() {
    return false;
  }
  static importDOM() {
    return {
      br: e => {
        let t;
        let n;
        let r = e.parentElement;
        if (r !== null && ((t = r.firstChild) === e || t.nextSibling === e && t.nodeType === 3 && (t.textContent || "").match(/^[\s|\r?\n|\t]+$/) !== null) && ((n = r.lastChild) === e || n.previousSibling === e && n.nodeType === 3 && (n.textContent || "").match(/^[\s|\r?\n|\t]+$/) !== null)) {
          return null;
        } else {
          return {
            conversion: dn,
            priority: 0
          };
        }
      }
    };
  }
  static importJSON() {
    return gn();
  }
  exportJSON() {
    return {
      type: "linebreak",
      version: 1
    };
  }
}
function dn() {
  return {
    node: gn()
  };
}
function gn() {
  return Ze(new cn());
}
function fn(e) {
  return e instanceof cn;
}
function hn(e, t) {
  if (t & 16) {
    return "code";
  } else if (t & 128) {
    return "mark";
  } else if (t & 32) {
    return "sub";
  } else if (t & 64) {
    return "sup";
  } else {
    return null;
  }
}
function pn(e, t) {
  if (t & 1) {
    return "strong";
  } else if (t & 2) {
    return "em";
  } else {
    return "span";
  }
}
function _n(e, t, n, r, i) {
  e = r.classList;
  if ((r = Le(i, "base")) !== undefined) {
    e.add(...r);
  }
  let o = false;
  let s = t & 8 && t & 4;
  var l = n & 8 && n & 4;
  if ((r = Le(i, "underlineStrikethrough")) !== undefined) {
    if (l) {
      o = true;
      if (!s) {
        e.add(...r);
      }
    } else if (s) {
      e.remove(...r);
    }
  }
  for (let a in q) {
    l = q[a];
    if ((r = Le(i, a)) !== undefined) {
      if (n & l && (!o || a !== "underline" && a !== "strikethrough")) {
        if ((t & l) == 0 || s && a === "underline" || a === "strikethrough") {
          e.add(...r);
        }
      } else if (t & l) {
        e.remove(...r);
      }
    }
  }
}
function mn(e, t, n) {
  let r = t.firstChild;
  e += (n = n.isComposing()) ? G : "";
  if (r == null) {
    t.textContent = e;
  } else if ((t = r.nodeValue) !== e) {
    if (n || W) {
      n = t.length;
      let i = e.length;
      let o = 0;
      let s = 0;
      for (; o < n && o < i && t[o] === e[o];) {
        o++;
      }
      for (; s + o < n && s + o < i && t[n - s - 1] === e[i - s - 1];) {
        s++;
      }
      e = [o, n - o - s, e.slice(o, i - s)];
      let [l, a, u] = e;
      if (a !== 0) {
        r.deleteData(l, a);
      }
      r.insertData(l, u);
    } else {
      r.nodeValue = e;
    }
  }
}
function yn(e, t) {
  (t = document.createElement(t)).appendChild(e);
  return t;
}
class Nn extends un {
  static getType() {
    return "text";
  }
  static clone(e) {
    return new Nn(e.__text, e.__key);
  }
  constructor(e, t) {
    super(t);
    this.__text = e;
    this.__format = 0;
    this.__style = "";
    this.__detail = this.__mode = 0;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getDetail() {
    return this.getLatest().__detail;
  }
  getMode() {
    let e = this.getLatest();
    return ne[e.__mode];
  }
  getStyle() {
    return this.getLatest().__style;
  }
  isToken() {
    return this.getLatest().__mode === 1;
  }
  isComposing() {
    return this.__key === Ce();
  }
  isSegmented() {
    return this.getLatest().__mode === 2;
  }
  isDirectionless() {
    return (this.getLatest().__detail & 1) != 0;
  }
  isUnmergeable() {
    return (this.getLatest().__detail & 2) != 0;
  }
  hasFormat(e) {
    e = q[e];
    return (this.getFormat() & e) != 0;
  }
  isSimpleText() {
    return this.__type === "text" && this.__mode === 0;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  getFormatFlags(e, t) {
    return me(this.getLatest().__format, e, t);
  }
  createDOM(e) {
    var t = this.__format;
    var n = hn(0, t);
    let r = pn(0, t);
    let i = document.createElement(n === null ? r : n);
    let o = i;
    if (n !== null) {
      o = document.createElement(r);
      i.appendChild(o);
    }
    n = o;
    mn(this.__text, n, this);
    if ((e = e.theme.text) !== undefined) {
      _n(r, 0, t, n, e);
    }
    if ((t = this.__style) !== "") {
      i.style.cssText = t;
    }
    return i;
  }
  updateDOM(e, t, n) {
    let r = this.__text;
    var i = e.__format;
    var o = this.__format;
    var s = hn(0, i);
    let l = hn(0, o);
    var a = pn(0, i);
    let u = pn(0, o);
    return (s === null ? a : s) !== (l === null ? u : l) || (s === l && a !== u ? ((i = t.firstChild) == null && L(48), mn(r, e = s = document.createElement(u), this), (n = n.theme.text) !== undefined && _n(u, 0, o, e, n), t.replaceChild(s, i), false) : (a = t, l !== null && s !== null && (a = t.firstChild) == null && L(49), mn(r, a, this), (n = n.theme.text) !== undefined && i !== o && _n(u, i, o, a, n), o = this.__style, e.__style !== o && (t.style.cssText = o), false));
  }
  static importDOM() {
    return {
      "#text": () => ({
        conversion: Cn,
        priority: 0
      }),
      b: () => ({
        conversion: Tn,
        priority: 0
      }),
      code: () => ({
        conversion: An,
        priority: 0
      }),
      em: () => ({
        conversion: An,
        priority: 0
      }),
      i: () => ({
        conversion: An,
        priority: 0
      }),
      s: () => ({
        conversion: An,
        priority: 0
      }),
      span: () => ({
        conversion: vn,
        priority: 0
      }),
      strong: () => ({
        conversion: An,
        priority: 0
      }),
      sub: () => ({
        conversion: An,
        priority: 0
      }),
      sup: () => ({
        conversion: An,
        priority: 0
      }),
      u: () => ({
        conversion: An,
        priority: 0
      })
    };
  }
  static importJSON(e) {
    let t = On(e.text);
    t.setFormat(e.format);
    t.setDetail(e.detail);
    t.setMode(e.mode);
    t.setStyle(e.style);
    return t;
  }
  exportDOM(e) {
    ({
      element: e
    } = super.exportDOM(e));
    if (e !== null) {
      if (this.hasFormat("bold")) {
        e = yn(e, "b");
      }
      if (this.hasFormat("italic")) {
        e = yn(e, "i");
      }
      if (this.hasFormat("strikethrough")) {
        e = yn(e, "s");
      }
      if (this.hasFormat("underline")) {
        e = yn(e, "u");
      }
    }
    return {
      element: e
    };
  }
  exportJSON() {
    return {
      detail: this.getDetail(),
      format: this.getFormat(),
      mode: this.getMode(),
      style: this.getStyle(),
      text: this.getTextContent(),
      type: "text",
      version: 1
    };
  }
  selectionTransform() {}
  setFormat(e) {
    let t = this.getWritable();
    t.__format = typeof e == "string" ? q[e] : e;
    return t;
  }
  setDetail(e) {
    let t = this.getWritable();
    t.__detail = typeof e == "string" ? X[e] : e;
    return t;
  }
  setStyle(e) {
    let t = this.getWritable();
    t.__style = e;
    return t;
  }
  toggleFormat(e) {
    e = q[e];
    return this.setFormat(this.getFormat() ^ e);
  }
  toggleDirectionless() {
    let e = this.getWritable();
    e.__detail ^= 1;
    return e;
  }
  toggleUnmergeable() {
    let e = this.getWritable();
    e.__detail ^= 2;
    return e;
  }
  setMode(e) {
    e = te[e];
    if (this.__mode === e) {
      return this;
    }
    let t = this.getWritable();
    t.__mode = e;
    return t;
  }
  setTextContent(e) {
    if (this.__text === e) {
      return this;
    }
    let t = this.getWritable();
    t.__text = e;
    return t;
  }
  select(e, t) {
    hr();
    let n = er();
    var r = this.getTextContent();
    let i = this.__key;
    if (typeof r == "string") {
      r = r.length;
      if (e === undefined) {
        e = r;
      }
      if (t === undefined) {
        t = r;
      }
    } else {
      t = e = 0;
    }
    if (Fn(n)) {
      if (!((r = Ce()) !== n.anchor.key && r !== n.focus.key)) {
        Ee(i);
      }
      n.setTextNodeRange(this, e, this, t);
      return n;
    } else {
      return qn(i, e, i, t, "text", "text");
    }
  }
  spliceText(e, t, n, r) {
    let i = this.getWritable();
    let o = i.__text;
    let s = n.length;
    let l = e;
    if (l < 0) {
      l = s + l;
      if (l < 0) {
        l = 0;
      }
    }
    let a = er();
    if (r && Fn(a)) {
      e += s;
      a.setTextNodeRange(i, e, i, e);
    }
    t = o.slice(0, l) + n + o.slice(l + t);
    i.__text = t;
    return i;
  }
  canInsertTextBefore() {
    return true;
  }
  canInsertTextAfter() {
    return true;
  }
  splitText(...e) {
    hr();
    var t = this.getLatest();
    var n = t.getTextContent();
    var r = t.__key;
    var i = Ce();
    var o = new Set(e);
    e = [];
    for (var s = n.length, l = "", a = 0; a < s; a++) {
      if (l !== "" && o.has(a)) {
        e.push(l);
        l = "";
      }
      l += n[a];
    }
    if (l !== "") {
      e.push(l);
    }
    if ((o = e.length) === 0) {
      return [];
    }
    if (e[0] === n) {
      return [t];
    }
    var u = e[0];
    n = t.getParentOrThrow();
    a = t.getFormat();
    let c = t.getStyle();
    let d = t.__detail;
    s = false;
    if (t.isSegmented()) {
      (l = On(u)).__format = a;
      l.__style = c;
      l.__detail = d;
      s = true;
    } else {
      (l = t.getWritable()).__text = u;
    }
    t = er();
    l = [l];
    u = u.length;
    for (let n = 1; n < o; n++) {
      var g = e[n];
      var f = g.length;
      (g = On(g).getWritable()).__format = a;
      g.__style = c;
      g.__detail = d;
      let o = g.__key;
      f = u + f;
      if (Fn(t)) {
        let e = t.anchor;
        let n = t.focus;
        if (e.key === r && e.type === "text" && e.offset > u && e.offset <= f) {
          e.key = o;
          e.offset -= u;
          t.dirty = true;
        }
        if (n.key === r && n.type === "text" && n.offset > u && n.offset <= f) {
          n.key = o;
          n.offset -= u;
          t.dirty = true;
        }
      }
      if (i === r) {
        Ee(o);
      }
      u = f;
      l.push(g);
    }
    r = this.getPreviousSibling();
    i = this.getNextSibling();
    if (r !== null) {
      Te(r);
    }
    if (i !== null) {
      Te(i);
    }
    r = n.getWritable();
    i = this.getIndexWithinParent();
    if (s) {
      r.splice(i, 0, l);
      this.remove();
    } else {
      r.splice(i, 1, l);
    }
    if (Fn(t)) {
      nr(t, n, i, o - 1);
    }
    return l;
  }
  mergeWithSibling(e) {
    var t = e === this.getPreviousSibling();
    if (!(t || e === this.getNextSibling())) {
      L(50);
    }
    var n = this.__key;
    let r = e.__key;
    let i = this.__text;
    let o = i.length;
    if (Ce() === r) {
      Ee(n);
    }
    let s = er();
    if (Fn(s)) {
      let i = s.anchor;
      let l = s.focus;
      if (i !== null && i.key === r) {
        or(i, t, n, e, o);
        s.dirty = true;
      }
      if (l !== null && l.key === r) {
        or(l, t, n, e, o);
        s.dirty = true;
      }
    }
    n = e.__text;
    this.setTextContent(t ? n + i : i + n);
    t = this.getWritable();
    e.remove();
    return t;
  }
  isTextEntity() {
    return false;
  }
}
function vn(e) {
  let t = e.style.fontWeight === "700";
  let n = e.style.textDecoration === "line-through";
  let r = e.style.fontStyle === "italic";
  let i = e.style.textDecoration === "underline";
  let o = e.style.verticalAlign;
  return {
    forChild: e => wn(e) ? (t && e.toggleFormat("bold"), n && e.toggleFormat("strikethrough"), r && e.toggleFormat("italic"), i && e.toggleFormat("underline"), o === "sub" && e.toggleFormat("subscript"), o === "super" && e.toggleFormat("superscript"), e) : e,
    node: null
  };
}
function Tn(e) {
  let t = e.style.fontWeight === "normal";
  return {
    forChild: e => {
      if (wn(e) && !t) {
        e.toggleFormat("bold");
      }
      return e;
    },
    node: null
  };
}
let En = new WeakMap();
function Cn(e) {
  if (e.parentElement === null) {
    throw Error("Expected parentElement of Text not to be null");
  }
  for (var t, n = e.textContent || "", r = e.parentNode, i = [e]; r !== null && (t = En.get(r)) === undefined && !(r.nodeName === "PRE" || r.nodeType === 1 && r.style.whiteSpace.startsWith("pre"));) {
    i.push(r);
    r = r.parentNode;
  }
  t = t === undefined ? r : t;
  r = 0;
  for (; r < i.length; r++) {
    En.set(i[r], t);
  }
  if (t !== null) {
    e = [];
    i = (n = n.split(/(\r?\n|\t)/)).length;
    t = 0;
    for (; t < i; t++) {
      if ((r = n[t]) === "\n" || r === "\r\n") {
        e.push(gn());
      } else if (r === "\t") {
        e.push(Rn());
      } else if (r !== "") {
        e.push(On(r));
      }
    }
    return {
      node: e
    };
  }
  if ((n = n.replace(/\r?\n|\t/gm, " ").replace("\r", "").replace(/\s+/g, " ")) === "") {
    return {
      node: null
    };
  }
  if (n[0] === " ") {
    i = e;
    t = true;
    for (; i !== null && (i = bn(i, false)) !== null;) {
      if ((r = i.textContent || "").length > 0) {
        if (r.match(/(?:\s|\r?\n|\t)$/)) {
          n = n.slice(1);
        }
        t = false;
        break;
      }
    }
    if (t) {
      n = n.slice(1);
    }
  }
  if (n[n.length - 1] === " ") {
    for (i = true; e !== null && (e = bn(e, true)) !== null;) {
      if ((e.textContent || "").replace(/^[\s|\r?\n|\t]+/, "").length > 0) {
        i = false;
        break;
      }
    }
    if (i) {
      n = n.slice(0, n.length - 1);
    }
  }
  if (n === "") {
    return {
      node: null
    };
  } else {
    return {
      node: On(n)
    };
  }
}
let xn = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/, "i");
function bn(e, t) {
  for (;;) {
    for (var n = undefined; (n = t ? e.nextSibling : e.previousSibling) === null;) {
      if ((e = e.parentElement) === null) {
        return null;
      }
    }
    if ((e = n).nodeType === 1 && ((n = e.style.display) === "" && e.nodeName.match(xn) === null || n !== "" && !n.startsWith("inline"))) {
      return null;
    }
    for (; (n = t ? e.firstChild : e.lastChild) !== null;) {
      e = n;
    }
    if (e.nodeType === 3) {
      return e;
    }
    if (e.nodeName === "BR") {
      return null;
    }
  }
}
let Sn = {
  code: "code",
  em: "italic",
  i: "italic",
  s: "strikethrough",
  strong: "bold",
  sub: "subscript",
  sup: "superscript",
  u: "underline"
};
function An(e) {
  let t = Sn[e.nodeName.toLowerCase()];
  if (t === undefined) {
    return {
      node: null
    };
  } else {
    return {
      forChild: e => {
        if (wn(e) && !e.hasFormat(t)) {
          e.toggleFormat(t);
        }
        return e;
      },
      node: null
    };
  }
}
function On(e = "") {
  return Ze(new Nn(e));
}
function wn(e) {
  return e instanceof Nn;
}
class kn extends Nn {
  static getType() {
    return "tab";
  }
  static clone(e) {
    let t = new kn(e.__key);
    t.__text = e.__text;
    t.__format = e.__format;
    t.__style = e.__style;
    return t;
  }
  constructor(e) {
    super("\t", e);
    this.__detail = 2;
  }
  static importDOM() {
    return null;
  }
  static importJSON(e) {
    let t = Rn();
    t.setFormat(e.format);
    t.setStyle(e.style);
    return t;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "tab",
      version: 1
    };
  }
  setTextContent() {
    throw Error("TabNode does not support setTextContent");
  }
  setDetail() {
    throw Error("TabNode does not support setDetail");
  }
  setMode() {
    throw Error("TabNode does not support setMode");
  }
  canInsertTextBefore() {
    return false;
  }
  canInsertTextAfter() {
    return false;
  }
}
function Rn() {
  return Ze(new kn());
}
class Dn {
  constructor(e, t, n) {
    this._selection = null;
    this.key = e;
    this.offset = t;
    this.type = n;
  }
  is(e) {
    return this.key === e.key && this.offset === e.offset && this.type === e.type;
  }
  isBefore(e) {
    let t = this.getNode();
    let n = e.getNode();
    let r = this.offset;
    e = e.offset;
    if (wr(t)) {
      var i = t.getDescendantByIndex(r);
      t = i != null ? i : t;
    }
    if (wr(n)) {
      i = n.getDescendantByIndex(e);
      n = i != null ? i : n;
    }
    if (t === n) {
      return r < e;
    } else {
      return t.isBefore(n);
    }
  }
  getNode() {
    let e = xe(this.key);
    if (e === null) {
      L(20);
    }
    return e;
  }
  set(e, t, n) {
    let r = this._selection;
    let i = this.key;
    this.key = e;
    this.offset = t;
    this.type = n;
    if (!fr()) {
      if (Ce() === i) {
        Ee(e);
      }
      if (r !== null) {
        r._cachedNodes = null;
        r.dirty = true;
      }
    }
  }
}
function Mn(e, t) {
  let n = t.__key;
  let r = e.offset;
  let i = "element";
  if (wn(t)) {
    i = "text";
    if (r > (t = t.getTextContentSize())) {
      r = t;
    }
  } else if (!wr(t)) {
    var o = t.getNextSibling();
    if (wn(o)) {
      n = o.__key;
      r = 0;
      i = "text";
    } else if (o = t.getParent()) {
      n = o.__key;
      r = t.getIndexWithinParent() + 1;
    }
  }
  e.set(n, r, i);
}
function $n(e, t) {
  if (wr(t)) {
    let n = t.getLastDescendant();
    if (wr(n) || wn(n)) {
      Mn(e, n);
    } else {
      Mn(e, t);
    }
  } else {
    Mn(e, t);
  }
}
function In(e, t, n, r) {
  let i = e.getNode();
  let o = i.getChildAtIndex(e.offset);
  let s = On();
  let l = Dr(i) ? Fr().append(s) : s;
  s.setFormat(n);
  s.setStyle(r);
  if (o === null) {
    i.append(l);
  } else {
    o.insertBefore(l);
  }
  if (e.is(t)) {
    t.set(s.__key, 0, "text");
  }
  e.set(s.__key, 0, "text");
}
function Pn(e, t, n, r) {
  e.key = t;
  e.offset = n;
  e.type = r;
}
class Ln {
  constructor(e) {
    this.dirty = false;
    this._nodes = e;
    this._cachedNodes = null;
  }
  is(e) {
    if (!Kn(e)) {
      return false;
    }
    let t = this._nodes;
    let n = e._nodes;
    return t.size === n.size && Array.from(t).every(e => n.has(e));
  }
  add(e) {
    this.dirty = true;
    this._nodes.add(e);
    this._cachedNodes = null;
  }
  delete(e) {
    this.dirty = true;
    this._nodes.delete(e);
    this._cachedNodes = null;
  }
  clear() {
    this.dirty = true;
    this._nodes.clear();
    this._cachedNodes = null;
  }
  has(e) {
    return this._nodes.has(e);
  }
  clone() {
    return new Ln(new Set(this._nodes));
  }
  extract() {
    return this.getNodes();
  }
  insertRawText() {}
  insertText() {}
  insertNodes(e, t) {
    let n = this.getNodes();
    let r = n.length;
    var i = n[r - 1];
    if (wn(i)) {
      i = i.select();
    } else {
      let e = i.getIndexWithinParent() + 1;
      i = i.getParentOrThrow().select(e, e);
    }
    i.insertNodes(e, t);
    e = 0;
    for (; e < r; e++) {
      n[e].remove();
    }
    return true;
  }
  getNodes() {
    var e = this._cachedNodes;
    if (e !== null) {
      return e;
    }
    var t = this._nodes;
    e = [];
    for (let n of t) {
      if ((t = xe(n)) !== null) {
        e.push(t);
      }
    }
    if (!fr()) {
      this._cachedNodes = e;
    }
    return e;
  }
  getTextContent() {
    let e = this.getNodes();
    let t = "";
    for (let n = 0; n < e.length; n++) {
      t += e[n].getTextContent();
    }
    return t;
  }
}
function Fn(e) {
  return e instanceof Wn;
}
class Bn {
  constructor(e, t, n) {
    this.gridKey = e;
    this.anchor = t;
    this.focus = n;
    this.dirty = false;
    this._cachedNodes = null;
    t._selection = this;
    n._selection = this;
  }
  is(e) {
    return !!zn(e) && this.gridKey === e.gridKey && this.anchor.is(e.anchor) && this.focus.is(e.focus);
  }
  set(e, t, n) {
    this.dirty = true;
    this.gridKey = e;
    this.anchor.key = t;
    this.focus.key = n;
    this._cachedNodes = null;
  }
  clone() {
    return new Bn(this.gridKey, this.anchor, this.focus);
  }
  isCollapsed() {
    return false;
  }
  isBackward() {
    return this.focus.isBefore(this.anchor);
  }
  getCharacterOffsets() {
    return Yn(this);
  }
  extract() {
    return this.getNodes();
  }
  insertRawText() {}
  insertText() {}
  insertNodes(e, t) {
    let n = this.focus.getNode();
    return at(n.select(0, n.getChildrenSize())).insertNodes(e, t);
  }
  getShape() {
    var e = xe(this.anchor.key);
    if (e === null) {
      L(21);
    }
    var t = e.getIndexWithinParent();
    e = e.getParentOrThrow().getIndexWithinParent();
    var n = xe(this.focus.key);
    if (n === null) {
      L(22);
    }
    var r = n.getIndexWithinParent();
    let i = n.getParentOrThrow().getIndexWithinParent();
    n = Math.min(t, r);
    t = Math.max(t, r);
    r = Math.min(e, i);
    e = Math.max(e, i);
    return {
      fromX: Math.min(n, t),
      fromY: Math.min(r, e),
      toX: Math.max(n, t),
      toY: Math.max(r, e)
    };
  }
  getNodes() {
    function e(e) {
      let {
        cell: t,
        startColumn: n,
        startRow: r
      } = e;
      l = Math.min(l, n);
      a = Math.min(a, r);
      u = Math.max(u, n + t.__colSpan - 1);
      c = Math.max(c, r + t.__rowSpan - 1);
    }
    var t = this._cachedNodes;
    if (t !== null) {
      return t;
    }
    var n = this.anchor.getNode();
    t = this.focus.getNode();
    n = nt(n, Kr);
    var r = nt(t, Kr);
    if (!Kr(n)) {
      L(103);
    }
    if (!Kr(r)) {
      L(104);
    }
    if (!Hr(t = n.getParent())) {
      L(105);
    }
    if (!Yr(t = t.getParent())) {
      L(106);
    }
    let [i, o, s] = sr(t, n, r);
    let l = Math.min(o.startColumn, s.startColumn);
    let a = Math.min(o.startRow, s.startRow);
    let u = Math.max(o.startColumn + o.cell.__colSpan - 1, s.startColumn + s.cell.__colSpan - 1);
    let c = Math.max(o.startRow + o.cell.__rowSpan - 1, s.startRow + s.cell.__rowSpan - 1);
    n = l;
    r = a;
    for (var d = l, g = a; l < n || a < r || u > d || c > g;) {
      if (l < n) {
        var f = g - r;
        --n;
        for (var h = 0; h <= f; h++) {
          e(i[r + h][n]);
        }
      }
      if (a < r) {
        f = d - n;
        --r;
        h = 0;
        f = d - n;
        --r;
        h = 0;
        for (; h <= f; h++) {
          e(i[r][n + h]);
        }
      }
      if (u > d) {
        f = g - r;
        d += 1;
        h = 0;
        f = g - r;
        d += 1;
        h = 0;
        for (; h <= f; h++) {
          e(i[r + h][d]);
        }
      }
      if (c > g) {
        f = d - n;
        g += 1;
        h = 0;
        f = d - n;
        g += 1;
        h = 0;
        for (; h <= f; h++) {
          e(i[g][n + h]);
        }
      }
    }
    t = [t];
    n = null;
    r = a;
    for (; r <= c; r++) {
      for (d = l; d <= u; d++) {
        ({
          cell: g
        } = i[r][d]);
        if (!Hr(f = g.getParent())) {
          L(107);
        }
        if (f !== n) {
          t.push(f);
        }
        t.push(g, ...rt(g));
        n = f;
      }
    }
    if (!fr()) {
      this._cachedNodes = t;
    }
    return t;
  }
  getTextContent() {
    let e = this.getNodes();
    let t = "";
    for (let n = 0; n < e.length; n++) {
      t += e[n].getTextContent();
    }
    return t;
  }
}
function zn(e) {
  return e instanceof Bn;
}
class Wn {
  constructor(e, t, n, r) {
    this.anchor = e;
    this.focus = t;
    this.dirty = false;
    this.format = n;
    this.style = r;
    this._cachedNodes = null;
    e._selection = this;
    t._selection = this;
  }
  is(e) {
    return !!Fn(e) && this.anchor.is(e.anchor) && this.focus.is(e.focus) && this.format === e.format && this.style === e.style;
  }
  isBackward() {
    return this.focus.isBefore(this.anchor);
  }
  isCollapsed() {
    return this.anchor.is(this.focus);
  }
  getNodes() {
    var e = this._cachedNodes;
    if (e !== null) {
      return e;
    }
    e = this.anchor;
    var t = this.focus;
    var n = e.isBefore(t);
    var r = n ? e : t;
    n = n ? t : e;
    e = r.getNode();
    t = n.getNode();
    let i = r.offset;
    r = n.offset;
    if (wr(e)) {
      n = e.getDescendantByIndex(i);
      e = n != null ? n : e;
    }
    if (wr(t)) {
      if ((n = t.getDescendantByIndex(r)) !== null && n !== e && t.getChildAtIndex(r) === n) {
        n = n.getPreviousSibling();
      }
      t = n != null ? n : t;
    }
    e = e.is(t) ? wr(e) && e.getChildrenSize() > 0 ? [] : [e] : e.getNodesBetween(t);
    if (!fr()) {
      this._cachedNodes = e;
    }
    return e;
  }
  setTextNodeRange(e, t, n, r) {
    Pn(this.anchor, e.__key, t, "text");
    Pn(this.focus, n.__key, r, "text");
    this._cachedNodes = null;
    this.dirty = true;
  }
  getTextContent() {
    let e = this.getNodes();
    if (e.length === 0) {
      return "";
    }
    let t = e[0];
    let n = e[e.length - 1];
    let r = this.anchor;
    let i = this.focus;
    let o = r.isBefore(i);
    let [s, l] = Yn(this);
    let a = "";
    let u = true;
    for (let c = 0; c < e.length; c++) {
      let d = e[c];
      if (wr(d) && !d.isInline()) {
        if (!u) {
          a += "\n";
        }
        u = !d.isEmpty();
      } else {
        u = false;
        if (wn(d)) {
          let e = d.getTextContent();
          if (d === t) {
            if (d === n) {
              if (!(r.type === "element" && i.type === "element" && i.offset !== r.offset)) {
                e = s < l ? e.slice(s, l) : e.slice(l, s);
              }
            } else {
              e = o ? e.slice(s) : e.slice(l);
            }
          } else if (d === n) {
            e = o ? e.slice(0, l) : e.slice(0, s);
          }
          a += e;
        } else if (!(!Ar(d) && !fn(d) || d === n && this.isCollapsed())) {
          a += d.getTextContent();
        }
      }
    }
    return a;
  }
  applyDOMRange(e) {
    let t = _r();
    let n = t.getEditorState()._selection;
    if ((e = Jn(e.startContainer, e.startOffset, e.endContainer, e.endOffset, t, n)) !== null) {
      var [r, i] = e;
      Pn(this.anchor, r.key, r.offset, r.type);
      Pn(this.focus, i.key, i.offset, i.type);
      this._cachedNodes = null;
    }
  }
  clone() {
    let e = this.anchor;
    let t = this.focus;
    return new Wn(new Dn(e.key, e.offset, e.type), new Dn(t.key, t.offset, t.type), this.format, this.style);
  }
  toggleFormat(e) {
    this.format = me(this.format, e, null);
    this.dirty = true;
  }
  setStyle(e) {
    this.style = e;
    this.dirty = true;
  }
  hasFormat(e) {
    return (this.format & q[e]) != 0;
  }
  insertRawText(e) {
    let t = [];
    let n = (e = e.split(/(\r?\n|\t)/)).length;
    for (let r = 0; r < n; r++) {
      let n = e[r];
      if (n === "\n" || n === "\r\n") {
        t.push(gn());
      } else if (n === "\t") {
        t.push(Rn());
      } else {
        t.push(On(n));
      }
    }
    this.insertNodes(t);
  }
  insertText(e) {
    var t = this.anchor;
    var n = this.focus;
    var r = this.isCollapsed() || t.isBefore(n);
    var i = this.format;
    var o = this.style;
    if (r && t.type === "element") {
      In(t, n, i, o);
    } else if (!(r || n.type !== "element")) {
      In(n, t, i, o);
    }
    var s = this.getNodes();
    var l = s.length;
    var a = r ? n : t;
    n = (r ? t : n).offset;
    var u = a.offset;
    if (!wn(t = s[0])) {
      L(26);
    }
    r = t.getTextContent().length;
    var c = t.getParentOrThrow();
    var d = s[l - 1];
    if (this.isCollapsed() && n === r && (t.isSegmented() || t.isToken() || !t.canInsertTextAfter() || !c.canInsertTextAfter() && t.getNextSibling() === null)) {
      var g = t.getNextSibling();
      if (!(wn(g) && g.canInsertTextBefore() && !pe(g))) {
        (g = On()).setFormat(i);
        if (c.canInsertTextAfter()) {
          t.insertAfter(g);
        } else {
          c.insertAfter(g);
        }
      }
      g.select(0, 0);
      t = g;
      if (e !== "") {
        return void this.insertText(e);
      }
    } else if (this.isCollapsed() && n === 0 && (t.isSegmented() || t.isToken() || !t.canInsertTextBefore() || !c.canInsertTextBefore() && t.getPreviousSibling() === null)) {
      if (!(wn(g = t.getPreviousSibling()) && !pe(g))) {
        (g = On()).setFormat(i);
        if (c.canInsertTextBefore()) {
          t.insertBefore(g);
        } else {
          c.insertBefore(g);
        }
      }
      g.select();
      t = g;
      if (e !== "") {
        return void this.insertText(e);
      }
    } else if (t.isSegmented() && n !== r) {
      (c = On(t.getTextContent())).setFormat(i);
      t.replace(c);
      t = c;
    } else if (!(this.isCollapsed() || e === "" || (g = d.getParent(), c.canInsertTextBefore() && c.canInsertTextAfter() && (!wr(g) || g.canInsertTextBefore() && g.canInsertTextAfter())))) {
      this.insertText("");
      Vn(this.anchor, this.focus, null);
      return void this.insertText(e);
    }
    if (l === 1) {
      if (t.isToken()) {
        (e = On(e)).select();
        t.replace(e);
      } else {
        s = t.getFormat();
        l = t.getStyle();
        if (n === u && (s !== i || l !== o)) {
          if (t.getTextContent() !== "") {
            (s = On(e)).setFormat(i);
            s.setStyle(o);
            s.select();
            if (n === 0) {
              t.insertBefore(s, false);
            } else {
              [l] = t.splitText(n);
              l.insertAfter(s, false);
            }
            return void (s.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= e.length));
          }
          t.setFormat(i);
          t.setStyle(o);
        }
        if ((t = t.spliceText(n, u - n, e, true)).getTextContent() === "") {
          t.remove();
        } else if (this.anchor.type === "text") {
          if (t.isComposing()) {
            this.anchor.offset -= e.length;
          } else {
            this.format = s;
            this.style = l;
          }
        }
      }
    } else {
      i = new Set([...t.getParentKeys(), ...d.getParentKeys()]);
      g = wr(t) ? t : t.getParentOrThrow();
      o = wr(d) ? d : d.getParentOrThrow();
      c = d;
      if (!g.is(o) && o.isInline()) {
        do {
          c = o;
          o = o.getParentOrThrow();
        } while (o.isInline());
      }
      if (a.type === "text" && (u !== 0 || d.getTextContent() === "") || a.type === "element" && d.getIndexWithinParent() < u) {
        if (wn(d) && !d.isToken() && u !== d.getTextContentSize()) {
          if (d.isSegmented()) {
            a = On(d.getTextContent());
            d.replace(a);
            d = a;
          }
          d = d.spliceText(0, u, "");
          i.add(d.__key);
        } else if ((a = d.getParentOrThrow()).canBeEmpty() || a.getChildrenSize() !== 1) {
          d.remove();
        } else {
          a.remove();
        }
      } else {
        i.add(d.__key);
      }
      a = o.getChildren();
      u = new Set(s);
      d = g.is(o);
      g = g.isInline() && t.getNextSibling() === null ? g : t;
      for (let e = a.length - 1; e >= 0; e--) {
        let n = a[e];
        if (n.is(t) || wr(n) && n.isParentOf(t)) {
          break;
        }
        if (n.isAttached()) {
          if (!u.has(n) || n.is(c)) {
            if (!d) {
              g.insertAfter(n, false);
            }
          } else {
            n.remove();
          }
        }
      }
      if (!d) {
        a = o;
        u = null;
        a = o;
        u = null;
        for (; a !== null;) {
          if ((d = (o = a.getChildren()).length) === 0 || o[d - 1].is(u)) {
            i.delete(a.__key);
            u = a;
          }
          a = a.getParent();
        }
      }
      if (t.isToken()) {
        if (n === r) {
          t.select();
        } else {
          (e = On(e)).select();
          t.replace(e);
        }
      } else if ((t = t.spliceText(n, r - n, e, true)).getTextContent() === "") {
        t.remove();
      } else if (t.isComposing() && this.anchor.type === "text") {
        this.anchor.offset -= e.length;
      }
      e = 1;
      for (; e < l; e++) {
        t = s[e];
        if (!i.has(t.__key)) {
          t.remove();
        }
      }
    }
  }
  removeText() {
    this.insertText("");
  }
  formatText(e) {
    if (this.isCollapsed()) {
      this.toggleFormat(e);
      Ee(null);
    } else {
      var t = this.getNodes();
      var n = [];
      for (var r of t) {
        if (wn(r)) {
          n.push(r);
        }
      }
      var i = n.length;
      if (i === 0) {
        this.toggleFormat(e);
        Ee(null);
      } else {
        r = this.anchor;
        var o = this.focus;
        var s = this.isBackward();
        t = s ? o : r;
        r = s ? r : o;
        var l = 0;
        var a = n[0];
        o = t.type === "element" ? 0 : t.offset;
        if (t.type === "text" && o === a.getTextContentSize()) {
          l = 1;
          a = n[1];
          o = 0;
        }
        if (a != null) {
          s = a.getFormatFlags(e, null);
          var u = i - 1;
          var c = n[u];
          i = r.type === "text" ? r.offset : c.getTextContentSize();
          if (a.is(c)) {
            if (o !== i) {
              if (o === 0 && i === a.getTextContentSize()) {
                a.setFormat(s);
              } else {
                e = a.splitText(o, i);
                (e = o === 0 ? e[0] : e[1]).setFormat(s);
                if (t.type === "text") {
                  t.set(e.__key, 0, "text");
                }
                if (r.type === "text") {
                  r.set(e.__key, i - o, "text");
                }
              }
              this.format = s;
            }
          } else {
            if (o !== 0) {
              [, a] = a.splitText(o);
              o = 0;
            }
            a.setFormat(s);
            var d = c.getFormatFlags(e, s);
            if (i > 0) {
              if (i !== c.getTextContentSize()) {
                [c] = c.splitText(i);
              }
              c.setFormat(d);
            }
            l += 1;
            for (; l < u; l++) {
              let t = n[l];
              if (!t.isToken()) {
                let n = t.getFormatFlags(e, d);
                t.setFormat(n);
              }
            }
            if (t.type === "text") {
              t.set(a.__key, o, "text");
            }
            if (r.type === "text") {
              r.set(c.__key, i, "text");
            }
            this.format = s | d;
          }
        }
      }
    }
  }
  insertNodes(e, t) {
    if (!this.isCollapsed()) {
      var n = this.isBackward() ? this.anchor : this.focus;
      var r = n.getNode().getNextSibling();
      r = r ? r.getKey() : null;
      n = (n = n.getNode().getPreviousSibling()) ? n.getKey() : null;
      this.removeText();
      if (this.isCollapsed() && this.focus.type === "element") {
        if (this.focus.key === r && this.focus.offset === 0) {
          var i = On();
          this.focus.getNode().insertBefore(i);
        } else if (this.focus.key === n && this.focus.offset === this.focus.getNode().getChildrenSize()) {
          i = On();
          this.focus.getNode().insertAfter(i);
        }
        if (i) {
          this.focus.set(i.__key, 0, "text");
          this.anchor.set(i.__key, 0, "text");
        }
      }
    }
    n = (i = this.anchor).offset;
    var o = i.getNode();
    r = o;
    if (i.type === "element") {
      r = (r = (i = i.getNode()).getChildAtIndex(n - 1)) === null ? i : r;
    }
    i = [];
    var s = o.getNextSiblings();
    var l = Ve(o) ? null : o.getTopLevelElementOrThrow();
    if (wn(o)) {
      r = o.getTextContent().length;
      if (n === 0 && r !== 0) {
        r = (r = o.getPreviousSibling()) !== null ? r : o.getParentOrThrow();
        i.push(o);
      } else if (n === r) {
        r = o;
      } else {
        if (o.isToken()) {
          return false;
        }
        [r, o] = o.splitText(n);
        i.push(o);
      }
    }
    o = r;
    i.push(...s);
    s = e[0];
    var a = false;
    var u = null;
    for (let t = 0; t < e.length; t++) {
      var c = e[t];
      if (Ve(r) || Ar(r) || !wr(c) || c.isInline()) {
        if (a && !wr(c) && !Ar(c) && Ve(r.getParent())) {
          L(28);
        }
      } else {
        if (c.is(s)) {
          if (wr(r) && r.isEmpty() && r.canReplaceWith(c)) {
            r.replace(c);
            r = c;
            a = true;
            continue;
          }
          if (ye(a = c.getFirstDescendant())) {
            for (var d = a.getParentOrThrow(); d.isInline();) {
              d = d.getParentOrThrow();
            }
            a = (u = d.getChildren()).length;
            if (wr(r)) {
              var g = r.getFirstChild();
              for (let e = 0; e < a; e++) {
                let t = u[e];
                if (g === null) {
                  r.append(t);
                } else {
                  g.insertAfter(t);
                }
                g = t;
              }
            } else {
              for (g = a - 1; g >= 0; g--) {
                r.insertAfter(u[g]);
              }
              r = r.getParentOrThrow();
            }
            u = u[a - 1];
            d.remove();
            a = true;
            if (d.is(c)) {
              continue;
            }
          }
        }
        if (wn(r)) {
          if (l === null) {
            L(27);
          }
          r = l;
        }
      }
      a = false;
      if (wr(r) && !r.isInline()) {
        u = c;
        if (Ar(c) && !c.isInline()) {
          r = r.insertAfter(c, false);
        } else if (wr(c)) {
          if (!(!c.canBeEmpty() && c.isEmpty())) {
            if (Dr(r)) {
              if ((d = r.getChildAtIndex(n)) !== null) {
                d.insertBefore(c);
              } else {
                r.append(c);
              }
              r = c;
            } else if (c.isInline()) {
              r.append(c);
              r = c;
            } else {
              r = r.insertAfter(c, false);
            }
          }
        } else {
          if ((d = r.getFirstChild()) !== null) {
            d.insertBefore(c);
          } else {
            r.append(c);
          }
          r = c;
        }
      } else if (!wr(c) || wr(c) && c.isInline() || Ar(r) && !r.isInline()) {
        u = c;
        if (Fn(this) && Ar(c) && (wr(r) || wn(r)) && !c.isInline()) {
          if (wn(r)) {
            d = r.getParentOrThrow();
            [r] = r.splitText(n);
            r = r.getIndexWithinParent() + 1;
          } else {
            d = r;
            r = n;
          }
          [, r] = tt(d, r);
          r = r.insertBefore(c);
        } else {
          r = r.insertAfter(c, false);
        }
      } else {
        c = r.getParentOrThrow();
        if (fn(r)) {
          r.remove();
        }
        r = c;
        t--;
      }
    }
    if (t) {
      if (wn(o)) {
        o.select();
      } else if (wn(e = r.getPreviousSibling())) {
        e.select();
      } else {
        e = r.getIndexWithinParent();
        r.getParentOrThrow().select(e, e);
      }
    }
    if (wr(r)) {
      e = wn(u) ? u : wr(u) && u.isInline() ? u.getLastDescendant() : r.getLastDescendant();
      if (!t) {
        if (e === null) {
          r.select();
        } else if (wn(e)) {
          if (e.getTextContent() === "") {
            e.selectPrevious();
          } else {
            e.select();
          }
        } else {
          e.selectNext();
        }
      }
      if (i.length !== 0) {
        t = r;
        e = i.length - 1;
        t = r;
        e = i.length - 1;
        for (; e >= 0; e--) {
          l = (n = i[e]).getParentOrThrow();
          if (!wr(r) || Zn(n) || Ar(n) && (!n.isInline() || n.isIsolated())) {
            if (wr(r) || Zn(n)) {
              if (wr(n) && !n.canInsertAfter(r)) {
                if (!wr(o = l.constructor.clone(l))) {
                  L(29);
                }
                o.append(n);
                r.insertAfter(o);
              } else {
                r.insertAfter(n);
              }
            } else {
              r.insertBefore(n);
              r = n;
            }
          } else {
            if (t === r) {
              r.append(n);
            } else {
              r.insertBefore(n);
            }
            r = n;
          }
          if (l.isEmpty() && !l.canBeEmpty()) {
            l.remove();
          }
        }
      }
    } else if (!t) {
      if (wn(r)) {
        r.select();
      } else {
        t = r.getParentOrThrow();
        e = r.getIndexWithinParent() + 1;
        t.select(e, e);
      }
    }
    return true;
  }
  insertParagraph() {
    if (!this.isCollapsed()) {
      this.removeText();
    }
    var e = this.anchor;
    var t = e.offset;
    var n = [];
    if (e.type === "text") {
      var r = e.getNode();
      var i = r.getNextSiblings().reverse();
      var o = r.getParentOrThrow();
      var s = o.isInline();
      var l = s ? o.getTextContentSize() : r.getTextContentSize();
      if (t === 0) {
        i.push(r);
      } else {
        if (s) {
          n = o.getNextSiblings();
        }
        if (!(t === l || s && t === r.getTextContentSize())) {
          [, r] = r.splitText(t);
          i.push(r);
        }
      }
    } else {
      if (Ve(o = e.getNode())) {
        i = Fr();
        n = o.getChildAtIndex(t);
        i.select();
        return void (n !== null ? n.insertBefore(i, false) : o.append(i));
      }
      i = o.getChildren().slice(t).reverse();
    }
    r = i.length;
    if (t === 0 && r > 0 && o.isInline()) {
      if (wr(i = (n = o.getParentOrThrow()).insertNewAfter(this, false))) {
        n = n.getChildren();
        o = 0;
        n = n.getChildren();
        o = 0;
        for (; o < n.length; o++) {
          i.append(n[o]);
        }
      }
    } else if ((s = o.insertNewAfter(this, false)) === null) {
      this.insertLineBreak();
    } else if (wr(s)) {
      l = o.getFirstChild();
      if (t === 0 && (o.is(e.getNode()) || l && l.is(e.getNode())) && r > 0) {
        o.insertBefore(s);
      } else {
        o = null;
        t = n.length;
        e = s.getParentOrThrow();
        if (t > 0) {
          for (l = 0; l < t; l++) {
            e.append(n[l]);
          }
        }
        if (r !== 0) {
          for (n = 0; n < r; n++) {
            t = i[n];
            if (o === null) {
              s.append(t);
            } else {
              o.insertBefore(t);
            }
            o = t;
          }
        }
        if (s.canBeEmpty() || s.getChildrenSize() !== 0) {
          s.selectStart();
        } else {
          s.selectPrevious();
          s.remove();
        }
      }
    }
  }
  insertLineBreak(e) {
    let t = gn();
    var n = this.anchor;
    if (n.type === "element") {
      if (Dr(n = n.getNode())) {
        this.insertParagraph();
      }
    }
    if (e) {
      this.insertNodes([t], true);
    } else if (this.insertNodes([t])) {
      t.selectNext(0, 0);
    }
  }
  getCharacterOffsets() {
    return Yn(this);
  }
  extract() {
    var e = this.getNodes();
    var t = e.length;
    var n = t - 1;
    var r = this.anchor;
    let i = this.focus;
    var o = e[0];
    let s = e[n];
    let [l, a] = Yn(this);
    if (t === 0) {
      return [];
    } else if (t === 1) {
      if (wn(o) && !this.isCollapsed()) {
        e = l > a ? a : l;
        n = o.splitText(e, l > a ? l : a);
        if ((e = e === 0 ? n[0] : n[1]) != null) {
          return [e];
        } else {
          return [];
        }
      } else {
        return [o];
      }
    } else {
      t = r.isBefore(i);
      if (wn(o)) {
        if ((r = t ? l : a) === o.getTextContentSize()) {
          e.shift();
        } else if (r !== 0) {
          [, o] = o.splitText(r);
          e[0] = o;
        }
      }
      if (wn(s)) {
        o = s.getTextContent().length;
        if ((t = t ? a : l) === 0) {
          e.pop();
        } else if (t !== o) {
          [s] = s.splitText(t);
          e[n] = s;
        }
      }
      return e;
    }
  }
  modify(e, t, n) {
    var r = this.focus;
    var i = this.anchor;
    var o = e === "move";
    var s = ze(r, t);
    if (Ar(s) && !s.isIsolated()) {
      if (o && s.isKeyboardSelectable()) {
        (t = Xn()).add(s.__key);
        ke(t);
      } else if (wn(e = t ? s.getPreviousSibling() : s.getNextSibling())) {
        s = e.__key;
        t = t ? e.getTextContent().length : 0;
        r.set(s, t, "text");
        if (o) {
          i.set(s, t, "text");
        }
      } else {
        n = s.getParentOrThrow();
        if (wr(e)) {
          n = e.__key;
          s = t ? e.getChildrenSize() : 0;
        } else {
          s = s.getIndexWithinParent();
          n = n.__key;
          if (!t) {
            s++;
          }
        }
        r.set(n, s, "element");
        if (o) {
          i.set(n, s, "element");
        }
      }
    } else if (r = et((i = _r())._window)) {
      var l = i._blockCursorElement;
      var a = i._rootElement;
      if (!(a === null || l === null || !wr(s) || s.isInline() || s.canBeEmpty())) {
        Qe(l, i, a);
      }
      r.modify(e, t ? "backward" : "forward", n);
      if (r.rangeCount > 0 && (s = r.getRangeAt(0), i = Dr(i = this.anchor.getNode()) ? i : Ge(i), this.applyDOMRange(s), this.dirty = true, !o)) {
        o = this.getNodes();
        e = [];
        n = false;
        l = 0;
        for (; l < o.length; l++) {
          if (je(a = o[l], i)) {
            e.push(a);
          } else {
            n = true;
          }
        }
        if (n && e.length > 0) {
          if (t) {
            if (wr(t = e[0])) {
              t.selectStart();
            } else {
              t.getParentOrThrow().selectStart();
            }
          } else if (wr(t = e[e.length - 1])) {
            t.selectEnd();
          } else {
            t.getParentOrThrow().selectEnd();
          }
        }
        if (!(r.anchorNode === s.startContainer && r.anchorOffset === s.startOffset)) {
          t = this.focus;
          r = (o = this.anchor).key;
          s = o.offset;
          i = o.type;
          Pn(o, t.key, t.offset, t.type);
          Pn(t, r, s, i);
          this._cachedNodes = null;
        }
      }
    }
  }
  deleteCharacter(e) {
    let t = this.isCollapsed();
    if (this.isCollapsed()) {
      var r = this.anchor;
      var i = this.focus;
      var o = r.getNode();
      if (!e && (r.type === "element" && wr(o) && r.offset === o.getChildrenSize() || r.type === "text" && r.offset === o.getTextContentSize())) {
        var s = o.getParent();
        if (wr(s = o.getNextSibling() || (s === null ? null : s.getNextSibling())) && s.isShadowRoot()) {
          return;
        }
      }
      if (Ar(s = ze(i, e)) && !s.isIsolated()) {
        return void (s.isKeyboardSelectable() && wr(o) && o.getChildrenSize() === 0 ? (o.remove(), e = Xn(), e.add(s.__key), ke(e)) : (s.remove(), _r().dispatchCommand(n, undefined)));
      }
      if (!e && wr(s) && wr(o) && o.isEmpty()) {
        o.remove();
        return void s.selectStart();
      }
      this.modify("extend", e, "character");
      if (this.isCollapsed()) {
        if (e && r.offset === 0 && (r.type === "element" ? r.getNode() : r.getNode().getParentOrThrow()).collapseAtStart(this)) {
          return;
        }
      } else {
        s = i.type === "text" ? i.getNode() : null;
        o = r.type === "text" ? r.getNode() : null;
        if (s !== null && s.isSegmented()) {
          r = i.offset;
          i = s.getTextContentSize();
          if (s.is(o) || e && r !== i || !e && r !== 0) {
            return void jn(s, e, r);
          }
        } else if (o !== null && o.isSegmented() && (r = r.offset, i = o.getTextContentSize(), o.is(s) || e && r !== 0 || !e && r !== i)) {
          return void jn(o, e, r);
        }
        o = this.anchor;
        s = this.focus;
        if ((r = o.getNode()) === (i = s.getNode()) && o.type === "text" && s.type === "text") {
          var l = o.offset;
          var a = s.offset;
          let t = l < a;
          if ((i = t ? l : a) !== (l = (a = t ? a : l) - 1)) {
            if (!De(r = r.getTextContent().slice(i, a))) {
              if (e) {
                s.offset = l;
              } else {
                o.offset = l;
              }
            }
          }
        }
      }
    }
    this.removeText();
    if (e && !t && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
      if ((e = this.anchor.getNode()).isEmpty() && Dr(e.getParent()) && e.getIndexWithinParent() === 0) {
        e.collapseAtStart(this);
      }
    }
  }
  deleteLine(e) {
    if (this.isCollapsed()) {
      if (this.anchor.type === "text") {
        this.modify("extend", e, "lineboundary");
      }
      if ((e ? this.focus : this.anchor).offset === 0) {
        this.modify("extend", e, "character");
      }
    }
    this.removeText();
  }
  deleteWord(e) {
    if (this.isCollapsed()) {
      this.modify("extend", e, "word");
    }
    this.removeText();
  }
}
function Kn(e) {
  return e instanceof Ln;
}
function Un(e) {
  let t = e.offset;
  if (e.type === "text") {
    return t;
  } else if (t === (e = e.getNode()).getChildrenSize()) {
    return e.getTextContent().length;
  } else {
    return 0;
  }
}
function Yn(e) {
  let t = e.anchor;
  e = e.focus;
  if (t.type === "element" && e.type === "element" && t.key === e.key && t.offset === e.offset) {
    return [0, 0];
  } else {
    return [Un(t), Un(e)];
  }
}
function jn(e, t, n) {
  let r = e.getTextContent().split(/(?=\s)/g);
  let i = r.length;
  let o = 0;
  let s = 0;
  for (let e = 0; e < i; e++) {
    let l = e === i - 1;
    s = o;
    o += r[e].length;
    if (t && o === n || o > n || l) {
      r.splice(e, 1);
      if (l) {
        s = undefined;
      }
      break;
    }
  }
  if ((t = r.join("").trim()) === "") {
    e.remove();
  } else {
    e.setTextContent(t);
    e.select(s, s);
  }
}
function Hn(e, t, n, r) {
  var i = t;
  if (e.nodeType === 1) {
    let l = false;
    var o = e.childNodes;
    var s = o.length;
    if (i === s) {
      l = true;
      i = s - 1;
    }
    let a = o[i];
    s = false;
    if (a === r._blockCursorElement) {
      a = o[i + 1];
      s = true;
    } else if (r._blockCursorElement !== null) {
      i--;
    }
    if (wn(r = Re(a))) {
      i = l ? r.getTextContentSize() : 0;
    } else {
      if ((o = Re(e)) === null) {
        return null;
      }
      if (wr(o)) {
        if (t = wr(e = o.getChildAtIndex(i))) {
          t = e.getParent();
          t = n === null || t === null || !t.canBeEmpty() || t !== n.getNode();
        }
        if (t) {
          if ((n = l ? e.getLastDescendant() : e.getFirstDescendant()) === null) {
            o = e;
            i = 0;
          } else {
            o = wr(e = n) ? e : e.getParentOrThrow();
          }
        }
        if (wn(e)) {
          r = e;
          o = null;
          i = l ? e.getTextContentSize() : 0;
        } else if (e !== o && l && !s) {
          i++;
        }
      } else {
        i = o.getIndexWithinParent();
        i = t === 0 && Ar(o) && Re(e) === o ? i : i + 1;
        o = o.getParentOrThrow();
      }
      if (wr(o)) {
        return new Dn(o.__key, i, "element");
      }
    }
  } else {
    r = Re(e);
  }
  if (wn(r)) {
    return new Dn(r.__key, i, "text");
  } else {
    return null;
  }
}
function Gn(e, t, n) {
  var r = e.offset;
  var i = e.getNode();
  if (r === 0) {
    r = i.getPreviousSibling();
    i = i.getParent();
    if (t) {
      if ((n || !t) && r === null && wr(i) && i.isInline()) {
        if (wn(t = i.getPreviousSibling())) {
          e.key = t.__key;
          e.offset = t.getTextContent().length;
        }
      }
    } else if (wr(r) && !n && r.isInline()) {
      e.key = r.__key;
      e.offset = r.getChildrenSize();
      e.type = "element";
    } else if (wn(r)) {
      e.key = r.__key;
      e.offset = r.getTextContent().length;
    }
  } else if (r === i.getTextContent().length) {
    r = i.getNextSibling();
    i = i.getParent();
    if (t && wr(r) && r.isInline()) {
      e.key = r.__key;
      e.offset = 0;
      e.type = "element";
    } else if ((n || t) && r === null && wr(i) && i.isInline() && !i.canInsertTextAfter()) {
      if (wn(t = i.getNextSibling())) {
        e.key = t.__key;
        e.offset = 0;
      }
    }
  }
}
function Vn(e, t, n) {
  if (e.type === "text" && t.type === "text") {
    var r = e.isBefore(t);
    let i = e.is(t);
    Gn(e, r, i);
    Gn(t, !r, i);
    if (i) {
      t.key = e.key;
      t.offset = e.offset;
      t.type = e.type;
    }
    if ((r = _r()).isComposing() && r._compositionKey !== e.key && Fn(n)) {
      r = n.anchor;
      n = n.focus;
      Pn(e, r.key, r.offset, r.type);
      Pn(t, n.key, n.offset, n.type);
    }
  }
}
function Jn(e, t, n, r, i, o) {
  if (e !== null && n !== null && fe(i, e, n)) {
    if ((t = Hn(e, t, Fn(o) ? o.anchor : null, i)) === null || (r = Hn(n, r, Fn(o) ? o.focus : null, i)) === null || t.type === "element" && r.type === "element" && (e = Re(e), n = Re(n), Ar(e) && Ar(n))) {
      return null;
    } else {
      Vn(t, r, o);
      return [t, r];
    }
  } else {
    return null;
  }
}
function Zn(e) {
  return wr(e) && !e.isInline();
}
function qn(e, t, n, r, i, o) {
  let s = pr();
  (e = new Wn(new Dn(e, t, i), new Dn(n, r, o), 0, "")).dirty = true;
  return s._selection = e;
}
function Xn() {
  return new Ln(new Set());
}
function Qn(e, t, n) {
  var r = n._window;
  if (r === null) {
    return null;
  }
  var i = r.event;
  var o = i ? i.type : undefined;
  let s;
  r = o === "selectionchange";
  i = !re && (r || o === "beforeinput" || o === "compositionstart" || o === "compositionend" || o === "click" && i && i.detail === 3 || o === "drop" || o === undefined);
  if (Fn(e) && !i) {
    return e.clone();
  }
  if (t === null) {
    return null;
  }
  i = t.anchorNode;
  o = t.focusNode;
  s = t.anchorOffset;
  t = t.focusOffset;
  if (r && Fn(e) && !fe(n, i, o)) {
    return e.clone();
  }
  if ((n = Jn(i, s, o, t, n, e)) === null) {
    return null;
  }
  let [l, a] = n;
  return new Wn(l, a, Fn(e) ? e.format : 0, Fn(e) ? e.style : "");
}
function er() {
  return pr()._selection;
}
function tr() {
  return _r()._editorState._selection;
}
function nr(e, t, n, r = 1) {
  var i = e.anchor;
  var o = e.focus;
  var s = i.getNode();
  var l = o.getNode();
  if (t.is(s) || t.is(l)) {
    s = t.__key;
    if (e.isCollapsed()) {
      if (n <= (t = i.offset) && r > 0 || n < t && r < 0) {
        n = Math.max(0, t + r);
        i.set(s, n, "element");
        o.set(s, n, "element");
        rr(e);
      }
    } else {
      let u = e.isBackward();
      var a = (l = u ? o : i).getNode();
      o = (i = u ? i : o).getNode();
      if (t.is(a)) {
        if (n <= (a = l.offset) && r > 0 || n < a && r < 0) {
          l.set(s, Math.max(0, a + r), "element");
        }
      }
      if (t.is(o)) {
        if (n <= (t = i.offset) && r > 0 || n < t && r < 0) {
          i.set(s, Math.max(0, t + r), "element");
        }
      }
    }
    rr(e);
  }
}
function rr(e) {
  var t = e.anchor;
  var n = t.offset;
  let r = e.focus;
  var i = r.offset;
  var o = t.getNode();
  var s = r.getNode();
  if (e.isCollapsed()) {
    if (wr(o)) {
      if (wn(s = (i = n >= (s = o.getChildrenSize())) ? o.getChildAtIndex(s - 1) : o.getChildAtIndex(n))) {
        n = 0;
        if (i) {
          n = s.getTextContentSize();
        }
        t.set(s.__key, n, "text");
        r.set(s.__key, n, "text");
      }
    }
  } else {
    if (wr(o)) {
      let r = o.getChildrenSize();
      if (wn(n = (e = n >= r) ? o.getChildAtIndex(r - 1) : o.getChildAtIndex(n))) {
        o = 0;
        if (e) {
          o = n.getTextContentSize();
        }
        t.set(n.__key, o, "text");
      }
    }
    if (wr(s)) {
      if (wn(i = (t = i >= (n = s.getChildrenSize())) ? s.getChildAtIndex(n - 1) : s.getChildAtIndex(i))) {
        s = 0;
        if (t) {
          s = i.getTextContentSize();
        }
        r.set(i.__key, s, "text");
      }
    }
  }
}
function ir(e, t, n, r, i) {
  let o = null;
  let s = 0;
  let l = null;
  if (r !== null) {
    o = r.__key;
    if (wn(r)) {
      s = r.getTextContentSize();
      l = "text";
    } else if (wr(r)) {
      s = r.getChildrenSize();
      l = "element";
    }
  } else if (i !== null) {
    o = i.__key;
    if (wn(i)) {
      l = "text";
    } else if (wr(i)) {
      l = "element";
    }
  }
  if (o !== null && l !== null) {
    e.set(o, s, l);
  } else {
    s = t.getIndexWithinParent();
    if (s === -1) {
      s = n.getChildrenSize();
    }
    e.set(n.__key, s, "element");
  }
}
function or(e, t, n, r, i) {
  if (e.type === "text") {
    e.key = n;
    if (!t) {
      e.offset += i;
    }
  } else if (e.offset > r.getIndexWithinParent()) {
    --e.offset;
  }
}
function sr(e, t, n) {
  let r = [];
  let i = null;
  let o = null;
  e = e.getChildren();
  for (let c = 0; c < e.length; c++) {
    var s = e[c];
    if (!Hr(s)) {
      L(108);
    }
    var l = s.getChildren();
    s = 0;
    for (let e of l) {
      for (Kr(e) || L(109); r[c] !== undefined && r[c][s] !== undefined;) {
        s++;
      }
      var a = s;
      var u = e;
      let d = {
        cell: u,
        startColumn: a,
        startRow: l = c
      };
      let g = u.__rowSpan;
      let f = u.__colSpan;
      for (let e = 0; e < g; e++) {
        if (r[l + e] === undefined) {
          r[l + e] = [];
        }
        for (let t = 0; t < f; t++) {
          r[l + e][a + t] = d;
        }
      }
      if (t.is(u)) {
        i = d;
      }
      if (n.is(u)) {
        o = d;
      }
      s += e.__colSpan;
    }
  }
  if (i === null) {
    L(110);
  }
  if (o === null) {
    L(111);
  }
  return [r, i, o];
}
let lr = null;
let ar = null;
let ur = false;
let cr = false;
let dr = 0;
let gr = {
  characterData: true,
  childList: true,
  subtree: true
};
function fr() {
  return ur || lr !== null && lr._readOnly;
}
function hr() {
  if (ur) {
    L(13);
  }
}
function pr() {
  if (lr === null) {
    L(15);
  }
  return lr;
}
function _r() {
  if (ar === null) {
    L(16);
  }
  return ar;
}
function mr(e, t, n) {
  var r = t.__type;
  let i = e._nodes.get(r);
  if (i === undefined) {
    L(30);
  }
  if ((e = n.get(r)) === undefined) {
    e = Array.from(i.transforms);
    n.set(r, e);
  }
  n = e.length;
  r = 0;
  for (; r < n && (e[r](t), t.isAttached()); r++);
}
function yr(e, t) {
  var n = t.get(e.type);
  if (n === undefined) {
    L(17);
  }
  n = n.klass;
  if (e.type !== n.getType()) {
    L(18);
  }
  n = n.importJSON(e);
  e = e.children;
  if (wr(n) && Array.isArray(e)) {
    for (let r = 0; r < e.length; r++) {
      let i = yr(e[r], t);
      n.append(i);
    }
  }
  return n;
}
function Nr(e, t) {
  let n = lr;
  let r = ur;
  let i = ar;
  lr = e;
  ur = true;
  ar = null;
  try {
    return t();
  } finally {
    lr = n;
    ur = r;
    ar = i;
  }
}
function vr(e) {
  let t = e._pendingEditorState;
  let r = e._rootElement;
  let i = e._headless || r === null;
  if (t !== null) {
    var o = e._editorState;
    var s = o._selection;
    var l = t._selection;
    var a = e._dirtyType !== 0;
    var u = lr;
    var c = ur;
    var d = ar;
    var g = e._updating;
    var f = e._observer;
    var h = null;
    e._pendingEditorState = null;
    e._editorState = t;
    if (!i && a && f !== null) {
      ar = e;
      lr = t;
      ur = false;
      e._updating = true;
      try {
        let n = e._dirtyType;
        let i = e._dirtyElements;
        let s = e._dirtyLeaves;
        f.disconnect();
        var p = i;
        var _ = s;
        Tt = Et = vt = "";
        Ct = n === 2;
        bt = null;
        dt = e;
        ct = e._config;
        gt = e._nodes;
        ft = dt._listeners.mutation;
        ht = p;
        pt = _;
        _t = o._nodeMap;
        mt = t._nodeMap;
        xt = t._readOnly;
        yt = new Map(e._keyToDOMMap);
        let l = new Map();
        Nt = l;
        Lt("root", null);
        Nt = yt = ct = mt = _t = pt = ht = gt = dt = undefined;
        h = l;
      } catch (n) {
        if (n instanceof Error) {
          e._onError(n);
        }
        if (cr) {
          throw n;
        }
        Br(e, null, r, t);
        ue(e);
        e._dirtyType = 2;
        cr = true;
        vr(e);
        return void (cr = false);
      } finally {
        f.observe(r, gr);
        e._updating = g;
        lr = u;
        ur = c;
        ar = d;
      }
    }
    if (!t._readOnly) {
      t._readOnly = true;
    }
    var m = e._dirtyLeaves;
    var y = e._dirtyElements;
    var N = e._normalizedNodes;
    var v = e._updateTags;
    var T = e._deferred;
    if (a) {
      e._dirtyType = 0;
      e._cloneNotNeeded.clear();
      e._dirtyLeaves = new Set();
      e._dirtyElements = new Map();
      e._normalizedNodes = new Set();
      e._updateTags = new Set();
    }
    var E;
    var C = e._decorators;
    var x = e._pendingDecorators || C;
    var b = t._nodeMap;
    for (E in x) {
      if (!b.has(E)) {
        if (x === C) {
          x = Ae(e);
        }
        delete x[E];
      }
    }
    var S = i ? null : et(e._window);
    if (e._editable && S !== null && (a || l === null || l.dirty)) {
      ar = e;
      lr = t;
      try {
        if (f !== null) {
          f.disconnect();
        }
        if (a || l === null || l.dirty) {
          let t = e._blockCursorElement;
          if (t !== null) {
            Qe(t, e, r);
          }
          e: {
            let t = S.anchorNode;
            let n = S.focusNode;
            let i = S.anchorOffset;
            let o = S.focusOffset;
            let a = document.activeElement;
            if (!(v.has("collaboration") && a !== r || a !== null && ge(a))) {
              if (Fn(l)) {
                var A = l.anchor;
                var O = l.focus;
                var w = A.key;
                var k = O.key;
                var R = Ue(e, w);
                var D = Ue(e, k);
                var M = A.offset;
                var $ = O.offset;
                var I = l.format;
                var P = l.style;
                var L = l.isCollapsed();
                var F = R;
                var B = D;
                var z = false;
                if (A.type === "text") {
                  F = _e(R);
                  let e = A.getNode();
                  z = e.getFormat() !== I || e.getStyle() !== P;
                } else if (Fn(s) && s.anchor.type === "text") {
                  z = true;
                }
                if (O.type === "text") {
                  B = _e(D);
                }
                if (F !== null && B !== null) {
                  if (L && (s === null || z || Fn(s) && (s.format !== I || s.style !== P))) {
                    var W = performance.now();
                    Xt = [I, P, M, w, W];
                  }
                  if (i === M && o === $ && t === F && n === B && (S.type !== "Range" || !L) && (a !== null && r.contains(a) || r.focus({
                    preventScroll: true
                  }), A.type !== "element")) {
                    break e;
                  }
                  try {
                    S.setBaseAndExtent(F, M, B, $);
                  } catch (e) {}
                  if (!v.has("skip-scroll-into-view") && l.isCollapsed() && r !== null && r === document.activeElement) {
                    let t = l instanceof Wn && l.anchor.type === "element" ? F.childNodes[M] || null : S.rangeCount > 0 ? S.getRangeAt(0) : null;
                    if (t !== null) {
                      let n;
                      if (t instanceof Text) {
                        let e = document.createRange();
                        e.selectNode(t);
                        n = e.getBoundingClientRect();
                      } else {
                        n = t.getBoundingClientRect();
                      }
                      let i = r.ownerDocument;
                      let o = i.defaultView;
                      if (o !== null) {
                        for (var K, U, {
                            top: Y,
                            bottom: j
                          } = n, H = r; H !== null;) {
                          let t = H === i.body;
                          if (t) {
                            K = 0;
                            U = He(e).innerHeight;
                          } else {
                            let e = H.getBoundingClientRect();
                            K = e.top;
                            U = e.bottom;
                          }
                          let n = 0;
                          if (Y < K) {
                            n = -(K - Y);
                          } else if (j > U) {
                            n = j - U;
                          }
                          if (n !== 0) {
                            if (t) {
                              o.scrollBy(0, n);
                            } else {
                              let e = H.scrollTop;
                              H.scrollTop += n;
                              let t = H.scrollTop - e;
                              Y -= t;
                              j -= t;
                            }
                          }
                          if (t) {
                            break;
                          }
                          H = Ye(H);
                        }
                      }
                    }
                  }
                  Vt = true;
                }
              } else if (s !== null && fe(e, t, n)) {
                S.removeAllRanges();
              }
            }
          }
        }
        e: {
          let t = e._blockCursorElement;
          if (Fn(l) && l.isCollapsed() && l.anchor.type === "element" && r.contains(document.activeElement)) {
            let n = l.anchor;
            let i = n.getNode();
            let o = n.offset;
            let s = i.getChildrenSize();
            let a = false;
            let u = null;
            if (o === s) {
              if (Xe(i.getChildAtIndex(o - 1))) {
                a = true;
              }
            } else {
              let t = i.getChildAtIndex(o);
              if (Xe(t)) {
                let n = t.getPreviousSibling();
                if (n === null || Xe(n)) {
                  a = true;
                  u = e.getElementByKey(t.__key);
                }
              }
            }
            if (a) {
              let n = e.getElementByKey(i.__key);
              if (t === null) {
                let n = e._config.theme;
                let r = document.createElement("div");
                r.contentEditable = "false";
                r.setAttribute("data-lexical-cursor", "true");
                let i = n.blockCursor;
                if (i !== undefined) {
                  if (typeof i == "string") {
                    let e = i.split(" ");
                    i = n.blockCursor = e;
                  }
                  if (i !== undefined) {
                    r.classList.add(...i);
                  }
                }
                e._blockCursorElement = t = r;
              }
              r.style.caretColor = "transparent";
              if (u === null) {
                n.appendChild(t);
              } else {
                n.insertBefore(t, u);
              }
              break e;
            }
          }
          if (t !== null) {
            Qe(t, e, r);
          }
        }
        if (f !== null) {
          f.observe(r, gr);
        }
      } finally {
        ar = d;
        lr = u;
      }
    }
    if (h !== null) {
      var G = h;
      let t = Array.from(e._listeners.mutation);
      let n = t.length;
      for (let e = 0; e < n; e++) {
        let [n, r] = t[e];
        let i = G.get(r);
        if (i !== undefined) {
          n(i, {
            dirtyLeaves: m,
            updateTags: v
          });
        }
      }
    }
    if (!(Fn(l) || l === null || s !== null && s.is(l))) {
      e.dispatchCommand(n, undefined);
    }
    var V = e._pendingDecorators;
    if (V !== null) {
      e._decorators = V;
      e._pendingDecorators = null;
      Tr("decorator", e, true, V);
    }
    var J = Oe(o);
    var Z = Oe(t);
    if (J !== Z) {
      Tr("textcontent", e, true, Z);
    }
    Tr("update", e, true, {
      dirtyElements: y,
      dirtyLeaves: m,
      editorState: t,
      normalizedNodes: N,
      prevEditorState: o,
      tags: v
    });
    e._deferred = [];
    if (T.length !== 0) {
      let t = e._updating;
      e._updating = true;
      try {
        for (let e = 0; e < T.length; e++) {
          T[e]();
        }
      } finally {
        e._updating = t;
      }
    }
    var q = e._updates;
    if (q.length !== 0) {
      let t = q.shift();
      if (t) {
        let [n, r] = t;
        xr(e, n, r);
      }
    }
  }
}
function Tr(e, t, n, ...r) {
  let i = t._updating;
  t._updating = n;
  try {
    let n = Array.from(t._listeners[e]);
    for (e = 0; e < n.length; e++) {
      n[e].apply(null, r);
    }
  } finally {
    t._updating = i;
  }
}
function Er(e, t, n) {
  if (e._updating === false || ar !== e) {
    let r = false;
    e.update(() => {
      r = Er(e, t, n);
    });
    return r;
  }
  let r = Me(e);
  for (let o = 4; o >= 0; o--) {
    for (let s = 0; s < r.length; s++) {
      var i = r[s]._commands.get(t);
      if (i !== undefined && (i = i[o]) !== undefined) {
        let t = (i = Array.from(i)).length;
        for (let r = 0; r < t; r++) {
          if (i[r](n, e) === true) {
            return true;
          }
        }
      }
    }
  }
  return false;
}
function Cr(e, t) {
  let n = e._updates;
  for (t = t || false; n.length !== 0;) {
    var r = n.shift();
    if (r) {
      let n;
      let [i, o] = r;
      if (o !== undefined) {
        r = o.onUpdate;
        n = o.tag;
        if (o.skipTransforms) {
          t = true;
        }
        if (r) {
          e._deferred.push(r);
        }
        if (n) {
          e._updateTags.add(n);
        }
      }
      i();
    }
  }
  return t;
}
function xr(e, t, n) {
  let r = e._updateTags;
  var i;
  var o = i = false;
  if (n !== undefined) {
    var s = n.onUpdate;
    if ((i = n.tag) != null) {
      r.add(i);
    }
    i = n.skipTransforms || false;
    o = n.discrete || false;
  }
  if (s) {
    e._deferred.push(s);
  }
  n = e._editorState;
  let l = false;
  if ((s = e._pendingEditorState) === null || s._readOnly) {
    s = e._pendingEditorState = new Ir(new Map((s || n)._nodeMap));
    l = true;
  }
  s._flushSync = o;
  o = lr;
  let a = ur;
  let u = ar;
  let c = e._updating;
  lr = s;
  ur = false;
  e._updating = true;
  ar = e;
  try {
    if (l) {
      if (e._headless) {
        if (n._selection != null) {
          s._selection = n._selection.clone();
        }
      } else {
        s._selection = function (e) {
          let t = e.getEditorState()._selection;
          let n = et(e._window);
          if (Kn(t) || zn(t)) {
            return t.clone();
          } else {
            return Qn(t, n, e);
          }
        }(e);
      }
    }
    let r = e._compositionKey;
    t();
    i = Cr(e, i);
    (function (e, t) {
      t = t.getEditorState()._selection;
      if (Fn(e = e._selection)) {
        var n = e.anchor;
        let r;
        let i = e.focus;
        if (n.type === "text") {
          r = n.getNode();
          r.selectionTransform(t, e);
        }
        if (i.type === "text" && r !== (n = i.getNode())) {
          n.selectionTransform(t, e);
        }
      }
    })(s, e);
    if (e._dirtyType !== 0) {
      if (i) {
        (function (e, t) {
          t = t._dirtyLeaves;
          e = e._nodeMap;
          for (let n of t) {
            if (wn(t = e.get(n)) && t.isAttached() && t.isSimpleText() && !t.isUnmergeable()) {
              lt(t);
            }
          }
        })(s, e);
      } else {
        (function (e, t) {
          let n = t._dirtyLeaves;
          let r = t._dirtyElements;
          e = e._nodeMap;
          let i = Ce();
          let o = new Map();
          var s = n;
          let l = s.size;
          for (var a = r, u = a.size; l > 0 || u > 0;) {
            if (l > 0) {
              t._dirtyLeaves = new Set();
              for (let r of s) {
                if (wn(s = e.get(r)) && s.isAttached() && s.isSimpleText() && !s.isUnmergeable()) {
                  lt(s);
                }
                if (s !== undefined && s !== undefined && s.__key !== i && s.isAttached()) {
                  mr(t, s, o);
                }
                n.add(r);
              }
              l = (s = t._dirtyLeaves).size;
              if (l > 0) {
                dr++;
                continue;
              }
            }
            t._dirtyLeaves = new Set();
            t._dirtyElements = new Map();
            for (let n of a) {
              a = n[0];
              u = n[1];
              if (a === "root" || u) {
                if ((s = e.get(a)) !== undefined && s !== undefined && s.__key !== i && s.isAttached()) {
                  mr(t, s, o);
                }
                r.set(a, u);
              }
            }
            l = (s = t._dirtyLeaves).size;
            u = (a = t._dirtyElements).size;
            dr++;
          }
          t._dirtyLeaves = n;
          t._dirtyElements = r;
        })(s, e);
      }
      Cr(e);
      (function (e, t, n, r) {
        e = e._nodeMap;
        t = t._nodeMap;
        let i = [];
        for (let [n] of r) {
          let o = t.get(n);
          if (!(o === undefined || o.isAttached())) {
            if (wr(o)) {
              it(o, n, e, t, i, r);
            }
            if (!e.has(n)) {
              r.delete(n);
            }
            i.push(n);
          }
        }
        for (let e of i) {
          t.delete(e);
        }
        for (let i of n) {
          if (!((r = t.get(i)) === undefined || r.isAttached())) {
            if (!e.has(i)) {
              n.delete(i);
            }
            t.delete(i);
          }
        }
      })(n, s, e._dirtyLeaves, e._dirtyElements);
    }
    if (r !== e._compositionKey) {
      s._flushSync = true;
    }
    let d = s._selection;
    if (Fn(d)) {
      let e = s._nodeMap;
      let t = d.focus.key;
      if (!(e.get(d.anchor.key) !== undefined && e.get(t) !== undefined)) {
        L(19);
      }
    } else if (Kn(d) && d._nodes.size === 0) {
      s._selection = null;
    }
  } catch (t) {
    if (t instanceof Error) {
      e._onError(t);
    }
    e._pendingEditorState = n;
    e._dirtyType = 2;
    e._cloneNotNeeded.clear();
    e._dirtyLeaves = new Set();
    e._dirtyElements.clear();
    return void vr(e);
  } finally {
    lr = o;
    ur = a;
    ar = u;
    e._updating = c;
    dr = 0;
  }
  if (e._dirtyType !== 0 || function (e, t) {
    t = t.getEditorState()._selection;
    if ((e = e._selection) !== null) {
      if (e.dirty || !e.is(t)) {
        return true;
      }
    } else if (t !== null) {
      return true;
    }
    return false;
  }(s, e)) {
    if (s._flushSync) {
      s._flushSync = false;
      vr(e);
    } else if (l) {
      de(() => {
        vr(e);
      });
    }
  } else {
    s._flushSync = false;
    if (l) {
      r.clear();
      e._deferred = [];
      e._pendingEditorState = null;
    }
  }
}
function br(e, t, n) {
  if (e._updating) {
    e._updates.push([t, n]);
  } else {
    xr(e, t, n);
  }
}
class Sr extends un {
  constructor(e) {
    super(e);
  }
  decorate() {
    L(47);
  }
  isIsolated() {
    return false;
  }
  isInline() {
    return true;
  }
  isKeyboardSelectable() {
    return true;
  }
}
function Ar(e) {
  return e instanceof Sr;
}
class Or extends un {
  constructor(e) {
    super(e);
    this.__last = this.__first = null;
    this.__indent = this.__format = this.__size = 0;
    this.__dir = null;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getFormatType() {
    let e = this.getFormat();
    return ee[e] || "";
  }
  getIndent() {
    return this.getLatest().__indent;
  }
  getChildren() {
    let e = [];
    let t = this.getFirstChild();
    for (; t !== null;) {
      e.push(t);
      t = t.getNextSibling();
    }
    return e;
  }
  getChildrenKeys() {
    let e = [];
    let t = this.getFirstChild();
    for (; t !== null;) {
      e.push(t.__key);
      t = t.getNextSibling();
    }
    return e;
  }
  getChildrenSize() {
    return this.getLatest().__size;
  }
  isEmpty() {
    return this.getChildrenSize() === 0;
  }
  isDirty() {
    let e = _r()._dirtyElements;
    return e !== null && e.has(this.__key);
  }
  isLastChild() {
    let e = this.getLatest();
    let t = this.getParentOrThrow().getLastChild();
    return t !== null && t.is(e);
  }
  getAllTextNodes() {
    let e = [];
    let t = this.getFirstChild();
    for (; t !== null;) {
      if (wn(t)) {
        e.push(t);
      }
      if (wr(t)) {
        let n = t.getAllTextNodes();
        e.push(...n);
      }
      t = t.getNextSibling();
    }
    return e;
  }
  getFirstDescendant() {
    let e = this.getFirstChild();
    for (; e !== null;) {
      if (wr(e)) {
        let t = e.getFirstChild();
        if (t !== null) {
          e = t;
          continue;
        }
      }
      break;
    }
    return e;
  }
  getLastDescendant() {
    let e = this.getLastChild();
    for (; e !== null;) {
      if (wr(e)) {
        let t = e.getLastChild();
        if (t !== null) {
          e = t;
          continue;
        }
      }
      break;
    }
    return e;
  }
  getDescendantByIndex(e) {
    let t = this.getChildren();
    let n = t.length;
    if (e >= n) {
      return wr(e = t[n - 1]) && e.getLastDescendant() || e || null;
    } else {
      return wr(e = t[e]) && e.getFirstDescendant() || e || null;
    }
  }
  getFirstChild() {
    let e = this.getLatest().__first;
    if (e === null) {
      return null;
    } else {
      return xe(e);
    }
  }
  getFirstChildOrThrow() {
    let e = this.getFirstChild();
    if (e === null) {
      L(45);
    }
    return e;
  }
  getLastChild() {
    let e = this.getLatest().__last;
    if (e === null) {
      return null;
    } else {
      return xe(e);
    }
  }
  getLastChildOrThrow() {
    let e = this.getLastChild();
    if (e === null) {
      L(96);
    }
    return e;
  }
  getChildAtIndex(e) {
    var t = this.getChildrenSize();
    let n;
    if (e < t / 2) {
      n = this.getFirstChild();
      t = 0;
      for (; n !== null && t <= e;) {
        if (t === e) {
          return n;
        }
        n = n.getNextSibling();
        t++;
      }
      return null;
    }
    n = this.getLastChild();
    --t;
    for (; n !== null && t >= e;) {
      if (t === e) {
        return n;
      }
      n = n.getPreviousSibling();
      t--;
    }
    return null;
  }
  getTextContent() {
    let e = "";
    let t = this.getChildren();
    let n = t.length;
    for (let r = 0; r < n; r++) {
      let i = t[r];
      e += i.getTextContent();
      if (wr(i) && r !== n - 1 && !i.isInline()) {
        e += "\n\n";
      }
    }
    return e;
  }
  getTextContentSize() {
    let e = 0;
    let t = this.getChildren();
    let n = t.length;
    for (let r = 0; r < n; r++) {
      let i = t[r];
      e += i.getTextContentSize();
      if (wr(i) && r !== n - 1 && !i.isInline()) {
        e += 2;
      }
    }
    return e;
  }
  getDirection() {
    return this.getLatest().__dir;
  }
  hasFormat(e) {
    return e !== "" && (e = Q[e], (this.getFormat() & e) != 0);
  }
  select(e, t) {
    hr();
    let n = er();
    let r = e;
    let i = t;
    var o = this.getChildrenSize();
    if (!this.canBeEmpty()) {
      if (e === 0 && t === 0) {
        if (wn(e = this.getFirstChild()) || wr(e)) {
          return e.select(0, 0);
        }
      } else if (!(e !== undefined && e !== o || t !== undefined && t !== o) && (wn(e = this.getLastChild()) || wr(e))) {
        return e.select();
      }
    }
    if (r === undefined) {
      r = o;
    }
    if (i === undefined) {
      i = o;
    }
    o = this.__key;
    if (Fn(n)) {
      n.anchor.set(o, r, "element");
      n.focus.set(o, i, "element");
      n.dirty = true;
      return n;
    } else {
      return qn(o, r, o, i, "element", "element");
    }
  }
  selectStart() {
    let e = this.getFirstDescendant();
    if (wr(e) || wn(e)) {
      return e.select(0, 0);
    } else if (e !== null) {
      return e.selectPrevious();
    } else {
      return this.select(0, 0);
    }
  }
  selectEnd() {
    let e = this.getLastDescendant();
    if (wr(e) || wn(e)) {
      return e.select();
    } else if (e !== null) {
      return e.selectNext();
    } else {
      return this.select();
    }
  }
  clear() {
    let e = this.getWritable();
    this.getChildren().forEach(e => e.remove());
    return e;
  }
  append(...e) {
    return this.splice(this.getChildrenSize(), 0, e);
  }
  setDirection(e) {
    let t = this.getWritable();
    t.__dir = e;
    return t;
  }
  setFormat(e) {
    this.getWritable().__format = e !== "" ? Q[e] : 0;
    return this;
  }
  setIndent(e) {
    this.getWritable().__indent = e;
    return this;
  }
  splice(e, t, n) {
    let r = n.length;
    let i = this.getChildrenSize();
    let o = this.getWritable();
    let s = o.__key;
    var l = [];
    var a = [];
    let u = this.getChildAtIndex(e + t);
    let c = null;
    let d = i - t + r;
    if (e !== 0) {
      if (e === i) {
        c = this.getLastChild();
      } else {
        var g = this.getChildAtIndex(e);
        if (g !== null) {
          c = g.getPreviousSibling();
        }
      }
    }
    if (t > 0) {
      var f = c === null ? this.getFirstChild() : c.getNextSibling();
      for (g = 0; g < t; g++) {
        if (f === null) {
          L(100);
        }
        var h = f.getNextSibling();
        var p = f.__key;
        ve(f = f.getWritable());
        a.push(p);
        f = h;
      }
    }
    g = c;
    h = 0;
    for (; h < r; h++) {
      p = n[h];
      if (g !== null && p.is(g)) {
        c = g = g.getPreviousSibling();
      }
      if ((f = p.getWritable()).__parent === s) {
        d--;
      }
      ve(f);
      let e = p.__key;
      if (g === null) {
        o.__first = e;
        f.__prev = null;
      } else {
        (g = g.getWritable()).__next = e;
        f.__prev = g.__key;
      }
      if (p.__key === s) {
        L(76);
      }
      f.__parent = s;
      l.push(e);
      g = p;
    }
    if (e + t === i) {
      if (g !== null) {
        g.getWritable().__next = null;
        o.__last = g.__key;
      }
    } else if (u !== null) {
      e = u.getWritable();
      if (g !== null) {
        t = g.getWritable();
        e.__prev = g.__key;
        t.__next = u.__key;
      } else {
        e.__prev = null;
      }
    }
    o.__size = d;
    if (a.length && Fn(e = er())) {
      a = new Set(a);
      l = new Set(l);
      let {
        anchor: t,
        focus: n
      } = e;
      if (kr(t, a, l)) {
        ir(t, t.getNode(), this, c, u);
      }
      if (kr(n, a, l)) {
        ir(n, n.getNode(), this, c, u);
      }
      if (!(d !== 0 || this.canBeEmpty() || Ve(this))) {
        this.remove();
      }
    }
    return o;
  }
  exportJSON() {
    return {
      children: [],
      direction: this.getDirection(),
      format: this.getFormatType(),
      indent: this.getIndent(),
      type: "element",
      version: 1
    };
  }
  insertNewAfter() {
    return null;
  }
  canIndent() {
    return true;
  }
  collapseAtStart() {
    return false;
  }
  excludeFromCopy() {
    return false;
  }
  canExtractContents() {
    return true;
  }
  canReplaceWith() {
    return true;
  }
  canInsertAfter() {
    return true;
  }
  canBeEmpty() {
    return true;
  }
  canInsertTextBefore() {
    return true;
  }
  canInsertTextAfter() {
    return true;
  }
  isInline() {
    return false;
  }
  isShadowRoot() {
    return false;
  }
  canMergeWith() {
    return false;
  }
  extractWithChild() {
    return false;
  }
}
function wr(e) {
  return e instanceof Or;
}
function kr(e, t, n) {
  for (e = e.getNode(); e;) {
    let r = e.__key;
    if (t.has(r) && !n.has(r)) {
      return true;
    }
    e = e.getParent();
  }
  return false;
}
class Rr extends Or {
  static getType() {
    return "root";
  }
  static clone() {
    return new Rr();
  }
  constructor() {
    super("root");
    this.__cachedText = null;
  }
  getTopLevelElementOrThrow() {
    L(51);
  }
  getTextContent() {
    let e = this.__cachedText;
    if (!fr() && _r()._dirtyType !== 0 || e === null) {
      return super.getTextContent();
    } else {
      return e;
    }
  }
  remove() {
    L(52);
  }
  replace() {
    L(53);
  }
  insertBefore() {
    L(54);
  }
  insertAfter() {
    L(55);
  }
  updateDOM() {
    return false;
  }
  append(...e) {
    for (let t = 0; t < e.length; t++) {
      let n = e[t];
      if (!(wr(n) || Ar(n))) {
        L(56);
      }
    }
    return super.append(...e);
  }
  static importJSON(e) {
    let t = we();
    t.setFormat(e.format);
    t.setIndent(e.indent);
    t.setDirection(e.direction);
    return t;
  }
  exportJSON() {
    return {
      children: [],
      direction: this.getDirection(),
      format: this.getFormatType(),
      indent: this.getIndent(),
      type: "root",
      version: 1
    };
  }
  collapseAtStart() {
    return true;
  }
}
function Dr(e) {
  return e instanceof Rr;
}
function Mr() {
  return new Ir(new Map([["root", new Rr()]]));
}
function $r(e) {
  let t = e.exportJSON();
  if (t.type !== e.constructor.getType()) {
    L(58);
  }
  let n = t.children;
  if (wr(e)) {
    if (!Array.isArray(n)) {
      L(59);
    }
    e = e.getChildren();
    for (let t = 0; t < e.length; t++) {
      let r = $r(e[t]);
      n.push(r);
    }
  }
  return t;
}
class Ir {
  constructor(e, t) {
    this._nodeMap = e;
    this._selection = t || null;
    this._readOnly = this._flushSync = false;
  }
  isEmpty() {
    return this._nodeMap.size === 1 && this._selection === null;
  }
  read(e) {
    return Nr(this, e);
  }
  clone(e) {
    (e = new Ir(this._nodeMap, e === undefined ? this._selection : e))._readOnly = true;
    return e;
  }
  toJSON() {
    return Nr(this, () => ({
      root: $r(we())
    }));
  }
}
class Pr extends Or {
  static getType() {
    return "paragraph";
  }
  static clone(e) {
    return new Pr(e.__key);
  }
  createDOM(e) {
    let t = document.createElement("p");
    if ((e = Le(e.theme, "paragraph")) !== undefined) {
      t.classList.add(...e);
    }
    return t;
  }
  updateDOM() {
    return false;
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Lr,
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
      if ((t = this.getIndent()) > 0) {
        e.style.textIndent = t * 20 + "px";
      }
    }
    return {
      element: e
    };
  }
  static importJSON(e) {
    let t = Fr();
    t.setFormat(e.format);
    t.setIndent(e.indent);
    t.setDirection(e.direction);
    return t;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "paragraph",
      version: 1
    };
  }
  insertNewAfter(e, t) {
    e = Fr();
    let n = this.getDirection();
    e.setDirection(n);
    this.insertAfter(e, t);
    return e;
  }
  collapseAtStart() {
    let e = this.getChildren();
    if (e.length === 0 || wn(e[0]) && e[0].getTextContent().trim() === "") {
      if (this.getNextSibling() !== null) {
        this.selectNext();
        this.remove();
        return true;
      }
      if (this.getPreviousSibling() !== null) {
        this.selectPrevious();
        this.remove();
        return true;
      }
    }
    return false;
  }
}
function Lr(e) {
  let t = Fr();
  if (e.style) {
    t.setFormat(e.style.textAlign);
    if ((e = parseInt(e.style.textIndent, 10) / 20) > 0) {
      t.setIndent(e);
    }
  }
  return {
    node: t
  };
}
function Fr() {
  return Ze(new Pr());
}
function Br(e, t, n, r) {
  let i = e._keyToDOMMap;
  i.clear();
  e._editorState = Mr();
  e._pendingEditorState = r;
  e._compositionKey = null;
  e._dirtyType = 0;
  e._cloneNotNeeded.clear();
  e._dirtyLeaves = new Set();
  e._dirtyElements.clear();
  e._normalizedNodes = new Set();
  e._updateTags = new Set();
  e._updates = [];
  e._blockCursorElement = null;
  if ((r = e._observer) !== null) {
    r.disconnect();
    e._observer = null;
  }
  if (t !== null) {
    t.textContent = "";
  }
  if (n !== null) {
    n.textContent = "";
    i.set("root", n);
  }
}
class zr {
  constructor(e, t, n, r, i, o, s) {
    this._parentEditor = t;
    this._rootElement = null;
    this._editorState = e;
    this._compositionKey = this._pendingEditorState = null;
    this._deferred = [];
    this._keyToDOMMap = new Map();
    this._updates = [];
    this._updating = false;
    this._listeners = {
      decorator: new Set(),
      editable: new Set(),
      mutation: new Map(),
      root: new Set(),
      textcontent: new Set(),
      update: new Set()
    };
    this._commands = new Map();
    this._config = r;
    this._nodes = n;
    this._decorators = {};
    this._pendingDecorators = null;
    this._dirtyType = 0;
    this._cloneNotNeeded = new Set();
    this._dirtyLeaves = new Set();
    this._dirtyElements = new Map();
    this._normalizedNodes = new Set();
    this._updateTags = new Set();
    this._observer = null;
    this._key = $e();
    this._onError = i;
    this._htmlConversions = o;
    this._editable = s;
    this._headless = t !== null && t._headless;
    this._blockCursorElement = this._window = null;
  }
  isComposing() {
    return this._compositionKey != null;
  }
  registerUpdateListener(e) {
    let t = this._listeners.update;
    t.add(e);
    return () => {
      t.delete(e);
    };
  }
  registerEditableListener(e) {
    let t = this._listeners.editable;
    t.add(e);
    return () => {
      t.delete(e);
    };
  }
  registerDecoratorListener(e) {
    let t = this._listeners.decorator;
    t.add(e);
    return () => {
      t.delete(e);
    };
  }
  registerTextContentListener(e) {
    let t = this._listeners.textcontent;
    t.add(e);
    return () => {
      t.delete(e);
    };
  }
  registerRootListener(e) {
    let t = this._listeners.root;
    e(this._rootElement, null);
    t.add(e);
    return () => {
      e(null, this._rootElement);
      t.delete(e);
    };
  }
  registerCommand(e, t, n) {
    if (n === undefined) {
      L(35);
    }
    let r = this._commands;
    if (!r.has(e)) {
      r.set(e, [new Set(), new Set(), new Set(), new Set(), new Set()]);
    }
    let i = r.get(e);
    if (i === undefined) {
      L(36);
    }
    let o = i[n];
    o.add(t);
    return () => {
      o.delete(t);
      if (i.every(e => e.size === 0)) {
        r.delete(e);
      }
    };
  }
  registerMutationListener(e, t) {
    if (this._nodes.get(e.getType()) === undefined) {
      L(37);
    }
    let n = this._listeners.mutation;
    n.set(t, e);
    return () => {
      n.delete(t);
    };
  }
  registerNodeTransformToKlass(e, t) {
    e = e.getType();
    if ((e = this._nodes.get(e)) === undefined) {
      L(37);
    }
    e.transforms.add(t);
    return e;
  }
  registerNodeTransform(e, t) {
    var n = this.registerNodeTransformToKlass(e, t);
    let r = [n];
    if ((n = n.replaceWithKlass) != null) {
      n = this.registerNodeTransformToKlass(n, t);
      r.push(n);
    }
    (function (e, t) {
      br(e, () => {
        var e = pr();
        if (!e.isEmpty()) {
          if (t === "root") {
            we().markDirty();
          } else {
            e = e._nodeMap;
            for (let [, t] of e) {
              t.markDirty();
            }
          }
        }
      }, e._pendingEditorState === null ? {
        tag: "history-merge"
      } : undefined);
    })(this, e.getType());
    return () => {
      r.forEach(e => e.transforms.delete(t));
    };
  }
  hasNodes(e) {
    for (let t = 0; t < e.length; t++) {
      let n = e[t].getType();
      if (!this._nodes.has(n)) {
        return false;
      }
    }
    return true;
  }
  dispatchCommand(e, t) {
    return Er(this, e, t);
  }
  getDecorators() {
    return this._decorators;
  }
  getRootElement() {
    return this._rootElement;
  }
  getKey() {
    return this._key;
  }
  setRootElement(e) {
    let t = this._rootElement;
    if (e !== t) {
      let i = Le(this._config.theme, "root");
      var n = this._pendingEditorState || this._editorState;
      this._rootElement = e;
      Br(this, t, e, n);
      if (t !== null) {
        if (!this._config.disableEvents) {
          if (Gt !== 0) {
            Gt--;
            if (Gt === 0) {
              t.ownerDocument.removeEventListener("selectionchange", ln);
            }
          }
          if ((n = t.__lexicalEditor) != null) {
            if (n._parentEditor !== null) {
              var r = Me(n);
              r = r[r.length - 1]._key;
              if (sn.get(r) === n) {
                sn.delete(r);
              }
            } else {
              sn.delete(n._key);
            }
            t.__lexicalEditor = null;
          }
          n = on(t);
          r = 0;
          for (; r < n.length; r++) {
            n[r]();
          }
          t.__lexicalEventHandles = [];
        }
        if (i != null) {
          t.classList.remove(...i);
        }
      }
      if (e !== null) {
        n = (n = e.ownerDocument) && n.defaultView || null;
        (r = e.style).userSelect = "text";
        r.whiteSpace = "pre-wrap";
        r.wordBreak = "break-word";
        e.setAttribute("data-lexical-editor", "true");
        this._window = n;
        this._dirtyType = 2;
        ue(this);
        this._updateTags.add("history-merge");
        vr(this);
        if (!this._config.disableEvents) {
          (function (e, t) {
            if (Gt === 0) {
              e.ownerDocument.addEventListener("selectionchange", ln);
            }
            Gt++;
            e.__lexicalEditor = t;
            let n = on(e);
            for (let r = 0; r < Kt.length; r++) {
              let [i, o] = Kt[r];
              let s = typeof o == "function" ? e => {
                if (e._lexicalHandled !== true) {
                  e._lexicalHandled = true;
                  if (t.isEditable()) {
                    o(e, t);
                  }
                }
              } : e => {
                if (e._lexicalHandled !== true && (e._lexicalHandled = true, t.isEditable())) {
                  switch (i) {
                    case "cut":
                      return Er(t, M, e);
                    case "copy":
                      return Er(t, D, e);
                    case "paste":
                      return Er(t, a, e);
                    case "dragstart":
                      return Er(t, w, e);
                    case "dragover":
                      return Er(t, k, e);
                    case "dragend":
                      return Er(t, R, e);
                    case "focus":
                      return Er(t, $, e);
                    case "blur":
                      return Er(t, I, e);
                    case "drop":
                      return Er(t, O, e);
                  }
                }
              };
              e.addEventListener(i, s);
              n.push(() => {
                e.removeEventListener(i, s);
              });
            }
          })(e, this);
        }
        if (i != null) {
          e.classList.add(...i);
        }
      } else {
        this._window = null;
      }
      Tr("root", this, false, e, t);
    }
  }
  getElementByKey(e) {
    return this._keyToDOMMap.get(e) || null;
  }
  getEditorState() {
    return this._editorState;
  }
  setEditorState(e, t) {
    if (e.isEmpty()) {
      L(38);
    }
    ae(this);
    let n = this._pendingEditorState;
    let r = this._updateTags;
    t = t !== undefined ? t.tag : null;
    if (!(n === null || n.isEmpty())) {
      if (t != null) {
        r.add(t);
      }
      vr(this);
    }
    this._pendingEditorState = e;
    this._dirtyType = 2;
    this._dirtyElements.set("root", false);
    this._compositionKey = null;
    if (t != null) {
      r.add(t);
    }
    vr(this);
  }
  parseEditorState(e, t) {
    e = typeof e == "string" ? JSON.parse(e) : e;
    let n = Mr();
    let r = lr;
    let i = ur;
    let o = ar;
    let s = this._dirtyElements;
    let l = this._dirtyLeaves;
    let a = this._cloneNotNeeded;
    let u = this._dirtyType;
    this._dirtyElements = new Map();
    this._dirtyLeaves = new Set();
    this._cloneNotNeeded = new Set();
    this._dirtyType = 0;
    lr = n;
    ur = false;
    ar = this;
    try {
      yr(e.root, this._nodes);
      if (t) {
        t();
      }
      n._readOnly = true;
    } catch (e) {
      if (e instanceof Error) {
        this._onError(e);
      }
    } finally {
      this._dirtyElements = s;
      this._dirtyLeaves = l;
      this._cloneNotNeeded = a;
      this._dirtyType = u;
      lr = r;
      ur = i;
      ar = o;
    }
    return n;
  }
  update(e, t) {
    br(this, e, t);
  }
  focus(e, t = {}) {
    let n = this._rootElement;
    if (n !== null) {
      n.setAttribute("autocapitalize", "off");
      br(this, () => {
        let e = er();
        let n = we();
        if (e !== null) {
          e.dirty = true;
        } else if (n.getChildrenSize() !== 0) {
          if (t.defaultSelection === "rootStart") {
            n.selectStart();
          } else {
            n.selectEnd();
          }
        }
      }, {
        onUpdate: () => {
          n.removeAttribute("autocapitalize");
          if (e) {
            e();
          }
        },
        tag: "focus"
      });
      if (this._pendingEditorState === null) {
        n.removeAttribute("autocapitalize");
      }
    }
  }
  blur() {
    var e = this._rootElement;
    if (e !== null) {
      e.blur();
    }
    if ((e = et(this._window)) !== null) {
      e.removeAllRanges();
    }
  }
  isEditable() {
    return this._editable;
  }
  setEditable(e) {
    if (this._editable !== e) {
      this._editable = e;
      Tr("editable", this, true, e);
    }
  }
  toJSON() {
    return {
      editorState: this._editorState.toJSON()
    };
  }
}
class Wr extends Or {
  constructor(e, t) {
    super(t);
    this.__colSpan = e;
    this.__rowSpan = 1;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      colSpan: this.__colSpan,
      rowSpan: this.__rowSpan
    };
  }
  getColSpan() {
    return this.__colSpan;
  }
  setColSpan(e) {
    this.getWritable().__colSpan = e;
    return this;
  }
  getRowSpan() {
    return this.__rowSpan;
  }
  setRowSpan(e) {
    this.getWritable().__rowSpan = e;
    return this;
  }
}
function Kr(e) {
  return e instanceof Wr;
}
class Ur extends Or {}
function Yr(e) {
  return e instanceof Ur;
}
class jr extends Or {}
function Hr(e) {
  return e instanceof jr;
}
exports.$addUpdateTag = function (e) {
  hr();
  _r()._updateTags.add(e);
};
exports.$applyNodeReplacement = Ze;
exports.$copyNode = Je;
exports.$createLineBreakNode = gn;
exports.$createNodeSelection = Xn;
exports.$createParagraphNode = Fr;
exports.$createRangeSelection = function () {
  let e = new Dn("root", 0, "element");
  let t = new Dn("root", 0, "element");
  return new Wn(e, t, 0, "");
};
exports.$createTabNode = Rn;
exports.$createTextNode = On;
exports.$getAdjacentNode = ze;
exports.$getNearestNodeFromDOMNode = Se;
exports.$getNearestRootOrShadowRoot = Ge;
exports.$getNodeByKey = xe;
exports.$getPreviousSelection = tr;
exports.$getRoot = we;
exports.$getSelection = er;
exports.$getTextContent = function () {
  let e = er();
  if (e === null) {
    return "";
  } else {
    return e.getTextContent();
  }
};
exports.$hasAncestor = je;
exports.$hasUpdateTag = function (e) {
  return _r()._updateTags.has(e);
};
exports.$insertNodes = function (e, t) {
  let n = er();
  if (n === null) {
    n = we().selectEnd();
  }
  return n.insertNodes(e, t);
};
exports.$isBlockElementNode = Zn;
exports.$isDecoratorNode = Ar;
exports.$isElementNode = wr;
exports.$isInlineElementOrDecoratorNode = function (e) {
  return wr(e) && e.isInline() || Ar(e) && e.isInline();
};
exports.$isLeafNode = ye;
exports.$isLineBreakNode = fn;
exports.$isNodeSelection = Kn;
exports.$isParagraphNode = function (e) {
  return e instanceof Pr;
};
exports.$isRangeSelection = Fn;
exports.$isRootNode = Dr;
exports.$isRootOrShadowRoot = Ve;
exports.$isTabNode = function (e) {
  return e instanceof kn;
};
exports.$isTextNode = wn;
exports.$nodesOfType = function (e) {
  var t = pr();
  let n = t._readOnly;
  let r = e.getType();
  t = t._nodeMap;
  let i = [];
  for (let [, o] of t) {
    if (o instanceof e && o.__type === r && (n || o.isAttached())) {
      i.push(o);
    }
  }
  return i;
};
exports.$normalizeSelection__EXPERIMENTAL = at;
exports.$parseSerializedNode = function (e) {
  return yr(e, _r()._nodes);
};
exports.$setCompositionKey = Ee;
exports.$setSelection = ke;
exports.$splitNode = tt;
exports.BLUR_COMMAND = I;
exports.CAN_REDO_COMMAND = {};
exports.CAN_UNDO_COMMAND = {};
exports.CLEAR_EDITOR_COMMAND = {};
exports.CLEAR_HISTORY_COMMAND = {};
exports.CLICK_COMMAND = r;
exports.COMMAND_PRIORITY_CRITICAL = 4;
exports.COMMAND_PRIORITY_EDITOR = 0;
exports.COMMAND_PRIORITY_HIGH = 3;
exports.COMMAND_PRIORITY_LOW = 1;
exports.COMMAND_PRIORITY_NORMAL = 2;
exports.CONTROLLED_TEXT_INSERTION_COMMAND = l;
exports.COPY_COMMAND = D;
exports.CUT_COMMAND = M;
exports.DELETE_CHARACTER_COMMAND = i;
exports.DELETE_LINE_COMMAND = d;
exports.DELETE_WORD_COMMAND = c;
exports.DEPRECATED_$computeGridMap = sr;
exports.DEPRECATED_$createGridSelection = function () {
  let e = new Dn("root", 0, "element");
  let t = new Dn("root", 0, "element");
  return new Bn("root", e, t);
};
exports.DEPRECATED_$getNodeTriplet = function (e) {
  if (!(e instanceof Wr)) {
    if (e instanceof un) {
      if (!Kr(e = nt(e, Kr))) {
        L(114);
      }
    } else if (!Kr(e = nt(e.getNode(), Kr))) {
      L(114);
    }
  }
  let t = e.getParent();
  if (!Hr(t)) {
    L(115);
  }
  let n = t.getParent();
  if (!Yr(n)) {
    L(116);
  }
  return [e, t, n];
};
exports.DEPRECATED_$isGridCellNode = Kr;
exports.DEPRECATED_$isGridNode = Yr;
exports.DEPRECATED_$isGridRowNode = Hr;
exports.DEPRECATED_$isGridSelection = zn;
exports.DEPRECATED_GridCellNode = Wr;
exports.DEPRECATED_GridNode = Ur;
exports.DEPRECATED_GridRowNode = jr;
exports.DRAGEND_COMMAND = R;
exports.DRAGOVER_COMMAND = k;
exports.DRAGSTART_COMMAND = w;
exports.DROP_COMMAND = O;
exports.DecoratorNode = Sr;
exports.ElementNode = Or;
exports.FOCUS_COMMAND = $;
exports.FORMAT_ELEMENT_COMMAND = {};
exports.FORMAT_TEXT_COMMAND = g;
exports.INDENT_CONTENT_COMMAND = {};
exports.INSERT_LINE_BREAK_COMMAND = o;
exports.INSERT_PARAGRAPH_COMMAND = s;
exports.INSERT_TAB_COMMAND = {};
exports.KEY_ARROW_DOWN_COMMAND = T;
exports.KEY_ARROW_LEFT_COMMAND = y;
exports.KEY_ARROW_RIGHT_COMMAND = _;
exports.KEY_ARROW_UP_COMMAND = v;
exports.KEY_BACKSPACE_COMMAND = x;
exports.KEY_DELETE_COMMAND = S;
exports.KEY_DOWN_COMMAND = p;
exports.KEY_ENTER_COMMAND = E;
exports.KEY_ESCAPE_COMMAND = b;
exports.KEY_MODIFIER_COMMAND = P;
exports.KEY_SPACE_COMMAND = C;
exports.KEY_TAB_COMMAND = A;
exports.LineBreakNode = cn;
exports.MOVE_TO_END = m;
exports.MOVE_TO_START = N;
exports.OUTDENT_CONTENT_COMMAND = {};
exports.PASTE_COMMAND = a;
exports.ParagraphNode = Pr;
exports.REDO_COMMAND = h;
exports.REMOVE_TEXT_COMMAND = u;
exports.RootNode = Rr;
exports.SELECTION_CHANGE_COMMAND = n;
exports.TabNode = kn;
exports.TextNode = Nn;
exports.UNDO_COMMAND = f;
exports.createCommand = function () {
  return {};
};
exports.createEditor = function (e) {
  var t = e || {};
  var n = ar;
  var r = t.theme || {};
  let i = e === undefined ? n : t.parentEditor || null;
  let o = t.disableEvents || false;
  let s = Mr();
  let l = t.namespace || (i !== null ? i._config.namespace : $e());
  let a = t.editorState;
  let u = [Rr, Nn, cn, kn, Pr, ...(t.nodes || [])];
  let c = t.onError;
  t = t.editable === undefined || t.editable;
  if (e === undefined && n !== null) {
    e = n._nodes;
  } else {
    e = new Map();
    n = 0;
    e = new Map();
    n = 0;
    for (; n < u.length; n++) {
      let t = u[n];
      let r = null;
      var d = null;
      if (typeof t != "function") {
        t = (d = t).replace;
        r = d.with;
        d = d.withKlass ? d.withKlass : null;
      }
      let i = t.getType();
      let o = t.transform();
      let s = new Set();
      if (o !== null) {
        s.add(o);
      }
      e.set(i, {
        klass: t,
        replace: r,
        replaceWithKlass: d,
        transforms: s
      });
    }
  }
  r = new zr(s, i, e, {
    disableEvents: o,
    namespace: l,
    theme: r
  }, c || console.error, function (e) {
    let t = new Map();
    let n = new Set();
    e.forEach(e => {
      if ((e = e.klass.importDOM != null ? e.klass.importDOM.bind(e.klass) : null) != null && !n.has(e)) {
        n.add(e);
        var r = e();
        if (r !== null) {
          Object.keys(r).forEach(e => {
            let n = t.get(e);
            if (n === undefined) {
              n = [];
              t.set(e, n);
            }
            n.push(r[e]);
          });
        }
      }
    });
    return t;
  }(e), t);
  if (a !== undefined) {
    r._pendingEditorState = a;
    r._dirtyType = 2;
  }
  return r;
};
exports.getNearestEditorFromDOMNode = he;
exports.isSelectionCapturedInDecoratorInput = ge;
exports.isSelectionWithinEditor = fe;
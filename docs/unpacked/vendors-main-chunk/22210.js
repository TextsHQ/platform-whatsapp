var r = require("./587592.js");
var i = require("./873435.js");
var o = require("./329428.js");
var s = require("./376969.js");
var l = require("./932998.js");
var a = require("../vendor/667294.js");
let u = Object.freeze({
  "\t": "\\t",
  "\n": "\\n"
});
let c = new RegExp(Object.keys(u).join("|"), "g");
let d = Object.freeze({
  ancestorHasNextSibling: "|",
  ancestorIsLastChild: " ",
  hasNextSibling: "├",
  isLastChild: "└",
  selectedChar: "^",
  selectedLine: ">"
});
function g(e, t, n) {
  let s = e.getEditorState();
  let a = e._config;
  let u = e._compositionKey;
  let g = e._editable;
  if (n) {
    let t = "";
    s.read(() => {
      var n = r.$generateHtmlFromNodes(e);
      let i = document.createElement("div");
      i.innerHTML = n.trim();
      t = T(i, 0).innerHTML;
    });
    return t;
  }
  let p = " root\n";
  n = s.read(() => {
    const e = l.$getSelection();
    f(l.$getRoot(), (t, n) => {
      const r = `(${t.getKey()})`;
      const s = t.getType() || "";
      const a = t.isSelected();
      const u = o.$isMarkNode(t) ? ` id: [ ${t.getIDs().join(", ")} ] ` : "";
      var g = p;
      var f = a ? d.selectedLine : " ";
      var _ = n.join(" ");
      if (l.$isTextNode(t)) {
        var m = t.getTextContent();
        var T = m.length === 0 ? "(empty)" : `"${h(m)}"`;
        m = [T, (m = [v(t), y(t), N(t)].filter(Boolean).join(", ")).length !== 0 ? `{ ${m} }` : null].filter(Boolean).join(" ").trim();
      } else if (i.$isLinkNode(t)) {
        m = (m = t.getURL()).length === 0 ? "(empty)" : `"${h(m)}"`;
        if ((T = t.getTarget()) != null) {
          T = "target: " + T;
        }
        var E = Boolean;
        var C = t.getRel();
        if (C != null) {
          C = "rel: " + C;
        }
        let e = t.getTitle();
        if (e != null) {
          e = "title: " + e;
        }
        m = [m, (T = [T, C, e].filter(E).join(", ")).length !== 0 ? `{ ${T} }` : null].filter(Boolean).join(" ").trim();
      } else {
        m = "";
      }
      p = g + `${f} ${_} ${r} ${s} ${u} ${m}\n`;
      p += function ({
        indent: e,
        isSelected: t,
        node: n,
        nodeKeyDisplay: r,
        selection: i,
        typeDisplay: o
      }) {
        if (!l.$isTextNode(n) || !l.$isRangeSelection(i) || !t || l.$isElementNode(n)) {
          return "";
        }
        t = i.anchor;
        var s = i.focus;
        if (n.getTextContent() === "" || t.getNode() === i.focus.getNode() && t.offset === s.offset) {
          return "";
        }
        s = i.anchor;
        let a = i.focus;
        let u = n.getTextContent();
        let g = u.length;
        t = i = -1;
        if (s.type === "text" && a.type === "text") {
          let e = s.getNode();
          let r = a.getNode();
          if (e === r && n === e && s.offset !== a.offset) {
            [i, t] = s.offset < a.offset ? [s.offset, a.offset] : [a.offset, s.offset];
          } else {
            [i, t] = n === e ? e.isBefore(r) ? [s.offset, g] : [0, s.offset] : n === r ? r.isBefore(e) ? [a.offset, g] : [0, a.offset] : [0, g];
          }
        }
        n = (u.slice(0, i).match(c) || []).length;
        s = (u.slice(i, t).match(c) || []).length;
        let [f, h] = [i + n, t + n + s];
        if (f === h) {
          return "";
        } else {
          n = e[e.length - 1] === d.hasNextSibling ? d.ancestorHasNextSibling : d.ancestorIsLastChild;
          e = [...e.slice(0, e.length - 1), n];
          n = Array(f + 1).fill(" ");
          i = Array(h - f).fill(d.selectedChar);
          r = Array(r.length + (o.length + 3)).fill(" ");
          return [d.selectedLine, e.join(" "), [...r, ...n, ...i].join("")].join(" ") + "\n";
        }
      }({
        indent: n,
        isSelected: a,
        node: t,
        nodeKeyDisplay: r,
        selection: e,
        typeDisplay: s
      });
    });
    if (e === null) {
      return ": null";
    } else if (l.$isRangeSelection(e)) {
      return function (e) {
        let t = "";
        var n = v(e);
        t += `: range ${n !== "" ? `{ ${n} }` : ""} ${e.style !== "" ? `{ style: ${e.style} } ` : ""}`;
        n = e.anchor;
        e = e.focus;
        let r = n.offset;
        let i = e.offset;
        t += `\n  ├ anchor { key: ${n.key}, offset: ${r === null ? "null" : r}, type: ${n.type} }`;
        return t + `\n  └ focus { key: ${e.key}, offset: ${i === null ? "null" : i}, type: ${e.type} }`;
      }(e);
    } else if (l.DEPRECATED_$isGridSelection(e)) {
      return `: grid\n  └ { grid: ${e.gridKey}, anchorCell: ${e.anchor.key}, focusCell: ${e.focus.key} }`;
    } else {
      return `: node\n  └ [${Array.from(e._nodes).join(", ")}]`;
    }
  });
  p += "\n selection" + n;
  p += "\n\n commands:";
  if (t.length) {
    for (let {
      type: e,
      payload: n
    } of t) {
      p += `\n  └ { type: ${e}, payload: ${n instanceof Event ? n.constructor.name : n} }`;
    }
  } else {
    p += "\n  └ None dispatched.";
  }
  p += "\n\n editor:";
  p += `\n  └ namespace ${a.namespace}`;
  if (u !== null) {
    p += `\n  └ compositionKey ${u}`;
  }
  return p += `\n  └ editable ${String(g)}`;
}
function f(e, t, n = []) {
  let r = (e = e.getChildren()).length;
  e.forEach((e, i) => {
    t(e, n.concat(i === r - 1 ? d.isLastChild : d.hasNextSibling));
    if (l.$isElementNode(e)) {
      f(e, t, n.concat(i === r - 1 ? d.ancestorIsLastChild : d.ancestorHasNextSibling));
    }
  });
}
function h(e) {
  return Object.entries(u).reduce((e, [t, n]) => e.replace(new RegExp(t, "g"), String(n)), e);
}
let p = [e => e.hasFormat("bold") && "Bold", e => e.hasFormat("code") && "Code", e => e.hasFormat("italic") && "Italic", e => e.hasFormat("strikethrough") && "Strikethrough", e => e.hasFormat("subscript") && "Subscript", e => e.hasFormat("superscript") && "Superscript", e => e.hasFormat("underline") && "Underline"];
let _ = [e => e.isDirectionless() && "Directionless", e => e.isUnmergeable() && "Unmergeable"];
let m = [e => e.isToken() && "Token", e => e.isSegmented() && "Segmented"];
function y(e) {
  let t = _.map(t => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
  if (t !== "") {
    t = "detail: " + t;
  }
  return t;
}
function N(e) {
  let t = m.map(t => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
  if (t !== "") {
    t = "mode: " + t;
  }
  return t;
}
function v(e) {
  let t = p.map(t => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
  if (t !== "") {
    t = "format: " + t;
  }
  return t;
}
function T(e, t) {
  let n;
  let r = Array(1 + t++).join("  ");
  let i = Array(t - 1).join("  ");
  for (let o = 0; o < e.children.length; o++) {
    n = document.createTextNode("\n" + r);
    e.insertBefore(n, e.children[o]);
    T(e.children[o], t);
    if (e.lastElementChild === e.children[o]) {
      n = document.createTextNode("\n" + i);
      e.appendChild(n);
    }
  }
  return e;
}
exports.TreeView = function ({
  treeTypeButtonClassName: e,
  timeTravelButtonClassName: t,
  timeTravelPanelSliderClassName: n,
  timeTravelPanelButtonClassName: r,
  viewClassName: i,
  timeTravelPanelClassName: o,
  editor: u
}) {
  let [c, d] = a.useState([]);
  let [f, h] = a.useState("");
  let [p, _] = a.useState(false);
  let [m, y] = a.useState(false);
  let N = a.useRef(0);
  let v = a.useRef(null);
  let T = a.useRef(null);
  let [E, C] = a.useState(false);
  let [x, b] = a.useState(false);
  let [S, A] = a.useState(false);
  let O = a.useRef(null);
  let w = function (e) {
    let [t, n] = a.useState([]);
    a.useEffect(() => {
      let t = new Set();
      for (let [r] of e._commands) {
        t.add(e.registerCommand(r, e => {
          n(t => {
            (t = [...t]).push({
              payload: e,
              type: r.type ? r.type : "UNKNOWN"
            });
            if (t.length > 10) {
              t.shift();
            }
            return t;
          });
          return false;
        }, l.COMMAND_PRIORITY_HIGH));
      }
      return () => t.forEach(e => e());
    }, [e]);
    return a.useMemo(() => t, [t]);
  }(u);
  let k = a.useCallback(e => {
    const t = g(u, w, m);
    h(t);
    if (!p) {
      d(t => [...t, [Date.now(), e]]);
    }
  }, [w, u, p, m]);
  a.useEffect(() => {
    let e = u.getEditorState();
    if (!S && e._nodeMap.size < 1000) {
      h(g(u, w, m));
    }
  }, [w, u, S, m]);
  a.useEffect(() => s.mergeRegister(u.registerUpdateListener(({
    editorState: e
  }) => {
    if (!(!S && e._nodeMap.size > 1000 && (O.current = e, b(true), !S))) {
      k(e);
    }
  }), u.registerEditableListener(() => {
    let e = g(u, w, m);
    h(e);
  })), [w, u, m, x, k, S]);
  let R = c.length;
  a.useEffect(() => {
    if (E) {
      let e;
      let t = () => {
        const n = N.current;
        if (n === R - 1) {
          C(false);
        } else {
          e = setTimeout(() => {
            N.current++;
            const e = N.current;
            const n = T.current;
            if (n !== null) {
              n.value = String(e);
            }
            u.setEditorState(c[e][1]);
            t();
          }, c[n + 1][0] - c[n][0]);
        }
      };
      t();
      return () => {
        clearTimeout(e);
      };
    }
  }, [c, E, u, R]);
  a.useEffect(() => {
    let e = v.current;
    if (e !== null) {
      e.__lexicalEditor = u;
      return () => {
        e.__lexicalEditor = null;
      };
    }
  }, [u]);
  return a.createElement("div", {
    className: i
  }, !S && x ? a.createElement("div", {
    style: {
      padding: 20
    }
  }, a.createElement("span", {
    style: {
      marginRight: 20
    }
  }, "Detected large EditorState, this can impact debugging performance."), a.createElement("button", {
    onClick: () => {
      A(true);
      let e = O.current;
      if (e !== null) {
        O.current = null;
        k(e);
      }
    },
    style: {
      background: "transparent",
      border: "1px solid white",
      color: "white",
      cursor: "pointer",
      padding: 5
    }
  }, "Show full tree")) : null, S ? null : a.createElement("button", {
    onClick: () => y(!m),
    className: e,
    type: "button"
  }, m ? "Tree" : "Export DOM"), !p && (S || !x) && R > 2 && a.createElement("button", {
    onClick: () => {
      let e = u.getRootElement();
      if (e !== null) {
        e.contentEditable = "false";
        N.current = R - 1;
        _(true);
      }
    },
    className: t,
    type: "button"
  }, "Time Travel"), (S || !x) && a.createElement("pre", {
    ref: v
  }, f), p && (S || !x) && a.createElement("div", {
    className: o
  }, a.createElement("button", {
    className: r,
    onClick: () => {
      if (N.current === R - 1) {
        N.current = 1;
      }
      C(!E);
    },
    type: "button"
  }, E ? "Pause" : "Play"), a.createElement("input", {
    className: n,
    ref: T,
    onChange: e => {
      e = Number(e.target.value);
      let t = c[e];
      if (t) {
        N.current = e;
        u.setEditorState(t[1]);
      }
    },
    type: "range",
    min: "1",
    max: R - 1
  }), a.createElement("button", {
    className: r,
    onClick: () => {
      var e = u.getRootElement();
      if (e !== null) {
        e.contentEditable = "true";
        e = c.length - 1;
        u.setEditorState(c[e][1]);
        let t = T.current;
        if (t !== null) {
          t.value = String(e);
        }
        _(false);
        C(false);
      }
    },
    type: "button"
  }, "Exit")));
};
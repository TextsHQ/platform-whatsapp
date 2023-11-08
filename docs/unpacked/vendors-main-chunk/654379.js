var r = require("./376969.js");
var i = require("./932998.js");
function o(e, t) {
  let n = Date.now();
  let r = 0;
  return (o, s, l, a, u, c) => {
    let d = Date.now();
    if (c.has("historic")) {
      r = 0;
      n = d;
      return 2;
    }
    let g = function (e, t, n, r, o) {
      if (e === null || n.size === 0 && r.size === 0 && !o) {
        return 0;
      }
      var s = t._selection;
      var l = e._selection;
      if (o) {
        return 1;
      }
      if (!(i.$isRangeSelection(s) && i.$isRangeSelection(l) && l.isCollapsed() && s.isCollapsed())) {
        return 0;
      }
      o = t._nodeMap;
      let a = [];
      for (let e of n) {
        if ((n = o.get(e)) !== undefined) {
          a.push(n);
        }
      }
      for (let [e, t] of r) {
        if (t) {
          if (!((r = o.get(e)) === undefined || i.$isRootNode(r))) {
            a.push(r);
          }
        }
      }
      if (a.length === 0) {
        return 0;
      } else if (a.length > 1) {
        t = (r = t._nodeMap).get(s.anchor.key);
        l = r.get(l.anchor.key);
        if (t && l && !e._nodeMap.has(t.__key) && i.$isTextNode(t) && t.__text.length === 1 && s.anchor.offset === 1) {
          return 2;
        } else {
          return 0;
        }
      } else {
        t = a[0];
        e = e._nodeMap.get(t.__key);
        if (i.$isTextNode(e) && i.$isTextNode(t) && e.__mode === t.__mode) {
          if ((e = e.__text) === (t = t.__text)) {
            return 0;
          } else {
            s = s.anchor;
            l = l.anchor;
            if (s.key !== l.key || s.type !== "text") {
              return 0;
            } else {
              s = s.offset;
              l = l.offset;
              if ((e = t.length - e.length) == 1 && l === s - 1) {
                return 2;
              } else if (e === -1 && l === s + 1) {
                return 3;
              } else if (e === -1 && l === s) {
                return 4;
              } else {
                return 0;
              }
            }
          }
        } else {
          return 0;
        }
      }
    }(o, s, a, u, e.isComposing());
    let f = (() => {
      var f = l === null || l.editor === e;
      var h = c.has("history-push");
      if (!h && f && c.has("history-merge")) {
        return 0;
      }
      if (o === null) {
        return 1;
      }
      var p = s._selection;
      if (!(a.size > 0 || u.size > 0)) {
        if (p !== null) {
          return 0;
        } else {
          return 2;
        }
      }
      if (h === false && g !== 0 && g === r && d < n + t && f) {
        return 0;
      }
      if (a.size === 1) {
        {
          h = Array.from(a)[0];
          f = o._nodeMap.get(h);
          h = s._nodeMap.get(h);
          p = o._selection;
          let e = s._selection;
          let t = false;
          if (i.$isRangeSelection(p) && i.$isRangeSelection(e)) {
            t = p.anchor.type === "element" && p.focus.type === "element" && e.anchor.type === "text" && e.focus.type === "text";
          }
          f = !(t || !i.$isTextNode(f) || !i.$isTextNode(h)) && f.__type === h.__type && f.__text === h.__text && f.__mode === h.__mode && f.__detail === h.__detail && f.__style === h.__style && f.__format === h.__format && f.__parent === h.__parent;
        }
        if (f) {
          return 0;
        }
      }
      return 1;
    })();
    n = d;
    r = g;
    return f;
  };
}
exports.createEmptyHistoryState = function () {
  return {
    current: null,
    redoStack: [],
    undoStack: []
  };
};
exports.registerHistory = function (e, t, n) {
  let s = o(e, n);
  n = ({
    editorState: n,
    prevEditorState: r,
    dirtyLeaves: o,
    dirtyElements: l,
    tags: a
  }) => {
    const u = t.current;
    const c = t.redoStack;
    const d = t.undoStack;
    const g = u === null ? null : u.editorState;
    if (u === null || n !== g) {
      if ((r = s(r, n, u, o, l, a)) === 1) {
        if (c.length !== 0) {
          t.redoStack = [];
          e.dispatchCommand(i.CAN_REDO_COMMAND, false);
        }
        if (u !== null) {
          d.push({
            ...u
          });
          e.dispatchCommand(i.CAN_UNDO_COMMAND, true);
        }
      } else if (r === 2) {
        return;
      }
      t.current = {
        editor: e,
        editorState: n
      };
    }
  };
  let l = r.mergeRegister(e.registerCommand(i.UNDO_COMMAND, () => {
    let n = t.redoStack;
    let r = t.undoStack;
    if (r.length !== 0) {
      let o = t.current;
      let s = r.pop();
      if (o !== null) {
        n.push(o);
        e.dispatchCommand(i.CAN_REDO_COMMAND, true);
      }
      if (r.length === 0) {
        e.dispatchCommand(i.CAN_UNDO_COMMAND, false);
      }
      t.current = s || null;
      if (s) {
        s.editor.setEditorState(s.editorState, {
          tag: "historic"
        });
      }
    }
    return true;
  }, i.COMMAND_PRIORITY_EDITOR), e.registerCommand(i.REDO_COMMAND, () => {
    let n = t.redoStack;
    var r = t.undoStack;
    if (n.length !== 0) {
      let o = t.current;
      if (o !== null) {
        r.push(o);
        e.dispatchCommand(i.CAN_UNDO_COMMAND, true);
      }
      r = n.pop();
      if (n.length === 0) {
        e.dispatchCommand(i.CAN_REDO_COMMAND, false);
      }
      t.current = r || null;
      if (r) {
        r.editor.setEditorState(r.editorState, {
          tag: "historic"
        });
      }
    }
    return true;
  }, i.COMMAND_PRIORITY_EDITOR), e.registerCommand(i.CLEAR_EDITOR_COMMAND, () => {
    t.undoStack = [];
    t.redoStack = [];
    t.current = null;
    return false;
  }, i.COMMAND_PRIORITY_EDITOR), e.registerCommand(i.CLEAR_HISTORY_COMMAND, () => {
    t.undoStack = [];
    t.redoStack = [];
    t.current = null;
    e.dispatchCommand(i.CAN_REDO_COMMAND, false);
    e.dispatchCommand(i.CAN_UNDO_COMMAND, false);
    return true;
  }, i.COMMAND_PRIORITY_EDITOR), e.registerUpdateListener(n));
  let a = e.registerUpdateListener(n);
  return () => {
    l();
    a();
  };
};
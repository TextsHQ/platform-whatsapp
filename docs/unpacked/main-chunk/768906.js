var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DebugPanelPlugin = function (e) {
  const {
    showByDefault: t
  } = e;
  const [n] = (0, a.useLexicalComposerContext)();
  const [o, i] = (0, d.useState)(t != null && t);
  const [s, h] = (0, d.useState)(false);
  const E = (0, d.useRef)(false);
  E.current = s;
  (0, f.useListener)(n.getRootElement(), "keydown", e => {
    if (e.key === "D" && e.ctrlKey) {
      i(e => !e);
      e.preventDefault();
    }
  }, {
    capture: true
  });
  (0, d.useEffect)(() => {
    const e = n.registerUpdateListener(() => {
      if (E.current) {
        __LOG__(2)`[Lexical] update`;
      }
    });
    const t = n.registerTextContentListener(() => {
      if (E.current) {
        __LOG__(2)`[Lexical] textcontent`;
      }
    });
    const o = g.map(e => {
      let [t, o] = e;
      return n.registerMutationListener(t, () => {
        if (E.current) {
          __LOG__(2)`[Lexical] mutation ${o}`;
        }
      });
    });
    const a = g.map(e => {
      let [t, o] = e;
      return n.registerNodeTransform(t, () => {
        if (E.current) {
          __LOG__(2)`[Lexical] node transform ${o}`;
        }
      });
    });
    const l = C.map(e => {
      let [t, o] = e;
      return n.registerCommand(t, () => {
        if (E.current) {
          __LOG__(2)`[Lexical] command: ${o}`;
        }
        return false;
      }, r.COMMAND_PRIORITY_CRITICAL);
    });
    return () => {
      e();
      t();
      o.forEach(e => e());
      a.forEach(e => e());
      l.forEach(e => e());
    };
  }, [n]);
  const {
    metricsElement: O,
    trackingEnabled: A
  } = function (e) {
    const [t, n] = (0, d.useState)();
    const [o, r] = (0, p.default)(false);
    const [a, l] = (0, d.useState)(false);
    const i = (0, d.useRef)({
      all: [],
      last: []
    });
    const [s] = (0, m.useTimeout)(() => {
      const e = i.current;
      const t = e.all.reduce((e, t) => e + t, 0);
      const o = Math.round(t / e.all.length * 100) / 100;
      const r = e.last.reduce((e, t) => e + t, 0);
      const a = Math.round(r / e.last.length * 100) / 100;
      n({
        last: a,
        avg: o
      });
      l(false);
      i.current.last = [];
    }, 2000);
    const h = () => {
      if (!o) {
        return;
      }
      l(true);
      const e = self.performance.now();
      self.setTimeout(() => {
        const t = i.current;
        t.last.push(self.performance.now() - e);
        t.all.push(self.performance.now() - e);
      }, 0);
      s();
    };
    (0, f.useListener)(window, "beforeinput", h);
    (0, f.useListener)(e.getRootElement(), "paste", h, {
      capture: true
    });
    let E = o ? "[type something first]" : "[disabled]";
    if (t && !a) {
      E = `${t.last}ms (avg: ${t.avg}ms)`;
    } else if (a) {
      E = "...";
    }
    return {
      metricsElement: d.default.createElement("div", {
        className: (0, c.default)(M)
      }, d.default.createElement("span", null, "Response time: ", E, " "), d.default.createElement(u.Switch, {
        checked: o,
        onChange: r
      })),
      trackingEnabled: o
    };
  }(n);
  if (!o) {
    return null;
  }
  let x;
  if (!A) {
    x = d.default.createElement("div", {
      className: (0, c.default)(T)
    }, d.default.createElement(l.TreeView, {
      editor: n,
      viewClassName: (0, c.default)(S),
      timeTravelPanelClassName: (0, c.default)(v),
      timeTravelPanelSliderClassName: (0, c.default)(y),
      timeTravelPanelButtonClassName: (0, c.default)(b),
      timeTravelButtonClassName: (0, c.default)(N)
    }));
  }
  return d.default.createElement("div", {
    className: (0, c.default)(_)
  }, x, O, d.default.createElement("div", {
    className: (0, c.default)(M)
  }, d.default.createElement("span", null, "Log Lexical events to dev console"), d.default.createElement(u.Switch, {
    checked: s,
    onChange: () => h(!s)
  })), d.default.createElement("div", {
    className: (0, c.default)(M)
  }, d.default.createElement("span", null, "Enable text-format plugin"), d.default.createElement(u.Switch, {
    checked: e.textFormatEnabled,
    onChange: () => e.onToggleTextFormat()
  })));
};
var r = E(require("./14544.js"));
var a = require("./71671.js");
var l = require("./692341.js");
var i = require("./262337.js");
var s = require("./331853.js");
var u = require("./137506.js");
var d = E(require("../vendor/667294.js"));
var c = o(require("../app/156720.js"));
var f = require("../app/808446.js");
var m = require("../app/441673.js");
var p = o(require("../app/305988.js"));
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function E(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var o = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(o, a, l);
      } else {
        o[a] = e[a];
      }
    }
  }
  o.default = e;
  if (n) {
    n.set(e, o);
  }
  return o;
}
const g = [[r.ParagraphNode, "ParagraphNode"], [r.TextNode, "TextNode"], [i.EmojiNode, "EmojiNode"], [s.MentionNode, "MentionNode"]];
const C = [[r.SELECTION_CHANGE_COMMAND, "SELECTION_CHANGE_COMMAND"], [r.CLICK_COMMAND, "CLICK_COMMAND"], [r.DELETE_CHARACTER_COMMAND, "DELETE_CHARACTER_COMMAND"], [r.INSERT_LINE_BREAK_COMMAND, "INSERT_LINE_BREAK_COMMAND"], [r.INSERT_PARAGRAPH_COMMAND, "INSERT_PARAGRAPH_COMMAND"], [r.CONTROLLED_TEXT_INSERTION_COMMAND, "CONTROLLED_TEXT_INSERTION_COMMAND"], [r.PASTE_COMMAND, "PASTE_COMMAND"], [r.REMOVE_TEXT_COMMAND, "REMOVE_TEXT_COMMAND"], [r.DELETE_WORD_COMMAND, "DELETE_WORD_COMMAND"], [r.DELETE_LINE_COMMAND, "DELETE_LINE_COMMAND"], [r.FORMAT_TEXT_COMMAND, "FORMAT_TEXT_COMMAND"], [r.UNDO_COMMAND, "UNDO_COMMAND"], [r.REDO_COMMAND, "REDO_COMMAND"], [r.KEY_ARROW_RIGHT_COMMAND, "KEY_ARROW_RIGHT_COMMAND"], [r.KEY_ARROW_LEFT_COMMAND, "KEY_ARROW_LEFT_COMMAND"], [r.KEY_ARROW_UP_COMMAND, "KEY_ARROW_UP_COMMAND"], [r.KEY_ARROW_DOWN_COMMAND, "KEY_ARROW_DOWN_COMMAND"], [r.KEY_ENTER_COMMAND, "KEY_ENTER_COMMAND"], [r.KEY_SPACE_COMMAND, "KEY_SPACE_COMMAND"], [r.KEY_BACKSPACE_COMMAND, "KEY_BACKSPACE_COMMAND"], [r.KEY_ESCAPE_COMMAND, "KEY_ESCAPE_COMMAND"], [r.KEY_DELETE_COMMAND, "KEY_DELETE_COMMAND"], [r.KEY_TAB_COMMAND, "KEY_TAB_COMMAND"], [r.KEY_MODIFIER_COMMAND, "KEY_MODIFIER_COMMAND"], [r.INDENT_CONTENT_COMMAND, "INDENT_CONTENT_COMMAND"], [r.OUTDENT_CONTENT_COMMAND, "OUTDENT_CONTENT_COMMAND"], [r.DROP_COMMAND, "DROP_COMMAND"], [r.FORMAT_ELEMENT_COMMAND, "FORMAT_ELEMENT_COMMAND"], [r.DRAGSTART_COMMAND, "DRAGSTART_COMMAND"], [r.DRAGOVER_COMMAND, "DRAGOVER_COMMAND"], [r.DRAGEND_COMMAND, "DRAGEND_COMMAND"], [r.COPY_COMMAND, "COPY_COMMAND"], [r.CUT_COMMAND, "CUT_COMMAND"], [r.CLEAR_EDITOR_COMMAND, "CLEAR_EDITOR_COMMAND"], [r.CLEAR_HISTORY_COMMAND, "CLEAR_HISTORY_COMMAND"], [r.CAN_REDO_COMMAND, "CAN_REDO_COMMAND"], [r.CAN_UNDO_COMMAND, "CAN_UNDO_COMMAND"], [r.FOCUS_COMMAND, "FOCUS_COMMAND"], [r.BLUR_COMMAND, "BLUR_COMMAND"]];
const _ = {
  display: "f804f6gw",
  paddingTop: "b7n2qyd4",
  paddingEnd: "btzf6ewn",
  paddingBottom: "ekpn4oxx",
  paddingStart: "nqtxkp62",
  marginTop: "c46o30wg",
  overflowX: "i44ccddp",
  overflowY: "ag5g9lrv",
  fontFamily: "jp8f8qpf",
  fontSize: "dsh4tgtl",
  color: "havzjkop",
  whiteSpace: "bbv8nyr4",
  backgroundColor: "fyxs1hr1",
  borderTopStartRadius: "k6f31xd0",
  borderTopEndRadius: "i213mnjx",
  borderBottomEndRadius: "csyx12jj",
  borderBottomStartRadius: "aemtu0ky"
};
const T = {
  position: "g0rxnol2"
};
const S = {
  marginTop: "iy2cu22y",
  height: "m6k4hpz6",
  overflowY: "rpvcun8f"
};
const N = {
  backgroundColor: "sjyhwr5o",
  borderTop: "cc8mgx9x",
  borderEnd: "eta5aym1",
  borderBottom: "d9802myq",
  borderStart: "e4xiuwjv",
  color: "havzjkop",
  fontSize: "dsh4tgtl",
  paddingTop: "i5tg98hk",
  paddingEnd: "f9ovudaz",
  paddingBottom: "przvwfww",
  paddingStart: "gx1rr48f",
  position: "lhggkp7q",
  end: "d4vkij7k",
  top: "qlcjp10l",
  ":hover": {
    textDecoration: "edeob0r2"
  }
};
const v = {
  display: "p357zi0d",
  marginEnd: "k1jo73ug",
  marginBottom: "ec1z5skj",
  marginStart: "isfiuinm",
  overflowX: "gfz4du6o",
  overflowY: "r7fjleex",
  paddingTop: "i5tg98hk",
  paddingEnd: "f9ovudaz",
  paddingBottom: "aiput80m",
  paddingStart: "gx1rr48f",
  marginTop: "opp68qpq",
  width: "rtue7xhx"
};
const b = {
  backgroundColor: "sjyhwr5o",
  borderTop: "cc8mgx9x",
  borderEnd: "eta5aym1",
  borderBottom: "d9802myq",
  borderStart: "e4xiuwjv",
  color: "havzjkop",
  flexGrow: "ggj6brxn",
  flexShrink: "m0h2a7mj",
  flexBasis: "rjo8vgbg",
  fontSize: "dsh4tgtl",
  paddingTop: "i5tg98hk",
  paddingEnd: "f9ovudaz",
  paddingBottom: "przvwfww",
  paddingStart: "gx1rr48f",
  ":hover": {
    textDecoration: "edeob0r2"
  }
};
const y = {
  flexGrow: "ggj6brxn",
  flexShrink: "m0h2a7mj",
  flexBasis: "rjo8vgbg",
  paddingTop: "i5tg98hk",
  paddingEnd: "f9ovudaz",
  paddingBottom: "przvwfww",
  paddingStart: "gx1rr48f"
};
const M = {
  display: "p357zi0d",
  justifyContent: "o4u7okr9",
  alignItems: "gndfcl4n"
};
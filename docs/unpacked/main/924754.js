var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmojiSuggestionsPanel = function (e) {
  let {
    kind: t,
    emojis: n,
    editor: a,
    onSelect: f,
    onDismiss: g
  } = e;
  const E = (0, u.useRef)();
  const v = (0, u.useRef)(false);
  const _ = e => {
    v.current = e;
  };
  (0, c.useLexicalCommandListener)(a, r.KEY_ARROW_LEFT_COMMAND, e => {
    var t;
    var a;
    return !(h(e) || !n) && (l.default.isRTL() ? (t = E.current) === null || t === undefined || t.moveSelectionRight() : (a = E.current) === null || a === undefined || a.moveSelectionLeft(), true);
  });
  (0, c.useLexicalCommandListener)(a, r.KEY_ARROW_RIGHT_COMMAND, e => {
    var t;
    var a;
    return !(h(e) || !n) && (l.default.isRTL() ? (t = E.current) === null || t === undefined || t.moveSelectionLeft() : (a = E.current) === null || a === undefined || a.moveSelectionRight(), true);
  });
  const y = e => {
    var t;
    return !(h(e) || !n) && ((t = E.current) === null || t === undefined || t.pickSelectedEmoji(), true);
  };
  (0, c.useLexicalCommandListener)(a, r.KEY_ENTER_COMMAND, y);
  (0, c.useLexicalCommandListener)(a, r.KEY_TAB_COMMAND, y);
  const [C, {
    width: b
  }] = (0, d.default)();
  let M = null;
  if (n) {
    M = u.default.createElement("div", {
      className: t !== i.SuggestionsPanelKind.Menu && (0, s.default)(p)
    }, u.default.createElement(o.EmojiSuggestionsPanel, {
      ref: E,
      maxWidth: b - (t !== i.SuggestionsPanelKind.Menu ? 12 : 0),
      onEmoji: f,
      onSkinTonePicker: _,
      emojiList: n
    }));
  }
  return u.default.createElement(u.default.Fragment, null, u.default.createElement(i.SuggestionsPanelContainer, {
    editor: a,
    kind: t,
    onDismiss: g,
    onToggleVisibility: e => !(!e && v.current)
  }, M), u.default.createElement("div", {
    className: (0, s.default)(m),
    ref: C
  }));
};
var r = require("../main-chunk/14544.js");
var o = require("./258627.js");
var l = a(require("../app/932325.js"));
var i = require("./204875.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
var c = require("../main-chunk/16188.js");
var d = a(require("./695841.js"));
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const p = {
  paddingTop: "fbgy3m38",
  paddingEnd: "f9ovudaz",
  paddingBottom: "aiput80m",
  paddingStart: "nqtxkp62"
};
const m = {
  position: "lhggkp7q",
  width: "ln8gz9je"
};
function h(e) {
  return Boolean(e && (e.metaKey || e.shiftKey || e.altKey || e.ctrlKey));
}
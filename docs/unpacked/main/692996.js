var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PANEL_LEFT_RIGHT_MARGINS = undefined;
exports.StickerSuggestionsPanel = function (e) {
  let {
    emojiPrompt: t,
    kind: n,
    editor: a,
    onSelect: i,
    onDismiss: m
  } = e;
  const _ = (0, p.useStickerSuggestions)(t);
  const y = (0, s.useRef)();
  (0, d.useLexicalCommandListener)(a, r.KEY_ARROW_LEFT_COMMAND, e => {
    var t;
    var n;
    return !(v(e) || !_) && (o.default.isRTL() ? (t = y.current) === null || t === undefined || t.moveSelectionRight() : (n = y.current) === null || n === undefined || n.moveSelectionLeft(), true);
  });
  (0, d.useLexicalCommandListener)(a, r.KEY_ARROW_RIGHT_COMMAND, e => {
    var t;
    var n;
    return !(v(e) || !_) && (o.default.isRTL() ? (t = y.current) === null || t === undefined || t.moveSelectionLeft() : (n = y.current) === null || n === undefined || n.moveSelectionRight(), true);
  });
  (0, d.useLexicalCommandListener)(a, r.KEY_ENTER_COMMAND, e => {
    var t;
    var n;
    return !(v(e) || !_) && (t = (n = y.current) === null || n === undefined ? undefined : n.pickSelectedSticker()) !== null && t !== undefined && t;
  });
  (0, d.useLexicalCommandListener)(a, r.KEY_TAB_COMMAND, e => {
    var t;
    var n;
    return !(v(e) || !_) && (o.default.isRTL() ? (t = y.current) === null || t === undefined || t.moveSelectionLeft() : (n = y.current) === null || n === undefined || n.moveSelectionRight(), true);
  });
  const C = () => {
    if (!(m == null)) {
      m();
    }
    return true;
  };
  (0, d.useLexicalCommandListener)(a, r.KEY_ESCAPE_COMMAND, C);
  (0, d.useLexicalCommandListener)(a, r.KEY_ARROW_DOWN_COMMAND, C);
  const [b, {
    width: M
  }] = (0, f.default)();
  let S = null;
  if (_.length > 0) {
    S = s.default.createElement("div", {
      className: (0, c.default)(g)
    }, s.default.createElement(l.StickerSuggestionsPanelContent, {
      ref: y,
      stickers: _,
      maxWidth: M - h * 2,
      onSelect: i
    }));
  }
  return s.default.createElement(s.default.Fragment, null, s.default.createElement(u.SuggestionsPanelContainer, {
    editor: a,
    kind: n,
    onDismiss: m
  }, S), s.default.createElement("div", {
    className: (0, c.default)(E),
    ref: b
  }));
};
var r = require("../main-chunk/14544.js");
var o = a(require("../app/932325.js"));
var l = require("./417106.js");
var i = a(require("./500877.js"));
var u = require("./204875.js");
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
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
var c = a(require("../app/156720.js"));
var d = require("../main-chunk/16188.js");
var f = a(require("./695841.js"));
var p = require("./192272.js");
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const h = parseInt(i.default["-sticker-panel-left-right-margins"].replace(/px$/, ""), 10);
exports.PANEL_LEFT_RIGHT_MARGINS = h;
const g = {
  paddingStart: "omwworg5",
  paddingEnd: "mgssq8h7"
};
const E = {
  position: "lhggkp7q",
  width: "ln8gz9je"
};
function v(e) {
  return Boolean(e && (e.metaKey || e.shiftKey || e.altKey || e.ctrlKey));
}
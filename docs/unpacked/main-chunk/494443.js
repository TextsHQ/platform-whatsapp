Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CharacterLimitPlugin = function (e) {
  let {
    historyState: t,
    maxLength: n,
    maxCodeUnits: c,
    onMaxPasteExceeded: f
  } = e;
  const [m] = (0, r.useLexicalComposerContext)();
  (0, s.useEffect)(() => {
    if (n == null && c == null) {
      return;
    }
    let e = m.getEditorState();
    return m.registerUpdateListener(() => {
      if (m.isComposing()) {
        return;
      }
      const o = m.getEditorState();
      if (o === e) {
        return;
      }
      const r = o.read(i.$rootTextContent);
      if (r !== e.read(i.$rootTextContent) && (c != null && d(r) > c || n != null && (0, a.numCodepoints)(r) > n)) {
        m.setEditorState(e, {
          tag: "history-merge"
        });
        return void t.undoStack.pop();
      }
      e = o;
    });
  }, [m, t.undoStack, n, c]);
  (0, u.useLexicalCommandListener)(m, l.PASTE_TEXT_COMMAND, e => {
    const t = m.getEditorState().read(i.$rootTextContent);
    const o = m.getEditorState().read(() => {
      var e;
      var t;
      if ((e = (t = (0, i.$getRangeSelection)()) === null || t === undefined ? undefined : t.getTextContent()) !== null && e !== undefined) {
        return e;
      } else {
        return "";
      }
    });
    const r = c != null && t.length - o.length + e.length > c;
    const l = n != null && (0, a.numCodepoints)(t) - (0, a.numCodepoints)(o) + (0, a.numCodepoints)(e) > n;
    const s = r || l;
    if (s) {
      if (!(f == null)) {
        f();
      }
    }
    return s;
  }, o.COMMAND_PRIORITY_CRITICAL);
  return null;
};
exports.numCodeUnits = d;
var o = require("./14544.js");
var r = require("./71671.js");
var a = require("../app/370257.js");
var l = require("./683602.js");
var i = require("./251922.js");
var s = require("../vendor/667294.js");
var u = require("./16188.js");
function d(e) {
  return new Blob([e], {
    type: "text/plain"
  }).size;
}
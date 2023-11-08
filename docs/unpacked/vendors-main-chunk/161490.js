var r = require("./986907.js");
var i = require("./389408.js");
var o = require("./376969.js");
var s = require("./932998.js");
let l = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
let a = l && "documentMode" in document ? document.documentMode : null;
if (l) {
  /Mac|iPod|iPhone|iPad/.test(navigator.platform);
}
if (l) {
  /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
}
let u = !(!l || !("InputEvent" in window) || a) && "getTargetRanges" in new window.InputEvent("input");
let c = l && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
let d = l && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
let g = l && /^(?=.*Chrome).*/i.test(navigator.userAgent);
let f = l && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !g;
function h(e, t) {
  t.update(() => {
    let n = e instanceof KeyboardEvent ? null : e.clipboardData;
    let i = s.$getSelection();
    if (i !== null && n != null) {
      e.preventDefault();
      let o = r.$getHtmlContent(t);
      if (o !== null) {
        n.setData("text/html", o);
      }
      n.setData("text/plain", i.getTextContent());
    }
  });
}
exports.registerPlainText = function (e) {
  return o.mergeRegister(e.registerCommand(s.DELETE_CHARACTER_COMMAND, e => {
    const t = s.$getSelection();
    return !!s.$isRangeSelection(t) && (t.deleteCharacter(e), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DELETE_WORD_COMMAND, e => {
    const t = s.$getSelection();
    return !!s.$isRangeSelection(t) && (t.deleteWord(e), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DELETE_LINE_COMMAND, e => {
    const t = s.$getSelection();
    return !!s.$isRangeSelection(t) && (t.deleteLine(e), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.CONTROLLED_TEXT_INSERTION_COMMAND, e => {
    const t = s.$getSelection();
    if (!s.$isRangeSelection(t)) {
      return false;
    }
    if (typeof e == "string") {
      t.insertText(e);
    } else {
      const n = e.dataTransfer;
      if (n != null) {
        r.$insertDataTransferForPlainText(n, t);
      } else if (e = e.data) {
        t.insertText(e);
      }
    }
    return true;
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.REMOVE_TEXT_COMMAND, () => {
    const e = s.$getSelection();
    return !!s.$isRangeSelection(e) && (e.removeText(), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INSERT_LINE_BREAK_COMMAND, e => {
    const t = s.$getSelection();
    return !!s.$isRangeSelection(t) && (t.insertLineBreak(e), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INSERT_PARAGRAPH_COMMAND, () => {
    const e = s.$getSelection();
    return !!s.$isRangeSelection(e) && (e.insertLineBreak(), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_LEFT_COMMAND, e => {
    const t = s.$getSelection();
    if (!s.$isRangeSelection(t)) {
      return false;
    }
    const n = e.shiftKey;
    return !!i.$shouldOverrideDefaultCharacterSelection(t, true) && (e.preventDefault(), i.$moveCharacter(t, n, true), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_RIGHT_COMMAND, e => {
    const t = s.$getSelection();
    if (!s.$isRangeSelection(t)) {
      return false;
    }
    const n = e.shiftKey;
    return !!i.$shouldOverrideDefaultCharacterSelection(t, false) && (e.preventDefault(), i.$moveCharacter(t, n, false), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_BACKSPACE_COMMAND, t => {
    const n = s.$getSelection();
    return !!s.$isRangeSelection(n) && (t.preventDefault(), e.dispatchCommand(s.DELETE_CHARACTER_COMMAND, true));
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_DELETE_COMMAND, t => {
    const n = s.$getSelection();
    return !!s.$isRangeSelection(n) && (t.preventDefault(), e.dispatchCommand(s.DELETE_CHARACTER_COMMAND, false));
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ENTER_COMMAND, t => {
    const n = s.$getSelection();
    if (!s.$isRangeSelection(n)) {
      return false;
    }
    if (t !== null) {
      if ((d || c || f) && u) {
        return false;
      }
      t.preventDefault();
    }
    return e.dispatchCommand(s.INSERT_LINE_BREAK_COMMAND, false);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.COPY_COMMAND, t => {
    const n = s.$getSelection();
    return !!s.$isRangeSelection(n) && (h(t, e), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.CUT_COMMAND, t => {
    const n = s.$getSelection();
    return !!s.$isRangeSelection(n) && (function (e, t) {
      h(e, t);
      t.update(() => {
        let e = s.$getSelection();
        if (s.$isRangeSelection(e)) {
          e.removeText();
        }
      });
    }(t, e), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.PASTE_COMMAND, t => {
    const n = s.$getSelection();
    return !!s.$isRangeSelection(n) && (function (e, t) {
      e.preventDefault();
      t.update(() => {
        let t = s.$getSelection();
        let n = e instanceof InputEvent || e instanceof KeyboardEvent ? null : e.clipboardData;
        if (n != null && s.$isRangeSelection(t)) {
          r.$insertDataTransferForPlainText(n, t);
        }
      }, {
        tag: "paste"
      });
    }(t, e), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DROP_COMMAND, e => {
    const t = s.$getSelection();
    return !!s.$isRangeSelection(t) && (e.preventDefault(), true);
  }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DRAGSTART_COMMAND, e => {
    const t = s.$getSelection();
    return !!s.$isRangeSelection(t) && (e.preventDefault(), true);
  }, s.COMMAND_PRIORITY_EDITOR));
};
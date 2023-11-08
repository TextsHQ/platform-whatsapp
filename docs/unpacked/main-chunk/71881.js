Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultilinePlugin = function (e) {
  let {
    multiline: t
  } = e;
  const [n] = (0, r.useLexicalComposerContext)();
  const s = () => {
    if (t) {
      n.update(() => {
        var e;
        if (!((e = (0, a.$getRangeSelection)()) === null || e === undefined)) {
          e.insertParagraph();
        }
        n.dispatchCommand(i);
      });
    }
    return true;
  };
  (0, l.useLexicalCommandListener)(n, o.INSERT_LINE_BREAK_COMMAND, s);
  (0, l.useLexicalCommandListener)(n, o.INSERT_PARAGRAPH_COMMAND, s);
  return null;
};
exports.NEW_PARAGRAPH_COMMAND = undefined;
var o = require("./14544.js");
var r = require("./71671.js");
var a = require("./251922.js");
var l = require("./16188.js");
const i = (0, o.createCommand)();
exports.NEW_PARAGRAPH_COMMAND = i;
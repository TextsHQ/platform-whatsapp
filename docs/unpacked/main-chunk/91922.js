Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnEnterPlugin = function (e) {
  let {
    onEnter: t
  } = e;
  const [n] = (0, r.useLexicalComposerContext)();
  (0, a.useLexicalCommandListener)(n, o.KEY_ENTER_COMMAND, e => !(!e || e.ctrlKey || e.altKey || e.shiftKey) && (t == null || t(e), true), o.COMMAND_PRIORITY_NORMAL);
  return null;
};
var o = require("./14544.js");
var r = require("./71671.js");
var a = require("./16188.js");
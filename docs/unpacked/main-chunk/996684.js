Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnKeyDownPlugin = function (e) {
  let {
    onKeyDown: t
  } = e;
  const [n] = (0, o.useLexicalComposerContext)();
  (0, r.useLexicalKeydownEvent)(n, null, e => {
    if (!(t == null)) {
      t(e);
    }
  });
  return null;
};
var o = require("./71671.js");
var r = require("./16188.js");
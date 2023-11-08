Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLexicalWDSMenuController = function () {
  const [e] = (0, r.useLexicalComposerContext)();
  const t = (0, o.useRef)(null);
  (0, l.useLexicalCommandListener)(e, a.KEY_ARROW_UP_COMMAND, e => {
    var n;
    e.preventDefault();
    if (!((n = t.current) === null || n === undefined)) {
      n.goUp();
    }
    return false;
  });
  (0, l.useLexicalCommandListener)(e, a.KEY_ARROW_DOWN_COMMAND, () => {
    var e;
    if (!((e = t.current) === null || e === undefined)) {
      e.goDown();
    }
    return false;
  });
  (0, l.useLexicalCommandListener)(e, a.KEY_ENTER_COMMAND, () => {
    var e;
    if (!((e = t.current) === null || e === undefined)) {
      e.selectItem();
    }
    return false;
  });
  return t;
};
var a = require("../main-chunk/14544.js");
var r = require("../main-chunk/71671.js");
var o = require("../vendor/667294.js");
var l = require("../main-chunk/16188.js");
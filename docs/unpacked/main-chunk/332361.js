Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorInitialSelectionPlugin = function (e) {
  const {
    selectAll: t = false
  } = e;
  const [n] = (0, r.useLexicalComposerContext)();
  const s = (0, l.useRef)(true);
  const u = () => {
    if (s.current) {
      n.update(() => {
        var e;
        if (!((e = (0, o.$getRoot)()) === null || e === undefined)) {
          e.selectEnd();
        }
      });
      s.current = false;
    }
  };
  (0, i.useLexicalCommandListener)(n, o.FOCUS_COMMAND, () => {
    if (!t) {
      u();
    }
    return false;
  });
  (0, l.useEffect)(() => {
    if (t) {
      (0, a.selectAll)(n);
    } else if ((0, a.isFocused)(n)) {
      u();
    }
  }, [n]);
};
var o = require("./14544.js");
var r = require("./71671.js");
var a = require("./251922.js");
var l = require("../vendor/667294.js");
var i = require("./16188.js");
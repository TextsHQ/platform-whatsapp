var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLexicalFocusState = function (e) {
  const [t, n] = (0, l.useState)(() => (0, o.isFocused)(e));
  s(e, n);
  return t;
};
exports.useLexicalFocusStateListener = s;
var r = require("../main-chunk/14544.js");
var o = require("../main-chunk/251922.js");
var l = require("../vendor/667294.js");
var i = a(require("../app/637660.js"));
var u = a(require("../app/17533.js"));
function s(e, t) {
  const n = (0, i.default)(() => (0, o.isFocused)(e));
  const a = (0, u.default)(e => {
    if (n.current !== e) {
      n.current = e;
      t(e);
    }
  });
  (0, l.useEffect)(() => {
    a((0, o.isFocused)(e));
    const t = e.registerCommand(r.FOCUS_COMMAND, () => {
      a(true);
      return false;
    }, r.COMMAND_PRIORITY_HIGH);
    const n = e.registerCommand(r.BLUR_COMMAND, () => {
      a(false);
      return false;
    }, r.COMMAND_PRIORITY_HIGH);
    return () => {
      t();
      n();
    };
  }, [e, a]);
}
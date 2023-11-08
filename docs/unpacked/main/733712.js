var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/780549.js");
var o = require("../vendor/667294.js");
var l = a(require("../app/321201.js"));
function i(e, t) {
  const {
    tooltip: n
  } = e;
  const a = (0, o.useRef)(null);
  const i = (0, l.default)();
  (0, o.useEffect)(() => {
    if (i != null) {
      r.Cmd.openTooltip({
        menuOptions: n,
        uim: i
      }, e => {
        a.current = e;
      });
      return () => {
        r.Cmd.closeTooltip(i);
      };
    }
  }, []);
  const u = () => a.current;
  (0, o.useImperativeHandle)(t, () => ({
    getElement: u
  }));
  return null;
}
var u = (0, o.forwardRef)(i);
exports.default = u;
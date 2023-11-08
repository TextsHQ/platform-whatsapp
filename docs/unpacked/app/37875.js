var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./670983.js"));
var a = require("./780549.js");
var o = require("../vendor/667294.js");
var s = r(require("./321201.js"));
function l(e, t) {
  const {
    contextMenu: n
  } = e;
  const r = (0, s.default)();
  const l = (0, o.useRef)(null);
  (0, o.useEffect)(() => {
    a.Cmd.openContextMenu({
      menuOptions: n,
      uim: (0, i.default)(r, "uim")
    }, e => {
      l.current = e;
    });
    return () => {
      a.Cmd.closeContextMenu(r);
    };
  }, []);
  const u = () => l.current;
  (0, o.useImperativeHandle)(t, () => ({
    getElement: u
  }));
  return null;
}
var u = (0, o.forwardRef)(l);
exports.default = u;
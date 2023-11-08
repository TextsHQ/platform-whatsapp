var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const {
    value: n,
    set: a,
    setTrue: l,
    setFalse: i
  } = (0, o.default)(false);
  const u = (0, r.useCallback)(t => {
    l();
    if (e != null) {
      e(t);
    }
  }, [l, e]);
  const s = (0, r.useCallback)(e => {
    i();
    if (t != null) {
      t(e);
    }
  }, [i, t]);
  return {
    isHovered: n,
    onMouseEnter: u,
    onMouseLeave: s,
    setIsHovered: a
  };
};
var r = require("../vendor/667294.js");
var o = a(require("./505447.js"));
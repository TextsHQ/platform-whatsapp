var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNavigatableList = function (e) {
  const [t, n] = (0, l.useState)(null);
  const [a, u] = (0, l.useState)(new o.default(e));
  (0, l.useEffect)(() => {
    u(new o.default(e));
  }, [e]);
  (0, l.useEffect)(() => {
    n(a.getVal());
  }, [e, a]);
  (0, i.useListener)(a, "change", e => {
    let {
      current: t
    } = e;
    n(t);
  });
  return {
    activeItem: t,
    listSelection: a,
    NavigatableList: r.NavigatableList
  };
};
var r = require("./611644.js");
var o = a(require("../app/237889.js"));
var l = require("../vendor/667294.js");
var i = require("../app/808446.js");
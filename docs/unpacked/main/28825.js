Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const [e, t] = (0, a.useState)(r());
  function n() {
    t(r());
  }
  (0, a.useEffect)(() => {
    window.addEventListener("resize", n);
    return () => {
      window.removeEventListener("resize", n);
    };
  }, []);
  return e;
};
var a = require("../vendor/667294.js");
function r() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}
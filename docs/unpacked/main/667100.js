Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOnOutsideClick = r;
exports.useOnOutsideClickRef = function (e) {
  const t = (0, a.useRef)(null);
  r(t, e);
  return t;
};
var a = require("../vendor/667294.js");
function r(e, t) {
  const n = (0, a.useRef)(false);
  const [r, o] = (0, a.useState)(false);
  (0, a.useEffect)(() => {
    if (t == null || r) {
      return;
    }
    function a(t) {
      const n = e.current;
      return !!n && t instanceof Node && !n.contains(t);
    }
    function l(e) {
      if (e.isPrimary) {
        const t = a(e.target);
        n.current = t;
      }
    }
    function i(e) {
      if (!(e.pointerType !== "touch" && e.pointerType !== "pen")) {
        n.current = false;
      }
    }
    function u(e) {
      const r = a(e.target);
      if (n.current && r && e.isPrimary) {
        t(e, () => o(true));
      }
      n.current = false;
    }
    function s(e) {
      if (a(e.target)) {
        t(e, () => o(true));
      }
    }
    const c = ("PointerEvent" in window);
    if (c) {
      document.addEventListener("pointerdown", l);
      document.addEventListener("pointermove", i);
      document.addEventListener("pointerup", u);
    } else {
      document.addEventListener("click", s);
    }
    return () => {
      if (c) {
        document.removeEventListener("pointerdown", l);
        document.removeEventListener("pointermove", i);
        document.removeEventListener("pointerup", u);
      } else {
        document.removeEventListener("click", s);
      }
    };
  }, [t, e, r]);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  if (e.__playPromise) {
    return e.__playPromise;
  }
  const t = new Promise((t, n) => {
    function a(n) {
      e.removeEventListener("playing", a);
      e.removeEventListener("error", r);
      if (!(e.videoHeight && e.videoWidth)) {
        a(n);
      }
      delete e.__playPromise;
      t();
    }
    function r(t) {
      e.removeEventListener("playing", a);
      e.removeEventListener("error", r);
      delete e.__playPromise;
      n(t);
    }
    e.addEventListener("playing", a);
    e.addEventListener("error", r);
    const o = e.play();
    var l;
    if ((l = o) && typeof l.then == "function") {
      e.removeEventListener("playing", a);
      e.removeEventListener("error", r);
      o.then(() => {
        delete e.__playPromise;
        t();
      }).catch(t => {
        delete e.__playPromise;
        n(t);
      });
    }
  });
  e.__playPromise = t;
  return t;
};
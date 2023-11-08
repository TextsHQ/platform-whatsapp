Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  if (/\s\s+/.test(e)) {
    return e.replace(/\s\s+/g, e => {
      let n = "";
      for (let r = 0; r < e.length; r++) {
        n += t === true && e[r] === "\n" ? "\n" : " ";
      }
      return n;
    });
  } else {
    return e;
  }
};
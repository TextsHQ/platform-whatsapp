Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return (e || "").trim().toLowerCase().split("\n").reduce((e, t) => {
    if (!t.trim()) {
      return e;
    }
    const n = t.indexOf(":");
    const r = t.substr(0, n).trim();
    const i = t.substr(n + 1).trim().replace(/;$/, "");
    if (e[r]) {
      if (Array.isArray(e[r])) {
        e[r].push(i);
      } else {
        e[r] += `, ${i}`;
      }
    } else {
      e[r] = i;
    }
    return e;
  }, {});
};
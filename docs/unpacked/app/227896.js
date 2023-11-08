Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inflatePhoneRegex = function (e) {
  let t;
  t = typeof e == "number" ? String(e).split("").map(e => ".".repeat(Number(e))).join(")(") : e.replace(/;|[a-zA-Z]+/g, e => e === ";" ? ")(" : e.split("").map(e => {
    const t = e.charCodeAt(0);
    if (t >= 97) {
      return ".".repeat(t - 96) + "?";
    } else {
      return ".".repeat(t - 64);
    }
  }).join(")("));
  return `(${t})`;
};
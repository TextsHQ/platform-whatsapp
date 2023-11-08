Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = document.createElement("textarea");
  t.value = e;
  if (document.body) {
    document.body.appendChild(t);
  }
  t.focus();
  t.select();
  document.execCommand("copy");
  if (document.body) {
    document.body.removeChild(t);
  }
};
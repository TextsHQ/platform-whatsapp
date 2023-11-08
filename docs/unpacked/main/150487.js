Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = document.createElement("img");
  t.src = e;
  return {
    width: t.naturalWidth,
    height: t.naturalHeight
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  if (typeof e == "string") {
    return e;
  }
  if (!e) {
    return "Component";
  }
  return e.displayName || e.name || "Component";
};
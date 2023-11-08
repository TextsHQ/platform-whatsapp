Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return e.replace(/_|-/g, " ").replace(/[0-9]/g, e => e + " ").replace(/(?:^\w|[A-Z]|\b\w)/g, (e, t) => t === 0 ? e.toLowerCase() : e.toUpperCase()).replace(/\s+/g, "");
};
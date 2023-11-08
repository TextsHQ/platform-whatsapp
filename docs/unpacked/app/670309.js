Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = atob(e);
  let r = 0;
  for (let e = 0; e < n.length; e++) {
    const i = n.charCodeAt(e);
    r = ((r << 4) + (i >> 4)) % t;
    r = ((r << 4) + (i & 15)) % t;
  }
  return r;
};
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataURLtoBlob = function (e) {
  const t = e.match(a);
  if (!t) {
    throw (0, i.default)("invalid data URI");
  }
  const n = t[2] ? t[1] : "text/plain" + (t[3] || ";charset=US-ASCII");
  const r = !!t[4];
  const o = e.slice(t[0].length);
  let s;
  s = r ? atob(o) : decodeURIComponent(o);
  const l = new ArrayBuffer(s.length);
  const u = new Uint8Array(l);
  for (let e = 0; e < s.length; e += 1) {
    u[e] = s.charCodeAt(e);
  }
  return new Blob([u], {
    type: n
  });
};
var i = r(require("./556869.js"));
const a = /^data:((.*?)(;charset=.*?)?)(;base64)?,/;
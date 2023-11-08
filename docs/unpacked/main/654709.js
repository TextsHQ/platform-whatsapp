Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    productId: t,
    businessOwnerJid: n,
    msgT: o
  } = e;
  const l = (0, r.createWid)(n);
  if (!l) {
    return;
  }
  const i = a.CatalogCollection.get(l);
  if (!i) {
    return;
  }
  const u = i.productCollection.get(t);
  const s = i.msgProductCollection.get(t);
  if (s && u) {
    const e = o != null ? o : s.t;
    if (u.t >= e) {
      i.msgProductCollection.remove(s);
      return u;
    } else {
      return s;
    }
  }
  return u || s;
};
var a = require("../app/713464.js");
var r = require("../app/669050.js");
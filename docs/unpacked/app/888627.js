Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductListHeaderImageRejected = function (e, t) {
  var n;
  var i;
  var a;
  const o = r.MsgCollection.get(t);
  const s = o == null || (n = o.list) === null || n === undefined || (i = n.productListInfo) === null || i === undefined || (a = i.headerImage) === null || a === undefined ? undefined : a.productId;
  if (e.id === s && o != null) {
    o.productHeaderImageRejected = true;
  }
};
var r = require("./61113.js");
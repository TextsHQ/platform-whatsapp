Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductImageCollection = undefined;
var r = require("./392125.js");
var i = require("./727696.js");
class a extends r.BaseCollection {
  toArray() {
    return super.filter(e => e.old ? (this.remove(e), false) : e);
  }
}
exports.ProductImageCollection = a;
a.model = i.ProductImage;
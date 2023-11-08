var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickerCollectionImpl = exports.StickerCollection = exports.FETCH_STATE = undefined;
var i = require("./392125.js");
var a = require("./164832.js");
var o = r(require("./556869.js"));
exports.FETCH_STATE = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR"
};
class s extends i.BaseCollection {
  fetch() {
    throw (0, o.default)(`${this.constructor.name}.fetch is not implemented`);
  }
}
exports.StickerCollectionImpl = s;
s.model = a.StickerModel;
const l = new s();
exports.StickerCollection = l;
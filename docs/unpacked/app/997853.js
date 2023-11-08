var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CACHE_POLICY = exports.BaseCachePolicy = undefined;
var i = r(require("./395654.js"));
const a = {
  LOAD: "LOAD",
  NONE: "NONE"
};
exports.CACHE_POLICY = a;
class o extends i.default {
  constructor(e, t) {
    super();
    this.collection = e;
    this.id = t;
  }
  enableCaching() {}
  disableCaching() {}
}
exports.BaseCachePolicy = o;
o.policy = a.NONE;
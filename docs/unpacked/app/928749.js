var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/23279.js"));
var a = require("./997853.js");
class o extends a.BaseCachePolicy {
  constructor(e, t) {
    super(e, t.id);
    this._trigger = t.trigger || "all";
    this._delay = t.delay;
    this._saveToCache = (0, i.default)(this.saveToCache, this._delay);
  }
  saveToCache() {
    this.collection.saveToCache();
  }
  enableCaching() {
    this.listenTo(this.collection, this._trigger, this._saveToCache);
  }
  disableCaching() {
    this.stopListening(this.collection, this._trigger, this._saveToCache);
  }
}
exports.default = o;
o.policy = a.CACHE_POLICY.LOAD;
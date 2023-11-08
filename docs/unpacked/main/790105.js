var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiveUpdatesManager = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/73225.js");
var l = require("./919889.js");
const i = new class {
  _query(e) {
    return (0, r.default)(function* () {
      const t = yield (0, l.subscribeToLiveUpdates)(e);
      if (t != null) {
        return t.duration;
      }
      __LOG__(3)`[LiveUpdatesManager] Failed to subscribe to live updates`;
    })();
  }
  _subscribe(e, t) {
    var n = this;
    this.unsubscribe();
    this._timeoutId = self.setTimeout((0, r.default)(function* () {
      const t = yield n._query(e);
      if (t != null) {
        return n._subscribe(e, t);
      }
    }), t);
  }
  subscribe(e) {
    var t = this;
    return (0, r.default)(function* () {
      if (!(0, o.isNewsletterReactionEnabled)()) {
        return;
      }
      t.unsubscribe();
      t._wid = e;
      const n = yield t._query(e);
      if (n != null) {
        t._subscribe(e, n);
      }
    })();
  }
  unsubscribe() {
    self.clearTimeout(this._timeoutId);
  }
}();
exports.LiveUpdatesManager = i;
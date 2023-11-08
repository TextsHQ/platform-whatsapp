var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./392125.js");
var a = r(require("./667845.js"));
var o = r(require("./448812.js"));
var s = require("./39294.js");
class l extends i.BaseCollection {
  constructor() {
    super();
    this.listenTo(this, "add", this._handleAddRemove);
    this.listenTo(this, "remove", this._handleAddRemove);
    this.listenTo(this, "change:parentGroupId", this._handleChange);
  }
  _updateParent(e) {
    if (e) {
      (0, s.updateUnjoinedSubgroups)(e);
    }
  }
  _handleAddRemove(e) {
    const t = a.default.get(e.parentGroupId.toString());
    this._updateParent(t);
  }
  _handleChange(e, t, n) {
    const r = t != null ? a.default.get(t.toString()) : null;
    const i = n != null ? a.default.get(n.toString()) : null;
    this._updateParent(r);
    this._updateParent(i);
  }
}
l.model = o.default;
var u = new l();
exports.default = u;
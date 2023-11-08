var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelItemCollection = undefined;
var i = r(require("../vendor/82569.js"));
var a = require("./392125.js");
var o = require("./388536.js");
var s = r(require("./228002.js"));
class l extends a.BaseCollection {
  constructor() {
    super();
    this.listenTo(this, "add", this._handleAdd);
    this.listenTo(this, "remove", this._handleRemove);
  }
  _handleAdd(e) {
    this._handleChange(e, true);
  }
  _handleRemove(e) {
    this._handleChange(e, false);
  }
  _handleChange(e, t) {
    const n = (0, o.getParentCollection)(e.parentType).get(e.parentId);
    if (!n) {
      return;
    }
    const r = n.labels || [];
    if (t) {
      if (!r.includes(e.labelId)) {
        n.labels = [e.labelId].concat(r);
      }
    } else {
      n.labels = (0, i.default)(r, e.labelId);
    }
  }
}
exports.LabelItemCollection = l;
l.model = s.default;
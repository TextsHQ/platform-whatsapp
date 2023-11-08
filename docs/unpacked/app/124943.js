var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/23279.js"));
var a = r(require("./708093.js"));
var o = r(require("./762830.js"));
var s = r(require("./442690.js"));
var l = r(require("./932325.js"));
class u extends a.default {
  constructor(e) {
    super(e, arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {});
    this._debouncedSort = (0, i.default)(() => this.sort(), 1000);
    this.listenTo(this, "change:contact.name", this._debouncedSort);
    this.listenTo(l.default, "locale_change", this._debouncedSort);
  }
  delete() {
    this.forEach(function (e) {
      e.delete();
    });
    this.stopListening();
    this.reset();
  }
  ensureSorted() {
    this._debouncedSort.flush();
  }
  set(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!t.isParticipantCollectionAdd) {
      t.remove = true;
    }
    return super.set(e, t);
  }
  add(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    t.isParticipantCollectionAdd = true;
    return super.add(e, t);
  }
}
exports.default = u;
u.model = s.default;
u.comparator = o.default;
var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchQuery = exports.SEARCH_EVENT = undefined;
exports.isSearchResult = function (e) {
  if (e == null) {
    return false;
  }
  return Boolean(!e.isEmptyQuery() || e.hasFilter());
};
var r = a(require("../vendor/639693.js"));
var o = a(require("../vendor/944908.js"));
var l = a(require("../app/395654.js"));
const i = "SEARCH_EVENT";
exports.SEARCH_EVENT = i;
class u extends l.default {
  constructor() {
    super(...arguments);
    this.query = "";
    this.filter = {};
  }
  trimmed() {
    return this.query.trim();
  }
  highlighted() {
    const e = this.trimmed().toLowerCase().split(" ");
    return (0, o.default)((0, r.default)(e));
  }
  _isEmptySearchTerm() {
    return this.trimmed() === "" || !this.trimmed();
  }
  isEmptyQuery() {
    return this._isEmptySearchTerm();
  }
  hasFilter() {
    return this.hasKindFilter() || this.hasLabelFilter();
  }
  hasKindFilter() {
    return Boolean(this.filter.kind);
  }
  hasLabelFilter() {
    return Boolean(this.filter.label);
  }
  updateQuery(e) {
    const t = this.query;
    this.query = e;
    if (e.trim() !== t) {
      this.trigger(i);
    }
  }
  updateLabelQuery(e) {
    this.filter = e || {};
  }
  clear() {
    this.updateQuery("");
  }
  equals(e, t) {
    return this.query === e && this.filter.kind === (t == null ? undefined : t.kind) && this.filter.label === (t == null ? undefined : t.label);
  }
}
exports.SearchQuery = u;
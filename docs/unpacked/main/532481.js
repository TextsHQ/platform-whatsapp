Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactSearch = undefined;
var a = require("../app/177938.js");
var r = require("../app/660666.js");
var o = require("./608456.js");
var l = require("./281173.js");
var i = require("./900359.js");
class u extends l.Search {
  constructor() {
    super(...arguments);
    this.id = "ContactSearch";
  }
  queryFn(e, t) {
    const n = (0, i.normalizeString)(e);
    const l = (0, o.numberSearch)(n);
    const {
      results: u,
      pagination: s
    } = (0, i.filterPaginate)(a.ContactCollection.getModelsArray(), t => {
      const a = (0, r.getIsUser)(t);
      return !(e !== "" || !a) || a && t.searchMatch(n, l);
    }, t == null ? undefined : t.pagination);
    return {
      type: "contact",
      results: u.map(e => ({
        id: e.id.toString(),
        type: "contact",
        data: e
      })),
      pagination: s
    };
  }
}
exports.ContactSearch = u;
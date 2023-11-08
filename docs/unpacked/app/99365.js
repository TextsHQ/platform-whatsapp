var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessCategoriesResultCollectionImpl = exports.BusinessCategoriesResultCollection = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./392125.js");
var o = require("./724472.js");
var s = require("./431307.js");
class l extends a.BaseCollection {
  constructor() {
    super(...arguments);
    this.findImpl = function () {
      var e = (0, i.default)(function* (e) {
        const {
          categories: t,
          notABizId: n
        } = yield (0, o.queryBusinessCategories)(e);
        return {
          id: e,
          categories: t,
          notABizId: n
        };
      });
      return function () {
        return e.apply(this, arguments);
      };
    }();
  }
}
exports.BusinessCategoriesResultCollectionImpl = l;
l.model = s.BusinessCategoriesResult;
l.staleCollection = true;
const u = new l();
exports.BusinessCategoriesResultCollection = u;
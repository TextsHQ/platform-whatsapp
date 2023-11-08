Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessCategoriesResult = exports.BUSINESS_CATEGORY_EMPTY_STR_ID = undefined;
var r = require("./481173.js");
exports.BUSINESS_CATEGORY_EMPTY_STR_ID = "__empty_query__";
class i extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.categories = (0, r.prop)();
    this.notABizId = (0, r.prop)();
  }
  getCollection() {
    return require("./99365.js").BusinessCategoriesResultCollection;
  }
}
i.Proxy = "BusinessCategoriesResult";
const a = (0, r.defineModel)(i);
exports.BusinessCategoriesResult = a;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CTWASuggestionModel = undefined;
var a = require("../app/481173.js");
class r extends a.BaseModel {
  constructor() {
    super(...arguments);
    this.suggestion = (0, a.prop)();
  }
}
r.Proxy = "ctwaSuggestion";
const o = (0, a.defineModel)(r);
exports.CTWASuggestionModel = o;
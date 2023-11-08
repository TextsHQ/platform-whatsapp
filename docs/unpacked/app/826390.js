var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateButtonCollection = undefined;
var i = require("./392125.js");
var a = r(require("./947514.js"));
class o extends i.BaseCollection {}
exports.TemplateButtonCollection = o;
o.model = a.default;
o.comparator = (e, t) => e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
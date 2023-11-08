var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/132304.js"));
var a = require("./392125.js");
var o = r(require("./91276.js"));
class s extends a.BaseCollection {}
exports.default = s;
s.model = o.default;
s.comparator = (e, t) => e.id === t.id ? 0 : (0, i.default)(e.id, t.id) ? -1 : 1;
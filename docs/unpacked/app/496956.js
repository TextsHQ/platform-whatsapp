var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMeLid = function (e) {
  const t = (0, a.getMaybeMeLid)(false);
  if (t == null && e == null) {
    return;
  }
  if (t == null && e != null) {
    return void (0, a.setMeLid)(e);
  }
  if (t != null && e == null) {
    return;
  }
  if ((0, i.default)(t, "lid").equals(e)) {
    return;
  }
  (0, a.setMeLid)((0, i.default)(e, "nextLid"));
};
var i = r(require("./670983.js"));
var a = require("./459857.js");
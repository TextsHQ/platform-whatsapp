var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDataLink = function (e) {
  const t = document.createElement("a");
  const n = r.default.isBlob(e) || r.default.isData(e);
  t.href = n ? e : "";
  return t;
};
var r = a(require("../app/79291.js"));
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = a.ContactCollection.get(e);
  const r = n == null ? undefined : n.name;
  if (!r) {
    return true;
  }
  return r === t;
};
var a = require("../app/177938.js");
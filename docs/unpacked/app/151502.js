Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = r.ContactCollection.get(e);
  if (t) {
    return (0, i.getFormattedName)(t);
  } else {
    return (0, a.widToFormattedUser)(e);
  }
};
var r = require("./177938.js");
var i = require("./714574.js");
var a = require("./931019.js");
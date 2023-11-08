Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryBusinessCategories = function (e) {
  (0, r.qplPointProfileCatsView)("datasource_start");
  return (0, i.queryBusinessCategories)(e).then(e => {
    (0, r.qplPointProfileCatsView)("datasource_end");
    return e;
  });
};
var r = require("./650809.js");
var i = require("./331923.js");
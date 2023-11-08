var r = require("./819810.js");
function i(e) {
  return e.replace(/[^A-Za-z0-9]/g, function (e) {
    return r[e] || e;
  });
}
i.isLatin = function (e) {
  return e === i(e);
};
module.exports = i;
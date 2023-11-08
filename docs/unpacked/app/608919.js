var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFrequent = function (e) {
  const t = {};
  Object.keys(e).forEach(n => {
    t[n] = e[n].map(e => e.toString());
  });
  return Promise.reject((0, i.default)("unimplemented in MD mode"));
};
var i = r(require("./556869.js"));
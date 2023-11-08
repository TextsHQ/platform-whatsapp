var r = require("./530066.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const [e] = (0, i.useState)(() => new r());
  (0, i.useEffect)(() => () => e.abort(), [e]);
  return e.signal;
};
var i = require("../vendor/667294.js");
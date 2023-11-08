var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useQRScreenKillswitchValue = function (e) {
  const [t, n] = (0, a.useState)(null);
  const r = (0, o.default)();
  (0, a.useEffect)(() => {
    (0, i.getKillswitchValue)(e).then(e => {
      if (!r.aborted) {
        n(e);
      }
    });
  }, [e, r]);
  return t;
};
var i = require("./430252.js");
var a = require("../vendor/667294.js");
var o = r(require("./895851.js"));
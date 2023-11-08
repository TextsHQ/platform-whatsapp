exports.__esModule = true;
exports.useRefCallback = function (e) {
  var t = (0, r.useRef)(undefined);
  return (0, r.useCallback)(function (n) {
    if (t.current) {
      t.current();
      t.current = undefined;
    }
    if (n != null) {
      t.current = e(n);
    }
  }, [e]);
};
var r = require("./667294.js");
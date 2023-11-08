var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const [e] = (0, u.useAddListenerOnce)();
  const t = (0, s.default)();
  return (0, i.useCallback)(n => {
    if (o.Cmd.uiBusy) {
      e(o.Cmd, "ui_idle", n);
    } else {
      (0, l.documentFlushed)({
        signal: t
      }).then(() => {
        n();
      }).catch((0, r.catchAbort)(() => {}));
    }
  }, [e, t]);
};
var r = require("../app/898817.js");
var o = require("../app/780549.js");
var l = require("../app/493288.js");
var i = require("../vendor/667294.js");
var u = require("../app/808446.js");
var s = a(require("../app/895851.js"));
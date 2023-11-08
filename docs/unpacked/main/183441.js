var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t] = (0, u.default)(o.NUX.EPHEMERAL);
  let n = null;
  if (t) {
    if (e.isGroup && e.groupMetadata != null) {
      n = e.groupMetadata;
    } else if (e.isUser) {
      n = e;
    }
  }
  const a = () => {
    if (t) {
      (0, r.isEphemeralSettingOn)(e);
    }
    0;
  };
  (0, l.useEffect)(a, []);
  (0, i.useListener)(n, "change:ephemeralDuration", a);
};
var r = require("../app/738501.js");
require("../app/780549.js");
var o = require("../app/95589.js");
require("./298187.js");
var l = require("../vendor/667294.js");
var i = require("../app/808446.js");
var u = a(require("./157558.js"));
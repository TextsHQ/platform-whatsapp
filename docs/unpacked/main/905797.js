var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatViewCount = d;
exports.useWAWebLocalizedViewCount = function (e) {
  const [t, n] = (0, c.useMsgValues)(e, [i.getViewCount, i.getType]);
  return d(t, n);
};
var r = require("./949359.js");
var o = a(require("../app/932325.js"));
var l = require("../app/141729.js");
var i = require("../app/787742.js");
var u = require("../app/373070.js");
var s = require("../vendor/548360.js");
a(require("../vendor/667294.js"));
var c = require("./871210.js");
function d(e, t) {
  if (e == null || e === 0) {
    return null;
  }
  const n = o.default.d(e);
  if (e >= l.M) {
    return function (e, t, n) {
      switch (n) {
        case u.MSG_TYPE.PTT:
          return s.fbt._({
            "*": "{number} listeners",
            _1: "1 listener"
          }, [s.fbt._plural((0, r.roundToThousands)(e), "number", t)], {
            hk: "2x7slC"
          });
        default:
          return s.fbt._({
            "*": "{number} viewers",
            _1: "1 viewer"
          }, [s.fbt._plural((0, r.roundToThousands)(e), "number", t)], {
            hk: "XVLpr"
          });
      }
    }(e, n, t);
  } else {
    return function (e, t, n) {
      switch (n) {
        case u.MSG_TYPE.PTT:
          return s.fbt._({
            "*": "{number} listeners",
            _1: "1 listener"
          }, [s.fbt._plural((0, r.roundToThousands)(e), "number", t)], {
            hk: "4G0IPM"
          });
        default:
          return s.fbt._({
            "*": "{number} viewers",
            _1: "1 viewer"
          }, [s.fbt._plural((0, r.roundToThousands)(e), "number", t)], {
            hk: "32IK5H"
          });
      }
    }(e, n, t);
  }
}
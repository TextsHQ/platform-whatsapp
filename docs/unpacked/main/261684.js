var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    contact: t
  } = e;
  const [n, a] = (0, s.useState)(null);
  const [p] = (0, d.useContactValues)(t.id, [o.getTextStatusLastUpdateTime]);
  const m = (0, f.default)((0, r.default)(function* () {
    a(null);
    if ((0, i.receiveTextStatusEnabled)() && p === u.TEXT_STATUS_NOT_FETCHED) {
      try {
        yield (0, l.getTextStatus)(t.id);
      } catch (e) {
        a(e);
      }
    }
  }));
  (0, c.default)(m, [t.id, p]);
  return {
    error: n
  };
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/714574.js");
var l = require("./608652.js");
var i = require("../app/491805.js");
var u = require("../app/596328.js");
var s = require("../vendor/667294.js");
var c = a(require("../app/802145.js"));
var d = require("../app/379811.js");
var f = a(require("../app/17533.js"));
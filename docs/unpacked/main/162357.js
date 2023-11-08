var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    className: t,
    xstyle: n
  } = e;
  const a = (0, u.unproxy)(e.msg);
  if (!(0, r.isAdsAttributionEnabled)()) {
    return null;
  }
  if (!a.ctwaContext || a.isForwarded) {
    return null;
  }
  return c.default.createElement("div", {
    className: (0, l.classnamesConvertMeToStylexPlease)((0, d.default)(p, n), t)
  }, c.default.createElement(o.ChatMsgIcon, {
    className: (0, d.default)(f),
    height: 16,
    width: 16,
    viewBox: {
      x: 3,
      y: 2,
      width: 25,
      height: 25
    }
  }), c.default.createElement(i.MessageTopIndicatorText, null, s.fbt._("Message via ad", null, {
    hk: "KSGHC"
  })));
};
var r = require("../app/72696.js");
var o = require("./155734.js");
var l = require("../app/396574.js");
var i = require("./767448.js");
var u = require("../app/163139.js");
var s = require("../vendor/548360.js");
var c = a(require("../vendor/667294.js"));
var d = a(require("../app/156720.js"));
const f = {
  display: "l7jjieqr",
  color: "n0kqff35"
};
const p = {
  marginTop: "qt60bha0",
  marginEnd: "mw4yctpw",
  marginBottom: "inww9tbj",
  marginStart: "fooq7fky",
  height: "qst3sjxx",
  lineHeight: "idwf4z32"
};
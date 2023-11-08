var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilledIcon = function (e) {
  let {
    Icon: t,
    iconColor: n,
    backgroundColor: a
  } = e;
  return o.default.createElement(r.FlexColumn, {
    justify: "center",
    align: "center",
    xstyle: [l.background, l.defaultBackgroundColor, a]
  }, o.default.createElement(t, {
    xstyle: [l.defaultIconColor, n]
  }));
};
var r = require("../app/690495.js");
var o = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const l = {
  background: {
    width: "dyxdk6fi",
    height: "m3o1wsh7",
    borderTopStartRadius: "ig3kka7n",
    borderTopEndRadius: "a57u14ck",
    borderBottomEndRadius: "a4bg1r4i",
    borderBottomStartRadius: "h1a3x9ys"
  },
  defaultBackgroundColor: {
    backgroundColor: "kaocmfqa"
  },
  defaultIconColor: {
    color: "mbmsrsa8"
  }
};
var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    size: t = 48
  } = e;
  return r.default.createElement("div", {
    className: (0, o.default)(l.icon, e.transparent === true && l.transparent, e.disabled === true && l.disabled, e.xstyle),
    style: {
      height: t,
      width: t
    }
  }, e.children);
};
var r = a(require("../vendor/667294.js"));
var o = a(require("../app/156720.js"));
const l = {
  icon: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    color: "k17s6i4e",
    backgroundColor: "ju2rvew0",
    clipPath: "li9elm96"
  },
  disabled: {
    backgroundColor: "lmoo7qev"
  },
  transparent: {
    color: "svlsagor",
    backgroundColor: "j1wdo6yn"
  }
};
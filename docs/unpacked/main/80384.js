var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t,
    displayType: n,
    displayAuthor: a
  } = e;
  const m = (0, f.default)(r.ContactCollection, ["add", "remove", "change:name"], () => (0, i.formatRevokedMsg)(t));
  return d.default.createElement(s.default, {
    msg: t,
    displayType: n,
    displayAuthor: a
  }, d.default.createElement(o.FlexRow, null, d.default.createElement(l.default, {
    xstyle: p.icon
  }, d.default.createElement(c.RecalledIcon, null)), d.default.createElement(l.default, {
    xstyle: p.text
  }, d.default.createElement(u.default, {
    msg: t.unsafe(),
    theme: "placeholder"
  }, m))));
};
var r = require("../app/177938.js");
var o = require("../app/690495.js");
var l = a(require("../app/469733.js"));
var i = require("../app/386826.js");
var u = a(require("./19805.js"));
var s = a(require("./398685.js"));
var c = require("./542047.js");
var d = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var f = a(require("../app/524578.js"));
const p = {
  icon: {
    display: "l7jjieqr",
    color: "a6r0u4sv",
    minWidth: "mhp1pqu9",
    marginStart: "bx0vhl82",
    marginEnd: "ntr8esoy"
  },
  text: {
    marginTop: "kiiy14zj",
    marginBottom: "j4enbv94"
  }
};
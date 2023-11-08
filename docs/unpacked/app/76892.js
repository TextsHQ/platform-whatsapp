var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./196554.js"));
var a = require("./753233.js");
var o = r(require("./932325.js"));
var s = r(require("./79291.js"));
var l = require("../vendor/548360.js");
var u = r(require("../vendor/667294.js"));
exports.default = () => {
  const e = s.default.build("https://www.whatsapp.com/legal/small-business-terms/", {
    lg: o.default.getLocale()
  });
  return u.default.createElement(i.default, {
    href: e,
    onClick: t => {
      t.preventDefault();
      self.setTimeout(() => (0, a.openExternalLink)(e), 10);
    }
  }, l.fbt._("Learn more", null, {
    hk: "1rcCLt"
  }));
};
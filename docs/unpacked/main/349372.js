var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterPrivacyRow = function (e) {
  const {
    onClick: t,
    text: n,
    icon: a
  } = e;
  const i = l.default.createElement(o.TextSpan, {
    theme: "title"
  }, e.title);
  const u = l.default.createElement(o.TextDiv, {
    theme: "muted"
  }, n);
  return l.default.createElement(r.default, {
    onClick: t,
    icon: a,
    title: i,
    secondaryTitle: u
  });
};
var r = a(require("./306007.js"));
var o = require("../app/180519.js");
var l = a(require("../vendor/667294.js"));
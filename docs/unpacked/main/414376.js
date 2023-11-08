var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, i.useOptionalModelValues)(e.newsletterMetadata, ["size"]);
  if ((t == null ? undefined : t.size) == null) {
    return null;
  }
  const n = (0, o.getNewsletterFollowersText)(t.size);
  return l.default.createElement(r.default, {
    text: n,
    location: "title",
    ariaLabel: n
  });
};
var r = a(require("./753884.js"));
var o = require("./949359.js");
var l = a(require("../vendor/667294.js"));
var i = require("../app/655241.js");
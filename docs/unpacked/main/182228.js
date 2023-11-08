var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  let {
    chat: n
  } = e;
  const a = (0, r.getYouCreatedChannelWithNameText)((t = n.newsletterMetadata) === null || t === undefined ? undefined : t.name);
  return o.default.createElement("span", {
    title: a
  }, a);
};
var r = require("./949359.js");
var o = a(require("../vendor/667294.js"));
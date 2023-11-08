var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    newsletter: t
  } = e;
  const [, n] = (0, l.useFlow)(i.Followers);
  return o.default.createElement(r.default, {
    onCancel: () => n.pop(),
    newsletter: t
  });
};
var r = a(require("./947340.js"));
var o = a(require("../vendor/667294.js"));
var l = require("./839062.js");
const i = require("../vendor/76672.js").Mirrored(["Followers"]);
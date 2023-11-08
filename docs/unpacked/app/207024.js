var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDistribution = function () {
  let e = "unknown";
  e = "prod";
  return "web_prod";
};
exports.getLogUserAgent = function (e) {
  let t;
  let {
    appVersion: n,
    browser: r,
    device: i
  } = e;
  t = "Web/" + r;
  return `WhatsApp/${n} ${t} Device/${i}`;
};
r(require("./97359.js"));
r(require("./556869.js"));
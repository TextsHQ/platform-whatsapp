var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NuxBannerText = function (e) {
  let {
    subtitle: t,
    actionText: n
  } = e;
  const a = n != null ? l.default.createElement(r.default, {
    dataTab: o.TAB_ORDER.BUTTER_BAR,
    inline: true
  }, n) : null;
  return l.default.createElement(l.default.Fragment, null, t, " ", a);
};
var r = a(require("../app/3046.js"));
var o = require("../main-chunk/931109.js");
var l = a(require("../vendor/667294.js"));
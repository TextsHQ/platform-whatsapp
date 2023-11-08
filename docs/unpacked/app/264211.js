var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logDesktopUpsellQplEvent = c;
exports.useWAWebDesktopUpsellQplImpression = function (e, t) {
  const n = (0, u.default)(c);
  (0, l.useEffect)(() => {
    if (e) {
      n("impression", t);
    }
  }, [n, e, t]);
};
var i = r(require("../vendor/348926.js"));
var a = require("./15842.js");
var o = require("./264325.js");
var s = require("./316348.js");
var l = require("../vendor/667294.js");
var u = r(require("./829686.js"));
function c() {
  return d.apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e, t) {
    try {
      o.QPL.markerStart(s.QuickLogMarkerId.DESKTOP_UPSELL_LINK_DEVICE_METRICS, {
        annotations: {
          string: {
            context: e
          },
          bool: {
            showing_content_variation: t
          }
        }
      });
      yield o.QPL.genMarkerEnd(s.QuickLogMarkerId.DESKTOP_UPSELL_LINK_DEVICE_METRICS, a.QuickLogActionType.SUCCESS);
    } catch (e) {}
  })).apply(this, arguments);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvertiseTooltipImpressionWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./846377.js");
var o = require("./567897.js");
const l = (0, a.defineEvents)({
  AdvertiseTooltipImpression: [4024, {
    lwiEntryPoint: [1, r.LWI_ENTRY_POINT],
    tooltipAction: [2, o.TOOLTIP_ACTION]
  }, [1, 1, 1], "regular"]
});
exports.AdvertiseTooltipImpressionWamEvent = l;
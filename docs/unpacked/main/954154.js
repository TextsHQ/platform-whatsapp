Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, l.useABPropConfigValue)("pnh_cag_future_proof_banner");
  return (0, o.useState)(() => {
    var n;
    return ((n = e.groupMetadata) === null || n === undefined ? undefined : n.groupType) === a.GroupType.LINKED_ANNOUNCEMENT_GROUP && t && !(0, r.getPnhCagFutureproofBannerClosed)();
  });
};
var a = require("../app/862159.js");
var r = require("../app/757453.js");
var o = require("../vendor/667294.js");
var l = require("../app/325390.js");
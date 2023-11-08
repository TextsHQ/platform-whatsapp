Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("in-app-banner").version((0, i.inAppBannerCreateTable)(), [n("id"), t("type"), t("surfaceId"), t("title"), t("text"), t("actionText"), t("actionLink"), t("iconDescription"), t("iconLight"), t("iconDark"), t("backgroundColor"), t("highlightColor"), t("pacing"), t("ts")]).view(e => e);
};
exports.getInAppBannerTable = function () {
  return (0, r.getStorage)().table("in-app-banner");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");
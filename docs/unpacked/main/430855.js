Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityDailyTabMetricsType = exports.CommunityDailyHomeMetricsType = undefined;
exports.incrementCommunityHomeEvent = function (e, t) {
  const n = a.DailyAggregatedStatsCollection.gaddForToday();
  let o = n.communityHome[e.toString()];
  if (o == null) {
    o = {
      communityHomeGroupDiscoveries: 0,
      communityHomeGroupJoins: 0,
      communityHomeGroupNavigations: 0,
      communityHomeViews: 0
    };
    n.communityHome[e.toString()] = o;
  }
  switch (t) {
    case r.HOME_GROUP_DISCOVERIES:
      o.communityHomeGroupDiscoveries++;
      break;
    case r.HOME_GROUP_JOINS:
      o.communityHomeGroupJoins++;
      break;
    case r.HOME_GROUP_NAVIGATIONS:
      o.communityHomeGroupNavigations++;
      break;
    case r.HOME_VIEWS:
      o.communityHomeViews++;
  }
};
exports.incrementCommunityTabEvent = function (e) {
  const t = a.DailyAggregatedStatsCollection.gaddForToday();
  switch (e) {
    case o.TAB_GROUP_NAVIGATIONS:
      t.communityTabGroupNavigations++;
      break;
    case o.TAB_TO_HOME_VIEWS:
      t.communityTabToHomeViews++;
      break;
    case o.TAB_VIEWS:
      t.communityTabViews++;
      break;
    case o.TAB_VIEWS_VIA_CONTEXT_MENU:
      t.communityTabViewsViaContextMenu++;
      break;
    case o.NO_ACTION_TAB_VIEWS:
      t.communityNoActionTabViews++;
  }
};
var a = require("../app/355135.js");
const r = require("../vendor/76672.js").Mirrored(["HOME_GROUP_DISCOVERIES", "HOME_GROUP_JOINS", "HOME_GROUP_NAVIGATIONS", "HOME_VIEWS"]);
exports.CommunityDailyHomeMetricsType = r;
const o = require("../vendor/76672.js").Mirrored(["TAB_GROUP_NAVIGATIONS", "TAB_TO_HOME_VIEWS", "TAB_VIEWS", "TAB_VIEWS_VIA_CONTEXT_MENU", "NO_ACTION_TAB_VIEWS"]);
exports.CommunityDailyTabMetricsType = o;
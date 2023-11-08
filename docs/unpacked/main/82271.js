Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusItemViewWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("../app/684290.js");
var o = require("./902232.js");
var l = require("./633557.js");
var i = require("./122093.js");
var u = require("../app/913249.js");
var s = require("./815060.js");
const {
  BOOLEAN: c,
  INTEGER: d,
  STRING: f,
  TIMER: p
} = a.TYPES;
const m = (0, a.defineEvents)({
  StatusItemView: [1658, {
    isPosterBiz: [23, c],
    isPosterInAddressBook: [25, c],
    mediaType: [4, r.MEDIA_TYPE],
    psaCampaignId: [17, f],
    psaCampaignItemIndex: [18, d],
    psaLinkAvailable: [19, c],
    psaLinkClick: [22, c],
    psaLinkLoadTime: [21, p],
    psaLinkOpenResult: [20, o.PSA_LINK_OPEN_RESULT],
    statusItemImpressionCount: [14, d],
    statusItemIndex: [16, d],
    statusItemLength: [7, p],
    statusItemLoadTime: [5, p],
    statusItemReplied: [8, d],
    statusItemUnread: [9, c],
    statusItemViewCount: [10, d],
    statusItemViewResult: [3, l.STATUS_ITEM_VIEW_RESULT],
    statusItemViewTime: [6, p],
    statusRowIndex: [2, d],
    statusRowSection: [11, i.STATUS_ROW_SECTION],
    statusViewerSessionId: [1, d],
    urlStatusClicked: [26, u.URL_STATUS_CLICKED],
    urlStatusType: [27, s.URL_STATUS_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.StatusItemViewWamEvent = m;
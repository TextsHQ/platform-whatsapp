var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ctwaSuggestionCoolOffDataChanged = function (e, t) {
  i.CTWASuggestionCollection.updateTrackingCoolOffData(e, t);
  (0, f.updateCTWASuggestionTrackingCoolOffData)(e, t).catch(() => {
    __LOG__(4, undefined, new Error())`ctwaSuggestionCoolOffDataChanged: update failed`;
  });
};
exports.ctwaSuggestionInteracted = function (e, t) {
  const {
    id: n
  } = e;
  i.CTWASuggestionCollection.removeInteracted(n);
  if (t) {
    const {
      actionLink: t
    } = e;
    const n = (0, o.parseAPICmd)(t);
    if (n.resultType === "INVALID") {
      (0, c.openExternalLink)(t);
    } else if (n.resultType === "MANAGE_ADS") {
      (0, s.default)({
        cmdData: n,
        isExternal: false
      });
    } else {
      n.resultType;
      __LOG__(4, undefined, new Error())`ctwaSuggestionInteracted: unsupported deep link command ${n.resultType}`;
    }
  }
  (0, d.removeInteractedCTWASuggestion)(n).catch(() => {
    __LOG__(4, undefined, new Error())`ctwaSuggestionInteracted: remove failed`;
  });
};
exports.ctwaSuggestionNuxDataChanged = function (e, t) {
  i.CTWASuggestionCollection.updateTrackingNuxData(e, t);
  (0, p.updateCTWASuggestionTrackingNuxData)(e, t).catch(() => {
    __LOG__(4, undefined, new Error())`ctwaSuggestionNuxDataChanged: update failed`;
  });
};
exports.ctwaSuggestionShown = function (e) {
  if (!(0, l.adsActionBannersLoggingEnabled)()) {
    return;
  }
  const t = (0, o.parseAPICmd)(e.actionLink);
  if (t.resultType === "MANAGE_ADS") {
    (0, r.logManageAdsEntryPointImpression)(m.MANAGE_ADS_ENTRY_POINT.SMB_CHAT_LIST_CTWA_BANNER);
  } else {
    t.resultType;
  }
};
exports.loadedCTWASuggestions = function (e) {
  const t = Array.from(e).sort((e, t) => e.ts - t.ts).map(e => new u.CTWASuggestionModel({
    id: e.id,
    suggestion: e
  }));
  i.CTWASuggestionCollection.initializeFromCache(t);
};
exports.newCTWASuggestion = function (e) {
  const {
    id: t
  } = e;
  const n = new u.CTWASuggestionModel({
    id: t,
    suggestion: e
  });
  i.CTWASuggestionCollection.add(n);
};
exports.revokeCTWASuggestion = function (e) {
  i.CTWASuggestionCollection.removeInteracted(e.id);
};
var r = require("./445693.js");
var o = require("../app/127714.js");
var l = require("../app/72696.js");
var i = require("./353556.js");
var u = require("./87989.js");
var s = a(require("./200715.js"));
var c = require("../app/753233.js");
var d = require("./98547.js");
var f = require("./358737.js");
var p = require("./794966.js");
var m = require("./27224.js");
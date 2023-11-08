var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidCachedNewsletterSubscriberKeys = undefined;
exports.getCachedDirectoryNewsletterPage = function () {
  return p.apply(this, arguments);
};
exports.getCachedNewsletterSubscribers = function () {
  return d.apply(this, arguments);
};
exports.getCachedRecommendedNewsletters = function () {
  const e = i.userPrefsIdb.get(u.KEYS.WA_WEB_CACHED_RECOMMENDED_NEWSLETTERS);
  return (0, l.getTimedCacheItemValue)(e, (0, o.getRecommendedNewslettersRefreshInterval)());
};
exports.getNewsletterTabLastSeenTimestamp = function () {
  const e = s.default.get(u.MD_KEYS.NEWSLETTER_TAB_LAST_SEEN_TIMESTAMP);
  if (typeof e == "number") {
    return e;
  } else {
    return 0;
  }
};
exports.setCachedDirectoryNewsletterPage = function () {
  return m.apply(this, arguments);
};
exports.setCachedNewsletterSubscribers = function () {
  return f.apply(this, arguments);
};
exports.setCachedRecommendedNewsletters = function (e) {
  const t = (0, l.createTimedCacheItem)(e);
  return i.userPrefsIdb.set(u.KEYS.WA_WEB_CACHED_RECOMMENDED_NEWSLETTERS, t);
};
exports.setNewsletterTabLastSeenTimestamp = function (e) {
  s.default.set(u.MD_KEYS.NEWSLETTER_TAB_LAST_SEEN_TIMESTAMP, e);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/73225.js");
var l = require("./66261.js");
var i = require("../app/409847.js");
var u = require("../app/94872.js");
var s = a(require("../app/53575.js"));
const c = require("../vendor/76672.js").Mirrored(["FULL", "LIMITED"]);
function d() {
  return (d = (0, r.default)(function* (e) {
    const t = i.userPrefsIdb.get(u.KEYS.WA_WEB_CACHED_NEWSLETTERS_SUBSCRIBERS);
    const n = JSON.stringify(e);
    const a = t == null ? undefined : t.get(n);
    return (0, l.getTimedCacheItemValue)(a, (0, o.getNewsletterSubscriberListCacheRefreshInSeconds)() * 1000);
  })).apply(this, arguments);
}
function f() {
  return (f = (0, r.default)(function* (e, t) {
    var n;
    const a = (n = i.userPrefsIdb.get(u.KEYS.WA_WEB_CACHED_NEWSLETTERS_SUBSCRIBERS)) !== null && n !== undefined ? n : new Map();
    const r = JSON.stringify(e);
    const o = (0, l.createTimedCacheItem)(t);
    a.set(r, o);
    yield i.userPrefsIdb.set(u.KEYS.WA_WEB_CACHED_NEWSLETTERS_SUBSCRIBERS, a);
  })).apply(this, arguments);
}
function p() {
  return (p = (0, r.default)(function* (e) {
    const t = i.userPrefsIdb.get(u.KEYS.WA_WEB_CACHED_NEWSLETTER_DIRECTORY_PAGES);
    const n = JSON.stringify(e);
    const a = t == null ? undefined : t.get(n);
    return (0, l.getTimedCacheItemValue)(a, (0, o.getNewsletterDirectoryPageRefreshInterval)());
  })).apply(this, arguments);
}
function m() {
  return (m = (0, r.default)(function* (e, t) {
    var n;
    const a = (n = i.userPrefsIdb.get(u.KEYS.WA_WEB_CACHED_NEWSLETTER_DIRECTORY_PAGES)) !== null && n !== undefined ? n : new Map();
    const r = JSON.stringify(e);
    const o = (0, l.createTimedCacheItem)(t);
    a.set(r, o);
    yield i.userPrefsIdb.set(u.KEYS.WA_WEB_CACHED_NEWSLETTER_DIRECTORY_PAGES, a);
  })).apply(this, arguments);
}
exports.ValidCachedNewsletterSubscriberKeys = c;
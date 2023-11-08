Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterDirectorySortOrder = exports.NewsletterDirectorySortField = exports.NewsletterDirectoryFilterType = exports.DIRECTORY_SORT_FIELD_OPTIONS = undefined;
exports.getNewsletterDirectoryFilterFromListView = function (e) {
  switch (e) {
    case r.NewsletterDirectoryListView.Recommended:
      return s.Recommended;
    case r.NewsletterDirectoryListView.Trending:
      return s.Trending;
    case r.NewsletterDirectoryListView.Featured:
      return s.Featured;
    case r.NewsletterDirectoryListView.New:
      return s.New;
    case r.NewsletterDirectoryListView.Popular:
      return s.Popular;
  }
};
exports.getNewsletterDirectoryFilterTypesFromConfig = function (e) {
  return e.split(",").map(e => {
    const t = parseInt(e, 10);
    var n;
    if (Number.isSafeInteger(t) && (n = s.cast(t)) !== null && n !== undefined) {
      return n;
    } else {
      return null;
    }
  }).filter(Boolean);
};
exports.getNewsletterDirectoryListViewFromFilter = function (e) {
  switch (e) {
    case s.Recommended:
    case s.Country:
      return r.NewsletterDirectoryListView.Recommended;
    case s.Trending:
      return r.NewsletterDirectoryListView.Trending;
    case s.Featured:
      return r.NewsletterDirectoryListView.Featured;
    case s.New:
      return r.NewsletterDirectoryListView.New;
    case s.Popular:
      return r.NewsletterDirectoryListView.Popular;
  }
};
var r = require("./772787.js");
const i = require("../vendor/76672.js")({
  CreationTime: "creation_time",
  Subscribers: "subscribers"
});
exports.NewsletterDirectorySortField = i;
const a = require("../vendor/76672.js")({
  Ascending: "asc",
  Descending: "desc"
});
exports.NewsletterDirectorySortOrder = a;
const o = [{
  sortField: i.Subscribers,
  sortOrder: a.Descending
}, {
  sortField: i.CreationTime,
  sortOrder: a.Descending
}];
exports.DIRECTORY_SORT_FIELD_OPTIONS = o;
const s = require("../vendor/76672.js")({
  Recommended: 1,
  Trending: 2,
  Featured: 3,
  New: 4,
  Popular: 5,
  Country: 6
});
exports.NewsletterDirectoryFilterType = s;
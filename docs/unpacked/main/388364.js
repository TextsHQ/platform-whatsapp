var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHighlightedText = function (e) {
  return l(e, e => {
    var t;
    if ((t = e == null ? undefined : e.highlighted()) !== null && t !== undefined) {
      return t;
    } else {
      return [];
    }
  });
};
exports.useSearchQuery = l;
exports.useSearchText = function (e) {
  return l(e, e => {
    var t;
    if ((t = e == null ? undefined : e.trimmed()) !== null && t !== undefined) {
      return t;
    } else {
      return "";
    }
  });
};
var r = require("./668231.js");
var o = a(require("../app/524578.js"));
function l(e, t) {
  return (0, o.default)(e, r.SEARCH_EVENT, () => {
    if (!e) {
      __LOG__(3)`useSearchQuery: searchQuery is undefined`;
    }
    return t(e);
  });
}
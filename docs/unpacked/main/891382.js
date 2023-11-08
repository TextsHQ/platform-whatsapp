var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuSearchInput = function () {
  const e = (0, s.useMenu)();
  const t = e => {
    e.stopPropagation();
    e.preventDefault();
  };
  const n = function () {
    var t = (0, r.default)(function* (t) {
      const n = e.items;
      if (t === "") {
        return e.filterItems(null);
      }
      const a = Array.from(n.values()).map(e => e.current).filter(Boolean);
      const r = (0, i.filterPaginate)(a, e => (0, u.simpleSearch)(t, [e.searchCriteria]), {
        pageLength: a.length
      }).results;
      yield e.filterItems(r.map(e => e.id));
    });
    return function () {
      return t.apply(this, arguments);
    };
  }();
  return c.default.createElement(o.FlexRow, {
    padding: 8
  }, c.default.createElement(l.SearchInput, {
    focusOnMount: true,
    colorScheme: "darker",
    onEnter: () => {
      if (e.activeItemId != null) {
        e.selectItem(e.activeItemId);
      }
    },
    onClick: t,
    onFocus: t,
    onBlur: t,
    onSearch: n,
    placeholder: ""
  }));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/690495.js");
var l = require("./745170.js");
var i = require("./900359.js");
var u = require("../main-chunk/268755.js");
var s = require("./268541.js");
var c = a(require("../vendor/667294.js"));
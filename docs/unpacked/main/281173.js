var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = undefined;
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = a(require("../app/556869.js"));
exports.Search = class {
  constructor(e) {
    Object.assign(this, e);
    this.preloadData();
  }
  preloadData() {}
  queryFn() {
    throw (0, l.default)("Cannot create `Search` Model without `query` method");
  }
  query(e) {
    var t = this;
    let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (0, o.default)(function* () {
      if (t.maxPageLength != null) {
        if ((n == null ? undefined : n.pagination) == null) {
          n.pagination = {
            pageLength: t.maxPageLength,
            page: 0
          };
        } else {
          n.pagination.pageLength = t.maxPageLength;
        }
      }
      const a = yield t.queryFn(e, n);
      const o = (0, r.default)((0, r.default)({}, a), {}, {
        query: {
          searchText: e,
          options: n
        },
        pagination: null
      });
      if ((n == null ? undefined : n.pagination) != null) {
        let s;
        let c;
        let d;
        let f;
        let p;
        let m;
        if (a.pagination == null) {
          var l;
          s = (l = n.pagination.page) !== null && l !== undefined ? l : 0;
          c = n.pagination.pageLength;
          const e = s * c;
          const t = e + c;
          d = Math.ceil(o.results.length / c);
          f = s < d - 1;
          o.results = o.results.slice(e, t);
        } else {
          var i;
          var u;
          s = a.pagination.page;
          c = a.pagination.pageLength;
          d = (i = a.pagination) === null || i === undefined ? undefined : i.totalPages;
          f = (u = a.pagination) === null || u === undefined ? undefined : u.hasMoreResults;
        }
        if (f === true || d != null && d > s + 1) {
          p = () => t.query(e, (0, r.default)((0, r.default)({}, n), {}, {
            pagination: {
              pageLength: c,
              page: s + 1
            }
          }));
        }
        if (s > 0) {
          m = () => t.query(e, (0, r.default)((0, r.default)({}, n), {}, {
            pagination: {
              pageLength: c,
              page: s - 1
            }
          }));
        }
        o.pagination = {
          page: s,
          pageLength: c,
          totalPages: d,
          hasMoreResults: f,
          next: p,
          previous: m
        };
      }
      return o;
    })();
  }
};
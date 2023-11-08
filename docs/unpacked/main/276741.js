var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickerPackCollectionImpl = exports.StickerPackCollection = exports.PAGE_SIZE_POPUP = exports.PAGE_SIZE_COMPOSE_BOX = exports.PAGE_FETCH_STATE = undefined;
var r = a(require("../vendor/348926.js"));
var o = a(require("../vendor/498913.js"));
var l = require("../app/392125.js");
var i = require("../app/745482.js");
var u = a(require("../app/556869.js"));
exports.PAGE_SIZE_COMPOSE_BOX = 9;
exports.PAGE_SIZE_POPUP = 6;
const s = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR"
};
exports.PAGE_FETCH_STATE = s;
class c extends l.BaseCollection {
  constructor() {
    super();
    this.checksum = null;
    this._pageFetchRequests = {};
    this.pageFetchStates = {};
    this._handleChecksumChange = () => {
      Object.keys(this.pageFetchStates).forEach(e => this._resetFetchPageStateAndPromise(parseInt(e, 10)));
      this._resetRangeWithPlaceholders(0, this.length);
      this.fetchAt(0, false, true);
    };
    this.listenTo(this, "change:checksum", this._handleChecksumChange);
  }
  createPlaceholder(e) {
    return c.createPlaceholder(e);
  }
  preFetch() {
    var e = this;
    return (0, r.default)(function* () {
      yield e.fetchAt(0).then(() => Promise.all(e.filter(e => e.isFirstParty).map(e => e.stickers.fetch())));
    })();
  }
  fetchAt(e, t, n) {
    return this._fetchPageWithIndex(e, Boolean(t), Boolean(n));
  }
  hasFetchedData() {
    return Object.keys(this.pageFetchStates).some(e => this.pageFetchStates[parseInt(e, 10)] === s.SUCCESS);
  }
  isFetchingData() {
    return Object.keys(this.pageFetchStates).some(e => this.pageFetchStates[parseInt(e, 10)] === s.PENDING);
  }
  pageWithIndex(e) {
    return c.pageWithIndex(e);
  }
  reset() {
    this.setChecksum(null, {
      silent: true
    });
    Object.keys(this.pageFetchStates).forEach(e => this._resetFetchPageStateAndPromise(parseInt(e, 10)));
    return super.reset();
  }
  sync(e) {
    this.setChecksum(e);
  }
  setChecksum(e, t) {
    if (this.checksum !== e) {
      this.checksum = e;
      if (!(t == null ? undefined : t.silent)) {
        this.trigger("change:checksum", e);
      }
      return true;
    }
    return false;
  }
  _fetchPageWithIndex(e, t, n) {
    const a = this.pageWithIndex(e);
    return this._fetchPage(a, t, n);
  }
  _fetchPage() {
    return Promise.reject((0, u.default)("Sticker collection _fetchPage: not supported for MD"));
  }
  _resetRangeWithPlaceholders(e, t) {
    this._resetRange(e, t, (0, o.default)(t - e, t => c.createPlaceholder(e + t)));
  }
  _resetRange(e, t, n) {
    this._forEachInRange(e, t, (t, a) => {
      const r = n[a - e];
      if (t) {
        if (r) {
          if (t.id === r.id) {
            this.remove(t, {
              silent: true
            });
            this.add(r);
          } else {
            this.remove(t);
            this.add(r);
          }
        } else {
          let e = t;
          for (; e;) {
            this.remove(e);
            e = this.at(a);
          }
        }
      } else if (r) {
        this.add(r);
      }
    });
  }
  _forEachInRange(e, t, n) {
    for (let a = e; a < t; a++) {
      n(this.at(a), a);
    }
  }
  _resetFetchPageStateAndPromise(e) {
    if (e in this.pageFetchStates) {
      var t;
      if (this.pageFetchStates[e] === s.PENDING) {
        if (!((t = this._pageFetchRequests[e]) === null || t === undefined)) {
          t.controller.abort();
        }
      } else {
        this._unsetFetchPageStateAndPromise(e);
      }
    }
  }
  _unsetFetchPageState(e) {
    if (e in this.pageFetchStates) {
      delete this.pageFetchStates[e];
      this.trigger("change:pageFetchStates", e);
    }
  }
  _unsetFetchPageStateAndPromise(e) {
    delete this._pageFetchRequests[e];
    this._unsetFetchPageState(e);
  }
}
exports.StickerPackCollectionImpl = c;
c.model = i.StickerPackModel;
c.comparator = (e, t) => e.index < t.index ? -1 : e.index > t.index ? 1 : 0;
c.createPlaceholder = function (e) {
  return i.StickerPackModel.createPlaceholder({
    index: e,
    page: this.pageWithIndex(e)
  });
};
c.pageWithIndex = e => Math.floor(e / 9) + 1;
const d = new c();
exports.StickerPackCollection = d;
var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/311504.js"));
var a = require("./377380.js");
var o = require("./122393.js");
var s = require("./632157.js");
class l {
  static loadStatesFromDb() {
    var e = this;
    return (0, i.default)(function* () {
      (yield (0, a.getAllCollectionVersionsInTransaction)()).forEach(t => e.collectionStates.set(t.collection, {
        collection: t.collection,
        state: t.state,
        finiteFailureStartTime: t.finiteFailureStartTime
      }));
    })();
  }
  static persistToDb() {
    const e = [];
    this.collectionStates.forEach(t => e.push(t));
    __LOG__(2)`syncd: state machine persistToDb. states:`;
    e.forEach(e => {
      const t = e.finiteFailureStartTime == null ? "" : `(failure start: ${e.finiteFailureStartTime})`;
      __LOG__(2)`syncd: ${e.collection}: ${e.state} ${t}`;
    });
    return (0, a.bulkUpdateCollectionVersionInTransaction)(e);
  }
  static clean() {
    this.collectionStates = new Map();
  }
  static getCollectionState(e) {
    const t = this.collectionStates.get(e);
    if (t) {
      return t.state;
    } else {
      this.moveCollectionsToUpToDate([e]);
      return o.CollectionSyncState.UpToDate;
    }
  }
  static getCollectionsInStateDirty() {
    const e = [];
    this.collectionStates.forEach(t => {
      if (t.state === o.CollectionSyncState.Dirty) {
        e.push(t.collection);
      }
    });
    return e;
  }
  static getCollectionsInStateRetry() {
    const e = [];
    this.collectionStates.forEach(t => {
      if (t.state === o.CollectionSyncState.FailingFiniteRetry) {
        e.push(t.collection);
      }
    });
    return e;
  }
  static getCollectionsInStateFatal() {
    const e = [];
    this.collectionStates.forEach(t => {
      if (t.state === o.CollectionSyncState.Fatal) {
        e.push(t.collection);
      }
    });
    return e;
  }
  static getCollectionsInStateBlocked() {
    const e = [];
    this.collectionStates.forEach(t => {
      if (t.state === o.CollectionSyncState.Blocked) {
        e.push(t.collection);
      }
    });
    return e;
  }
  static moveCollectionsToUpToDate(e) {
    e.forEach(e => this.collectionStates.set(e, {
      collection: e,
      state: o.CollectionSyncState.UpToDate,
      finiteFailureStartTime: undefined
    }));
  }
  static moveCollectionsToDirty(e) {
    e.forEach(e => {
      var t;
      return this.collectionStates.set(e, {
        collection: e,
        state: o.CollectionSyncState.Dirty,
        finiteFailureStartTime: (t = this.collectionStates.get(e)) === null || t === undefined ? undefined : t.finiteFailureStartTime
      });
    });
  }
  static moveCollectionsToFiniteRetry(e) {
    e.forEach(e => {
      var t;
      var n;
      return this.collectionStates.set(e, {
        collection: e,
        state: o.CollectionSyncState.FailingFiniteRetry,
        finiteFailureStartTime: (t = (n = this.collectionStates.get(e)) === null || n === undefined ? undefined : n.finiteFailureStartTime) !== null && t !== undefined ? t : (0, s.unixTimeMs)()
      });
    });
  }
  static moveCollectionsToFatal(e) {
    e.forEach(e => this.collectionStates.set(e, {
      collection: e,
      state: o.CollectionSyncState.Fatal
    }));
  }
  static moveCollectionsToBlocked(e) {
    e.forEach(e => {
      var t;
      return this.collectionStates.set(e, {
        collection: e,
        state: o.CollectionSyncState.Blocked,
        finiteFailureStartTime: (t = this.collectionStates.get(e)) === null || t === undefined ? undefined : t.finiteFailureStartTime
      });
    });
  }
  static getExpiredCollections() {
    const e = [];
    this.collectionStates.forEach(t => {
      if (t.state === o.CollectionSyncState.FailingFiniteRetry) {
        let n;
        if (t.finiteFailureStartTime == null) {
          n = 1 / 0;
          __LOG__(3)`Collection ${t.collection} is in finite retry state with no failure start time`;
        } else {
          n = t.finiteFailureStartTime;
        }
        if (n + o.FINITE_FAILURE_EXPIRY_DURATION < (0, s.unixTimeMs)()) {
          e.push(t.collection);
        }
      }
    });
    return e;
  }
  static getCollectionMinFailureTime() {
    const e = Array.from(this.collectionStates.values()).filter(e => e.state === o.CollectionSyncState.FailingFiniteRetry).map(e => e.finiteFailureStartTime).filter(Boolean);
    if (e.length === 0) {
      return null;
    } else {
      return Math.min(...e);
    }
  }
}
exports.default = l;
l.collectionStates = new Map();
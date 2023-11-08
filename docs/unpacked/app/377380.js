var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkGetCollectionVersionsInTransaction = function (e) {
  return (0, a.runInTransaction)({
    CollectionVersionStore: true
  }, t => {
    let {
      CollectionVersionStore: n
    } = t;
    return n.bulkGet(e);
  });
};
exports.bulkSetCollectionSyncAttemptStartTimesInTransaction = function (e) {
  return (0, a.runInTransaction)({
    CollectionVersionStore: true
  }, function () {
    var t = (0, i.default)(function* (t) {
      let {
        CollectionVersionStore: n
      } = t;
      yield Promise.all((t => e.map(e => t.update(e.collection, {
        lastSyncAttemptStartTimes: e.lastSyncAttemptStartTimes
      })))(n));
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
exports.bulkUpdateCollectionVersionInTransaction = function (e) {
  return (0, a.runInTransaction)({
    CollectionVersionStore: true
  }, t => {
    let {
      CollectionVersionStore: n
    } = t;
    return n.bulkUpdate(e);
  });
};
exports.getAllCollectionVersionsInTransaction = function () {
  return (0, a.runInTransaction)({
    CollectionVersionStore: true
  }, e => {
    let {
      CollectionVersionStore: t
    } = e;
    return t.getAll();
  });
};
exports.getCollectionVersionInTransaction = function (e) {
  return (0, a.runInTransaction)({
    CollectionVersionStore: true
  }, t => {
    let {
      CollectionVersionStore: n
    } = t;
    return n.get(e);
  });
};
exports.getCollectionVersionLtHash = l;
exports.getCollectionVersionLtHashInTransaction = function (e) {
  return (0, a.runInTransaction)({
    CollectionVersionStore: true
  }, t => {
    let {
      CollectionVersionStore: n
    } = t;
    return l({
      CollectionVersionStore: n
    }, e);
  });
};
exports.getIsCollectionInMacMismatchFatalInTransaction = function (e) {
  return (0, a.runInTransaction)({
    CollectionVersionStore: true
  }, t => {
    let {
      CollectionVersionStore: n
    } = t;
    return n.get(e).then(e => e == null ? undefined : e.isCollectionInMacMismatchFatal);
  });
};
exports.updateCollectionVersionAndLtHashInTransaction = function (e, t, n) {
  return (0, a.runInTransaction)({
    CollectionVersionStore: true
  }, r => {
    let {
      CollectionVersionStore: i
    } = r;
    return i.update(e, {
      version: t,
      ltHash: n
    });
  });
};
exports.updateIsCollectionInMacMismatchFatalInTransaction = function (e) {
  return (0, a.runInTransaction)({
    CollectionVersionStore: true
  }, t => {
    let {
      CollectionVersionStore: n
    } = t;
    return n.update(e, {
      isCollectionInMacMismatchFatal: true
    });
  });
};
exports.updateLastSuccessfulSyncEndTimeInTransaction = function (e) {
  return (0, a.runInTransaction)({
    CollectionVersionStore: true
  }, t => {
    let {
      CollectionVersionStore: n
    } = t;
    return n.update(e, {
      lastSuccessfulSyncEndTime: (0, s.unixTimeMs)()
    });
  });
};
var i = r(require("../vendor/311504.js"));
var a = require("./819416.js");
var o = require("./570505.js");
var s = require("./632157.js");
function l(e, t) {
  let {
    CollectionVersionStore: n
  } = e;
  return n.get(t).then(e => {
    var t;
    if ((t = e == null ? undefined : e.ltHash) !== null && t !== undefined) {
      return t;
    } else {
      return new ArrayBuffer(o.KEY_LENGTH_BYTES);
    }
  });
}
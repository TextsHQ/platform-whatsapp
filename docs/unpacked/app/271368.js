var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ftsLightClient = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./561601.js");
var o = require("./755985.js");
var s = require("./965767.js");
var l = require("./766187.js");
let u = null;
function c() {
  return d.apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* () {
    if (!(u != null)) {
      u = yield (0, l.workerSafeSendAndReceive)("getFtsClientInstance");
    }
    return u;
  })).apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e) {
    var t;
    if ((0, o.isWorker)()) {
      return (0, a.getIndexV3Table)().bulkRemoveByIndex(["id"], e);
    }
    const n = (t = u) !== null && t !== undefined ? t : yield c();
    yield n.purge(e);
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* () {
    var e;
    if ((0, o.isWorker)()) {
      return Promise.resolve();
    }
    const t = (e = u) !== null && e !== undefined ? e : yield c();
    yield t.index();
  })).apply(this, arguments);
}
const _ = {
  purge: function () {
    return p.apply(this, arguments);
  },
  index: function () {
    return f.apply(this, arguments);
  },
  addToIndexingTable: function (e) {
    return (0, s.getFtsIndexingQueueTable)().bulkCreateOrReplace(e.map(e => ({
      id: e
    })));
  }
};
exports.ftsLightClient = _;
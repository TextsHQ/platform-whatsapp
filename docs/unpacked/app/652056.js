var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processHistoryMsgs = function () {
  return m.apply(this, arguments);
};
exports.processMsgs = function () {
  return g.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./466466.js");
var o = require("./634951.js");
var s = require("./34214.js");
var l = require("./922121.js");
function u() {
  return c.apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* (e, t, n) {
    let {
      addons: r,
      processor: i
    } = n;
    const {
      upsert: a,
      result: o
    } = yield i.beforeUpsert(r, t, e);
    return {
      upsertAddons: a,
      finishUpsert: () => i.afterUpsert(o, e)
    };
  })).apply(this, arguments);
}
function d() {
  return p.apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e, t, n, r, i) {
    var o;
    var s;
    var c;
    var d;
    if (!(i == null || (o = i.sendPerfReporter) === null || o === undefined)) {
      o.startSavedStage();
    }
    const p = yield Promise.all((0, l.groupAddonsByProcessor)(n).map(t => u(e, r, t)));
    const f = [].concat(...p.map(e => {
      let {
        upsertAddons: t
      } = e;
      return t;
    }));
    if (f.length) {
      yield a.addonBackendTable.bulkCreateOrReplace(t, f);
    }
    if (!(i == null || (s = i.sendPerfReporter) === null || s === undefined)) {
      s.postSavedStage();
    }
    if (!(i == null || (c = i.sendPerfReporter) === null || c === undefined)) {
      c.startRenderedStage();
    }
    yield Promise.all(p.map(e => {
      let {
        finishUpsert: t
      } = e;
      return t();
    }));
    if (!(i == null || (d = i.sendPerfReporter) === null || d === undefined)) {
      d.postRenderedStage();
    }
  })).apply(this, arguments);
}
function f() {
  return _.apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* (e) {
    if (e.length === 0) {
      return;
    }
    const {
      storeMessageOrphans: t
    } = require("./522794.js");
    yield t(e, e => (0, s.getAddonParentMsgKey)(e));
  })).apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e, t) {
    if (e.length === 0) {
      return;
    }
    const n = {
      mode: o.AddonProcessMode.OnlineReceive
    };
    const r = yield (0, s.queryAddonParentMsgs)(e);
    const {
      validAddons: i,
      orphans: a
    } = (0, l.collectValidAndOrphanAddons)(e, r);
    const u = Array.from((0, l.groupAddonsByTableMode)(i)).map(e => {
      let [i, a] = e;
      return d(n, i, a, r, t);
    });
    try {
      yield Promise.all([...u, f(a)]);
    } catch (e) {
      __LOG__(3, undefined, undefined, true, ["addons"])`process addon msgs: ${e}`;
      SEND_LOGS("processAddonMsgs", 1, "addons");
      throw e;
    }
  })).apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e) {
    if (e.length === 0) {
      return;
    }
    const t = {
      mode: o.AddonProcessMode.HistorySync
    };
    const n = new Map();
    const r = Array.from((0, l.groupAddonsByTableMode)(e)).map(e => {
      let [r, i] = e;
      return d(t, r, i, n);
    });
    try {
      yield Promise.all(r);
    } catch (e) {
      __LOG__(3, undefined, undefined, true, ["addons"])`process addon history msgs: ${e}`;
      SEND_LOGS("processAddonMsgs", 1, "addons");
      throw e;
    }
  })).apply(this, arguments);
}
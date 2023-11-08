var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./404021.js");
var o = require("./965259.js");
var s = r(require("./584666.js"));
var l = r(require("./556869.js"));
function u() {
  return (u = (0, i.default)(function* (e, t, n) {
    return (yield s.default.idb()).wam.add({
      key: e,
      buffer: n,
      channel: t
    }, e).catch(e => {
      __LOG__(2)`add failed: ${e}\n${e == null ? undefined : e.stack}`;
    });
  })).apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* (e, t, n) {
    let r = 0;
    try {
      r = yield s.default.idb().then(r => r.wam.update(e, {
        key: e,
        buffer: n,
        channel: t
      }));
    } catch (e) {
      __LOG__(2)`update failed: ${e}\n${e == null ? undefined : e.stack}`;
    }
    return r !== 0;
  })).apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e) {
    const t = {};
    try {
      yield s.default.idb().then(n => n.wam.where("channel").equals(e).modify((e, n) => {
        t[e.key] = e.buffer;
        delete n.value;
      }));
    } catch (e) {
      __LOG__(2)`deleteAll failed: ${e}\n${e == null ? undefined : e.stack}`;
    }
    return t;
  })).apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e) {
    let t = -1;
    try {
      const n = yield s.default.idb();
      yield n.transaction("rw", ["wam_meta"], (0, i.default)(function* () {
        if ((yield n.wam_meta.where("streamId").equals(e).count()) === 0) {
          yield n.wam_meta.add({
            streamId: e,
            seqNum: 1
          });
          t = 1;
        } else {
          yield n.wam_meta.where("streamId").equals(e).modify(function (e) {
            t = e.seqNum + 1;
            if (t >= 65536) {
              t = 1;
            }
            e.seqNum = t;
            return e;
          });
        }
      }));
    } catch (e) {
      __LOG__(2)`getNextSequenceNumberForStream failed: ${e}\n${e == null ? undefined : e.stack}`;
    }
    if (t === -1) {
      throw (0, l.default)(`could not get seq number for streamId ${e}`);
    }
    return t;
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e, t) {
    const n = yield s.default.idb();
    return n.transaction("rw", ["core_wam", "core_wam_meta"], () => n.core_wam.put(t).then(() => n.core_wam_meta.put(e)));
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* (e) {
    return (yield s.default.idb()).core_wam.where("streamId").equals(e).modify({
      finished: true
    });
  })).apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e) {
    return (yield s.default.idb()).core_wam_meta.get({
      streamId: e
    });
  })).apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* () {
    return (yield s.default.idb()).core_wam.toArray();
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* () {
    const e = yield s.default.idb();
    return e.transaction("rw", ["core_wam", "core_wam_meta"], () => e.core_wam.clear().then(() => e.core_wam_meta.clear()));
  })).apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e) {
    return (yield s.default.idb()).core_wam.delete(e);
  })).apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e) {
    const t = yield s.default.idb();
    return t.transaction("rw", ["worker_wam_events"], () => t.worker_wam_events.put(e));
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* () {
    const e = yield s.default.idb();
    try {
      yield e.transaction("rw", ["worker_wam_events"], (0, i.default)(function* () {
        yield e.worker_wam_events.limit(a.WAM_WORKER_DATA_BATCH_SIZE).modify((e, t) => {
          (0, o.processWorkerWamDataRow)(e);
          delete t.value;
        });
      }));
      return (yield e.worker_wam_events.count()) > 0;
    } catch (e) {
      __LOG__(2)`processWorkerWamData failed: ${e}\n${e == null ? undefined : e.stack}`;
      return false;
    }
  })).apply(this, arguments);
}
var v = {
  add: function () {
    return u.apply(this, arguments);
  },
  update: function () {
    return c.apply(this, arguments);
  },
  deleteAll: function () {
    return d.apply(this, arguments);
  },
  getNextSequenceNumberForStream: function () {
    return p.apply(this, arguments);
  },
  addCoreWamBuffer: function () {
    return f.apply(this, arguments);
  },
  finishAllCoreWamBuffers: function () {
    return _.apply(this, arguments);
  },
  getCoreWamStartingSequenceNumber: function () {
    return g.apply(this, arguments);
  },
  getAllCoreWamBuffers: function () {
    return m.apply(this, arguments);
  },
  nukeAllCoreWamBuffers: function () {
    return h.apply(this, arguments);
  },
  removeWamBufferByKey: function () {
    return y.apply(this, arguments);
  },
  storeWorkerWamData: function () {
    return E.apply(this, arguments);
  },
  processWorkerWamData: function () {
    return S.apply(this, arguments);
  },
  removePsMeta: function (e) {
    return s.default.idb().then(t => t.ps_meta.bulkDelete(e)).catch(e => {
      __LOG__(2)`removePsMeta failed: ${e}\n${e == null ? undefined : e.stack}`;
    });
  },
  getPsMeta: function () {
    return s.default.idb().then(e => e.ps_meta.toArray()).catch(e => {
      __LOG__(2)`getPsMeta failed: ${e}\n${e == null ? undefined : e.stack}`;
      return [];
    });
  },
  addPsMeta: function (e) {
    return s.default.idb().then(t => t.ps_meta.bulkPut(e)).catch(e => {
      __LOG__(2)`addPsMeta failed: ${e}\n${e == null ? undefined : e.stack}`;
    });
  },
  updatePsMeta: function (e) {
    return s.default.idb().then(t => t.ps_meta.update(e.key, e)).catch(e => {
      __LOG__(2)`updatePsMeta failed: ${e}\n${e == null ? undefined : e.stack}`;
    });
  },
  getPsToken: function () {
    return s.default.idb().then(e => e.ps_tokens.get("token")).catch(e => {
      __LOG__(2)`getPsToken failed: ${e}\n${e == null ? undefined : e.stack}`;
    });
  },
  savePsToken: function (e) {
    return s.default.idb().then(t => t.transaction("rw", ["ps_tokens"], () => t.ps_tokens.put(e))).catch(e => {
      __LOG__(2)`savePsToken failed: ${e}\n${e == null ? undefined : e.stack}`;
    });
  }
};
exports.default = v;
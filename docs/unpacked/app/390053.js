var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageProcessorCache = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./652204.js");
var s = require("./685639.js");
var l = require("./287461.js");
var u = require("./431291.js");
var c = require("./297031.js");
var d = require("./853441.js");
var p = require("./257235.js");
var f = require("./76256.js");
var _ = require("./22399.js");
var g = require("./326314.js");
var m = require("./971186.js");
var h = require("./669050.js");
const y = new class {
  constructor() {
    this.cache = [];
    this.checkpointQueue = new o.PromiseQueue();
    this.nextCheckpointIndex = 0;
    this.snapshotTimer = new s.ShiftTimer(() => {
      this.createSnapshot();
    });
    this.checkpointPromises = new Map();
    this.flushImmediately = false;
  }
  addMessages(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    this.cache.push(...e);
    const n = this._getOrCreateCurrentCheckpointPromise();
    if (t) {
      this.flushImmediately = true;
      this.createSnapshot();
      return n;
    } else {
      this.flushImmediately = false;
      if (this.cache.length >= (0, l.getABPropConfigValue)("web_message_processing_cache_size")) {
        this.createSnapshot();
        return n;
      } else {
        return n;
      }
    }
  }
  pullGroupInfoForChangedAddressingMode(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = new Map();
      e.forEach(e => {
        let {
          msg: t
        } = e;
        if (t != null && t.id.remote.isGroup()) {
          const e = t == null ? undefined : t.groupAddressingMode;
          if (e != null) {
            n.set(t.id.remote.toString(), e);
          }
        }
      });
      for (const [e, r] of n.entries()) {
        const n = (0, h.createWid)(e);
        if ((yield (0, u.getGroupAddressingMode)(n)) !== r) {
          if (!t.flushImmediately) {
            yield (0, c.markGroupParticipantStaleJob)(n);
          }
          yield (0, d.sendQueryGroup)(n);
        }
      }
    })();
  }
  _getOrCreateCurrentCheckpointPromise() {
    if (!this.checkpointPromises.has(this.nextCheckpointIndex)) {
      let e;
      let t = () => {};
      this.checkpointPromises.set(this.nextCheckpointIndex, {
        promise: new Promise((n, r) => {
          e = n;
          t = r;
        }),
        markCheckpointDone: n => {
          this.checkpointPromises.delete(this.nextCheckpointIndex);
          if (n == null) {
            e();
          } else {
            t(n);
          }
        }
      });
    }
    return (0, a.default)(this.checkpointPromises.get(this.nextCheckpointIndex), "this.checkpointPromises.get(this.nextCheckpointIndex)").promise;
  }
  _addToMessageTable(e) {
    const t = [];
    e.forEach(e => {
      const n = e.msg;
      if (n != null) {
        t.push(n);
      }
    });
    return (0, m.storeMsgs)(t);
  }
  createSnapshot() {
    var e;
    var t;
    var n = this;
    const r = this.cache;
    this.cache = [];
    if (this.snapshotTimer.isScheduled()) {
      this.snapshotTimer.cancel();
    }
    const a = this.nextCheckpointIndex;
    const o = a + r.length;
    this.nextCheckpointIndex = o;
    __LOG__(2)`[unify][message-cache]: creating snapshot for ${a} - ${o} messages`;
    if (r.length === 0) {
      return;
    }
    const s = (e = (t = this.checkpointPromises.get(a)) === null || t === undefined ? undefined : t.markCheckpointDone) !== null && e !== undefined ? e : () => {
      __LOG__(4, undefined, new Error(), true)`MessageProcessorCache: missing doneFn`;
      SEND_LOGS("message-cache-missing-doneFn");
    };
    const u = (0, f.getSignalProtocolStore)().generateSnapshot();
    this.checkpointQueue.enqueue((0, i.default)(function* () {
      try {
        yield n._addToMessageTable(r);
        __LOG__(2)`[unify][message-cache]: messages added to table for ${a} - ${o}`;
        if (u != null) {
          yield (0, _.getStorage)().lock(["session-store", "identity-store", "prekey-store", "senderkey-store"], (0, i.default)(function* () {
            yield Promise.all([g.waSignalStore.bulkPutSession(u.sessionUpdate), g.waSignalStore.bulkPutIdentityKeyWithRowId(u.identityUpdate), g.waSignalStore.bulkPutSenderKey(u.senderKeyUpdate), g.waSignalStore.bulkRemovePreKey(u.preKeyRemove), g.waSignalStore.bulkRemoveSession(u.sessionRemove), g.waSignalStore.bulkRemoveIdentity(u.identityRemove)]);
          }));
          __LOG__(2)`[unify][message-cache]: signal key store updated for ${a} - ${o}`;
        }
        yield (0, p.sendAggregateOfflineReceipts)(r);
        __LOG__(2)`[unify][message-cache]: aggregated receipts sent for ${a} - ${o}`;
      } catch (e) {
        return void s(e);
      }
      s();
    }));
    if ((0, l.getABPropConfigValue)("lid_groups_handle_server_addressing_mode")) {
      this.pullGroupInfoForChangedAddressingMode(r);
    }
  }
}();
exports.messageProcessorCache = y;
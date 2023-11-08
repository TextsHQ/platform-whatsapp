var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./527796.js");
var s = require("./614392.js");
var l = require("./122393.js");
var u = r(require("./517515.js"));
var c = require("./791381.js");
var d = require("./351053.js");
var p = require("./414240.js");
var f = require("./97858.js");
var _ = require("./732011.js");
var g = require("./685907.js");
var m = require("./61229.js");
var h = r(require("./634152.js"));
var y = require("./610876.js");
var E = require("./673168.js");
var S = require("./669050.js");
var v = require("./394629.js");
var T = r(require("./556869.js"));
class M extends s.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 4;
    this.action = l.Actions.UnarchiveChatsSetting;
  }
  decodeValue(e) {
    if (!e.binarySyncData) {
      if (!e.binarySyncAction) {
        __LOG__(4, undefined, new Error(), true, ["syncd"])`binarySyncAction should not be null`;
        SEND_LOGS("syncd binarySyncAction should not be null", 1, "syncd");
        throw (0, T.default)("binarySyncAction should not be null");
      }
      return (0, v.decodeProtobuf)(o.SyncActionValueSpec, e.binarySyncAction);
    }
    {
      const t = (0, v.decodeProtobuf)(o.SyncActionDataSpec, e.binarySyncData);
      if (t.value) {
        return t.value;
      }
    }
  }
  applyMutations(e, t) {
    var n = this;
    return (0, a.default)(function* () {
      u.default.updatePrimaryAllowsAllMutationsFlag("other mutation");
      const {
        setMutationsPendingToPersist: r
      } = t;
      if (e.length > 0) {
        const t = e[e.length - 1];
        try {
          let e = [];
          if (!(0, f.archiveV2Supported)()) {
            __LOG__(3)`archive setting sync: ArchiveV2 not supported yet`;
            return [{
              actionState: l.SyncActionState.Unsupported
            }];
          }
          if (t.operation === "set") {
            const {
              value: o
            } = t;
            const s = o.unarchiveChatsSetting;
            if ((s == null ? undefined : s.unarchiveChats) == null) {
              __LOG__(3)`archive setting sync: malformed mutation`;
              return [{
                actionState: l.SyncActionState.Malformed
              }];
            }
            const u = s.unarchiveChats;
            if (!(yield (0, E.getArchiveV2EnabledSetting)())) {
              yield (0, E.setArchiveV2EnabledSetting)(true);
              h.default.archive = (0, i.default)((0, i.default)({}, h.default.archive), {}, {
                enabled: true
              });
            }
            yield (0, E.setUnarchiveChatsSetting)(u);
            h.default.archive = (0, i.default)((0, i.default)({}, h.default.archive), {}, {
              classic: u
            });
            yield (0, _.getStorage)().lock(["message", "chat", "sync-actions", "active-message-ranges"], (0, a.default)(function* () {
              e = yield n.updateSideEffectOnChats(u, r);
              yield (0, m.getChatTable)().bulkCreateOrMerge(e);
            }));
            e.forEach(e => {
              const t = (0, S.createWid)(e.id);
              const n = d.ChatCollection.get(t);
              if (n) {
                n.archive = e.archive;
              }
            });
            return [{
              actionState: l.SyncActionState.Success
            }];
          }
          __LOG__(3)`archive setting sync: operation not supported`;
          return [{
            actionState: l.SyncActionState.Unsupported
          }];
        } catch (e) {
          return [{
            actionState: l.SyncActionState.Failed
          }];
        }
      }
      __LOG__(3)`archive setting sync: no mutations`;
      return [{
        actionState: l.SyncActionState.Failed
      }];
    })();
  }
  _handleSettingOn(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = [];
      self.performance.now();
      const r = (yield (0, m.getChatTable)().all()).filter(e => e.archive).map(e => e.id);
      const i = (yield Promise.all(r.map(e => (0, c.getActiveMessageRanges)(e)))).flat().filter(e => e.action === g.ActiveRangeAction.Archive).map(e => e.chatId);
      const a = r.filter(e => !i.includes(e));
      const o = (yield Promise.all(a.map(t => {
        const n = (0, S.createWid)(t);
        const r = JSON.stringify([l.Actions.Archive, n.toString({
          legacy: true
        })]);
        const i = e.find(e => e.index === r);
        if (i) {
          return Promise.resolve(i);
        } else {
          return (0, y.getSyncAction)(r);
        }
      }))).filter(e => {
        if (!e) {
          return false;
        }
        const n = t.decodeValue(e).archiveChatAction;
        return [l.SyncActionState.Success, l.SyncActionState.Orphan].includes(e.actionState) && (n == null ? undefined : n.archived) && n.messageRange;
      }).map(e => {
        const n = e && t.decodeValue(e).archiveChatAction;
        return [e ? JSON.parse(e.index)[1] : "", n == null ? undefined : n.messageRange];
      });
      const s = new Map(o);
      const u = Array.from(s.keys());
      const d = yield Promise.all(u.map(e => (0, p.constructMessageRange)((0, S.createWid)(e), false)));
      u.forEach((e, t) => {
        const r = d[t];
        const i = s.get(e);
        if (i) {
          const t = (0, p.compareMessageRanges)(r, i);
          if (t === p.MessageRangeEncloseType.RangeAEnclosesRangeB || t === p.MessageRangeEncloseType.RangesNotEnclosing) {
            const t = (0, S.createWid)(e);
            n.push({
              id: t.toString({
                legacy: false
              }),
              archive: false
            });
          } else {
            __LOG__(3, undefined, undefined, true)`Archive_Setting_Sync: Unsupported rangeEnclosedType ${t}`;
            SEND_LOGS("ArchiveSettingSync setting true rangeEnclosedType unsupported");
          }
        }
      });
      self.performance.now();
      n.length;
      return n;
    })();
  }
  _handleSettingOff(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = [];
      const r = yield (0, y.getSyncActionsRows)(["action"], [l.Actions.Archive]);
      const i = e.filter(e => e.action === l.Actions.Archive);
      const a = i.map(e => e.index);
      [...r.filter(e => !a.includes(e.index)), ...i].filter(e => {
        if (e.actionState === l.SyncActionState.Success) {
          var n;
          if ((n = t.decodeValue(e).archiveChatAction) === null || n === undefined) {
            return undefined;
          } else {
            return n.archived;
          }
        }
        return false;
      }).forEach(e => {
        const t = JSON.parse(e.index)[1];
        const r = (0, S.createWid)(t);
        n.push({
          id: r.toString({
            legacy: false
          }),
          archive: true
        });
      });
      n.length;
      return n;
    })();
  }
  updateSideEffectOnChats(e, t) {
    if (e) {
      return this._handleSettingOn(t);
    } else {
      return this._handleSettingOff(t);
    }
  }
}
const A = new M();
Object.freeze(A);
var b = A;
exports.default = b;
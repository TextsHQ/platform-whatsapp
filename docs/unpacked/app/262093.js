var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./679905.js");
var o = require("./614392.js");
var s = require("./24756.js");
var l = require("./122393.js");
var u = r(require("./97359.js"));
var c = r(require("./92010.js"));
var d = require("./800196.js");
var p = require("./916260.js");
var f = require("./25942.js");
class _ extends o.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 1;
    this.action = l.Actions.SettingPushName;
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      return yield Promise.all(e.map(function () {
        var e = (0, i.default)(function* (e) {
          try {
            if (e.operation === "set") {
              var t;
              const {
                value: r
              } = e;
              let i = (t = r.pushNameSetting) === null || t === undefined ? undefined : t.name;
              if (!i) {
                __LOG__(3)`push name sync: empty pushname`;
                (0, p.logCriticalBootstrapStageIfNecessary)(f.BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.PUSHNAME_INVALID);
                i = "";
              }
              (0, c.default)(i);
              (0, d.setPushnameLocally)(i);
              yield (0, p.logCriticalBootstrapStageIfNecessary)(f.BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.PUSHNAME_APPLIED);
              const a = (0, u.default)(require("./775410.js"));
              if (a.isSyncDCriticalDataSyncInProcess()) {
                yield a.setSyncDCriticalSynced();
                yield a.setSyncDCriticalDataSyncCompleted();
              }
              return Promise.resolve({
                actionState: l.SyncActionState.Success
              });
            }
            __LOG__(3)`push name sync: operation not supported`;
            return Promise.resolve({
              actionState: l.SyncActionState.Unsupported
            });
          } catch (e) {
            (0, p.logCriticalBootstrapStageIfNecessary)(f.BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.PUSHNAME_INVALID);
            return {
              actionState: l.SyncActionState.Failed
            };
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      }()));
    })();
  }
  getPushnameMutation(e, t) {
    return (0, s.buildPendingMutation)({
      collection: l.CollectionName.CriticalBlock,
      indexArgs: [],
      value: {
        pushNameSetting: {
          name: t
        }
      },
      version: this.version,
      operation: a.SyncdMutation$SyncdOperation.SET,
      timestamp: e,
      action: this.action
    });
  }
}
const g = new _();
Object.freeze(g);
var m = g;
exports.default = m;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./679905.js");
var o = require("./527796.js");
var s = require("./614392.js");
var l = require("./24756.js");
var u = require("./122393.js");
var c = require("./115927.js");
require("./409847.js");
var d = require("./865120.js");
require("./669050.js");
class p extends s.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 7;
    this.action = u.Actions.StatusPrivacy;
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      if (e.length !== 1) {
        __LOG__(4, undefined, new Error())`[syncd] unexpected mutation count ${e.length} for status privacy sync`;
        return e.map(() => ({
          actionState: u.SyncActionState.Malformed
        }));
      }
      e[0];
      (0, c.isStatusPostingEnabled)();
      return [{
        actionState: u.SyncActionState.Unsupported
      }];
    })();
  }
  getStatusPrivacySettingMutation(e, t, n) {
    let r;
    switch (e) {
      case d.StatusPrivacySettingType.Contact:
        r = o.SyncActionValue$StatusPrivacyAction$StatusDistributionMode.CONTACTS;
        break;
      case d.StatusPrivacySettingType.AllowList:
        r = o.SyncActionValue$StatusPrivacyAction$StatusDistributionMode.ALLOW_LIST;
        break;
      case d.StatusPrivacySettingType.DenyList:
        r = o.SyncActionValue$StatusPrivacyAction$StatusDistributionMode.DENY_LIST;
    }
    return (0, l.buildPendingMutation)({
      collection: u.CollectionName.RegularLow,
      indexArgs: [],
      operation: a.SyncdMutation$SyncdOperation.SET,
      version: this.version,
      timestamp: n,
      action: this.action,
      value: {
        statusPrivacy: {
          mode: r,
          userJid: t
        }
      }
    });
  }
}
const f = new p();
Object.freeze(f);
var _ = f;
exports.default = _;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./819416.js");
var s = require("./614392.js");
var l = require("./122393.js");
var u = require("./998667.js");
var c = require("./12643.js");
var d = require("./354458.js");
var p = require("./177938.js");
var f = require("./980237.js");
var _ = require("./775865.js");
var g = require("./714443.js");
var m = require("./447164.js");
var h = require("./416911.js");
var y = require("./622918.js");
var E = require("./487837.js");
var S = require("./669050.js");
class v extends s.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 2;
    this.action = l.Actions.Contact;
  }
  applyMutations(e) {
    let t = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    return (0, a.default)(function* () {
      const n = [];
      const r = [];
      const a = [];
      const s = (0, m.isLidStorageEnabled)();
      const v = yield Promise.all(e.map(e => {
        try {
          const o = e.indexParts;
          const [, u] = o;
          if (!u) {
            (0, y.throwInvalidActionIndex)();
          }
          const c = (0, S.createUserWid)(u);
          if (e.operation === "set") {
            var t;
            const r = e.value.contactAction;
            if (!r) {
              __LOG__(3)`contact sync: malformed mutation`;
              return {
                actionState: l.SyncActionState.Malformed
              };
            }
            if (c.isUser() && c.isLid() && !s) {
              return {
                actionState: l.SyncActionState.Skipped
              };
            }
            const o = {
              id: u,
              name: r.fullName || "",
              shortName: r.firstName || ((t = (0, f.getShortName)(r.fullName)) !== null && t !== undefined ? t : ""),
              type: "in",
              isAddressBookContact: 1,
              isContactSyncCompleted: 0
            };
            if (c.isUser() && !c.isLid() && r.lidJid != null) {
              const e = (0, S.createUserWid)(r.lidJid, "lid");
              a.push({
                lid: e,
                pn: (0, S.toUserWid)(c)
              });
            }
            n.push(o);
            p.ContactCollection.add((0, i.default)((0, i.default)({}, o), {}, {
              id: c
            }), {
              merge: true
            });
            (0, h.syncNewContact)(c);
            return {
              actionState: l.SyncActionState.Success
            };
          }
          if (e.operation === "remove") {
            if (c.isUser() && c.isLid() && !s) {
              return {
                actionState: l.SyncActionState.Skipped
              };
            }
            if ((0, d.isBotReceiveEnabled)() && c.isBot()) {
              return {
                actionState: l.SyncActionState.Skipped
              };
            }
            const e = p.ContactCollection.get(c);
            if (e != null) {
              e.setNotMyContact();
            }
            r.push(c);
            return {
              actionState: l.SyncActionState.Success
            };
          }
          __LOG__(3)`contact sync: operation not supported`;
          return {
            actionState: l.SyncActionState.Unsupported
          };
        } catch (e) {
          return {
            actionState: l.SyncActionState.Failed
          };
        }
      }));
      __LOG__(2)`syncd: handler after loop`;
      if (t === true) {
        yield (0, o.getDbImpls)().writeSyncdLog(l.CollectionName.CriticalUnblockLow, "handler after loop");
      }
      yield (0, c.createOrMergeAddressBookContacts)(n);
      __LOG__(2)`syncd: handler after save`;
      if (t === true) {
        yield (0, o.getDbImpls)().writeSyncdLog(l.CollectionName.CriticalUnblockLow, "handler after save");
      }
      (0, u.checkOrphanUserStatusMutes)(n.map(e => e.id));
      if (r.length > 0) {
        const e = r.map(e => e.isLid() ? (0, g.toLidUserJid)(e.user) : (0, g.toPhoneUserJid)(e.user));
        yield (0, c.setNotAddressBookContacts)(e);
        (0, _.clearStatusForRemovedContact)();
      }
      __LOG__(2)`syncd: before pn job`;
      if (t === true) {
        yield (0, o.getDbImpls)().writeSyncdLog(l.CollectionName.CriticalUnblockLow, "before pn job");
      }
      (0, E.createLidPnMappingsJob)(a, true);
      __LOG__(2)`syncd: handler done`;
      if (t === true) {
        yield (0, o.getDbImpls)().writeSyncdLog(l.CollectionName.CriticalUnblockLow, "handler done");
      }
      return v;
    })();
  }
}
const T = new v();
Object.freeze(T);
var M = T;
exports.default = M;
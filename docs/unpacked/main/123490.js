var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return p.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/122583.js");
var l = require("../app/328620.js");
var i = require("../app/984330.js");
var u = require("../app/351053.js");
var s = require("./650348.js");
var c = require("../app/390737.js");
var d = require("../vendor/548360.js");
var f = a(require("../vendor/667294.js"));
function p() {
  return (p = (0, r.default)(function* (e, t, n) {
    const a = (0, s.sendUnlinkSubgroups)({
      parentGroupId: e,
      subgroupIds: t,
      removeOrphanMembers: n
    });
    const p = (0, r.default)(function* () {
      try {
        const n = yield a;
        if (n.failedGroups.length > 0) {
          const t = n.failedGroups[0];
          if (t.error === 530) {
            var e;
            const n = (e = u.ChatCollection.get(t.jid)) === null || e === undefined ? undefined : e.formattedTitle;
            return new l.ActionType(n != null ? d.fbt._("\"{group-name}\" was successfully removed, but not all of its participants were removed from the community.", [d.fbt._param("group-name", n)], {
              hk: "3IpDes"
            }) : d.fbt._("The group was successfully removed, but not all of its participants were removed from the community.", null, {
              hk: "1dNLoU"
            }));
          }
        }
        return new l.ActionType(d.fbt._({
          "*": "Groups unlinked",
          _1: "Group unlinked"
        }, [d.fbt._plural(t.length)], {
          hk: "1t0149"
        }));
      } catch (e) {
        __LOG__(3, true, undefined, true)`Subgroup unlinking failed`;
        SEND_LOGS("subgroup-unlinking-failed");
        return new l.ActionType(d.fbt._("Subgroup could not be unlinked. Please try again.", null, {
          hk: "RMQfv"
        }));
      }
    })();
    const m = new l.ActionType(d.fbt._({
      "*": "Unlinking groups",
      _1: "Unlinking group"
    }, [d.fbt._plural(t.length)], {
      hk: "7pwnQ"
    }));
    c.ToastManager.open(f.default.createElement(l.ActionToast, {
      initialAction: m,
      pendingAction: p
    }));
    try {
      yield a;
    } catch (e) {
      (0, o.filteredCatch)(i.ServerStatusCodeError, () => {})(e);
    }
  })).apply(this, arguments);
}
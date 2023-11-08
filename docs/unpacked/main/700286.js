var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = h;
var r = a(require("../vendor/348926.js"));
var o = require("../app/122583.js");
var l = require("../app/328620.js");
var i = require("../app/984330.js");
var u = require("../app/714574.js");
var s = require("./650348.js");
var c = a(require("../app/99398.js"));
var d = require("../app/625786.js");
var f = require("../app/390737.js");
var p = require("../vendor/548360.js");
var m = a(require("../vendor/667294.js"));
function h() {
  return g.apply(this, arguments);
}
function g() {
  return (g = (0, r.default)(function* (e, t) {
    if (!c.default.online) {
      return void f.ToastManager.open(m.default.createElement(d.Toast, {
        msg: p.fbt._("This member was not removed from the community. Check your connection and try again.", null, {
          hk: "3qkAlM"
        })
      }));
    }
    const n = e.id;
    const a = t.id;
    const g = (0, s.sendRemoveFromCommunity)({
      parentGroupId: n,
      contactId: a
    });
    const E = p.fbt._("An error occurred while removing this member from the community.", null, {
      hk: "3XmhmS"
    });
    const v = (0, r.default)(function* () {
      try {
        if ((yield g).errorCode) {
          throw new l.ActionType(E, {
            actionText: "Retry",
            actionHandler: () => h(e, t)
          });
        }
        return new l.ActionType(p.fbt._("{contact-name} was removed from the community \"{community-name}\"", [p.fbt._param("contact-name", (0, u.getFormattedName)(t)), p.fbt._param("community-name", e.formattedTitle)], {
          hk: "24B2MU"
        }));
      } catch (e) {
        (0, o.filteredCatch)(i.ServerStatusCodeError, () => {
          throw new l.ActionType(E);
        })(e);
      }
    })();
    const _ = new l.ActionType(p.fbt._("Removing from community ...", null, {
      hk: "3o6aVK"
    }));
    f.ToastManager.open(m.default.createElement(l.ActionToast, {
      initialAction: _,
      pendingAction: v
    }));
    try {
      yield g;
    } catch (e) {
      (0, o.filteredCatch)(i.ServerStatusCodeError, () => {})(e);
    }
  })).apply(this, arguments);
}
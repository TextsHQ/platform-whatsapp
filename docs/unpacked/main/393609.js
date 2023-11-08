var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrowthLockedModal = function () {
  return d.default.createElement(l.default, {
    title: c.fbt._("Invite link unavailable", null, {
      hk: "3nV0kV"
    }),
    onLearnMoreClicked: p,
    onOkClicked: f
  }, c.fbt._("You can't join this group because the invite link is unavailable.", null, {
    hk: "4iPF7L"
  }));
};
exports.openGrowthLockedModal = function (e) {
  let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
  if (!e) {
    const e = c.fbt._("You can't view this group's invite link because you're not an admin.", null, {
      hk: "2GPPmB"
    });
    return void s.ToastManager.open(d.default.createElement(u.Toast, {
      msg: e
    }));
  }
  const n = t ? c.fbt._("Invite via link unavailable", null, {
    hk: "3qjGKv"
  }) : c.fbt._("Invite via link was unavailable", null, {
    hk: "4wgNSd"
  });
  const a = t ? c.fbt._("Invite via link is temporarily unavailable for this group.", null, {
    hk: "wdAra"
  }) : c.fbt._("Invite via link was temporarily unavailable for this group.", null, {
    hk: "txY0N"
  });
  i.ModalManager.open(d.default.createElement(l.default, {
    title: n,
    onLearnMoreClicked: p,
    onOkClicked: f
  }, a), {
    transition: "modal-flow"
  });
};
var r = require("../app/74810.js");
var o = require("../app/753233.js");
var l = a(require("./340721.js"));
var i = require("../app/114850.js");
var u = require("../app/625786.js");
var s = require("../app/390737.js");
var c = require("../vendor/548360.js");
var d = a(require("../vendor/667294.js"));
const f = () => {
  i.ModalManager.close();
};
const p = () => {
  (0, o.openExternalLink)((0, r.getGroupInviteGrowthLockedFaqUrl)());
};
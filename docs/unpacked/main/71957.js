var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseEphemeralSettingRow = _;
exports.EphemeralSettingRow = function (e) {
  const {
    chat: t,
    groupMetadata: n,
    onClick: a,
    testid: r
  } = e;
  if (n) {
    return h.default.createElement(E, {
      groupMetadata: n,
      onClick: a,
      testid: r
    });
  }
  return h.default.createElement(v, {
    chat: t,
    onClick: a,
    testid: r
  });
};
var r = require("../app/547979.js");
var o = a(require("./306007.js"));
var l = require("../app/103440.js");
var i = require("../app/123292.js");
var u = require("../app/896971.js");
var s = require("./741917.js");
var c = a(require("../app/395767.js"));
var d = require("../app/114850.js");
var f = require("../app/220584.js");
var p = require("../app/180519.js");
var m = require("../vendor/548360.js");
var h = a(require("../vendor/667294.js"));
var g = require("../app/655241.js");
function E(e) {
  var t;
  const {
    onClick: n,
    testid: a
  } = e;
  const r = (0, g.useModelValues)(e.groupMetadata, ["ephemeralDuration", "participants"]);
  const o = () => {
    d.ModalManager.close();
  };
  return h.default.createElement(_, {
    ephemeralDuration: (t = r.ephemeralDuration) !== null && t !== undefined ? t : 0,
    canChange: r.canSetEphemeralSetting(),
    onClick: () => {
      if (r.canSetEphemeralSetting()) {
        n();
      } else {
        d.ModalManager.open(h.default.createElement(l.ConfirmPopup, {
          onOK: o,
          okText: (0, c.default)("OK")
        }, m.fbt._("Only admins can change this setting.", null, {
          hk: "1NF1gS"
        })));
      }
    },
    testid: a,
    spaced: true
  });
}
function v(e) {
  const {
    onClick: t,
    testid: n
  } = e;
  const a = (0, g.useModelValues)(e.chat, ["contact", "ephemeralDuration"]);
  const o = () => {
    var e;
    if ((e = a.ephemeralDuration) !== null && e !== undefined) {
      return e;
    } else {
      return 0;
    }
  };
  const i = () => {
    a.contact.addPendingAction((0, r.unblockContact)(a.contact)).then(() => {
      t();
      d.ModalManager.close();
    }).catch(() => {});
  };
  const u = () => {
    d.ModalManager.close();
  };
  return h.default.createElement(_, {
    ephemeralDuration: o(),
    canChange: true,
    onClick: () => {
      if (a.contact.isContactBlocked) {
        d.ModalManager.open(h.default.createElement(l.ConfirmPopup, {
          onOK: i,
          okText: (0, c.default)("Unblock"),
          onCancel: u
        }, o() ? m.fbt._("You can't turn off disappearing messages for this chat unless you unblock this contact.", null, {
          hk: "o3zdA"
        }) : m.fbt._("You can't turn on disappearing messages for this chat unless you unblock this contact.", null, {
          hk: "1uAyoI"
        })));
      } else {
        t();
      }
    },
    testid: n
  });
}
function _(e) {
  const {
    ephemeralDuration: t,
    canChange: n,
    onClick: a,
    testid: r,
    spaced: l
  } = e;
  let c;
  c = t > 0 ? n ? (0, s.durationToLabel)(t) : (0, u.getDisappearingMessageExplanationStringKic)(t) : m.fbt._("Off", null, {
    hk: "2oC0wl"
  });
  const d = h.default.createElement(p.TextSpan, {
    theme: "title"
  }, m.fbt._("Disappearing messages", null, {
    hk: "384ocn"
  }));
  const g = h.default.createElement(p.TextDiv, {
    theme: "muted",
    testid: "chat-dm-settings-item-value"
  }, c);
  const E = h.default.createElement(i.DisappearingIcon, {
    color: f.SvgColorProp.SECONDARY,
    height: 20
  });
  return h.default.createElement(o.default, {
    side: "chevron",
    icon: E,
    onClick: a,
    title: d,
    secondaryTitle: g,
    testid: r,
    spaced: l
  });
}
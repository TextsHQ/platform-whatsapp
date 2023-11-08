var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, b.useModelValues)(e.chat, ["id", "isGroup", "muteExpiration", "archive", "isPSA", "isNewsletter"]);
  const n = (0, b.useModelValues)(e.mute, ["isMuted"]);
  const a = (0, b.useModelValues)(e.settings, ["showArchiveV2"]);
  const M = e => {
    if (t.isPSA) {
      l.Cmd.muteChatFromEntryPoint((0, h.unproxy)(t), e, 2);
    } else if ((0, d.isNewsletterEnabled)() && t.isNewsletter) {
      if (e) {
        (0, f.muteNewsletterAction)(t.id, {
          eventSurface: _.CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
        });
      } else {
        (0, p.unmuteNewsletterAction)(t.id, {
          eventSurface: _.CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
        });
      }
    } else {
      l.Cmd.muteChat((0, h.unproxy)(t), e);
    }
  };
  const S = () => {
    M(false);
    c.ModalManager.close();
  };
  const T = n.isMuted;
  const w = t.muteExpiration;
  if (t.archive && (0, s.archiveV2Supported)() && a.showArchiveV2) {
    return C.default.createElement(u.default, null, C.default.createElement(v.TextSpan, {
      theme: "muted",
      size: "16"
    }, y.fbt._("Archived chats are muted", null, {
      hk: "31ZVD"
    })));
  }
  const A = T ? () => {
    if (t.isNewsletter) {
      return S();
    }
    const e = t.isGroup ? y.fbt._("Unmute this group?", null, {
      hk: "2J5oUH"
    }) : y.fbt._("Unmute this chat?", null, {
      hk: "1NFVGz"
    });
    c.ModalManager.open(C.default.createElement(i.ConfirmPopup, {
      onOK: S,
      okText: y.fbt._("Unmute", null, {
        hk: "3KLKtD"
      }),
      onCancel: () => c.ModalManager.close(),
      cancelText: y.fbt._("Cancel", null, {
        hk: "H0gNq"
      })
    }, e));
  } : () => {
    M(true);
  };
  const P = t.isNewsletter ? y.fbt._("Muted", null, {
    hk: "GXoct"
  }) : y.fbt._("Muted", null, {
    hk: "26pmRf"
  });
  const O = T ? P : y.fbt._("Mute notifications", null, {
    hk: "2Fm15X"
  });
  let k;
  if (T && w && !t.isNewsletter) {
    const e = o.Clock.untilStr(w);
    k = C.default.createElement(v.TextDiv, {
      theme: "muted"
    }, e);
  }
  const D = C.default.createElement(E.Switch, {
    tabIndex: -1,
    ariaLabel: y.fbt._("Toggle mute notification setting", null, {
      hk: "2BosZt"
    }).toString(),
    checked: T,
    onChange: () => {}
  });
  const I = C.default.createElement(v.TextSpan, {
    theme: "title"
  }, O);
  const R = C.default.createElement(m.SettingsNotificationsIcon, {
    color: g.SvgColorProp.SECONDARY,
    height: 20
  });
  return C.default.createElement(r.default, {
    icon: R,
    testid: "block-mute",
    side: D,
    onClick: A,
    title: I,
    secondaryTitle: k,
    spaced: t.isGroup
  });
};
var r = a(require("./306007.js"));
var o = require("../app/63014.js");
var l = require("../app/780549.js");
var i = require("../app/103440.js");
var u = a(require("./831269.js"));
var s = require("../app/97858.js");
var c = require("../app/114850.js");
var d = require("../app/73225.js");
var f = require("../app/53680.js");
var p = require("../app/602940.js");
var m = require("./531067.js");
var h = require("../app/163139.js");
var g = require("../app/220584.js");
var E = require("../main-chunk/137506.js");
var v = require("../app/180519.js");
var _ = require("../app/874806.js");
var y = require("../vendor/548360.js");
var C = a(require("../vendor/667294.js"));
var b = require("../app/655241.js");
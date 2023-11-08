var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  let {
    chat: a
  } = e;
  const M = () => {
    var e;
    s.ModalManager.close();
    s.ModalManager.open(y.default.createElement(l.default, {
      supportTag: h.SUSPENDED_GROUP_SUPPORT_TAG,
      entityId: (e = a.groupMetadata) === null || e === undefined ? undefined : e.id.user
    }), {
      transition: "modal-flow"
    });
  };
  const S = _.fbt._("See group", null, {
    hk: "1Qvkul"
  });
  const T = _.fbt._("Delete group for me", null, {
    hk: "1YuwLE"
  });
  const w = y.default.createElement(u.FlexRow, {
    justify: "center",
    align: "center"
  }, y.default.createElement(d.default, {
    xstyle: C.mainPic
  }, y.default.createElement(c.PeopleIcon, {
    width: 60,
    height: 60
  })), y.default.createElement(f.SettingsBlockedIcon, {
    width: 36,
    height: 36,
    xstyle: C.badge
  }));
  const A = y.default.createElement(u.FlexRow, {
    justify: "center"
  }, y.default.createElement(g.TextHeader, {
    xstyle: E.uiMargin.all20,
    size: "18"
  }, _.fbt._("This group is no longer available", null, {
    hk: "3EUGQT"
  })));
  const P = y.default.createElement(u.FlexRow, {
    justify: "center"
  }, y.default.createElement(g.TextParagraph, null, _.fbt._("{=m0}", [_.fbt._implicitParam("=m0", y.default.createElement(i.ExternalLink, {
    href: (0, h.getSuspendedFaqUrl)()
  }, _.fbt._("Why am I seeing this?", null, {
    hk: "wPfFz"
  })))], {
    hk: "337q4n"
  })));
  const O = [];
  if (!((t = a.groupMetadata) === null || t === undefined ? undefined : t.terminated) && ((n = a.groupMetadata) === null || n === undefined ? undefined : n.participants.iAmAdmin())) {
    O.push({
      testId: "suspended-group-appeal-row",
      icon: p.SettingsHelpIcon,
      iconWidth: 33,
      content: _.fbt._("Request a review through {=m2}.", [_.fbt._implicitParam("=m2", y.default.createElement(r.default, {
        onClick: M
      }, _.fbt._("WhatsApp Support", null, {
        hk: "2SXCdk"
      })))], {
        hk: "2yn390"
      })
    });
  }
  O.push({
    testId: "suspended-group-operations-restricted-row",
    icon: f.SettingsBlockedIcon,
    content: _.fbt._("No messaging, adding members, downloading or forwarding media.", null, {
      hk: "3WxaN5"
    })
  });
  return y.default.createElement(o.ConfirmPopup, {
    onOK: () => {
      new m.SuspendedGroupDeleteWamEvent({
        deleteBtnSource: v.DELETE_SUSPENDED_GROUP_BTN.BOTTOM_SHEET_BTN
      }).commit();
      (0, h.openExitAndDeleteGroupModal)(a);
    },
    okText: T,
    cancelText: S,
    onCancel: () => s.ModalManager.close()
  }, w, A, P, y.default.createElement(u.FlexColumn, null, O.map(e => {
    const {
      testId: t,
      icon: n,
      iconWidth: a = 25,
      content: r
    } = e;
    return y.default.createElement(b, {
      key: t,
      testId: t,
      icon: y.default.createElement(n, {
        xstyle: C.icon,
        width: a
      }),
      content: r
    });
  })));
};
var r = a(require("../app/196554.js"));
var o = require("../app/103440.js");
var l = a(require("./695681.js"));
var i = require("../app/753233.js");
var u = require("../app/690495.js");
var s = require("../app/114850.js");
var c = require("./276012.js");
var d = a(require("./802211.js"));
var f = require("./290562.js");
var p = require("./72655.js");
var m = require("./12704.js");
var h = require("./983271.js");
var g = require("../app/180519.js");
var E = require("../app/676345.js");
var v = require("./395808.js");
var _ = require("../vendor/548360.js");
var y = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const C = {
  mainPic: {
    width: "gbtdc75f",
    height: "fe3aadhc",
    backgroundColor: "d3k9j7lx"
  },
  icon: {
    color: "l9o5wjph",
    display: "p357zi0d",
    justifyContent: "ac2vgrno",
    alignItems: "gndfcl4n",
    minWidth: "km15ofqp"
  },
  badge: {
    zIndex: "nbczt5ty",
    bottom: "o7b0nqza",
    end: "d4vkij7k",
    position: "g0rxnol2",
    marginEnd: "febin9tk",
    color: "mvxzr2tb",
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb",
    backgroundColor: "ur864smd"
  }
};
const b = e => {
  let {
    icon: t,
    content: n,
    testId: a
  } = e;
  return y.default.createElement(u.FlexRow, {
    justify: "center",
    align: "center",
    xstyle: [E.uiMargin.horiz15, E.uiMargin.top15],
    testid: a
  }, t, y.default.createElement(g.TextParagraph, null, n));
};
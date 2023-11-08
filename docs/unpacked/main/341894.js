var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    fromInvoke: t
  } = e;
  const n = (0, _.default)();
  const a = E.default.createElement(c.FlexItem, null, E.default.createElement(o.BotPictogramIcon, {
    width: 112,
    height: 112
  }));
  const C = g.fbt._("About AI messages", null, {
    hk: "2FcOPL"
  });
  const b = [{
    icon: E.default.createElement(d.LockIcon, {
      width: 24,
      height: 24,
      iconXstyle: y.icon
    }),
    title: t ? g.fbt._("Your conversation stays private", null, {
      hk: "4lBZEn"
    }) : g.fbt._("Your personal messages stay private", null, {
      hk: "4ybKo1"
    }),
    subtitle: t ? g.fbt._("When you mention @Meta AI, the AI generates a response. Meta can't read or listen to the other messages and calls in this chat, because they are end-to-end encrypted.", null, {
      hk: "1pmQu4"
    }) : g.fbt._("Meta may use your AI messages to improve AI quality. But your personal messages are never sent to Meta. They can't be read and remain end-to-end encrypted.", null, {
      hk: "2cLi5f"
    })
  }, {
    icon: E.default.createElement(r.AiSignalIcon, {
      width: 24,
      height: 24,
      iconXstyle: y.icon
    }),
    title: g.fbt._("What is generative AI?", null, {
      hk: "1LGPlr"
    }),
    subtitle: g.fbt._("Generative AI is a computer model that has learned data patterns, so people can use it to create something new like text or images.", null, {
      hk: "1K1lj1"
    })
  }];
  return E.default.createElement(i.ConfirmPopup, {
    okText: g.fbt._("Learn More", null, {
      hk: "9r116"
    }),
    onOK: () => {
      (0, u.openExternalLink)((0, s.getBotLearnMoreUrl)());
      p.ModalManager.close();
    },
    cancelText: g.fbt._("Close", null, {
      hk: "3m7RHw"
    }),
    onCancel: () => {
      p.ModalManager.close();
    },
    type: f.ModalTheme.Promote,
    ref: n
  }, E.default.createElement(c.FlexColumn, {
    align: "center",
    xstyle: [m.uiMargin.vertAuto, m.uiPadding.bottom16]
  }, a, E.default.createElement(l.Box, {
    xstyle: [y.headerText, m.uiMargin.horiz8, m.uiMargin.top16, m.uiMargin.bottom8]
  }, E.default.createElement(h.WDSTextLarge, {
    weight: "bold"
  }, C)), b.map((e, t) => {
    let {
      icon: n,
      title: a,
      subtitle: r
    } = e;
    return E.default.createElement(c.FlexRow, {
      key: t,
      className: (0, v.default)(m.uiMargin.horiz8, m.uiMargin.vert16)
    }, E.default.createElement(c.FlexItem, {
      xstyle: [m.uiPadding.horiz8, y.sectionIcon]
    }, n), E.default.createElement(c.FlexItem, {
      xstyle: [m.uiPadding.horiz8, y.sectionTitle]
    }, E.default.createElement(h.WDSTextTitle, null, a), E.default.createElement(h.WDSTextMuted, null, r)));
  })));
};
var r = require("./321545.js");
var o = require("./714033.js");
var l = require("../app/58972.js");
var i = require("../app/103440.js");
var u = require("../app/753233.js");
var s = require("../app/258105.js");
var c = require("../app/690495.js");
var d = require("./821063.js");
var f = require("../app/118612.js");
var p = require("../app/114850.js");
var m = require("../app/676345.js");
var h = require("../app/851488.js");
var g = require("../vendor/548360.js");
var E = a(require("../vendor/667294.js"));
var v = a(require("../app/156720.js"));
var _ = a(require("../app/401715.js"));
const y = {
  headerText: {
    textAlign: "qfejxiq4"
  },
  icon: {
    color: "kv0r5hzt"
  },
  sectionIcon: {
    width: "i94gqilv"
  },
  sectionTitle: {
    width: "rtue7xhx",
    lineHeight: "pvbam5uh"
  }
};
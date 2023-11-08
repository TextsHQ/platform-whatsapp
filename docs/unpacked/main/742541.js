var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterContactsReactionList = function (e) {
  let {
    reactionList: t,
    flatListController: n,
    isOffline: a,
    reactionSendersServerError: r,
    setReactionSendersServerError: l,
    retryFetchingReactionSenders: i
  } = e;
  const u = t.map(e => {
    let {
      reaction: t,
      contact: n
    } = e;
    return {
      itemKey: n.id.toJid(),
      contentKey: n.id.toJid(),
      contact: n,
      reaction: t,
      height: 52
    };
  });
  const s = g.default.createElement("div", {
    className: (0, E.default)([v.footer, f.uiPadding.all16])
  }, g.default.createElement(m.WDSTextSmall, {
    color: "secondary"
  }, (0, o.getIndividualReactionsFromContactsText)()));
  const c = g.default.createElement("div", {
    className: (0, E.default)([v.textBox, v.alignTextCenter, f.uiPadding.top16, f.uiPadding.bottom32, f.uiPadding.horiz32])
  }, g.default.createElement(m.WDSTextMuted, {
    color: "secondary"
  }, (0, o.getNoContactsHaveReactedYetText)()));
  if (a) {
    return g.default.createElement(y, {
      message: (0, o.getNoInternetConnectionText)(),
      onRetry: i
    });
  }
  if (r) {
    return g.default.createElement(y, {
      message: h.fbt._("Reactions didn't load. Please try again later.", null, {
        hk: "OUUHr"
      }),
      onRetry: () => {
        l(false);
        i();
      }
    });
  }
  return g.default.createElement(g.default.Fragment, null, t.length > 0 ? g.default.createElement(_, {
    data: u,
    direction: "vertical",
    renderItem: e => g.default.createElement(C, {
      contact: e.contact,
      reaction: e.reaction
    }),
    flatListController: n,
    className: (0, E.default)(f.uiPadding.bottom16)
  }) : c, s);
};
var r = a(require("../main-chunk/170206.js"));
var o = require("./949359.js");
var l = require("./811720.js");
var i = a(require("../app/395767.js"));
var u = require("./512938.js");
var s = require("../app/690495.js");
var c = require("../app/21645.js");
var d = require("./488015.js");
var f = require("../app/676345.js");
var p = require("../app/617425.js");
var m = require("../app/851488.js");
var h = require("../vendor/548360.js");
var g = a(require("../vendor/667294.js"));
var E = a(require("../app/156720.js"));
const v = {
  reactionCellImage: {
    width: "kh81x8bz",
    height: "s1eh3h38"
  },
  textBox: {
    boxSizing: "cm280p3y",
    width: "ln8gz9je"
  },
  footer: {
    borderTopColor: "eo2nzah0",
    borderTopStyle: "d1poss59",
    borderTopWidth: "gofg5ll1"
  },
  alignTextCenter: {
    textAlign: "qfejxiq4"
  }
};
const _ = (0, u.FlatListFactory)();
function y(e) {
  let {
    message: t,
    onRetry: n
  } = e;
  return g.default.createElement(l.Empty, {
    text: t,
    testid: "contact-reactions-newsletter-error",
    xstyle: f.uiPadding.vert40
  }, g.default.createElement("div", {
    className: (0, E.default)(f.uiMargin.top5)
  }, g.default.createElement(p.WDSButtonSimplified, {
    onClick: n,
    testid: "contact-reactions-error-try-again"
  }, (0, i.default)("Try again"))));
}
function C(e) {
  let {
    contact: t,
    reaction: n
  } = e;
  return g.default.createElement(r.default, {
    primary: g.default.createElement(c.Name, {
      contact: t,
      titlify: true,
      ellipsify: true,
      showLabel: true
    }),
    image: g.default.createElement(s.FlexRow, {
      align: "center",
      justify: "start",
      xstyle: [v.reactionCellImage, f.uiPadding.start16, f.uiPadding.end16]
    }, g.default.createElement(d.ReactionCellProfileImageThumb, {
      profileImageId: t.id,
      reactionText: n
    })),
    theme: "newsletter-reaction-by-contact",
    customImage: true
  });
}
var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    onNewCommunity: t
  } = e;
  const n = (0, l.communityExamplesEnabled)();
  const a = g.fbt._("Stay connected with a community", null, {
    hk: "1VgFJr"
  });
  const r = g.fbt._("Communities bring members together in topic-based groups, and make it easy to get admin announcements. Any community you're added to will appear here.", null, {
    hk: "qMUfJ"
  });
  const y = n ? E.default.createElement(o.SeeExamplesLink, null) : null;
  const C = n ? null : E.default.createElement(s.ExternalLink, {
    href: (0, c.getAboutCommunitiesFaqUrl)()
  }, (0, d.default)("Learn more"));
  return E.default.createElement(u.default, {
    theme: "full-height"
  }, E.default.createElement(f.FlexColumn, {
    align: "center",
    xstyle: v.full
  }, E.default.createElement(f.FlexColumn, {
    align: "center",
    xstyle: h.uiMargin.vertAuto
  }, E.default.createElement(p.default, {
    xstyle: v.emptyTabBadge
  }, E.default.createElement(i.CommunityTabNuxIcon, null)), E.default.createElement(m.TextHeader, {
    level: "2",
    xstyle: v.emptyTabHeader,
    size: "24",
    color: "dark",
    weight: "bold"
  }, a), E.default.createElement(f.FlexColumn, {
    align: "center",
    xstyle: [v.section, h.uiMargin.top8]
  }, E.default.createElement(m.TextParagraph, {
    color: "primary",
    xstyle: v.emptyTabV2Description
  }, r, " ", C), y)), E.default.createElement(f.FlexColumn, {
    xstyle: h.uiPadding.bottom32
  }, (0, l.communitiesEnabled)() && (0, l.communitiesCreationEnabled)() ? E.default.createElement(_, {
    onNewCommunity: t
  }) : null)));
};
var r = a(require("../app/692629.js"));
var o = require("./648678.js");
var l = require("../app/174834.js");
var i = require("./386506.js");
var u = a(require("./969358.js"));
var s = require("../app/753233.js");
var c = require("../app/258105.js");
var d = a(require("../app/395767.js"));
var f = require("../app/690495.js");
var p = a(require("../app/469733.js"));
var m = require("../app/180519.js");
var h = require("../app/676345.js");
var g = require("../vendor/548360.js");
var E = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const v = {
  emptyTabHeader: {
    marginTop: "rek1qe2c",
    marginEnd: "k1jo73ug",
    marginBottom: "mpdn4nr2",
    marginStart: "isfiuinm",
    maxWidth: "dknb6df3",
    textAlign: "qfejxiq4",
    lineHeight: "a4ywakfo"
  },
  section: {
    display: "p357zi0d",
    marginTop: "mnhq3yws",
    marginEnd: "k1jo73ug",
    marginBottom: "mpdn4nr2",
    marginStart: "isfiuinm",
    maxWidth: "dknb6df3"
  },
  emptyTabV2Description: {
    textAlign: "qfejxiq4",
    lineHeight: "e4qy2s3t"
  },
  full: {
    height: "ppled2lx"
  },
  emptyTabBadge: {
    marginTop: "mnhq3yws"
  },
  emptyTabButton: {
    marginBottom: "ndlvrqf7"
  }
};
function _(e) {
  let {
    onNewCommunity: t
  } = e;
  return E.default.createElement(f.FlexRow, {
    align: "center",
    justify: "center"
  }, E.default.createElement(p.default, {
    xstyle: v.emptyTabButton
  }, E.default.createElement(r.default, {
    testid: "start-a-community",
    type: "primary",
    onClick: t
  }, g.fbt._("Start your community", null, {
    hk: "3NU8my"
  }))));
}
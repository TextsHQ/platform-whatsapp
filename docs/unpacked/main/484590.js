var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionSection = function (e) {
  const {
    option: t,
    result: {
      percentageOfAll: n,
      votes: a,
      isCurrentLeader: l
    },
    isPollFromMe: h,
    links: g,
    flatListController: E,
    onViewAllVotes: v
  } = e;
  const _ = a.length - 5;
  let y = a.length;
  if (v) {
    y = _ === 1 ? a.length : 5;
  }
  const C = a.slice(0, y);
  return d.default.createElement(o.default, {
    theme: "no-padding"
  }, d.default.createElement(i.OptionMetadataRow, {
    name: t.name,
    isCurrentLeader: l,
    percentage: n * 100,
    voteCount: a.length,
    isPollFromMe: h,
    links: g
  }), C.length > 0 && d.default.createElement("div", {
    className: (0, f.default)(p.voteListContainer)
  }, d.default.createElement(m, {
    flatListController: E,
    direction: "vertical",
    data: C.map(e => ({
      itemKey: e.id,
      vote: e
    })),
    renderItem: e => {
      let {
        vote: t
      } = e;
      return d.default.createElement(u.VoterRow, {
        vote: t
      });
    },
    defaultItemHeight: 68
  }), a.length > 5 && v != null && y < a.length && d.default.createElement("div", {
    className: (0, f.default)(p.viewAllContainer, s.uiPadding.top8, s.uiPadding.bottom8, s.uiPadding.horiz6)
  }, d.default.createElement(r.default, {
    type: "simplified",
    xstyle: p.seeAllVotesButton,
    onClick: () => {
      v();
    }
  }, c.fbt._({
    "*": "See all ({leftover_votes_details_view} more)",
    _1: "See all (1 more)"
  }, [c.fbt._plural(_, "leftover_votes_details_view")], {
    hk: "4o0GdK"
  })))));
};
var r = a(require("../app/692629.js"));
var o = a(require("./969358.js"));
var l = require("./512938.js");
var i = require("./449401.js");
var u = require("./744093.js");
var s = require("../app/676345.js");
var c = require("../vendor/548360.js");
var d = a(require("../vendor/667294.js"));
var f = a(require("../app/156720.js"));
const p = {
  voteListContainer: {
    borderTop: "swyb62mu"
  },
  viewAllContainer: {
    display: "p357zi0d",
    marginStart: "kozhillt"
  },
  seeAllVotesButton: {
    fontSize: "enbbiyaj",
    textTransform: "d30du0rx",
    fontWeight: "m1e7cby3",
    lineHeight: "erpdyial"
  }
};
const m = (0, l.FlatListFactory)();
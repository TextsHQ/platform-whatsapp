var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAddDescriptionButtonText = function () {
  return p.fbt._("Add description", null, {
    hk: "1Wcnp3"
  });
};
exports.getChannelInboxFilterLabel = function (e) {
  switch (e) {
    case i.NewsletterInboxFilterTypes.MyChannels:
      return p.fbt._("My Channels", null, {
        hk: "1NNpBC"
      });
    case i.NewsletterInboxFilterTypes.All:
      return p.fbt._("All", null, {
        hk: "4ejfn8"
      });
    case i.NewsletterInboxFilterTypes.Unread:
      return p.fbt._("Unread", null, {
        hk: "4aVUCt"
      });
  }
};
exports.getChannelLinkInformationText = function () {
  return p.fbt._("People with this link can view and follow your channel.", null, {
    hk: "4CzMUR"
  });
};
exports.getCopyLinkText = function () {
  return p.fbt._("Copy link", null, {
    hk: "3jv6Pn"
  });
};
exports.getCreateChannelText = function () {
  return p.fbt._("Create channel", null, {
    hk: "36xzDL"
  });
};
exports.getFindNewslettersText = h;
exports.getFirstFiveThousandChannelFollowersSearchingText = function () {
  return p.fbt._("You can only search for your first 5000 followers.", null, {
    hk: "2sNjlp"
  });
};
exports.getFirstFiveThousandChannelFollowersText = function () {
  return p.fbt._("You can only view your first 5000 followers.", null, {
    hk: "322z9N"
  });
};
exports.getFollowedChannelsSearchHeader = function () {
  return p.fbt._("Followed channels", null, {
    hk: "F21yy"
  });
};
exports.getFollowersOnlyInYourContactsText = function () {
  return p.fbt._("You can only view individual followers who are contacts.", null, {
    hk: "3NqqET"
  });
};
exports.getForwardNewsletterLinkText = function () {
  return p.fbt._("Forward", null, {
    hk: "46L1pk"
  });
};
exports.getGeosuspendedInYourCountryString = function () {
  return g.apply(this, arguments);
};
exports.getIndividualReactionsFromContactsText = function () {
  return p.fbt._("You can only view individual reactions from contacts.", null, {
    hk: "3l54kS"
  });
};
exports.getInviteViaLinkText = function () {
  return p.fbt._("Invite via link", null, {
    hk: "1Q4bFB"
  });
};
exports.getMeContactLabelChannelText = function () {
  return p.fbt._("You're not visible to followers", null, {
    hk: "3Dk1tC"
  });
};
exports.getNewsletterAlertsDrawerTitle = function () {
  return p.fbt._("Channel alerts", null, {
    hk: "41LVuo"
  });
};
exports.getNewsletterDirectoryFilterLabel = function (e) {
  switch (e) {
    case s.NewsletterDirectoryFilterType.Recommended:
      return p.fbt._("Explore", null, {
        hk: "1OsRDp"
      });
    case s.NewsletterDirectoryFilterType.Trending:
      return p.fbt._("Most Active", null, {
        hk: "17kVHF"
      });
    case s.NewsletterDirectoryFilterType.Featured:
      return p.fbt._("Featured", null, {
        hk: "2EMJeW"
      });
    case s.NewsletterDirectoryFilterType.New:
      return p.fbt._("New", null, {
        hk: "1xVhMB"
      });
    case s.NewsletterDirectoryFilterType.Popular:
      return p.fbt._("Popular", null, {
        hk: "3BFKn0"
      });
    case s.NewsletterDirectoryFilterType.Country:
      return p.fbt._("Region", null, {
        hk: "3PUg9j"
      });
  }
};
exports.getNewsletterDirectorySortOptionLabel = function (e) {
  switch (e) {
    case s.NewsletterDirectorySortField.CreationTime:
      return p.fbt._("Recently Added", null, {
        hk: "4EKnmX"
      });
    case s.NewsletterDirectorySortField.Subscribers:
      return p.fbt._("Popularity", null, {
        hk: "2lXv1d"
      });
  }
};
exports.getNewsletterFollowersText = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  if (e >= 10 ** 6) {
    return p.fbt._({
      "*": "{number} followers",
      _1: "1 follower"
    }, [p.fbt._plural(t ? e : m(e), "number", (0, d.isLargeNumberFormatEnabled)() && !t ? c.default.d(e) : c.default.n(e))], {
      hk: "uFYvQ"
    });
  }
  return p.fbt._({
    "*": "{number} followers",
    _1: "1 follower"
  }, [p.fbt._plural(t ? e : m(e), "number", (0, d.isLargeNumberFormatEnabled)() && !t ? c.default.d(e) : c.default.n(e))], {
    hk: "3wIDvq"
  });
};
exports.getNewsletterLinkActionLabel = function (e, t) {
  if (e === "create") {
    return p.fbt._("Create Channel", null, {
      hk: "344WdE"
    });
  }
  if (e === "directory") {
    return h();
  }
  if (t != null && (0, d.isNewsletterMessageLinkEnabled)()) {
    return p.fbt._("View Update", null, {
      hk: "42gyRd"
    });
  }
  return p.fbt._("View Channel", null, {
    hk: "1AZhZI"
  });
};
exports.getNewsletterMembershipRoleTag = function (e) {
  switch (e) {
    case i.NewsletterMembershipType.Admin:
      return p.fbt._("Channel Admin", null, {
        hk: "ZPbN3"
      });
    case i.NewsletterMembershipType.Owner:
      return p.fbt._("Channel Owner", null, {
        hk: "wi4uP"
      });
    default:
      return null;
  }
};
exports.getNewsletterProfilePrivacyText = function () {
  return p.fbt._("This channel has added privacy for your profile and phone number. Click to learn more.", null, {
    hk: "ZvTHT"
  });
};
exports.getNoContactsHaveReactedYetText = function () {
  return p.fbt._("No contacts have reacted yet", null, {
    hk: "jWFm3"
  });
};
exports.getNoInternetConnectionText = function () {
  return p.fbt._("Check your internet connection and try again", null, {
    hk: "fNAFR"
  });
};
exports.getNoUnreadChannelsFoundText = function () {
  return p.fbt._("No unread channels", null, {
    hk: "2yYhsw"
  });
};
exports.getOtherChannelsSearchHeader = function () {
  return p.fbt._("Other channels", null, {
    hk: "3xM6nm"
  });
};
exports.getSearchForChannelFollowersText = function () {
  return p.fbt._("Search Followers", null, {
    hk: "3PDhfV"
  });
};
exports.getSendLinkViaWhatsAppText = function () {
  return p.fbt._("Send link via WhatsApp", null, {
    hk: "1lohT7"
  });
};
exports.getShareChannelLinkButtonText = function () {
  return p.fbt._("Share channel link", null, {
    hk: "3VcQVA"
  });
};
exports.getShareText = function () {
  return p.fbt._("Share", null, {
    hk: "1gGVWl"
  });
};
exports.getStartGrowingYourChannelText = function () {
  return p.fbt._("Start growing your channel by completing your profile, writing your first update and inviting people with your link.", null, {
    hk: "2tXqmx"
  });
};
exports.getStartedWithChannelNameText = function (e) {
  return p.fbt._("Get started with \"{channel_name}\"", [p.fbt._param("channel_name", e)], {
    hk: "2sMFCG"
  });
};
exports.getViewAllChannelFollowersText = function () {
  return p.fbt._("View All", null, {
    hk: "38T1tX"
  });
};
exports.getViewAllChannelsText = function () {
  return p.fbt._("View All Channels", null, {
    hk: "2BFa1S"
  });
};
exports.getYouCreatedChannelWithNameText = function (e) {
  return p.fbt._("You created this channel, \"{channel_name}\"", [p.fbt._param("channel_name", e)], {
    hk: "4xqaxu"
  });
};
exports.roundToThousands = m;
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/647628.js"));
var l = require("../app/986120.js");
var i = require("../app/927531.js");
var u = require("../app/537469.js");
var s = require("../app/937069.js");
var c = a(require("../app/932325.js"));
var d = require("../app/73225.js");
var f = require("../app/459857.js");
var p = require("../vendor/548360.js");
a(require("../vendor/667294.js"));
function m(e) {
  if ((0, d.isLargeNumberRoundingEnabled)()) {
    if (e < 1000) {
      return e;
    } else {
      return parseInt((e / 1000).toFixed(0), 10) * 1000;
    }
  } else {
    return e;
  }
}
function h() {
  return p.fbt._("Find channels", null, {
    hk: "2AJGZ5"
  });
}
function g() {
  return (g = (0, r.default)(function* (e) {
    const {
      countryCode: t,
      isPreview: n = true
    } = e || {};
    let a;
    if (t != null) {
      a = yield (0, u.getCountryName)(t);
    }
    if (a == null) {
      const {
        user: e
      } = (0, f.getMeUser)();
      const t = (0, l.findCC)(e);
      const n = o.default[parseInt(t, 10)];
      a = yield (0, u.getCountryName)(n);
    }
    if (n) {
      return p.fbt._("This channel is closed in {country_name}", [p.fbt._param("country_name", a)], {
        hk: "32NfJn"
      });
    } else {
      return p.fbt._("Channel history and new updates are not available in {country_name}.", [p.fbt._param("country_name", a)], {
        hk: "4uAqXJ"
      });
    }
  })).apply(this, arguments);
}
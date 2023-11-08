var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HistorySyncChatSearchIncompletePlaceholder = function () {
  return p.default.createElement(l.default, {
    theme: "md-chat-search-list"
  }, p.default.createElement(E, {
    Paused: s.SYNCING_PAUSED_CONTEXTUAL_TEXT,
    InProgress: g,
    Complete: () => f.fbt._("Use WhatsApp on your phone to search messages from before {date}", [f.fbt._param("date", h())], {
      hk: "1c5Ac2"
    })
  }));
};
exports.HistorySyncChatStarredMsgsPlaceholderText = function () {
  return p.default.createElement(E, {
    Paused: s.SYNCING_PAUSED_CONTEXTUAL_TEXT,
    InProgress: g,
    Complete: () => f.fbt._("Use WhatsApp on your phone to see messages from before {date}.", [f.fbt._param("date", h())], {
      hk: "2qChdN"
    })
  });
};
exports.HistorySyncGalleryPlaceholder = function (e) {
  const t = p.default.createElement(E, {
    chat: e.chat,
    Paused: s.SYNCING_PAUSED_CONTEXTUAL_TEXT,
    InProgress: g,
    Complete: () => f.fbt._("Use WhatsApp on your phone to see messages from before {date}.", [f.fbt._param("date", h())], {
      hk: "1jHppk"
    })
  });
  return p.default.createElement(l.default, {
    theme: "list",
    secondary: t
  });
};
exports.HistorySyncSearchIncompletePlaceholder = function () {
  return p.default.createElement(l.default, {
    theme: "md-chat-search-list"
  }, p.default.createElement(E, {
    Paused: s.SYNCING_PAUSED_CONTEXTUAL_TEXT,
    InProgress: g,
    Complete: () => f.fbt._("Use WhatsApp on your phone to see older chats and messages.", null, {
      hk: "4cixqb"
    })
  }));
};
exports.HistorySyncStarredMsgsPlaceholderText = function () {
  return p.default.createElement(E, {
    Paused: s.SYNCING_PAUSED_CONTEXTUAL_TEXT,
    InProgress: g,
    Complete: () => f.fbt._("Use WhatsApp on your phone to see older chats and messages.", null, {
      hk: "4cixqb"
    })
  });
};
var r = require("../app/735618.js");
var o = require("../app/63014.js");
var l = a(require("./272277.js"));
var i = a(require("./254583.js"));
var u = require("./894795.js");
var s = require("../app/631588.js");
var c = require("../app/114850.js");
var d = require("../app/157942.js");
var f = require("../vendor/548360.js");
var p = a(require("../vendor/667294.js"));
var m = require("../app/655241.js");
function h() {
  return o.Clock.relativeDateStr((0, d.getHistorySyncEarliestDate)());
}
function g() {
  return (0, s.SYNC_IN_PROGRESS_CONTEXTUAL_DRAWER)(() => {
    c.ModalManager.open(p.default.createElement(i.default, null));
  });
}
function E(e) {
  const t = (0, m.useModelValues)((0, u.getHistorySyncProgress)(), ["paused", "inProgress"]);
  if (e.chat && e.chat.endOfHistoryTransferType === r.ConversationEndOfHistoryTransferModelPropType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY) {
    return null;
  }
  const {
    InProgress: n,
    Paused: a,
    Complete: o
  } = e;
  if (t.inProgress) {
    if (t.paused) {
      return p.default.createElement(a, null);
    } else {
      return p.default.createElement(n, null);
    }
  } else {
    return p.default.createElement(o, null);
  }
}
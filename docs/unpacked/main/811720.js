var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarredMsgs = exports.SentForAdminReview = exports.SearchingNonContactError = exports.SearchingNonContact = exports.SearchingMessages = exports.SearchingImages = exports.Searching = exports.SearchWithoutKeyword = exports.SearchWithKeyword = exports.SearchMessagesUnavailable = exports.SearchMessages = exports.SearchGroups = exports.SearchContacts = exports.Search = exports.NoResultForLabel = exports.NoQuickReplies = exports.NoFilteredChats = exports.MediaMsgs = exports.LoadingWithText = exports.Loading = exports.ListStatus = exports.ListProducts = exports.ListChats = exports.LinkMsgs = exports.LazyLoadRetry = exports.KeptMsgs = exports.ImageSearchEmpty = exports.Empty = exports.DocMsgs = exports.Blocked = exports.BeforeSearchMessages = exports.BeforeImageSearch = exports.Archived = exports.AllArchived = undefined;
var r = require("../app/351053.js");
var o = require("../app/2754.js");
var l = require("../app/900316.js");
var i = require("../app/305521.js");
var u = require("./548774.js");
var s = require("./3971.js");
var c = require("../main-chunk/206563.js");
var d = require("../main-chunk/516197.js");
var f = require("../app/856311.js");
var p = require("./129572.js");
var m = require("../app/956113.js");
var h = a(require("../app/625903.js"));
var g = require("../vendor/548360.js");
var E = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var v = a(require("../app/156720.js"));
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const y = {
  empty: {
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flexGrow: "ggj6brxn",
    flexDirection: "f8m0rgwh",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    height: "ppled2lx",
    paddingTop: "gq7nj7y3",
    paddingEnd: "td5bf8pq",
    paddingBottom: "eynyaxvo",
    paddingStart: "l3k7h4x6",
    color: "hp667wtd",
    textAlign: "qfejxiq4"
  },
  emptyTop: {
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    justifyContent: "fhf7t426",
    height: "bvcnfjzh",
    paddingTop: "cihm0v32",
    paddingEnd: "td5bf8pq",
    paddingBottom: "ctv2fiom",
    paddingStart: "l3k7h4x6"
  },
  compact: {
    paddingTop: "emrlamx0",
    paddingEnd: "iffbo4e8",
    paddingBottom: "aiput80m",
    paddingStart: "khscay3k"
  },
  icon: {
    display: "p357zi0d",
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "f6essjlf",
    height: "j19d4s4u",
    marginTop: "pcx1034m",
    marginBottom: "r2u2pyhj",
    color: "myzbk5ck",
    backgroundColor: "f2yrvmhs",
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb"
  },
  title: {
    marginBottom: "gdaqao4w"
  },
  text: {
    fontSize: "f8jlpxt4",
    lineHeight: "r5qsrrlp",
    color: "hp667wtd"
  },
  spinner: {
    marginBottom: "du8bjn1j"
  },
  action: {
    display: "l7jjieqr",
    fontSize: "f8jlpxt4",
    lineHeight: "r5qsrrlp",
    color: "o2v2jkg7"
  },
  iconRetry: {
    color: "myzbk5ck"
  }
};
const C = e => {
  let {
    testid: t,
    children: n,
    xstyle: a,
    icon: r,
    text: o,
    theme: l,
    title: u,
    onClick: s
  } = e;
  const c = u ? E.default.createElement("div", {
    className: (0, v.default)(y.title)
  }, u) : null;
  const d = o ? E.default.createElement("div", {
    className: (0, v.default)(y.text)
  }, E.default.createElement(i.EmojiText, {
    text: o
  })) : null;
  const f = (0, v.default)(y.empty, a, l === "compact" && y.compact);
  return E.default.createElement("div", {
    className: f,
    onClick: s,
    "aria-live": "polite"
  }, r, c, d, n);
};
exports.Empty = C;
exports.Blocked = () => {
  const e = E.default.createElement("div", {
    className: (0, v.default)(y.icon)
  }, E.default.createElement(s.EmptyBlockedIcon, null));
  return E.default.createElement(C, {
    icon: e,
    title: g.fbt._("No blocked contacts yet", null, {
      hk: "tY3u"
    }),
    text: g.fbt._("Blocked contacts will no longer be able to call you or send you messages", null, {
      hk: "1lm9wd"
    }),
    testid: "add-blocked-description"
  });
};
exports.Archived = () => {
  const e = E.default.createElement("div", {
    className: (0, v.default)(y.icon)
  }, E.default.createElement(u.EmptyArchivedIcon, null));
  return E.default.createElement(C, {
    icon: e,
    title: g.fbt._("No archived chats", null, {
      hk: "ybpX0"
    }),
    testid: "archived-empty"
  });
};
exports.Search = e => {
  const {
    hasFilter: t = false,
    onClearFilter: n = () => {}
  } = e;
  return E.default.createElement(C, {
    xstyle: y.emptyTop,
    title: t ? g.fbt._("No chats, contacts or messages found", null, {
      hk: "1yVqgV"
    }) : undefined,
    text: t ? undefined : g.fbt._("No chats, contacts or messages found", null, {
      hk: "1yVqgV"
    }),
    testid: "search-no-chats-or-contacts"
  }, t && E.default.createElement(h.default, {
    testid: "clear-filter",
    onClick: n,
    xstyle: y.action
  }, g.fbt._("Clear filter", null, {
    hk: "v1zB3"
  })));
};
exports.Searching = () => E.default.createElement(C, {
  xstyle: y.emptyTop,
  text: g.fbt._("Looking for chats, contacts or messages…", null, {
    hk: "2DeIbM"
  }),
  testid: "searching-chats-contacts-messages"
});
exports.SearchingMessages = () => E.default.createElement(C, {
  xstyle: y.emptyTop,
  text: g.fbt._("Looking for messages…", null, {
    hk: "3KIrdH"
  }),
  testid: "searching-messages"
});
exports.SearchContacts = () => E.default.createElement(C, {
  xstyle: y.emptyTop,
  text: g.fbt._("No contacts found", null, {
    hk: "MFAd5"
  }),
  testid: "search-no-contacts"
});
exports.SearchWithoutKeyword = () => E.default.createElement(C, {
  xstyle: y.emptyTop,
  text: g.fbt._("No results", null, {
    hk: "3hxq4S"
  }),
  testid: "search-no-results-without-keyword"
});
exports.SearchWithKeyword = e => E.default.createElement(C, {
  xstyle: y.emptyTop,
  text: g.fbt._("No results found for '{keyword}'", [g.fbt._param("keyword", e)], {
    hk: "1IZJ8Q"
  }),
  testid: "search-no-results-without-keyword"
});
exports.SearchingNonContact = () => E.default.createElement(C, {
  xstyle: y.emptyTop,
  text: g.fbt._("Looking outside your contacts...", null, {
    hk: "KIAfa"
  }),
  testid: "searching-non-contact"
});
exports.SearchingNonContactError = (e, t) => {
  const n = e.retryStr != null ? E.default.createElement(h.default, {
    testid: "retry-search",
    onClick: t,
    xstyle: y.action
  }, e.retryStr) : null;
  return E.default.createElement(C, {
    xstyle: y.emptyTop,
    title: e.text,
    testid: "search-non-contacts"
  }, n);
};
exports.SearchGroups = () => E.default.createElement(C, {
  xstyle: y.emptyTop,
  text: g.fbt._("No groups found", null, {
    hk: "3ZWMvu"
  }),
  testid: "search-no-groups"
});
exports.SearchMessages = () => E.default.createElement(C, {
  xstyle: y.emptyTop,
  text: g.fbt._("No messages found", null, {
    hk: "2KSso6"
  }),
  testid: "search-no-messages"
});
exports.SearchMessagesUnavailable = () => E.default.createElement(C, {
  xstyle: y.emptyTop,
  text: g.fbt._("Search results not yet available. Try again later.", null, {
    hk: "5Gshb"
  }),
  testid: "search-results-unavailable"
});
exports.ListChats = () => E.default.createElement(C, {
  text: g.fbt._("No chats", null, {
    hk: "2inDwp"
  }),
  testid: "no-chats"
});
exports.ListProducts = e => {
  let {
    hasCatalog: t = true
  } = e;
  const n = t ? g.fbt._("No products", null, {
    hk: "8o7dB"
  }) : g.fbt._("You need to create a catalog on the phone first", null, {
    hk: "11wgUW"
  });
  return E.default.createElement(C, {
    text: n,
    testid: "no-products"
  });
};
exports.BeforeSearchMessages = (e, t, n) => {
  const a = n ? g.fbt._("Search for messages with yourself.", null, {
    hk: "3sfAlD"
  }) : g.fbt._("Search for messages with {chatName}.", [g.fbt._param("chatName", e)], {
    hk: "2Kmot5"
  });
  const r = t ? g.fbt._("Search for messages within {chatName}.", [g.fbt._param("chatName", e)], {
    hk: "34Jm4O"
  }) : a;
  return E.default.createElement(C, {
    xstyle: y.emptyTop,
    text: r,
    testid: "chat-search-prompt"
  });
};
function b() {
  const {
    ArchivedFlowLoadable: e
  } = require("./767173.js");
  l.DrawerManager.openDrawerLeft(E.default.createElement(e, {
    onEnd: () => l.DrawerManager.closeDrawerLeft()
  }));
}
exports.ListStatus = () => E.default.createElement(C, null);
exports.AllArchived = () => {
  const e = r.ChatCollection.filter(e => e.archive).length;
  return E.default.createElement(C, {
    title: g.fbt._("All chats are archived", null, {
      hk: "3v5Xmn"
    }),
    testid: "all-chats-archived"
  }, E.default.createElement("div", {
    role: "button",
    onClick: b,
    xstyle: y.action
  }, g.fbt._({
    "*": "See {count} archived chats",
    _1: "See 1 archived chat"
  }, [g.fbt._plural(e, "count")], {
    hk: "1rcsL"
  })));
};
exports.StarredMsgs = () => E.default.createElement(C, {
  text: g.fbt._("No starred messages", null, {
    hk: "1Ys65h"
  }),
  testid: "no-starred-messages"
});
exports.KeptMsgs = () => E.default.createElement(C, {
  text: g.fbt._("Select messages to keep them from disappearing for everyone in the chat.", null, {
    hk: "4mOq4a"
  })
});
exports.SentForAdminReview = () => E.default.createElement(C, {
  text: g.fbt._("Messages sent for review by participants will appear here.", null, {
    hk: "4rrbcP"
  })
});
exports.MediaMsgs = () => E.default.createElement(C, {
  text: g.fbt._("No Media", null, {
    hk: "4BLkwN"
  }),
  testid: "no-media"
});
exports.LinkMsgs = () => E.default.createElement(C, {
  text: g.fbt._("No Links", null, {
    hk: "rFshX"
  }),
  testid: "no-links"
});
exports.DocMsgs = () => E.default.createElement(C, {
  text: g.fbt._("No Docs", null, {
    hk: "1MvZZl"
  }),
  testid: "no-docs"
});
exports.BeforeImageSearch = () => E.default.createElement(C, {
  text: g.fbt._("Search for images", null, {
    hk: "1m33Xf"
  }),
  testid: "image-search-prompt"
});
exports.SearchingImages = () => E.default.createElement(C, {
  text: g.fbt._("Searching for images...", null, {
    hk: "4ykMJL"
  }),
  testid: "searching-images"
});
exports.ImageSearchEmpty = () => E.default.createElement(C, {
  text: g.fbt._("No images found", null, {
    hk: "2vlt88"
  }),
  testid: "image-search-no-results"
});
exports.Loading = () => E.default.createElement(C, null, E.default.createElement(m.Spinner, {
  size: 50,
  stroke: 4
}));
exports.LoadingWithText = e => {
  let {
    text: t
  } = e;
  return E.default.createElement(C, null, E.default.createElement("div", {
    className: (0, v.default)(y.spinner)
  }, E.default.createElement(m.Spinner, {
    size: 50,
    stroke: 4
  })), E.default.createElement(i.EmojiText, {
    element: "div",
    className: (0, v.default)(y.text),
    text: t
  }));
};
exports.NoResultForLabel = e => {
  let {
    labelId: t
  } = e;
  const n = f.LabelCollection.assertGet(t);
  return E.default.createElement(C, null, E.default.createElement(i.EmojiText, {
    element: "div",
    className: (0, v.default)(y.text),
    text: g.fbt._("No result found for '{labelName}'", [g.fbt._param("labelName", n.name)], {
      hk: "1uaGiq"
    })
  }));
};
exports.LazyLoadRetry = e => {
  let {
    xstyle: t,
    onClick: n
  } = e;
  return E.default.createElement(C, {
    xstyle: t,
    onClick: n
  }, E.default.createElement(p.RefreshIcon, {
    xstyle: y.iconRetry
  }), E.default.createElement("div", null, g.fbt._("Retry", null, {
    hk: "2jS9Tg"
  })));
};
exports.NoQuickReplies = () => E.default.createElement(C, {
  text: "No quick replies",
  testid: "no-quick-replies"
});
exports.NoFilteredChats = e => {
  let t;
  let n;
  (0, E.useEffect)(() => {
    (0, c.logEmptyStateViewedFilterEvent)(e.filterSession.sessionId, {
      kind: e.filter
    });
  }, [e.filter, e.filterSession.sessionId]);
  switch (e.filter) {
    case o.SEARCH_FILTERS.UNREAD:
      if ((0, d.inboxFiltersEnabled)()) {
        t = g.fbt._("No unread chats", null, {
          hk: "2Om4Ko"
        });
        n = g.fbt._("View all chats", null, {
          hk: "2qhphN"
        });
      } else {
        t = g.fbt._("No unread chats", null, {
          hk: "1vobr9"
        });
        n = g.fbt._("Clear filter", null, {
          hk: "42yxoZ"
        });
      }
      break;
    case o.SEARCH_FILTERS.CONTACT:
      t = g.fbt._("No chats with contacts", null, {
        hk: "1c6fyU"
      });
      n = g.fbt._("View all chats", null, {
        hk: "3FXy9h"
      });
      break;
    case o.SEARCH_FILTERS.GROUP:
      t = g.fbt._("No group chats", null, {
        hk: "3jlYwN"
      });
      n = g.fbt._("View all chats", null, {
        hk: "4b1mKC"
      });
      break;
    case o.SEARCH_FILTERS.ASSIGNED_TO_YOU:
      t = g.fbt._("No chats assigned to you", null, {
        hk: "2JcnYt"
      });
      n = g.fbt._("Clear filter", null, {
        hk: "1gBfRV"
      });
  }
  if (t == null || n == null) {
    return null;
  } else {
    return E.default.createElement(C, {
      title: t,
      testid: "no-filtered-chats"
    }, E.default.createElement(h.default, {
      testid: "clear-filter",
      onClick: e.onClearFilter,
      xstyle: y.action
    }, n));
  }
};
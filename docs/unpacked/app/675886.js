Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UntrustedGroupDesc = exports.Unformat = exports.TrustedGroupDesc = exports.StatusV3Text = exports.StatusV3Caption = exports.SearchName = exports.Search = exports.QuotedMention = exports.QuickReply = exports.LastMessage = exports.LargeEmojiOnly = exports.InlineMessage = exports.HeaderAndFooter = exports.FormattedNotification = exports.FormattedGroupNotification = exports.FTSMessage = exports.EmojiOnly = exports.Conversation = exports.Compatibility = exports.BoldedContactName = undefined;
var r = require("./354458.js");
var i = require("./233985.js");
var a = require("./948325.js");
var o = require("./565387.js");
var s = require("./858486.js");
var l = require("./918715.js");
exports.EmojiOnly = function () {
  let {
    selectable: e,
    emojiXstyle: t
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [[[i.Emoji, {
    selectable: e,
    emojiXstyle: t
  }]]];
};
exports.LargeEmojiOnly = function () {
  let {
    selectable: e
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [[[i.Emoji, {
    selectable: e,
    size: "large"
  }]]];
};
exports.StatusV3Text = function () {
  let {
    links: e,
    selectable: t,
    linkXstyle: n,
    emojiXstyle: r
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [[[i.Code, {
    selectable: t
  }]], [[(0, l.statusV3LinkPreviewEnabled)() ? i.StatusLink : i.Link, {
    links: e,
    selectable: t,
    linkXstyle: n
  }]], [[i.Bold, {
    selectable: t
  }], [i.Italic, {
    selectable: t
  }], [i.Strikethrough, {
    selectable: t
  }]], [[i.Emoji, {
    selectable: t,
    size: "xlarge",
    emojiXstyle: r
  }]]];
};
exports.StatusV3Caption = function () {
  let {
    selectable: e
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [[[i.Code, {
    selectable: e
  }]], [[i.Bold, {
    selectable: e
  }], [i.Italic, {
    selectable: e
  }], [i.Strikethrough, {
    selectable: e
  }]], [[i.Emoji, {
    selectable: e
  }]]];
};
exports.Compatibility = function () {
  let {
    selectable: e
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [[[i.Emoji, {
    selectable: e
  }]]];
};
exports.Conversation = function () {
  let {
    mentions: e,
    groupMentions: t,
    links: n,
    phoneNumbers: o,
    selectable: l,
    trusted: u,
    fromMe: c,
    fromChatWid: d,
    commands: p
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const f = u && o.length > 0 ? [[i.PhoneNumber, {
    phoneNumbers: o,
    selectable: l,
    fromMe: c
  }]] : null;
  let _;
  if (((0, r.isBizBot3pEnabled)() || (0, r.isMetaBotCommandsEnabled)()) && p && p.length > 0) {
    _ = [[i.BotCommand, {
      commands: p,
      selectable: l
    }]];
  }
  return [[[i.Code, {
    selectable: l
  }]], (0, s.expandedTextFormattingEnabled)() ? [[i.InlineCode, {
    selectable: l
  }]] : null, (0, s.expandedTextFormattingEnabled)() ? [[i.BulletedListItem, {
    selectable: l
  }]] : null, (0, s.expandedTextFormattingEnabled)() ? [[i.HyphenListItem, {
    selectable: l
  }]] : null, (0, s.expandedTextFormattingEnabled)() ? [[i.BulletedList, {
    selectable: l
  }]] : null, (0, s.expandedTextFormattingEnabled)() ? [[i.NumberedListItem, {
    selectable: l
  }]] : null, (0, s.expandedTextFormattingEnabled)() ? [[i.NumberedList, {
    selectable: l
  }]] : null, u ? [[i.Link, {
    links: n,
    selectable: l
  }]] : null, e ? [[i.Mention, {
    mentions: e,
    selectable: l
  }]] : null, t ? [[a.GroupMention, {
    groupMentions: t,
    selectable: l,
    fromChatWid: d
  }]] : null, null, f, [[i.Bold, {
    selectable: l
  }], [i.Italic, {
    selectable: l
  }], [i.Strikethrough, {
    selectable: l
  }]], [[i.Emoji, {
    selectable: l
  }]], (0, s.expandedTextFormattingEnabled)() ? [[i.BlockQuote, {
    selectable: l
  }]] : null, _].filter(Boolean);
};
exports.Search = e => {
  let {
    boundary: t,
    terms: n,
    selectable: r,
    mentions: o,
    groupMentions: s
  } = e;
  return [[[i.TextMention, {
    mentions: o,
    selectable: r
  }]], [[a.GroupMention, {
    groupMentions: s,
    selectable: r,
    clickable: false
  }]], [[i.Bold, {
    selectable: r
  }], [i.Italic, {
    selectable: r
  }], [i.Strikethrough, {
    selectable: r
  }]], [[i.Highlight, {
    terms: n,
    boundary: t,
    selectable: r,
    ignoreDiacritics: true
  }]], [[i.Emoji, {
    selectable: r
  }]]];
};
exports.SearchName = e => {
  let {
    terms: t
  } = e;
  return [[[i.Highlight, {
    terms: t,
    ignoreDiacritics: true
  }]], [[i.Emoji, {
    selectable: false
  }]]];
};
exports.LastMessage = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    mentions: t,
    groupMentions: n,
    selectable: r,
    isDraftMessage: o
  } = e;
  return [[[i.Code, {
    selectable: r
  }]], t ? [[i.TextMention, {
    mentions: t,
    selectable: r,
    lastMessage: true,
    isDraftMessage: o
  }]] : null, n ? [[a.GroupMention, {
    groupMentions: n,
    selectable: r,
    clickable: false,
    lastMessage: true,
    isDraftMessage: o
  }]] : null, [[i.Bold, {
    selectable: r
  }], [i.Italic, {
    selectable: r
  }], [i.Strikethrough, {
    selectable: r
  }]], [[i.Emoji, {
    selectable: r
  }]]].filter(Boolean);
};
exports.FTSMessage = e => {
  let {
    boundary: t,
    mentions: n,
    groupMentions: r,
    terms: o,
    selectable: s
  } = e;
  return [[[i.Code, {
    selectable: s
  }]], [[i.TextMention, {
    mentions: n,
    selectable: s
  }]], [[a.GroupMention, {
    groupMentions: r,
    selectable: s,
    clickable: false
  }]], [[i.Bold, {
    selectable: s
  }], [i.Italic, {
    selectable: s
  }], [i.Strikethrough, {
    selectable: s
  }]], [[i.Highlight, {
    terms: o,
    boundary: t,
    selectable: s
  }]], [[i.Emoji, {
    selectable: s
  }]]];
};
exports.QuickReply = function () {
  let {
    selectable: e
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [[[i.Code, {
    selectable: e
  }]], [[i.Bold, {
    selectable: e
  }], [i.Italic, {
    selectable: e
  }], [i.Strikethrough, {
    selectable: e
  }]], [[i.Emoji, {
    selectable: e
  }]]];
};
exports.Unformat = e => {
  let {
    mentions: t,
    groupMentions: n,
    selectable: r
  } = e;
  return [[[i.Code, {
    selectable: r
  }]], (0, s.expandedTextFormattingEnabled)() ? [[i.InlineCode, {
    selectable: r
  }]] : null, [[i.TextMention, {
    mentions: t,
    selectable: r
  }]], [[a.GroupMention, {
    groupMentions: n,
    selectable: r,
    clickable: false
  }]], [[i.Bold, {
    selectable: r
  }], [i.Italic, {
    selectable: r
  }], [i.Strikethrough, {
    selectable: r
  }]], [[i.Emoji, {
    selectable: r
  }]], (0, s.expandedTextFormattingEnabled)() ? [[i.BlockQuote, {
    selectable: r
  }]] : null].filter(Boolean);
};
exports.QuotedMention = e => {
  let {
    mentions: t,
    groupMentions: n,
    selectable: r
  } = e;
  return [[[i.Code, {
    selectable: r
  }]], (0, s.expandedTextFormattingEnabled)() ? [[i.InlineCode, {
    selectable: r,
    quoted: true
  }]] : null, (0, s.expandedTextFormattingEnabled)() ? [[i.BulletedListItem, {
    selectable: r
  }]] : null, (0, s.expandedTextFormattingEnabled)() ? [[i.HyphenListItem, {
    selectable: r
  }]] : null, (0, s.expandedTextFormattingEnabled)() ? [[i.BulletedList, {
    selectable: r
  }]] : null, (0, s.expandedTextFormattingEnabled)() ? [[i.NumberedListItem, {
    selectable: r
  }]] : null, (0, s.expandedTextFormattingEnabled)() ? [[i.NumberedList, {
    selectable: r
  }]] : null, [[i.TextMention, {
    mentions: t,
    selectable: r,
    theme: {
      quoted: true
    }
  }]], [[a.GroupMention, {
    groupMentions: n,
    selectable: r,
    theme: {
      quoted: true
    },
    clickable: false
  }]], [[i.Bold, {
    selectable: r
  }], [i.Italic, {
    selectable: r
  }], [i.Strikethrough, {
    selectable: r
  }]], [[i.Emoji, {
    selectable: r
  }]], (0, s.expandedTextFormattingEnabled)() ? [[i.BlockQuote, {
    selectable: r,
    quoted: true
  }]] : null].filter(Boolean);
};
exports.FormattedNotification = e => {
  let {
    mentions: t,
    groupMentions: n,
    selectable: r
  } = e;
  return [[[i.Code, {
    selectable: r
  }]], [[i.RawMention, {
    mentions: t,
    selectable: r
  }]], [[o.RawGroupMention, {
    groupMentions: n
  }]], [[i.Bold, {
    selectable: r
  }], [i.Italic, {
    selectable: r
  }], [i.Strikethrough, {
    selectable: r
  }]]].filter(Boolean);
};
exports.FormattedGroupNotification = e => {
  let {
    mentions: t,
    groupMentions: n,
    selectable: r,
    groupMetadata: a
  } = e;
  return [[[i.Code, {
    selectable: r
  }]], (0, s.expandedTextFormattingEnabled)() ? [[i.InlineCode, {
    selectable: r
  }]] : null, [[i.RawShortNameMention, {
    mentions: t,
    selectable: r,
    groupMetadata: a
  }]], [[o.RawGroupMention, {
    groupMentions: n
  }]], [[i.Bold, {
    selectable: r
  }], [i.Italic, {
    selectable: r
  }], [i.Strikethrough, {
    selectable: r
  }]], (0, s.expandedTextFormattingEnabled)() ? [[i.BlockQuote, {
    selectable: r
  }]] : null].filter(Boolean);
};
exports.TrustedGroupDesc = e => {
  let {
    links: t,
    bulletPointsEnabled: n = false
  } = e;
  const r = true;
  return [[[i.Code, {
    selectable: r
  }]], n ? [[i.BulletedListItem, {
    selectable: r
  }]] : null, n ? [[i.HyphenListItem, {
    selectable: r
  }]] : null, n ? [[i.BulletedList, {
    selectable: r
  }]] : null, [[i.Link, {
    links: t,
    selectable: r
  }]], [[i.Bold, {
    selectable: r
  }], [i.Italic, {
    selectable: r
  }], [i.Strikethrough, {
    selectable: r
  }]], null, [[i.Emoji, {
    selectable: r
  }]]].filter(Boolean);
};
exports.UntrustedGroupDesc = e => {
  const t = Boolean(e == null ? undefined : e.bulletPointsEnabled);
  const n = true;
  return [[[i.Code, {
    selectable: n
  }]], t ? [[i.BulletedListItem, {
    selectable: n
  }]] : null, t ? [[i.HyphenListItem, {
    selectable: n
  }]] : null, t ? [[i.BulletedList, {
    selectable: n
  }]] : null, [[i.Bold, {
    selectable: n
  }], [i.Italic, {
    selectable: n
  }], [i.Strikethrough, {
    selectable: n
  }]], null, [[i.Emoji, {
    selectable: n
  }]]].filter(Boolean);
};
exports.HeaderAndFooter = function () {
  let {
    links: e,
    selectable: t,
    trusted: n
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [n === true ? [[i.Link, {
    links: e,
    selectable: t
  }]] : null, [[i.Emoji, {
    selectable: t
  }]]].filter(Boolean);
};
exports.BoldedContactName = e => {
  let {
    selectable: t
  } = e;
  return [[[i.BoldFirstWord, {
    selectable: t
  }]], [[i.Emoji, {
    selectable: t
  }]]];
};
exports.InlineMessage = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    mentions: t,
    groupMentions: n,
    selectable: r,
    isDraftMessage: o
  } = e;
  return [[[i.Code, {
    selectable: r
  }]], (0, s.expandedTextFormattingEnabled)() ? [[i.InlineCode, {
    selectable: r
  }]] : null, (0, s.expandedTextFormattingEnabled)() ? [[i.BulletedListItem, {
    selectable: r,
    inline: true
  }]] : null, (0, s.expandedTextFormattingEnabled)() ? [[i.HyphenListItem, {
    selectable: r,
    inline: true
  }]] : null, (0, s.expandedTextFormattingEnabled)() ? [[i.BulletedList, {
    selectable: r,
    inline: true
  }]] : null, (0, s.expandedTextFormattingEnabled)() ? [[i.NumberedListItem, {
    selectable: r,
    inline: true
  }]] : null, (0, s.expandedTextFormattingEnabled)() ? [[i.NumberedList, {
    selectable: r,
    inline: true
  }]] : null, t ? [[i.TextMention, {
    mentions: t,
    selectable: r,
    lastMessage: true,
    isDraftMessage: o
  }]] : null, n ? [[a.GroupMention, {
    groupMentions: n,
    selectable: r,
    clickable: false,
    lastMessage: true,
    isDraftMessage: o
  }]] : null, [[i.Bold, {
    selectable: r
  }], [i.Italic, {
    selectable: r
  }], [i.Strikethrough, {
    selectable: r
  }]], [[i.Emoji, {
    selectable: r
  }]], (0, s.expandedTextFormattingEnabled)() ? [[i.BlockQuote, {
    selectable: r,
    inline: true
  }]] : null].filter(Boolean);
};
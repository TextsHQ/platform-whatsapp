var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MentionsPlugin = function (e) {
  let {
    groupMetadata: t,
    botInvokeEnabled: n
  } = e;
  const [o] = (0, a.useLexicalComposerContext)();
  (0, T.useEffect)(() => {
    const e = o.registerNodeTransform(r.TextNode, e => {
      !function (e, t, n) {
        if (!e.isSimpleText()) {
          return;
        }
        const o = e.getTextContent();
        let a = e;
        for (const {
          jid: e,
          index: l,
          length: i,
          lastEndIndex: c,
          type: E
        } of function (e, t) {
          var n;
          const o = new RegExp(g.userJidRegexStr, "g");
          const r = new RegExp(g.groupJidRegexStr, "g");
          const a = e.matchAll(o);
          let l;
          if (t === m.GroupType.LINKED_ANNOUNCEMENT_GROUP || t === m.GroupType.LINKED_SUBGROUP && (0, s.groupMentionsInSubgroupsEnabled)()) {
            l = e.matchAll(r);
          }
          const i = Array.from(a).map(e => ({
            match: e,
            type: h.MentionTypeEnum.CONTACT
          }));
          const u = Array.from((n = l) !== null && n !== undefined ? n : []).map(e => ({
            match: e,
            type: h.MentionTypeEnum.GROUP
          }));
          const d = [...i, ...u];
          d.sort((e, t) => e.match.index > t.match.index ? 1 : -1);
          let c = 0;
          return d.map(e => {
            const {
              match: t,
              type: n
            } = e;
            const o = t[1];
            const r = t.index;
            const a = c;
            const l = o.length + 2;
            c = t.index + l;
            return {
              jid: o,
              index: r,
              lastEndIndex: a,
              length: l,
              type: n
            };
          });
        }(o, t == null ? undefined : t.groupType)) {
          const o = l - c;
          let s;
          let m;
          let g;
          if (o === 0) {
            [s, m] = a.splitText(i);
          } else {
            [, s, m] = a.splitText(o, o + i);
          }
          a = m;
          if (E === h.MentionTypeEnum.CONTACT) {
            const o = u.ContactCollection.get(e);
            if (o != null) {
              if (!(0, d.getIsMe)(o) && N(t, e) || n) {
                const e = o.id.toString();
                const n = (0, h.$createMentionNode)(v(o, t), e, h.MentionTypeEnum.CONTACT);
                s.replace(n);
                g = n;
              } else {
                g = new r.TextNode(`@${v(o)}`);
                s.replace(g);
              }
            }
          }
          if (E === h.MentionTypeEnum.GROUP) {
            const n = C.default.get(e) || f.default.get(e);
            const o = (t == null ? undefined : t.parentGroup) ? f.default.assertGet(t.parentGroup) : null;
            if (n && o) {
              const {
                subject: e,
                id: t
              } = n;
              if ([...o.joinedSubgroups, ...o.unjoinedSubgroups].includes(t)) {
                const n = (0, h.$createMentionNode)(e, t.toString(), h.MentionTypeEnum.GROUP);
                s.replace(n);
                g = n;
              } else {
                g = new r.TextNode(`@${e}`);
                s.replace(g);
              }
            } else if (n) {
              g = new r.TextNode(`@${n.subject}`);
              s.replace(g);
            }
          }
          if (!g) {
            g = new r.TextNode(e);
            s.replace(g);
          }
          const _ = (0, p.$getRangeSelection)();
          if (!(!_ || _.anchor.getNode().isAttached() && _.focus.getNode().isAttached())) {
            g.select();
          }
        }
      }(e, t, n);
    });
    const a = o.registerNodeTransform(h.MentionNode, e => {
      !function (e) {
        const t = (0, p.$getRangeSelection)();
        if (!t) {
          return;
        }
        const n = t.anchor.getNode() === e ? t.anchor.offset : -1;
        const o = g.AT_SYMBOL + e.name;
        const r = e.getTextContent();
        if (o === r) {
          return;
        }
        const a = r.startsWith(o) && n === r.length;
        const l = r.endsWith(o) && n === r.length - o.length;
        if (a) {
          e.splitText(o.length);
        } else if (l) {
          const [t, n] = e.splitText(r.length - o.length);
          (0, p.$toTextNode)(t);
          n.replace((0, h.$createMentionNode)(e.name, e.wid, e.type));
        } else {
          (0, p.$toTextNode)(e);
        }
      }(e);
    });
    return () => {
      e();
      a();
    };
  }, [o, t, n]);
  (0, S.useLexicalCommandListener)(o, r.KEY_BACKSPACE_COMMAND, () => {
    const e = o.getEditorState().read(() => {
      const e = (0, p.$getRangeSelection)();
      if (!e || !e.isCollapsed()) {
        return;
      }
      const t = e.anchor;
      const n = t.getNode();
      if (t.offset === t.getNode().getTextContentSize() && n instanceof h.MentionNode) {
        return n;
      } else {
        return undefined;
      }
    });
    return !!e && (o.update(() => e.remove()), true);
  });
  return null;
};
var r = require("./14544.js");
var a = require("./71671.js");
var l = require("../app/287461.js");
var i = require("../app/12643.js");
var s = require("../app/174834.js");
var u = require("../app/177938.js");
var d = require("../app/660666.js");
var c = require("../app/714574.js");
var f = o(require("../app/667845.js"));
var m = require("../app/862159.js");
var p = require("./251922.js");
var h = require("./331853.js");
var E = require("../app/97858.js");
var g = require("../app/472685.js");
var C = o(require("../app/22368.js"));
var _ = require("../app/669050.js");
var T = require("../vendor/667294.js");
var S = require("./16188.js");
function N(e, t) {
  var n;
  var o;
  const r = (0, _.createUserWid)(t);
  const a = (n = (e == null ? undefined : e.isLidAddressingMode) === true ? (o = (0, i.getCurrentLid)(r)) === null || o === undefined ? undefined : o.toString() : t) !== null && n !== undefined ? n : t;
  return (e == null ? undefined : e.participants.get(a)) != null;
}
function v(e, t) {
  let n;
  if ((0, E.isDropLastNameEnabled)() && (t == null ? undefined : t.hasUniqueShortNameMention(e))) {
    n = e.shortName;
  } else {
    const t = (0, l.getABPropConfigValue)("elevated_push_names_v2_m2_enabled") ? "~" : "";
    const o = (0, d.getNotifyName)(e);
    n = (0, d.getIsMyContact)(e) && !(0, d.getIsMe)(e) || o == null ? (0, c.getFormattedName)(e) : `${t}${o}`;
  }
  return n;
}
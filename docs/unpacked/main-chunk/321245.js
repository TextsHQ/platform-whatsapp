var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorStatePlugin = function (e) {
  let {
    onChange: t,
    onBlur: n,
    onFocus: o
  } = e;
  const [c] = (0, a.useLexicalComposerContext)();
  const f = (0, i.useRef)();
  const m = (0, u.default)((e, n) => {
    if (t) {
      t(function (e) {
        const t = {
          text: "",
          parsableText: "",
          data: {}
        };
        if (!e) {
          return t;
        }
        const n = [];
        const o = [];
        e.read(() => {
          for (const i of (0, r.$getRoot)().getChildren()) {
            if ((0, r.$isElementNode)(i)) {
              let r = "";
              let s = "";
              for (const n of d(i)) {
                if (n instanceof l.MentionNode) {
                  var e;
                  var a;
                  const o = n.getNodeMetadata();
                  r += o.text;
                  s += o.parsableText;
                  t.data.mentionedJidList = (e = t.data.mentionedJidList) !== null && e !== undefined ? e : [];
                  t.data.groupMentions = (a = t.data.groupMentions) !== null && a !== undefined ? a : [];
                  const {
                    type: i,
                    wid: u,
                    name: d
                  } = o;
                  switch (i) {
                    case l.MentionTypeEnum.CONTACT:
                      t.data.mentionedJidList.push(o.wid);
                      break;
                    case l.MentionTypeEnum.GROUP:
                      t.data.groupMentions.push({
                        groupJid: u,
                        groupSubject: d
                      });
                  }
                } else {
                  r += n.getTextContent();
                  s += n.getTextContent();
                }
              }
              n.push(r);
              o.push(s);
            }
          }
        });
        t.text = n.join("\n");
        t.parsableText = o.join("\n");
        return t;
      }(e), e, n);
    }
  });
  (0, i.useEffect)(() => {
    if (c) {
      const e = c.getEditorState().read(() => (0, r.$getRoot)().getTextContent());
      f.current = e;
      m(c.getEditorState(), true);
    }
  }, [c, m]);
  (0, i.useEffect)(() => {
    if (c) {
      return c.registerUpdateListener(e => {
        const {
          editorState: t
        } = e;
        if (c.isComposing()) {
          return;
        }
        const n = t.read(() => (0, r.$getRoot)().getTextContent());
        if (f.current !== n) {
          f.current = n;
          m(t, false);
        }
      });
    }
  }, [c, m]);
  (0, s.useLexicalCommandListener)(c, r.BLUR_COMMAND, e => {
    if (!(n == null)) {
      n(e);
    }
    return false;
  });
  (0, s.useLexicalCommandListener)(c, r.FOCUS_COMMAND, e => {
    if (!(o == null)) {
      o(e);
    }
    return false;
  });
  return null;
};
var r = require("./14544.js");
var a = require("./71671.js");
var l = require("./331853.js");
var i = require("../vendor/667294.js");
var s = require("./16188.js");
var u = o(require("../app/17533.js"));
function* d(e) {
  for (const t of e.getChildren()) {
    yield t;
    if ((0, r.$isElementNode)(t)) {
      yield* d(t);
    }
  }
}
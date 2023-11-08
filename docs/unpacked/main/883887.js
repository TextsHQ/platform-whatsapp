var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgPreview = function (e) {
  let {
    msg: t,
    linkPreviewVisible: n
  } = e;
  const [a, T] = (0, M.useMsgValues)(t.id, [m.getT, u.getSenderObj]);
  const w = (0, u.getChat)(t.unsafe());
  const A = t.safe();
  const P = (0, _.getQuotedMsgObj)(t.unsafe());
  let O;
  let k;
  if (P) {
    O = b.default.createElement(v.default, {
      msg: P,
      key: P.id.toString(),
      rootMsg: A,
      displayType: o.DISPLAY_TYPE.EDITING,
      theme: "editing",
      chat: w,
      t: a
    });
  }
  switch (A.type) {
    case E.MSG_TYPE.CHAT:
      k = b.default.createElement(p.default, {
        msg: A,
        contact: T,
        displayType: o.DISPLAY_TYPE.EDITING,
        quotedMsg: O,
        trusted: (0, h.isTrusted)(A.unsafe()),
        displayAuthor: false
      });
      break;
    case E.MSG_TYPE.IMAGE:
      k = b.default.createElement(f.ImageMessage, {
        msg: A,
        displayType: o.DISPLAY_TYPE.EDITING,
        quotedMsg: O,
        trusted: (0, h.isTrusted)(A.unsafe()),
        displayAuthor: false,
        mediaData: A.mediaData
      });
      break;
    case E.MSG_TYPE.VIDEO:
      k = A.isGif === true ? b.default.createElement(d.WrappedGif, {
        msg: A,
        displayType: o.DISPLAY_TYPE.EDITING,
        quotedMsg: O,
        trusted: (0, h.isTrusted)(A.unsafe()),
        displayAuthor: false,
        mediaData: A.mediaData
      }) : b.default.createElement(c.default, {
        msg: A,
        displayType: o.DISPLAY_TYPE.EDITING,
        quotedMsg: O,
        trusted: (0, h.isTrusted)(A.unsafe()),
        displayAuthor: false
      });
      break;
    case E.MSG_TYPE.DOCUMENT:
      k = b.default.createElement(s.default, {
        msg: A,
        displayType: o.DISPLAY_TYPE.EDITING,
        quotedMsg: O,
        trusted: (0, h.isTrusted)(A.unsafe()),
        displayAuthor: false
      });
  }
  if (!k) {
    return null;
  }
  return b.default.createElement(g.default, {
    chatPreference: r.default.assertGet("defaultPreference"),
    containerXstyle: S.previewContainer,
    bodyXstyle: [S.previewBody, y.paddingHoriz28, n && S.pushUp, !n && S.pushDown]
  }, b.default.createElement(l.FlexRow, {
    justify: "center",
    align: "center"
  }, b.default.createElement(i.default, {
    xstyle: S.wrapper,
    grow: 0
  }, b.default.createElement("div", {
    "data-nohandle": true,
    testid: "edit-message-preview"
  }, b.default.createElement(C.default.Provider, {
    value: o.DISPLAY_TYPE.EDITING
  }, k)))));
};
var r = a(require("../app/659177.js"));
var o = require("../app/356097.js");
var l = require("../app/690495.js");
var i = a(require("../app/469733.js"));
var u = require("../app/163755.js");
var s = a(require("./329820.js"));
var c = a(require("./666212.js"));
var d = require("./597245.js");
var f = require("./654386.js");
var p = a(require("./479585.js"));
var m = require("../app/787742.js");
var h = require("../app/435711.js");
var g = a(require("./273873.js"));
var E = require("../app/373070.js");
var v = a(require("./666413.js"));
var _ = require("../app/592978.js");
var y = require("../app/676345.js");
var C = a(require("../app/328861.js"));
var b = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var M = require("./871210.js");
const S = {
  wrapper: {
    backgroundColor: "bntscc16",
    borderTopStartRadius: "rq6dtfpq",
    borderTopEndRadius: "aokg6g0y",
    borderBottomEndRadius: "nqm9sais",
    borderBottomStartRadius: "lrpjbpgm",
    maxWidth: "wojub8o1",
    minWidth: "lu4oe39f",
    zIndex: "mbtxrpqz",
    position: "g0rxnol2"
  },
  previewContainer: {
    maxHeight: "r428hpel"
  },
  previewBody: {
    animationDuration: "j16a598t",
    animationFillMode: "a21kwdn3",
    animationTimingFunction: "ctamxg4b"
  },
  pushUp: {
    animationName: "hv0qywwv",
    paddingTop: "a0v1twxq",
    paddingBottom: "gu28b0op",
    marginBottom: "mpdn4nr2"
  },
  pushDown: {
    animationName: "ktdy2aa1",
    paddingTop: "nlnf8xo7",
    paddingBottom: "r219jyu0",
    marginBottom: "e3t8x5a9"
  }
};
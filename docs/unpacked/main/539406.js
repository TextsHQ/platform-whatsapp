var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/81109.js"));
var o = require("./261821.js");
var l = a(require("./908081.js"));
var i = a(require("./324093.js"));
var u = require("./626194.js");
var s = a(require("../app/469733.js"));
var c = require("../app/163755.js");
var d = a(require("./967087.js"));
var f = require("./142538.js");
var p = require("./883887.js");
require("../app/591988.js");
var m = require("../app/118612.js");
var h = require("../app/114850.js");
var g = require("../app/787742.js");
var E = require("../vendor/548360.js");
var v = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = b(t);
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
var _ = a(require("../app/156720.js"));
var y = require("../app/808446.js");
var C = a(require("../app/17533.js"));
function b(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (b = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const M = {
  previewContainer: {
    overflowX: "i44ccddp",
    overflowY: "ag5g9lrv",
    position: "g0rxnol2",
    zIndex: "mbtxrpqz",
    minHeight: "nu7pwgvd",
    maxHeight: "lhshrwlo"
  },
  drawer: {
    position: "g0rxnol2"
  },
  drawerBody: {
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    flexGrow: "ggj6brxn",
    flexShrink: "m0h2a7mj",
    minHeight: "nu7pwgvd",
    minWidth: "ktfrpxia"
  }
};
var S = (0, v.forwardRef)(function (e, t) {
  var n;
  let {
    msg: a,
    onConfirm: b,
    onCancel: S
  } = e;
  const [T, w] = (0, v.useState)((n = (0, c.getText)(a)) !== null && n !== undefined ? n : "");
  const A = (0, v.useMemo)(() => function (e) {
    const t = (0, c.getAsUrl)(e.unsafe());
    if (!t) {
      return null;
    }
    return {
      title: t.title,
      description: t.description,
      canonicalUrl: t.canonicalUrl,
      matchedText: t.matchedText,
      richPreviewType: t.richPreviewType,
      thumbnail: t.thumbnail,
      thumbnailHQ: t.thumbnailHQ,
      doNotPlayInline: Boolean(t.doNotPlayInline),
      inviteGrpType: t.inviteGrpType,
      mediaKey: t.mediaKey,
      mediaKeyTimestamp: t.mediaKeyTimestamp,
      thumbnailDirectPath: t.thumbnailDirectPath,
      thumbnailSha256: t.thumbnailSha256,
      thumbnailEncSha256: t.thumbnailEncSha256,
      thumbnailHeight: t.thumbnailHeight,
      thumbnailWidth: t.thumbnailWidth,
      isLoading: false
    };
  }(a), [a]);
  const [P, O] = (0, v.useState)(A);
  const k = (0, v.useRef)({});
  const D = function (e, t, n) {
    const a = e.trim();
    const r = (0, v.useRef)(a);
    return a.length > 0 && (a !== r.current || (n == null ? undefined : n.canonicalUrl) !== (t == null ? undefined : t.canonicalUrl));
  }(T, A, P);
  const [I, R] = (0, v.useState)(false);
  const [N, x] = (0, v.useState)(false);
  (0, o.setHasText)(D);
  (0, y.useListener)(h.ModalManager, ["close_modal"], () => {
    (0, o.setHasText)(false);
  });
  const L = (0, C.default)(e => {
    k.current.linkPreview = e;
    O(e);
  });
  const j = I ? v.default.createElement(d.default, {
    type: m.ModalTheme.MessageActionsModal,
    titleText: E.fbt._("Time limit has passed", null, {
      hk: "1yzxZw"
    }),
    okText: E.fbt._("OK", null, {
      hk: "1VDabk"
    }),
    onOk: () => {
      R(false);
    },
    modalText: E.fbt._("You have 15 minutes to start and then finish editing a message.", null, {
      hk: "RNibM"
    })
  }) : null;
  return v.default.createElement(v.default.Fragment, null, v.default.createElement(m.Modal, {
    type: m.ModalTheme.MessageEdit,
    ref: t,
    onOverlayClick: () => {
      if (!D) {
        h.ModalManager.close();
      }
    }
  }, v.default.createElement(l.default, {
    testid: "edit-message-modal",
    key: "edit-message-modal",
    xstyle: M.drawer
  }, v.default.createElement(u.DrawerHeader, {
    title: (0, g.getIsNewsletterMsg)(a) ? E.fbt._("Edit update", null, {
      hk: "2S3WvM"
    }) : E.fbt._("Edit message", null, {
      hk: "1MNK03"
    }),
    type: u.DRAWER_HEADER_TYPE.POPUP,
    onCancel: S
  }), v.default.createElement(i.default, {
    className: (0, _.default)(M.drawerBody)
  }, v.default.createElement(s.default, {
    grow: 0,
    shrink: 1,
    basis: "content",
    xstyle: M.previewContainer
  }, v.default.createElement(p.MsgPreview, {
    msg: a,
    linkPreviewVisible: Boolean(P)
  })), v.default.createElement(f.MessageEditComposer, {
    msg: a,
    initialLinkPreview: A,
    onInputChange: e => {
      var t;
      var n;
      w(e.text);
      k.current.mentionedJidList = (t = e.data.mentionedJidList) !== null && t !== undefined ? t : [];
      k.current.groupMentions = (n = e.data.groupMentions) !== null && n !== undefined ? n : [];
    },
    onLinkPreviewChange: L,
    onConfirm: () => {
      if (D) {
        b(T, (0, r.default)({}, k.current));
      } else {
        h.ModalManager.close();
      }
    },
    disableConfirmButton: N
  })))), j);
});
exports.default = S;
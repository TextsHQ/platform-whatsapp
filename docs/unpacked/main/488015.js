var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionCellDetailThumb = function (e) {
  let {
    msg: t,
    reactionText: n,
    onCloseDetailsPane: a,
    showReactionText: i = true
  } = e;
  const h = e => {
    e.stopPropagation();
    e.preventDefault();
    const n = t.id;
    const i = (0, u.getChat)(t);
    const s = p.MsgCollection.get(n);
    const c = (0, o.getSearchContext)(i, s || n, t == null ? undefined : t.unsafe());
    if (c) {
      c.slideToMsg = true;
    }
    a();
    l.Cmd.openChatAt(i, c).then(e => {
      if (!e) {
        return;
      }
      const n = p.MsgCollection.get(t.id);
      if (n) {
        (0, r.delayMs)(500).then(() => {
          l.Cmd.openMediaViewerForAlbumMedia((0, g.unproxy)(n));
        });
      }
    });
    if (!s) {
      v.ToastManager.open(M.default.createElement(E.Toast, {
        msg: b.fbt._("Couldn't find message", null, {
          hk: "46pDt7"
        })
      }));
    }
  };
  const A = t.type === m.MSG_TYPE.IMAGE ? M.default.createElement(s.ImgPlaceholderIcon, {
    iconXstyle: T.placeholderIcon
  }) : M.default.createElement(y.VideoPlaceholderIcon, {
    iconXstyle: T.placeholderIcon
  });
  const P = M.default.createElement("div", {
    className: (0, S.default)(T.placeholderContainer),
    key: "default"
  }, A);
  const O = t.type === m.MSG_TYPE.IMAGE ? M.default.createElement(f.default, {
    mediaData: t.mediaData,
    placeholderRenderer: () => P,
    downloadMedia: () => t.downloadMedia({
      downloadEvenIfExpensive: false,
      rmrReason: C.WEBC_RMR_REASON_CODE.OTHER,
      isUserInitiated: false
    }),
    renderProgressively: false
  }, e => M.default.createElement("div", {
    className: (0, S.default)(T.thumbContainer, T.thumb),
    style: {
      backgroundImage: `url(${e})`
    }
  })) : M.default.createElement(d.default, {
    msg: t,
    thumbnailPlaceholder: P,
    childClassName: (0, S.default)(T.thumbContainer, T.thumb)
  });
  const k = b.fbt._("Click to open media", null, {
    hk: "3edC8s"
  });
  return M.default.createElement(c.HotKeys, {
    handlers: {
      enter: e => {
        h(e);
      },
      space: e => {
        h(e);
      }
    }
  }, M.default.createElement(_.default, {
    onClick: h
  }, M.default.createElement("div", {
    className: (0, S.default)([T.relativePosition, T.thumbContainer]),
    "aria-label": k,
    alt: b.fbt._("Media thumbnail", null, {
      hk: "4BNtcn"
    }),
    onClickCapture: h
  }, O, i && M.default.createElement(w, {
    reactionText: n
  }))));
};
exports.ReactionCellProfileImageThumb = function (e) {
  let {
    profileImageId: t,
    reactionText: n
  } = e;
  return M.default.createElement("div", {
    className: (0, S.default)([T.relativePosition, T.thumbContainer])
  }, M.default.createElement(i.DetailImage, {
    id: t,
    size: 32,
    shape: i.DetailImageShape.Circle
  }), M.default.createElement(w, {
    reactionText: n
  }));
};
var r = require("../app/8304.js");
var o = require("../app/713105.js");
var l = require("../app/780549.js");
var i = require("../app/23641.js");
var u = require("../app/163755.js");
var s = require("./510565.js");
var c = require("../app/81644.js");
var d = a(require("./641206.js"));
var f = a(require("./674465.js"));
var p = require("../app/61113.js");
var m = require("../app/373070.js");
var h = require("./900894.js");
var g = require("../app/163139.js");
var E = require("../app/625786.js");
var v = require("../app/390737.js");
var _ = a(require("../app/625903.js"));
var y = require("./27414.js");
var C = require("../app/885313.js");
var b = require("../vendor/548360.js");
var M = a(require("../vendor/667294.js"));
var S = a(require("../app/156720.js"));
const T = {
  thumbContainer: {
    width: "tknnhhou",
    height: "sai7fuui",
    borderTopStartRadius: "i3rsbmdh",
    borderTopEndRadius: "d6h2ibm4",
    borderBottomEndRadius: "rh5xaqwm",
    borderBottomStartRadius: "e6tbvuqx"
  },
  thumb: {
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    backgroundRepeat: "sxl192xd",
    backgroundPosition: "t3g6t33p",
    backgroundSize: "qnwaluaf"
  },
  placeholderContainer: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "ln8gz9je",
    height: "ppled2lx"
  },
  placeholderIcon: {
    width: "ln8gz9je",
    height: "ppled2lx"
  },
  relativePosition: {
    position: "g0rxnol2"
  },
  absolutePosition: {
    position: "lhggkp7q"
  },
  reactionBadge: {
    bottom: "rjkg9koz",
    end: "ttv0su4g",
    height: "hpdpob1j",
    width: "dh5rsm73"
  }
};
function w(e) {
  let {
    reactionText: t
  } = e;
  return M.default.createElement("div", {
    className: (0, S.default)([T.absolutePosition, T.reactionBadge])
  }, M.default.createElement(h.ReactionEmoji, {
    scale: "reactionCellDetailThumb",
    size: "small",
    reaction: t
  }));
}
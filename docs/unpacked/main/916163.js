var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const {
    msg: n,
    displayType: a
  } = e;
  const [U, K] = (0, L.useState)(true);
  const Q = (0, P.isTrusted)(e.msg.unsafe());
  const [X, Z, J, $, ee, te, ne, ae, re, oe, le, ie, ue] = (0, G.useMsgValues)(e.msg.id, [A.getAck, A.getCaption, h.getDir, A.getIsFromTemplate, A.getIsFailed, A.getIsSentByMe, h.getRtl, h.getSenderObj, A.getSubtype, A.getType, A.getIsVcardOverMmsDocument, h.getMediaData, A.getIsDynamicReplyButtonsMsg]);
  const se = (0, F.useModelValues)(e.msg.mediaData, ["mediaStage", "filename", "pageCount", "size", "mimetype", "preview", "fullPreviewData", "loadedSize", "filehash"]);
  const ce = (0, B.default)({
    mimetype: se.mimetype,
    filename: se.filename
  });
  const de = Boolean(($ || ue) && Z) ? null : L.default.createElement("div", {
    className: (0, j.default)(H.docMeta)
  }, S.ETA_SUPPORTED_STATES.has(se.mediaStage) ? L.default.createElement(C.TimeLeftEta, {
    size: se.size,
    loadedSize: se.loadedSize,
    sampling: 3,
    xstyle: H.metaValue
  }, L.default.createElement(V, null)) : L.default.createElement(L.default.Fragment, null, L.default.createElement(Y, {
    count: se.pageCount
  }), L.default.createElement(z, {
    ext: ce.ext
  })), L.default.createElement(q, {
    size: se.size
  }));
  (0, L.useEffect)(() => {
    if (se.filehash != null && se.mediaStage === b.MEDIA_DATA_STAGE.INIT) {
      _.LruMediaStore.get(se.filehash).then(e => {
        K(e != null);
      });
    }
  }, [se.filehash, se.mediaStage]);
  (0, L.useEffect)(() => {
    if (!se.fullPreviewData) {
      (0, E.default)({
        msg: (0, D.unproxy)(n),
        isPreload: false,
        chat: (0, h.getChat)(n.unsafe())
      });
    }
  }, []);
  const fe = e => {
    W(e);
    T.ModalManager.open(L.default.createElement(v.default, {
      msg: n.unsafe()
    }));
  };
  const pe = e => {
    W(e);
    if ((0, w.getModernizr)().adownload) {
      n.downloadMedia({
        downloadEvenIfExpensive: se.size <= 104857600,
        rmrReason: N.WEBC_RMR_REASON_CODE.MSG_CLICK,
        isUserInitiated: true
      }).catch(() => {}).then(() => {
        switch (se.mediaStage) {
          case b.MEDIA_DATA_STAGE.RESOLVED:
          case b.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED:
            if (le !== true) {
              (() => {
                {
                  const e = se.filename || x.fbt._("Untitled", null, {
                    hk: "4dgIss"
                  });
                  R.ToastManager.open(L.default.createElement(I.Toast, {
                    msg: x.fbt._("\"{name}\" downloaded.", [x.fbt._param("name", e)], {
                      hk: "JARD3"
                    })
                  }));
                }
              })();
              f.FileSaver.initDownload((0, D.unproxy)(n.unsafe()));
            }
            break;
          case b.MEDIA_DATA_STAGE.NEED_POKE:
          case b.MEDIA_DATA_STAGE.ERROR_MISSING:
            fe();
        }
      });
    } else {
      T.ModalManager.open(L.default.createElement(i.ConfirmPopup, {
        onOK: () => T.ModalManager.close(),
        okText: (0, d.default)("OK")
      }, L.default.createElement(O.SafariLimitedText, null)));
    }
  };
  const me = e => {
    W(e);
    n.cancelDownload();
  };
  const he = e => {
    W(e);
    n.cancelUpload();
  };
  const ge = e => {
    W(e);
    n.resumeUpload();
  };
  const Ee = e => {
    W(e);
    n.resumeRemoteUpload();
  };
  const ve = (0, o.classnamesConvertMeToStylexPlease)((0, j.default)(H.filetypeIcon), ce.icon);
  const _e = se.filename || x.fbt._("Untitled", null, {
    hk: "4dgIss"
  });
  let ye = null;
  const Ce = {
    onClick: () => {}
  };
  switch (se.mediaStage) {
    case b.MEDIA_DATA_STAGE.RESOLVED:
    case b.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED:
    case b.MEDIA_DATA_STAGE.NEED_POKE:
    case b.MEDIA_DATA_STAGE.INIT:
      Ce.onClick = pe;
      Ce.title = x.fbt._("Download \"{name}\"", [x.fbt._param("name", _e)], {
        hk: "34bCqe"
      });
      ye = se.mediaStage === b.MEDIA_DATA_STAGE.RESOLVED || se.mediaStage === b.MEDIA_DATA_STAGE.INIT && U ? null : L.default.createElement(s.Download, null);
      break;
    case b.MEDIA_DATA_STAGE.UPLOADING:
    case b.MEDIA_DATA_STAGE.FETCHING:
      ye = L.default.createElement(s.Pending, {
        outgoingMsg: te,
        canCancel: true,
        value: se.loadedSize != null && se.size != null && se.size > 0 ? Math.ceil(se.loadedSize / se.size * 100) : undefined
      });
      Ce.onClick = se.mediaStage === b.MEDIA_DATA_STAGE.FETCHING ? me : he;
      break;
    case b.MEDIA_DATA_STAGE.NEED_UPLOAD:
      ye = L.default.createElement(s.Upload, null);
      Ce.onClick = ge;
      break;
    case b.MEDIA_DATA_STAGE.REMOTE_NEED_UPLOAD:
      ye = L.default.createElement(s.Upload, null);
      Ce.onClick = Ee;
      break;
    case b.MEDIA_DATA_STAGE.ERROR_TOO_LARGE:
      break;
    case b.MEDIA_DATA_STAGE.ERROR_FILE_NOT_READABLE:
      Ce.onClick = k.default;
      break;
    case b.MEDIA_DATA_STAGE.ERROR_MISSING:
      Ce.onClick = fe;
      break;
    case b.MEDIA_DATA_STAGE.SENDING:
      ye = ee ? null : L.default.createElement(s.Pending, {
        outgoingMsg: te
      });
      break;
    default:
      ye = L.default.createElement(s.Pending, {
        outgoingMsg: te
      });
  }
  if (a === u.DISPLAY_TYPE.EDITING) {
    Ce.onClick = null;
  }
  const be = ((t = se.preview) !== null && t !== undefined ? t : se.fullPreviewData) != null;
  return L.default.createElement(l.Clickable, (0, r.default)({
    xstyle: H.container,
    dataTestId: "document-thumb"
  }, Ce), Q ? L.default.createElement(y.default, {
    msg: n.unsafe(),
    containerClassName: (0, j.default)(H.thumbContainer),
    childClassName: (0, j.default)(H.thumb)
  }) : null, L.default.createElement(M.default, {
    xstyle: H.deepContainer,
    outgoingMsg: te,
    position: be ? "bottom" : undefined
  }, L.default.createElement(p.FlexRow, {
    xstyle: H.deepContainerContent,
    align: "start"
  }, L.default.createElement(m.default, {
    shrink: 0
  }, L.default.createElement("div", {
    className: ve
  })), L.default.createElement(m.default, {
    xstyle: [H.text, g.default.isRTL() && H.textRTL],
    grow: 1
  }, L.default.createElement("div", {
    className: (0, j.default)(H.docName)
  }, L.default.createElement(c.EmojiText, {
    text: _e,
    dirMismatch: ne !== g.default.isRTL(),
    direction: "auto"
  })), de), L.default.createElement(m.default, {
    grow: 0,
    shrink: 0
  }, ye))));
};
var r = a(require("../vendor/967154.js"));
var o = require("../app/396574.js");
var l = require("../app/950987.js");
var i = require("../app/103440.js");
var u = require("../app/356097.js");
var s = require("./615586.js");
var c = require("../app/305521.js");
var d = a(require("../app/395767.js"));
var f = require("./821130.js");
var p = require("../app/690495.js");
var m = a(require("../app/469733.js"));
var h = require("../app/163755.js");
var g = a(require("../app/932325.js"));
var E = a(require("../app/343087.js"));
var v = a(require("./59036.js"));
var _ = require("../app/719621.js");
var y = a(require("./641206.js"));
var C = require("./239991.js");
var b = require("../app/172259.js");
var M = a(require("./149767.js"));
var S = require("./115900.js");
var T = require("../app/114850.js");
var w = require("../app/223713.js");
var A = require("../app/787742.js");
var P = require("../app/435711.js");
var O = require("./425448.js");
var k = a(require("./467409.js"));
var D = require("../app/163139.js");
var I = require("../app/625786.js");
var R = require("../app/390737.js");
var N = require("../app/885313.js");
var x = require("../vendor/548360.js");
var L = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = U(t);
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
var j = a(require("../app/156720.js"));
var B = a(require("./619062.js"));
var F = require("../app/655241.js");
var G = require("./871210.js");
function U(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (U = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function W(e) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
}
const H = {
  container: {
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    alignItems: "elxb2u3l",
    width: "ln8gz9je",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    color: "gtscxtjd",
    textAlign: "tffp5ko5",
    borderTopStartRadius: "l8fojup5",
    borderTopEndRadius: "paxyh2gw"
  },
  text: {
    position: "g0rxnol2",
    top: "g3ewzqzm",
    marginTop: "tt8xd2xn",
    marginBottom: "mpdn4nr2",
    marginEnd: "spjzgwxb",
    marginStart: "a3oefunm"
  },
  textRTL: {
    textAlign: "cb8ormfa"
  },
  docName: {
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    textOverflow: "lhj4utae",
    wordBreak: "m1c2hokz",
    display: "c32ccnay",
    "-webkit-line-clamp": "suguakab",
    "-webkit-box-orient": "aoi073rw"
  },
  deepContainerContent: {
    paddingTop: "lqdozo90",
    paddingEnd: "igb3k0ri",
    paddingBottom: "bavixdlz",
    paddingStart: "nntdgyy8"
  },
  filetypeIcon: {
    backgroundRepeat: "sxl192xd",
    backgroundSize: "hbhfgwk1",
    height: "fs6hn1up",
    width: "ekdr8vow"
  },
  thumb: {
    backgroundPosition: "hrdw4pet",
    backgroundRepeat: "sxl192xd",
    backgroundSize: "qnwaluaf",
    borderBottom: "qj9nvfuq",
    height: "ppled2lx",
    position: "lhggkp7q",
    width: "ln8gz9je"
  },
  thumbContainer: {
    height: "fe3aadhc",
    position: "g0rxnol2",
    width: "ln8gz9je"
  },
  metaSeparator: {
    marginTop: "tt8xd2xn",
    marginEnd: "mw4yctpw",
    marginBottom: "mpdn4nr2",
    marginStart: "qnz2jpws"
  },
  metaValue: {
    display: "l7jjieqr",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3",
    ":last-child": {
      display: "p8zrgzvm"
    }
  },
  docMeta: {
    height: "e4p1bexh",
    fontSize: "lak21jic",
    paddingTop: "ocd2b0bc",
    paddingEnd: "f9ovudaz",
    paddingBottom: "aa0kojfi",
    paddingStart: "gx1rr48f",
    lineHeight: "cr2cog7z",
    color: "sabn9a5k",
    "@media (max-width:880px)": {
      end: "ekmn1tbb",
      overflowX: "hys5s3z0",
      overflowY: "ktnphmnq",
      textOverflow: "hpb4froj",
      whiteSpace: "tf9oak2v"
    }
  },
  deepContainer: {
    cursor: "rcg4vxlo"
  }
};
function V() {
  return L.default.createElement("span", {
    className: (0, j.default)(H.metaValue, H.metaSeparator)
  }, "•");
}
function q(e) {
  let {
    size: t
  } = e;
  if (t == null || t <= 0) {
    return null;
  }
  const n = g.default.filesize(t);
  return L.default.createElement(L.default.Fragment, null, L.default.createElement("span", {
    className: (0, j.default)(H.metaValue),
    title: n
  }, n), L.default.createElement(V, null));
}
function Y(e) {
  let {
    count: t
  } = e;
  if (t == null || t <= 0) {
    return null;
  }
  const n = x.fbt._({
    "*": "{count} pages",
    _1: "1 page"
  }, [x.fbt._plural(t, "count")], {
    hk: "23rvsI"
  });
  return L.default.createElement(L.default.Fragment, null, L.default.createElement("span", {
    className: (0, j.default)(H.metaValue),
    title: n
  }, n), L.default.createElement(V, null));
}
function z(e) {
  let {
    ext: t
  } = e;
  if (t == null) {
    return null;
  }
  const n = t.toUpperCase();
  return L.default.createElement(L.default.Fragment, null, L.default.createElement("span", {
    "data-meta-key": "type",
    className: (0, j.default)(H.metaValue),
    title: n
  }, n), L.default.createElement(V, null));
}
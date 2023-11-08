var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/780549.js");
var o = require("../app/103440.js");
var l = require("../app/690495.js");
var i = a(require("../app/469733.js"));
var u = require("../app/714574.js");
var s = require("../app/163755.js");
var c = a(require("../app/932325.js"));
var d = require("../app/172259.js");
var f = a(require("./32186.js"));
var p = a(require("./149767.js"));
var m = require("./789955.js");
var h = a(require("./19805.js"));
var g = a(require("./398685.js"));
var E = a(require("./131356.js"));
var v = require("../app/97858.js");
var _ = require("../app/114850.js");
var y = require("../app/787742.js");
var C = a(require("./809958.js"));
var b = require("../app/163139.js");
var M = a(require("../app/397778.js"));
var S = require("../app/180519.js");
var T = a(require("../app/625903.js"));
var w = require("./950038.js");
var A = require("./171221.js");
var P = require("./404413.js");
var O = require("../app/239870.js");
var k = a(require("./285957.js"));
var D = require("./562732.js");
var I = require("../app/885313.js");
var R = require("../vendor/548360.js");
var N = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = B(t);
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
var x = a(require("../app/156720.js"));
var L = require("../app/655241.js");
var j = require("./871210.js");
function B(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (B = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const F = {
  buttonContainer: {
    position: "g0rxnol2",
    display: "p357zi0d",
    alignItems: "elxb2u3l",
    minWidth: "llkbrke6",
    height: "smoo1fur",
    color: "gtscxtjd",
    textAlign: "tffp5ko5",
    cursor: "ajgl1lbb"
  },
  statusIcon: {
    color: "mymavskd",
    height: "bmot90v7"
  },
  statusDone: {
    color: "a6r0u4sv"
  },
  content: {
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    alignItems: "r15c9g6i",
    maxHeight: "ruh8h8mp",
    paddingEnd: "btzf6ewn"
  },
  unviewedBubble: {
    boxSizing: "cm280p3y",
    paddingTop: "eujn52yf",
    paddingEnd: "jfqm35v0",
    paddingBottom: "ckm995li",
    paddingStart: "bdbt56hn"
  },
  deepContainerContent: {
    boxSizing: "cm280p3y",
    minWidth: "hwyr1eu5",
    height: "smoo1fur",
    paddingTop: "i5tg98hk",
    paddingEnd: "abxuf49s",
    paddingBottom: "przvwfww",
    paddingStart: "rppts313",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  accentIconSvg: {
    color: "crm5a8gb"
  },
  nonSpinnerIcon: {
    display: "l7jjieqr",
    minWidth: "mhp1pqu9",
    marginTop: "tt8xd2xn",
    marginEnd: "mw4yctpw",
    marginBottom: "mpdn4nr2",
    marginStart: "bx0vhl82"
  },
  nonSpinnerIconSvg: {
    width: "i94gqilv",
    height: "bmot90v7"
  },
  contentMeta: {
    color: "hp667wtd"
  },
  labelContainer: {
    minWidth: "kr606f8j"
  },
  labelText: {
    userSelect: "rkxvyd19"
  },
  labelActive: {
    color: "pm5hny62"
  },
  labelInactive: {
    fontStyle: "h432zind",
    color: "hp667wtd"
  },
  labelRetry: {
    fontWeight: "hnx8ox4h",
    color: "pm5hny62"
  },
  quote: {
    marginTop: "if44n927",
    marginEnd: "isg5rw3j",
    marginBottom: "ngycyvoj",
    marginStart: "heai6z19"
  },
  meta: {
    position: "lhggkp7q",
    end: "b4u6kxhc",
    bottom: "blj1rie1"
  },
  dialogTitle: {
    marginBottom: "or9x5nie"
  }
};
function G(e) {
  e.stopPropagation();
  e.preventDefault();
}
function U(e, t) {
  let {
    displayAuthor: n,
    displayType: a,
    mediaData: B,
    msg: U,
    trusted: W,
    quotedMsg: H
  } = e;
  const {
    mediaStage: V,
    size: q
  } = (0, L.useModelValues)(B, ["mediaStage", "size"]);
  const [Y, z, K, Q, X, Z, J] = (0, j.useMsgValues)(U.id, [y.getAck, y.getIsGroupMsg, y.getIsFailed, y.getIsPSA, y.getIsSentByMe, s.getSenderObj, y.getType]);
  const $ = function (e, t) {
    return (0, N.useMemo)(() => {
      const n = t.type === d.OUTWARD_TYPES.IMAGE;
      const a = n ? R.fbt._("Photo", null, {
        hk: "SBkDD"
      }) : R.fbt._("Video", null, {
        hk: "2SOGaJ"
      });
      if ((0, O.isViewed)(t)) {
        return {
          type: "complete",
          icon: N.default.createElement(D.ViewOnceViewedIcon, {
            xstyle: F.nonSpinnerIcon,
            iconXstyle: F.nonSpinnerIconSvg
          }),
          label: R.fbt._("Opened", null, {
            hk: "4eZcUM"
          }),
          labelStyle: F.labelInactive
        };
      }
      if ((0, O.isExpired)(t) && !(0, y.getIsSentByMe)(t)) {
        return {
          type: "unviewed",
          icon: N.default.createElement(A.ViewOnceIcon, {
            xstyle: F.nonSpinnerIcon,
            iconXstyle: [F.accentIconSvg, F.nonSpinnerIconSvg]
          }),
          handleClick: () => {
            const e = (0, u.getDisplayName)(t.senderObj);
            const a = n ? R.fbt._("Photo expired", null, {
              hk: "hKfZf"
            }) : R.fbt._("Video expired", null, {
              hk: "3GxyJh"
            });
            const r = n ? R.fbt._("This view once photo has expired. Please ask {name} to re-send it.", [R.fbt._param("name", e)], {
              hk: "2uRU4O"
            }) : R.fbt._("This view once video has expired. Please ask {name} to re-send it.", [R.fbt._param("name", e)], {
              hk: "FsAn4"
            });
            _.ModalManager.open(N.default.createElement(o.ConfirmPopup, {
              onOK: () => _.ModalManager.close()
            }, N.default.createElement(l.FlexColumn, null, N.default.createElement(S.TextHeader, {
              xstyle: F.dialogTitle,
              theme: "popupTitle"
            }, a), N.default.createElement(S.TextParagraph, {
              color: "secondary"
            }, r))));
          },
          label: a
        };
      }
      switch (e) {
        case d.MEDIA_DATA_STAGE.RESOLVED:
        case d.MEDIA_DATA_STAGE.PROGRESSIVE_READY:
          if ((0, y.getIsSentByMe)(t)) {
            return {
              type: "complete",
              icon: N.default.createElement(A.ViewOnceIcon, {
                xstyle: F.nonSpinnerIcon,
                iconXstyle: F.nonSpinnerIconSvg
              }),
              label: a,
              labelStyle: F.labelActive
            };
          } else {
            return {
              type: "unviewed",
              icon: N.default.createElement(A.ViewOnceIcon, {
                xstyle: F.nonSpinnerIcon,
                iconXstyle: [F.accentIconSvg, F.nonSpinnerIconSvg]
              }),
              handleClick: function () {
                r.Cmd.mediaViewerModal({
                  msg: (0, b.unproxy)(t.unsafe())
                });
              },
              label: a
            };
          }
        case d.MEDIA_DATA_STAGE.FETCHING:
          if ((0, y.getIsSentByMe)(t)) {
            return {
              type: "complete",
              icon: N.default.createElement(A.ViewOnceIcon, {
                xstyle: F.nonSpinnerIcon,
                iconXstyle: F.nonSpinnerIconSvg
              }),
              label: a,
              labelStyle: F.labelActive
            };
          } else {
            return {
              type: "unviewed",
              icon: N.default.createElement(E.default, null),
              handleClick: e => {
                G(e);
                t.cancelDownload();
              },
              label: a
            };
          }
        case d.MEDIA_DATA_STAGE.NEED_POKE:
          return {
            type: "unviewed",
            icon: N.default.createElement(w.ViewOnceDownloadIcon, {
              xstyle: F.nonSpinnerIcon,
              iconXstyle: [F.accentIconSvg, F.nonSpinnerIconSvg]
            }),
            handleClick: e => {
              G(e);
              t.forceDownloadMediaEvenIfExpensive();
            },
            label: a
          };
        case d.MEDIA_DATA_STAGE.FINALIZING:
        case d.MEDIA_DATA_STAGE.UPLOADING:
          return {
            type: "complete",
            icon: N.default.createElement(E.default, {
              onClick: e => {
                G(e);
                t.cancelUpload();
              }
            }),
            label: a,
            labelStyle: F.labelActive
          };
        case d.MEDIA_DATA_STAGE.NEED_UPLOAD:
          return {
            type: "complete",
            icon: N.default.createElement(M.default, {
              xstyle: F.nonSpinnerIcon,
              iconXstyle: [F.accentIconSvg, F.nonSpinnerIconSvg],
              Icon: P.ViewOnceRetryIcon,
              onClick: e => {
                G(e);
                t.resumeUpload();
              },
              "aria-label": R.fbt._("Retry", null, {
                hk: "2jS9Tg"
              })
            }),
            label: R.fbt._("Retry", null, {
              hk: "2jS9Tg"
            }),
            labelStyle: F.labelRetry
          };
        case d.MEDIA_DATA_STAGE.REMOTE_NEED_UPLOAD:
          return {
            type: "complete",
            icon: N.default.createElement(M.default, {
              xstyle: F.nonSpinnerIcon,
              iconXstyle: [F.accentIconSvg, F.nonSpinnerIconSvg],
              Icon: P.ViewOnceRetryIcon,
              onClick: e => {
                G(e);
                t.resumeRemoteUpload();
              },
              "aria-label": R.fbt._("Retry", null, {
                hk: "2jS9Tg"
              })
            }),
            label: R.fbt._("Retry", null, {
              hk: "2jS9Tg"
            }),
            labelStyle: F.labelRetry
          };
        case d.MEDIA_DATA_STAGE.SENDING:
          return {
            type: "complete",
            icon: N.default.createElement(E.default, null),
            label: a,
            labelStyle: F.labelActive
          };
        case d.MEDIA_DATA_STAGE.ERROR_MISSING:
          return {
            type: "complete",
            icon: N.default.createElement(D.ViewOnceViewedIcon, {
              xstyle: F.nonSpinnerIcon,
              iconXstyle: F.nonSpinnerIconSvg
            }),
            label: R.fbt._("Expired", null, {
              hk: "3HKvpZ"
            }),
            labelStyle: F.labelInactive
          };
        case d.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED:
        case d.MEDIA_DATA_STAGE.ERROR_TOO_LARGE:
        case d.MEDIA_DATA_STAGE.ERROR_FILE_NOT_READABLE:
          __LOG__(4, undefined, new Error(), true)`Unsupported/too large/not readable view once media message`;
          SEND_LOGS("view-once-hook-error");
          return {
            type: "complete",
            icon: N.default.createElement(D.ViewOnceViewedIcon, {
              xstyle: F.nonSpinnerIcon,
              iconXstyle: F.nonSpinnerIconSvg
            }),
            label: a,
            labelStyle: F.labelActive
          };
        case d.MEDIA_DATA_STAGE.INIT:
        case d.MEDIA_DATA_STAGE.PREPARING:
        case d.MEDIA_DATA_STAGE.DECRYPTING:
        case d.MEDIA_DATA_STAGE.EXISTS:
          if (!(0, y.getIsSentByMe)(t)) {
            return {
              type: "unviewed",
              icon: N.default.createElement(E.default, null),
              handleClick: G,
              label: a
            };
          }
        case d.MEDIA_DATA_STAGE.REMOTE_UPLOADING:
        case d.MEDIA_DATA_STAGE.REUPLOADING:
          return {
            type: "complete",
            icon: N.default.createElement(A.ViewOnceIcon, {
              xstyle: F.nonSpinnerIcon,
              iconXstyle: F.nonSpinnerIconSvg
            }),
            label: a,
            labelStyle: F.labelActive
          };
      }
    }, [e, t]);
  }(V, U);
  (0, N.useImperativeHandle)(t, () => ({
    handleKeyActivation(e) {
      if (W && $.handleClick != null) {
        $.handleClick(e);
      }
    }
  }));
  (0, N.useEffect)(() => {
    if (!(0, v.isViewOnceSunsetEnabled)()) {
      if (!X && (0, O.isUnviewed)(U)) {
        U.downloadMedia({
          downloadEvenIfExpensive: false,
          rmrReason: I.WEBC_RMR_REASON_CODE.MSG_RENDER,
          isUserInitiated: false
        });
      }
    }
  }, [U, X]);
  const ee = U.type === d.OUTWARD_TYPES.IMAGE ? R.fbt._("View once photo", null, {
    hk: "2obYts"
  }) : R.fbt._("View once video", null, {
    hk: "3nw2h1"
  });
  let te;
  if ($.type === "complete") {
    const {
      label: e,
      labelStyle: t,
      icon: r
    } = $;
    const o = (0, O.isUnviewed)(U) ? ee : [e, ee].join(" - ");
    te = N.default.createElement(g.default, {
      msg: U,
      displayAuthor: n,
      displayType: a
    }, H != null ? N.default.createElement("div", {
      className: (0, x.default)(F.quote)
    }, H) : null, N.default.createElement(l.FlexRow, {
      align: "center",
      xstyle: F.labelContainer,
      testid: "view-once-complete",
      "aria-label": o
    }, N.default.createElement(i.default, {
      xstyle: [F.statusIcon, (0, O.isViewed)(U) && F.statusDone],
      grow: 0
    }, r), N.default.createElement(i.default, {
      grow: 1
    }, N.default.createElement(h.default, {
      className: (0, x.default)(t, F.labelText),
      msg: U.unsafe()
    }, e))));
  } else {
    const {
      handleClick: e,
      label: t,
      icon: r
    } = $;
    const o = V === d.MEDIA_DATA_STAGE.NEED_POKE || V === d.MEDIA_DATA_STAGE.FETCHING ? c.default.filesize(q) : null;
    te = (0, v.isViewOnceSunsetEnabled)() ? N.default.createElement(k.default, {
      msg: U,
      displayType: a
    }) : N.default.createElement(f.default, {
      displayType: a,
      hideCaption: true,
      hideMeta: true,
      msg: U,
      quotedMsg: H,
      showAuthor: n,
      trusted: W
    }, N.default.createElement(T.default, {
      testid: "view-once-unviewed",
      xstyle: F.buttonContainer,
      onClick: W ? e : () => {},
      "aria-label": ee
    }, N.default.createElement(p.default, {
      outgoingMsg: X
    }, N.default.createElement(l.FlexRow, {
      xstyle: F.deepContainerContent,
      align: "center"
    }, N.default.createElement(i.default, {
      xstyle: F.statusIcon,
      grow: 0
    }, r), N.default.createElement(i.default, {
      xstyle: F.content,
      grow: 1
    }, N.default.createElement(S.TextHeader, {
      color: "secondary",
      level: "3",
      weight: "medium",
      size: "15"
    }, t), o != null ? N.default.createElement(S.TextParagraph, {
      xstyle: F.contentMeta,
      size: "10"
    }, o) : null), N.default.createElement(i.default, {
      grow: 0
    }, N.default.createElement(C.default, {
      msg: U.unsafe()
    }, N.default.createElement("div", {
      className: (0, x.default)(F.meta)
    }, N.default.createElement(m.Meta, {
      msg: U
    }))))))));
  }
  return N.default.createElement("div", {
    className: (0, x.default)($.type === "unviewed" && F.unviewedBubble)
  }, te);
}
var W = (0, N.forwardRef)(U);
exports.default = W;
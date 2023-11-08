var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelectBarEntryPoint = exports.MultiSelectBar = undefined;
var r = a(require("../vendor/348926.js"));
var o = a(require("../vendor/435161.js"));
var l = a(require("../vendor/763105.js"));
var i = require("../app/72696.js");
var u = require("../app/738501.js");
var s = require("../app/374660.js");
var c = require("../app/396574.js");
var d = require("../app/780549.js");
var f = a(require("../app/883891.js"));
var p = require("../app/103440.js");
var m = require("./184385.js");
var h = a(require("./804418.js"));
var g = require("./784605.js");
var E = a(require("../app/395767.js"));
var v = require("./821130.js");
var _ = require("./596533.js");
var y = require("./361483.js");
var C = require("../app/163755.js");
var b = require("./501532.js");
var M = require("./769153.js");
var S = a(require("../app/932325.js"));
var T = require("../app/170749.js");
var w = require("./406506.js");
var A = require("./614724.js");
var P = require("./324017.js");
var O = require("../app/97858.js");
var k = require("../app/114850.js");
var D = require("../app/223713.js");
var I = require("../app/939716.js");
var R = require("../app/61113.js");
var N = require("../app/787742.js");
var x = a(require("./63047.js"));
var L = require("./664184.js");
var j = require("./774401.js");
var B = a(require("./444537.js"));
var F = require("./200915.js");
var G = require("../app/163139.js");
var U = a(require("../app/397778.js"));
var W = require("../main-chunk/931109.js");
var H = require("../app/625786.js");
var V = require("../app/390737.js");
var q = require("../app/676345.js");
var Y = require("./38291.js");
var z = require("./172095.js");
var K = require("./982015.js");
var Q = require("./880921.js");
var X = require("./145349.js");
var Z = require("./767301.js");
var J = require("../app/885313.js");
var $ = require("../app/561912.js");
var ee = require("../vendor/548360.js");
var te = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = oe(t);
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
a(require("../app/156720.js"));
var ne = a(require("../app/969651.js"));
var ae = require("../app/808446.js");
var re = a(require("../app/38085.js"));
function oe(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (oe = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const le = {
  iconStyles: {
    color: "svlsagor",
    transition: "i6inmy1f"
  }
};
const ie = require("../vendor/76672.js")({
  CONVERSATION_PANEL: "conversation_panel",
  MEDIA: "media",
  DOCS: "docs",
  LINKS: "links",
  PRODUCTS: "products"
});
function ue(e) {
  switch (e) {
    case ie.CONVERSATION_PANEL:
      return K.KIC_ENTRY_POINT_TYPE.CHAT;
    case ie.MEDIA:
      return K.KIC_ENTRY_POINT_TYPE.MEDIA;
    case ie.DOCS:
      return K.KIC_ENTRY_POINT_TYPE.DOCS;
    case ie.LINKS:
    case ie.PRODUCTS:
      return K.KIC_ENTRY_POINT_TYPE.LINKS;
  }
}
exports.MultiSelectBarEntryPoint = ie;
const se = X.MESSAGE_CONTEXT_MENU_OPTION_TYPE;
function ce(e, t) {
  if (e.length !== 0) {
    new P.MessageContextMenuActionsWamEvent({
      isAGroup: (0, C.getChat)(e[0]).isGroup,
      isMultiAction: e.length > 1,
      messageContextMenuAction: Q.MESSAGE_CONTEXT_MENU_ACTION_TYPE.CLICK,
      messageContextMenuOption: t
    }).commit();
  }
}
const de = (0, te.forwardRef)((e, t) => {
  const {
    selectedMessages: n,
    chat: a,
    toastPosition: P,
    onCancel: K,
    noSortOnForward: Q,
    downloadButton: X = true,
    entryPoint: oe
  } = e;
  const ie = (0, ne.default)();
  const de = (0, te.useRef)(null);
  const fe = (0, re.default)(t, de);
  const pe = () => {
    const e = n.getSelected();
    if (a) {
      d.Cmd.sendStarMsgs(a, e, null, P);
    }
    K();
    ce(e, se.STAR_OR_UNSTAR);
  };
  const me = () => {
    const e = n.getSelected();
    if (a) {
      d.Cmd.sendUnstarMsgs(a, e, null, P);
    }
    K();
    ce(e, se.STAR_OR_UNSTAR);
  };
  const he = function () {
    var e = (0, r.default)(function* () {
      const e = n.getSelected();
      try {
        yield (0, b.runBulkUndoKeepInChatUX)(e, ue(oe));
        K();
      } catch (e) {
        var t;
        __LOG__(2)`Bulk unkeep operation not complete. Reason: ${(t = e.reason) !== null && t !== undefined ? t : "unknown"}`;
      }
      ce(e, se.UNKNOWN);
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const ge = function () {
    var e = (0, r.default)(function* () {
      const e = n.getSelected();
      try {
        yield (0, b.runBulkKeepInChatUX)(e, ue(oe));
        K();
      } catch (e) {
        var t;
        __LOG__(2)`Bulk keep operation not complete. Reason: ${(t = e.reason) !== null && t !== undefined ? t : "unknown"}`;
      }
      ce(e, se.UNKNOWN);
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const Ee = () => {
    const e = (0, l.default)(n.getSelected(), e => e.mediaData);
    if (!e.length) {
      return;
    }
    const t = (0, l.default)(e, e => !e.mediaData.isDownloadable());
    if (t.length > 0) {
      V.ToastManager.open(te.default.createElement(H.Toast, {
        msg: ee.fbt._("Downloading…", null, {
          hk: "2sMvu6"
        })
      }));
      Promise.all((0, o.default)(t, e => e.downloadMedia({
        downloadEvenIfExpensive: true,
        rmrReason: J.WEBC_RMR_REASON_CODE.MULTI_SELECT_DOWNLOAD,
        isUserInitiated: true
      }))).then(() => {
        const t = (0, l.default)(e, e => e.mediaData.isDownloadable());
        if (e.length > t.length) {
          V.ToastManager.open(te.default.createElement(H.Toast, {
            msg: ee.fbt._({
              "*": "{count} files failed to be downloaded because they are no longer on your phone.",
              _1: "1 file failed to be downloaded because it's no longer on your phone."
            }, [ee.fbt._plural(e.length - t.length, "count")], {
              hk: "2UNm6T"
            })
          }));
        }
        if (t.length) {
          v.FileSaver.initDownload(t);
        }
      });
    } else {
      v.FileSaver.initDownload(e);
    }
    K();
    ce(e, se.UNKNOWN);
  };
  const ve = () => {
    const e = n.getSelected();
    k.ModalManager.open(te.default.createElement(A.ManageLabelFlowLoadable, {
      onLabelUpdateComplete: K,
      modelsToUpdate: e,
      onClose: () => k.ModalManager.close()
    }));
    ce(e, se.UNKNOWN);
  };
  (0, ae.useListeners)(n.getSelected().map(e => ({
    source: e,
    eventOrEvents: "change:star",
    callback: ie
  })));
  (0, ae.useListener)(n, "all", ie);
  (0, ae.useListener)(R.MsgCollection, "change:star change:kicState", e => {
    if (n.isSelected(e)) {
      ie();
    }
  });
  const _e = e.selectedMessages.getSelected();
  const ye = _e.length;
  const Ce = (0, s.isSuspendedGroup)(a) && (0, O.isGroupSuspendV2Enabled)();
  const be = _e.every(e => (0, I.canForwardMsg)(e));
  const Me = _e.every(e => (0, I.canStarMsg)(e));
  const Se = _e.every(e => (0, I.canDownloadMsg)(e) && e.mediaData);
  const Te = _e.every(e => !(0, C.getAsRevoked)(e));
  const we = _e.every(e => e.canShowKeepOrUnkeepOption());
  const Ae = _e.every(e => !(0, N.getIsNewsletterMsg)(e) || (0, I.canRevokeNewsletterMsg)(e));
  const Pe = ye === 1 && (0, I.canCopyNewsletterMessageLink)(_e[0]) ? te.default.createElement(U.default, {
    dataTab: W.TAB_ORDER.CHAT_SELECT_BAR,
    className: x.default.multiselectIcon,
    xstyle: [q.paddingAll8, le.iconStyles],
    Icon: w.LinkIcon,
    onClick: () => {
      const e = n.getSelected();
      (0, L.handleNewsletterMessageLinkCopyClick)(e[0]);
    },
    title: ee.fbt._("Copy link", null, {
      hk: "6Zw0Y"
    })
  }) : null;
  const Oe = Ce ? null : te.default.createElement(U.default, {
    disabled: !ye || !be,
    Icon: _.ForwardIcon,
    dataTab: W.TAB_ORDER.CHAT_SELECT_BAR,
    className: x.default.multiselectIcon,
    xstyle: [q.paddingAll8, le.iconStyles],
    onClick: () => {
      let e = n.getSelected();
      if (!Q && a) {
        e = a.sortMsgs(e);
      }
      const t = e.length;
      const r = () => {
        K();
      };
      const o = (0, l.default)(e, e => (0, I.canForwardMsg)(e));
      if (o.length) {
        if (t !== o.length) {
          k.ModalManager.open(te.default.createElement(p.ConfirmPopup, {
            title: ee.fbt._("Can't forward all messages", null, {
              hk: "1DuJ7d"
            }),
            onOK: () => {
              k.ModalManager.open(te.default.createElement(y.ForwardMessageModalLoadable, {
                msgs: o,
                onForward: r,
                onClose: () => k.ModalManager.close()
              }), {
                transition: "modal-flow"
              });
            },
            okText: ee.fbt._("Forward", null, {
              hk: "2T1QOm"
            }),
            onCancel: () => k.ModalManager.close(),
            cancelText: ee.fbt._("Cancel", null, {
              hk: "H0gNq"
            })
          }, ee.fbt._("Some messages can't be forwarded, do you want to forward rest of the messages?", null, {
            hk: "26pW9Q"
          })));
        } else {
          k.ModalManager.open(te.default.createElement(y.ForwardMessageModalLoadable, {
            msgs: e,
            onForward: r,
            onClose: () => k.ModalManager.close()
          }), {
            transition: "modal-flow"
          });
        }
      } else {
        k.ModalManager.open(te.default.createElement(p.ConfirmPopup, {
          title: ee.fbt._("Can't Forward", null, {
            hk: "3fgR0v"
          }),
          onOK: () => k.ModalManager.close(),
          okText: (0, E.default)("OK")
        }, ee.fbt._({
          "*": "Wait until the messages finish sending and displays a checkmark before forwarding.",
          _1: "Wait until the message finishes sending and displays a checkmark before forwarding."
        }, [ee.fbt._plural(t)], {
          hk: "Q1oiD"
        })));
      }
      ce(e, se.FORWARD);
    },
    title: ee.fbt._({
      "*": "Forward messages",
      _1: "Forward"
    }, [ee.fbt._plural(ye)], {
      hk: "3v4TXr"
    })
  });
  const ke = te.default.createElement(U.default, {
    Icon: m.DeleteIcon,
    dataTab: W.TAB_ORDER.CHAT_SELECT_BAR,
    className: x.default.multiselectIcon,
    xstyle: [q.paddingAll8, le.iconStyles],
    disabled: !ye || !Ae,
    title: S.default.t(47, {
      _plural: ye
    }),
    onClick: () => {
      const e = n.getSelected();
      if (a) {
        k.ModalManager.open(te.default.createElement(h.default, {
          chat: a,
          msgList: e.map(G.unproxy),
          toastPosition: P,
          onEnd: K
        }));
        j.UiRevokeActionHelper.trashCanSelected();
      }
      ce(e, se.DELETE);
    }
  });
  const De = ye > 0;
  let Ie;
  let Re;
  let Ne = De;
  let xe = De;
  let Le = De;
  let je = false;
  let Be = false;
  let Fe = false;
  _e.forEach(e => {
    if (e.canShowKeepOrUnkeepOption()) {
      je = true;
    } else {
      Be = true;
      Ne = false;
      if (e.keepIsLockedForMe()) {
        Fe = true;
      }
    }
    if (!(0, N.getIsKept)(e)) {
      xe = false;
    }
    if (!e.star) {
      Le = false;
    }
  });
  if (!((je || Fe) && Be)) {
    if (Ne || !ye && (0, u.isEphemeralSettingOn)(a)) {
      let e;
      let t;
      let n;
      if (ye && xe) {
        e = Y.UndoKeepInChatIcon;
        t = ee.fbt._("Unkeep", null, {
          hk: "2mWKDZ"
        });
        n = he;
      } else {
        e = M.KeepInChatIcon;
        t = ee.fbt._("Keep", null, {
          hk: "12Qm96"
        });
        n = ge;
      }
      Re = te.default.createElement(U.default, {
        Icon: e,
        dataTab: W.TAB_ORDER.CHAT_SELECT_BAR,
        xstyle: [q.paddingAll8, le.iconStyles],
        className: x.default.multiselectIcon,
        disabled: !ye || !we,
        title: t,
        onClick: n
      });
    } else {
      let e;
      let t;
      let n;
      if (ye && Le) {
        e = me;
        t = z.UnstarBtnIcon;
        n = ee.fbt._({
          "*": "Unstar messages",
          _1: "Unstar message"
        }, [ee.fbt._plural(ye)], {
          hk: "2BbE65"
        });
      } else {
        e = pe;
        t = F.StarBtnIcon;
        n = S.default.t(146, {
          _plural: ye
        });
      }
      Ie = te.default.createElement(U.default, {
        Icon: t,
        dataTab: W.TAB_ORDER.CHAT_SELECT_BAR,
        xstyle: [q.paddingAll8, le.iconStyles],
        className: x.default.multiselectIcon,
        disabled: !ye || !Me,
        title: n,
        onClick: e
      });
    }
  }
  const Ge = (0, i.canEditLabelAssociation)() && te.default.createElement(U.default, {
    disabled: !ye || !Te,
    dataTab: W.TAB_ORDER.CHAT_SELECT_BAR,
    className: x.default.multiselectIcon,
    xstyle: [q.paddingAll8, le.iconStyles],
    Icon: T.LabelIcon,
    onClick: () => {
      B.default.maybeShowLabelDataSharingDialog([a], f.default.SmbDataSharingLabelTargetValues.MESSAGE, ve, Z.SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_MESSAGE);
    },
    title: ee.fbt._("Label items", null, {
      hk: "2xOVMD"
    })
  });
  let Ue;
  if ((0, D.getModernizr)().adownload && X && Se && !Ce) {
    Ue = te.default.createElement(U.default, {
      Icon: g.DownloadIcon,
      dataTab: W.TAB_ORDER.CHAT_SELECT_BAR,
      className: x.default.multiselectIcon,
      xstyle: [q.paddingAll8, le.iconStyles],
      disabled: !ye,
      title: ee.fbt._("Download", null, {
        hk: "1g5Jix"
      }),
      onClick: Ee
    });
  }
  const We = (0, c.classnamesConvertMeToStylexPlease)({
    [x.default.mediaGalleryTheme]: e.theme === "mediaGallery",
    [x.default.multiControls]: true
  });
  return te.default.createElement("div", {
    ref: fe,
    className: We
  }, te.default.createElement(U.default, {
    title: ee.fbt._("Cancel forward", null, {
      hk: "3jdUcy"
    }),
    dataTab: W.TAB_ORDER.CHAT_SELECT_BAR,
    className: x.default.multiselectIcon,
    xstyle: [q.paddingAll8, le.iconStyles],
    Icon: $.XIcon,
    onClick: e.onCancel
  }), te.default.createElement("span", {
    className: x.default.multiCount
  }, ee.fbt._({
    "*": "{count} selected",
    _1: "1 selected"
  }, [ee.fbt._plural(ye, "count")], {
    hk: "PdQWz"
  })), Pe, Ge, Ie, Re, ke, Oe, Ue);
});
exports.MultiSelectBar = de;
de.displayName = "MultiSelectBar";
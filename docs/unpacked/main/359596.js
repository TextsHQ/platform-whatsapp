var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t,
    downloadMedia: a,
    mediaStage: i,
    vcard: c,
    onMessageClick: C
  } = e;
  const [z, oe, se, ce, fe, pe, me, he] = (0, re.useMsgValues)(e.msg.id, [W.getVcardFormattedName, k.getRtl, k.getDir, W.getIsSentByMe, W.getIsGroupMsg, k.getSenderObj, W.getIsVcardOverMmsDocument, W.getType]);
  const ge = (0, k.getChat)(t.unsafe());
  const Ee = (0, Z.vcardWids)(c);
  const ve = !!c && (0, Z.vcardIsBiz)(c);
  const _e = (0, X.useBusinessProfile)(ve && (0, p.isBizBot3pEnabled)() ? Ee[0] : null, ["isBizBot3p"]);
  const ye = (_e == null ? undefined : _e.isBizBot3p) === true;
  const Ce = (e, t) => {
    const a = ve && t;
    if (a) {
      (0, B.qplStartProfileView)("VCard");
    }
    (0, P.findChat)(e, "messageVCard", {
      forceUsync: ve
    }).then(e => {
      if (!(C == null)) {
        C();
      }
      U.ModalManager.close();
      v.Cmd.openChatFromUnread(e, h.ChatEntryPoint.Vcard).then(r => {
        if (r) {
          if (t) {
            const {
              InfoFlowLoadable: t
            } = require("./81095.js");
            S.DrawerManager.openDrawerRight(ae.default.createElement(t, {
              chat: e,
              key: `info-${e.id.toString()}`,
              profileEntryPoint: $.PROFILE_ENTRY_POINT.CONTACT_CARD
            }), {
              transition: "slide-left",
              uim: K.UIM.Manager.getTop(),
              focusType: D.FocusType.TABBABLE
            });
          }
          _.ComposeBoxActions.focus(e);
        } else if (a) {
          (0, B.qplEndProfileView)(l.QuickLogActionType.FAIL);
        }
      }).catch(() => {
        if (a) {
          (0, B.qplEndProfileView)(l.QuickLogActionType.FAIL);
        }
      });
    }).catch(() => {
      if (a) {
        (0, B.qplEndProfileView)(l.QuickLogActionType.FAIL);
      }
    });
  };
  const be = e => {
    if (c) {
      if (Ee.length > 1) {
        U.ModalManager.open(ae.default.createElement(J.default, {
          icon: ae.default.createElement(g.ChatIcon, {
            className: G.default.icon,
            directional: true
          }),
          vcard: c,
          onCancel: () => U.ModalManager.close(),
          onSelect: t => Ce(t, e)
        }));
      } else if (Ee.length > 0) {
        Ce(Ee[0], e);
      }
    }
  };
  const Me = (e, t) => {
    const n = {
      label: (0, w.default)("Message"),
      onClick: () => {
        be(false);
        if (ye) {
          (0, d.logBizBot3pContactCardJourneyEvent)("message_click");
        }
      },
      title: e ? ne.fbt._("Message {author}", [ne.fbt._param("author", e)], {
        hk: "1kM7Cg"
      }) : (0, w.default)("Message")
    };
    if (t === true) {
      return [n, {
        label: ne.fbt._("View AI", null, {
          hk: "3U0gb1"
        }),
        onClick: () => {
          be(true);
          (0, d.logBizBot3pContactCardJourneyEvent)("view_ai_click");
        }
      }];
    }
    if (ve === true) {
      return [n, {
        label: ne.fbt._("View business", null, {
          hk: "4BEiPi"
        }),
        onClick: () => be(true)
      }];
    }
    return [n, {
      label: ne.fbt._("Add to a group", null, {
        hk: "4gnHlp"
      }),
      onClick: () => {
        !function (e) {
          const t = (0, Z.vcardWids)(e);
          if (t.length > 1 && e) {
            U.ModalManager.open(ae.default.createElement(J.default, {
              icon: ae.default.createElement(u.AddUserIcon, {
                directional: true
              }),
              vcard: e,
              onCancel: () => U.ModalManager.close(),
              onSelect: de
            }));
          } else if (t.length > 0) {
            de(t[0]);
          }
        }(c);
      }
    }];
  };
  const Se = () => {
    U.ModalManager.open(ae.default.createElement(R.default, {
      msg: t.unsafe()
    }));
  };
  let Te;
  let we;
  let Ae;
  if (c) {
    const e = he === H.MSG_TYPE.VCARD ? z : null;
    Te = (0, o.default)(e || (0, Z.vcardGetNameFromParsed)(c) || te.default._("Contact", null, {
      hk: "30KbdJ"
    }).toString(), {
      length: 120,
      omission: te.default._("…", null, {
        hk: "3C0fAV"
      }).toString()
    });
    const t = Ee.find(e => e.isBot());
    if (t != null) {
      var Pe;
      const e = (Pe = m.BotProfileCollection.get(t)) === null || Pe === undefined ? undefined : Pe.name;
      if (e != null) {
        Te = e;
      }
      Ae = ae.default.createElement("div", {
        className: (0, E.classnamesConvertMeToStylexPlease)({
          [G.default.botSubheader]: true
        })
      }, ne.fbt._("AI", null, {
        hk: "4qfmDB"
      }), ae.default.createElement(s.AiSignalIcon, {
        width: 13,
        height: 13,
        className: G.default.icon
      }));
    }
    if (Ee.length > 0) {
      we = ae.default.createElement(L.BubbleActions, {
        items: Me(Te, t != null || ye)
      });
    }
  }
  const Oe = (0, M.isWideDisplay)(e.displayType);
  const ke = e.displayAuthor ? ae.default.createElement("div", {
    className: G.default.author
  }, ae.default.createElement(x.default, {
    msg: t,
    contact: pe,
    displayType: e.displayType
  })) : null;
  const De = e.quotedMsg ? ae.default.createElement("div", {
    className: G.default.quote
  }, e.quotedMsg) : null;
  const Ie = (0, E.classnamesConvertMeToStylexPlease)({
    [G.default.hasAuthor]: ke,
    [G.default.hasQuote]: De,
    [G.default.isPreview]: e.displayType === M.DISPLAY_TYPE.MSG_INFO,
    [G.default.isGallery]: e.displayType === M.DISPLAY_TYPE.STARRED_MSGS || e.displayType === M.DISPLAY_TYPE.CONTACT_CARD || e.displayType === M.DISPLAY_TYPE.GALLERY,
    [G.default.isAnnouncement]: Oe,
    [G.default.bubble]: true
  });
  const Re = he === H.MSG_TYPE.DOCUMENT && !!me && i === N.MEDIA_DATA_STAGE.ERROR_MISSING;
  const Ne = Re || !e.placeholder && (c || ge.isTrusted());
  const xe = O.Compatibility({
    selectable: true
  });
  const Le = e.placeholder ? ae.default.createElement(ie, {
    downloadMedia: a,
    mediaStage: i
  }) : ae.default.createElement(V.default, {
    size: 49,
    thumb: (0, Z.vcardThumbnail)(c),
    wid: q.ProfilePicThumbCollection.getThumbnailWidFromVcard(c)
  });
  let je;
  if (e.placeholder === true) {
    je = ae.default.createElement(ue, {
      mediaStage: i
    });
  } else {
    const e = ae.default.createElement(T.EmojiText, {
      text: Te,
      element: "div",
      className: G.default.name,
      selectable: true,
      dirMismatch: oe !== I.default.isRTL(),
      direction: se,
      formatters: xe
    });
    je = e;
    if (ye) {
      je = ae.default.createElement("div", null, e, ae.default.createElement(ee.WDSTextMuted, {
        xstyle: le.subtitleContainer,
        color: "secondary"
      }, ne.fbt._("AI", null, {
        hk: "4dvYk8"
      }), ae.default.createElement(s.AiSignalIcon, {
        xstyle: Q.uiMargin.start2,
        width: 12,
        height: 12
      })));
    }
  }
  if (e.placeholder) {
    we = i === N.MEDIA_DATA_STAGE.ERROR_MISSING ? ae.default.createElement(L.BubbleActions, {
      items: Me().map(e => (0, r.default)((0, r.default)({}, e), {}, {
        onClick: Se
      }))
    }) : ae.default.createElement(L.BubbleActions, {
      items: [],
      placeholder: true
    });
  }
  return ae.default.createElement(j.default, {
    className: Ie,
    contact: pe,
    msg: t.unsafe()
  }, ke, De, ae.default.createElement(f.default, {
    msg: t.unsafe(),
    wrapperClass: G.default.ctwaContext
  }), ae.default.createElement("div", {
    className: G.default.vcard,
    role: Ne ? "button" : null,
    onClick: () => {
      if (Ne) {
        if (!Re) {
          if (ye) {
            be(true);
            return void (0, d.logBizBot3pContactCardJourneyEvent)("card_click");
          } else {
            return void (c ? U.ModalManager.open(ae.default.createElement(b.default, {
              vcard: c
            })) : U.ModalManager.open(ae.default.createElement(y.ConfirmPopup, {
              onCancel: () => U.ModalManager.close(),
              onOK: () => {
                U.ModalManager.close();
                A.FileSaver.initDownload((0, Y.unproxy)(t.unsafe()));
              },
              okText: ne.fbt._("Download", null, {
                hk: "1g5Jix"
              }),
              cancelText: ne.fbt._("Cancel", null, {
                hk: "H0gNq"
              }),
              title: ne.fbt._("Download contact?", null, {
                hk: "THELh"
              })
            }, ne.fbt._("This contact can't be displayed in WhatsApp Web. Download it to open it with another app on your computer?", null, {
              hk: "3Ii3sv"
            }))));
          }
        }
        Se();
      }
    }
  }, ae.default.createElement("div", {
    className: G.default.avatar
  }, Le), ae.default.createElement("div", {
    className: G.default.body
  }, je, Ae), ae.default.createElement("div", {
    className: G.default.meta
  }, ae.default.createElement(F.Meta, {
    msg: t
  }))), we);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/339138.js"));
var l = require("../app/15842.js");
var i = require("./271460.js");
var u = require("./570588.js");
var s = require("./321545.js");
var c = require("./839872.js");
var d = require("../app/434554.js");
var f = a(require("./362842.js"));
var p = require("../app/354458.js");
var m = require("../app/169437.js");
var h = require("../app/338042.js");
var g = require("./404378.js");
var E = require("../app/396574.js");
var v = require("../app/780549.js");
var _ = require("../app/877171.js");
var y = require("../app/103440.js");
var C = require("../app/177938.js");
var b = a(require("./347409.js"));
var M = require("../app/356097.js");
var S = require("../app/900316.js");
var T = require("../app/305521.js");
var w = a(require("../app/395767.js"));
var A = require("./821130.js");
var P = require("../app/581354.js");
var O = function (e, t) {
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
}(require("../app/675886.js"));
var k = require("../app/163755.js");
var D = require("../app/299950.js");
var I = a(require("../app/932325.js"));
var R = a(require("./59036.js"));
var N = require("../app/172259.js");
var x = a(require("./599664.js"));
var L = require("./20493.js");
var j = a(require("./902538.js"));
var B = require("./609181.js");
var F = require("./789955.js");
var G = a(require("./271488.js"));
var U = require("../app/114850.js");
var W = require("../app/787742.js");
var H = require("../app/373070.js");
var V = a(require("../app/145632.js"));
var q = require("../app/446474.js");
var Y = require("../app/163139.js");
var z = a(require("../app/397778.js"));
var K = require("../app/238669.js");
var Q = require("../app/676345.js");
var X = require("./508228.js");
var Z = require("../app/517660.js");
var J = a(require("./80025.js"));
var $ = require("./679281.js");
var ee = require("../app/851488.js");
var te = a(require("../app/286816.js"));
var ne = require("../vendor/548360.js");
var ae = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var re = require("./871210.js");
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
  subtitleContainer: {
    display: "p357zi0d",
    alignItems: "gndfcl4n"
  }
};
function ie(e) {
  const {
    downloadMedia: t,
    mediaStage: n
  } = e;
  if (!n) {
    return ae.default.createElement(ce, {
      downloadMedia: t
    });
  }
  switch (n) {
    case N.MEDIA_DATA_STAGE.NEED_POKE:
    case N.MEDIA_DATA_STAGE.INIT:
      return ae.default.createElement(ce, {
        downloadMedia: t
      });
    case N.MEDIA_DATA_STAGE.FETCHING:
    case N.MEDIA_DATA_STAGE.REUPLOADING:
    case N.MEDIA_DATA_STAGE.DECRYPTING:
      return ae.default.createElement(se, {
        animate: true,
        type: "profileImage"
      });
    case N.MEDIA_DATA_STAGE.RESOLVED:
      return ae.default.createElement(se, {
        type: "profileImage"
      });
    case N.MEDIA_DATA_STAGE.ERROR_MISSING:
      return ae.default.createElement(ce, {
        downloadMedia: () => {}
      });
    default:
      return ae.default.createElement(se, {
        animate: true,
        type: "profileImage"
      });
  }
}
function ue(e) {
  const {
    mediaStage: t
  } = e;
  if (!t) {
    return ae.default.createElement(se, {
      type: "body"
    });
  }
  switch (t) {
    case N.MEDIA_DATA_STAGE.NEED_POKE:
    case N.MEDIA_DATA_STAGE.INIT:
      return ae.default.createElement(se, {
        type: "body"
      });
    case N.MEDIA_DATA_STAGE.FETCHING:
    case N.MEDIA_DATA_STAGE.REUPLOADING:
    case N.MEDIA_DATA_STAGE.DECRYPTING:
      return ae.default.createElement(se, {
        animate: true,
        type: "body"
      });
    case N.MEDIA_DATA_STAGE.RESOLVED:
    case N.MEDIA_DATA_STAGE.ERROR_MISSING:
    default:
      return ae.default.createElement(se, {
        type: "body"
      });
  }
}
function se(e) {
  const {
    animate: t,
    type: n
  } = e;
  const a = [G.default.placeholder, n === "profileImage" ? G.default.placeholderImage : G.default.placeholderText, t ? G.default.placeholderAnimation : null].filter(Boolean);
  return ae.default.createElement("div", {
    className: (0, E.classnamesConvertMeToStylexPlease)(...a)
  });
}
function ce(e) {
  const {
    downloadMedia: t
  } = e;
  return ae.default.createElement(z.default, {
    "aria-label": ne.fbt._("Download", null, {
      hk: "1g5Jix"
    }),
    Icon: c.AudioDownloadIcon,
    className: G.default.vcardDownloadStageIcon,
    onClick: () => {
      if (!(t == null)) {
        t();
      }
    }
  });
}
const de = e => {
  C.ContactCollection.find(e).then(e => {
    U.ModalManager.open(ae.default.createElement(i.AddContactToGroupFlowLoadable, {
      contact: e
    }), {
      transition: "modal-flow"
    });
  });
};
var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const e = (0, U.default)();
  (0, G.useListener)(c.Cmd, "chat_info_drawer", (t, n, a, r, o) => {
    m.DrawerManager.openDrawerRight(F.default.createElement(v.InfoFlowLoadable, {
      chat: t,
      key: `info-${t.id.toString()}`,
      showFullGroupDescription: n,
      scrollToParticipantList: a,
      profileEntryPoint: L.PROFILE_ENTRY_POINT.CHAT_MENU,
      sourceGroupChatOrNewsletter: r,
      focusNewsletterDescriptionOnMount: o
    }), {
      transition: "slide-left",
      uim: e,
      focusType: _.FocusType.TABBABLE,
      noFocus: true
    });
  });
  (0, G.useListener)(c.Cmd, "msg_info_drawer", t => {
    var n;
    if (P.Stream.displayInfo === P.StreamInfo.NORMAL) {
      if ((0, i.isBotEnabled)() && ((n = t.invokedBotWid) === null || n === undefined ? undefined : n.isBot())) {
        m.DrawerManager.openDrawerRight(F.default.createElement(E.GroupMsgInfoFlowLoadable, {
          msg: t
        }), {
          transition: "slide-left",
          uim: e
        });
      } else if ((0, g.getChat)(t).kind === u.ChatKindType.Chat) {
        m.DrawerManager.openDrawerRight(F.default.createElement(f.ContactMsgInfoFlowLoadable, {
          msg: t
        }), {
          transition: "slide-left",
          uim: e
        });
      } else {
        m.DrawerManager.openDrawerRight(F.default.createElement(E.GroupMsgInfoFlowLoadable, {
          msg: t
        }), {
          transition: "slide-left",
          uim: e
        });
      }
    } else {
      k.ToastManager.open(F.default.createElement(O.Toast, {
        msg: B.fbt._("Couldn't display message info. Try again later.", null, {
          hk: "mRFf6"
        }),
        id: (0, O.genId)("msg_info_failed")
      }));
    }
  });
  (0, G.useListener)(c.Cmd, "chat_search", t => {
    m.DrawerManager.openDrawerRight(F.default.createElement(s.default, {
      chat: t
    }), {
      transition: "slide-left",
      uim: e
    });
  });
  (0, G.useListener)(c.Cmd, "attach_media_drawer", t => {
    var n;
    let {
      chat: a,
      attachments: u,
      animationName: s,
      initCaption: c,
      onComplete: d,
      fileOrigin: f,
      sendAsSticker: p,
      onSend: h,
      onCancel: g
    } = t;
    const E = () => {
      const e = a.attachMediaContents;
      if (e && u) {
        if (f) {
          e.processAttachments(u, f, a);
        } else {
          __LOG__(3)`ChatActionListener:onAttachMediaDrawer fileOrigin is not specified, fallback to default`;
          e.processAttachments(u, x.MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY, a);
        }
      }
    };
    const v = (n = a.getComposeContents()) === null || n === undefined ? undefined : n.text;
    if (v != null && (0, i.isBotEnabled)()) {
      const e = new RegExp(T.userJidRegexStr, "g");
      let t = e.exec(v);
      for (; t != null;) {
        if ((0, j.createWid)(t[1]).isBot()) {
          return;
        }
        t = e.exec(v);
      }
    }
    m.DrawerManager.existsDrawerMid(t => {
      if (t) {
        return void E();
      }
      if (!a.attachMediaContents) {
        a.setAttachMediaContents(new o.default({
          chatParticipantCount: a.getParticipantCount()
        }));
      }
      const n = (0, r.default)(a.attachMediaContents, "chat.attachMediaContents");
      m.DrawerManager.openDrawerMid(F.default.createElement(l.AttachMediaFlowLoadable, {
        chat: a,
        onComplete: d,
        onSend: h,
        onCancel: g,
        initCaption: c,
        mediaCollection: n,
        sendAsSticker: p
      }), {
        transition: s || "slide-up",
        uim: e,
        noFocus: true,
        onEnterAnimationComplete: E,
        focusType: _.FocusType.TABBABLE
      });
    });
  });
  (0, G.useListener)(c.Cmd, "verification_drawer", t => {
    m.DrawerManager.openDrawerRight(F.default.createElement(D.default.VerificationDrawerLoadable, {
      contact: d.ContactCollection.assertGet(t),
      isFirstLevel: true
    }), {
      transition: "slide-left",
      uim: e
    });
  });
  (0, G.useListener)(c.Cmd, "media_viewer_modal", t => {
    const {
      msg: n,
      getZoomNode: a,
      currentTime: o,
      highlightedMsgIds: l
    } = t;
    if (S.MsgCollection.get(n.id)) {
      M.ModalManager.openMedia(F.default.createElement(C.MediaViewerFlowLoadable, {
        msg: n,
        startTime: o,
        getZoomNode: a,
        highlightedMsgIds: l
      }), {
        transition: "media-viewer",
        uim: (0, r.default)(e, "uim")
      });
    } else {
      M.ModalManager.open(F.default.createElement(y.default, {
        msg: n
      }));
    }
  });
  (0, G.useListener)(c.Cmd, "ephemeral_drawer", (t, n, a) => {
    const r = t.isGroup ? N.DISAPPEARING_MODE_ENTRY_POINT_TYPE.GROUP_CHAT_DISAPPEARING_MESSAGES_SETTING : N.DISAPPEARING_MODE_ENTRY_POINT_TYPE.INDIVIDUAL_CHAT_DISAPPEARING_MESSAGES_SETTING;
    m.DrawerManager.openDrawerRight(F.default.createElement(h.default, {
      chat: t,
      showNux: n,
      entryPoint: a,
      onDDMSettingsClick: () => (t => {
        m.DrawerManager.openDrawerRight(F.default.createElement(p.default, {
          onClose: () => m.DrawerManager.closeDrawerRight(),
          entryPoint: t
        }), {
          transition: "slide-left",
          uim: e
        });
      })(r)
    }), {
      transition: "slide-left",
      uim: e
    });
  });
  (0, G.useListener)(c.Cmd, "voip_start_group_call", (e, t) => {
    var n;
    var a;
    const r = ((n = (a = e.groupMetadata) === null || a === undefined ? undefined : a.participants) !== null && n !== undefined ? n : []).map(e => e.contact.id);
    const o = F.default.createElement(R.default, {
      isVideo: t,
      groupParticipants: r,
      onStartGroupCall: e => I.default.Voip.groupCallStart(e, t)
    });
    M.ModalManager.open(o, {
      transition: "modal-flow"
    });
  });
  (0, G.useListener)(c.Cmd, "merchant_details_drawer", t => {
    m.DrawerManager.openDrawerRight(F.default.createElement(b.MerchantDetailsDrawerLoadable, {
      key: "legal-entity-details",
      contactId: t,
      onClose: () => m.DrawerManager.closeDrawerRight()
    }), {
      transition: "slide-left",
      uim: e
    });
  });
  (0, G.useListener)(c.Cmd, "open_sticker_pack", t => {
    m.DrawerManager.openDrawerRight(F.default.createElement(A.default.StickerStoreFlowLoadable, {
      stickerPackId: t,
      onSticker: w.default
    }), {
      transition: "slide-left",
      uim: e
    });
  });
};
var r = a(require("../app/670983.js"));
var o = a(require("../app/788998.js"));
var l = require("./111757.js");
var i = require("../app/354458.js");
var u = require("../app/953213.js");
var s = a(require("./207598.js"));
var c = require("../app/780549.js");
var d = require("../app/177938.js");
var f = require("./655183.js");
var p = a(require("./41493.js"));
var m = require("../app/900316.js");
var h = a(require("./365889.js"));
var g = require("../app/163755.js");
var E = require("./996596.js");
var v = require("./81095.js");
var _ = require("../app/299950.js");
var y = a(require("./59036.js"));
var C = require("./19645.js");
var b = require("./165294.js");
var M = require("../app/114850.js");
var S = require("../app/61113.js");
var T = require("../app/472685.js");
var w = a(require("./101825.js"));
var A = a(require("./497327.js"));
var P = require("../app/973981.js");
var O = require("../app/625786.js");
var k = require("../app/390737.js");
var D = a(require("./804477.js"));
var I = a(require("../app/961745.js"));
var R = a(require("./990704.js"));
var N = require("./901952.js");
var x = require("../app/169467.js");
var L = require("./679281.js");
var j = require("../app/669050.js");
var B = require("../vendor/548360.js");
var F = a(require("../vendor/667294.js"));
var G = require("../app/808446.js");
var U = a(require("../app/321201.js"));
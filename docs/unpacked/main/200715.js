var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    cmdData: t,
    isExternal: n,
    sessionId: a
  } = e;
  switch (t.resultType) {
    case "GROUP_INVITE":
      {
        c.Cmd.closeStatusViewer();
        const e = t.data;
        T.ModalManager.open(Q.default.createElement(C.default, {
          groupCode: e.code,
          source: "invite_link"
        }));
        X(V.DEEP_LINK_TYPE.DEEP_LINK_GROUP_INVITE, n);
        return true;
      }
    case "CATALOG":
      {
        c.Cmd.closeStatusViewer();
        const {
          catalogOwnerJid: e,
          utm: a
        } = t.data;
        (function (e, t) {
          T.ModalManager.open(Q.default.createElement(P.OpenChatFlow, {
            chatId: (0, K.createWid)(e),
            onSuccess: n => {
              self.setTimeout(() => {
                N.QPL.markerStart(R.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, {
                  annotations: {
                    string: {
                      EntryPoint: "Deeplink"
                    }
                  }
                });
                if (t) {
                  (0, j.addUtmToChat)(n.id, t);
                }
                _.DrawerManager.openDrawerRight(Q.default.createElement(I.ProductDetailsFlowLoadable, {
                  chat: n,
                  catalogOwnerJid: e
                }), {
                  transition: "slide-left",
                  uim: L.UIM.Manager.getTop(),
                  newDrawerContext: (0, k.buildProductCatalogContext)(new D.ProductCatalogSession(), (0, m.getMaybeBizPlatformForLogging)(e), G.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_DEEPLINK)
                });
              }, 100);
            },
            msgText: null
          }), {
            transition: "modal-flow"
          });
        })(e, a);
        X(V.DEEP_LINK_TYPE.DEEP_LINK_CATALOG, n);
        return true;
      }
    case "PRODUCT":
      {
        c.Cmd.closeStatusViewer();
        const {
          businessOwnerJid: e,
          productId: a,
          utm: r
        } = t.data;
        (function (e, t, n) {
          const a = (0, k.buildProductCatalogContext)(new D.ProductCatalogSession(), (0, m.getMaybeBizPlatformForLogging)(e), G.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_DEEPLINK);
          T.ModalManager.open(Q.default.createElement(P.OpenChatFlow, {
            chatId: (0, K.createWid)(e),
            onSuccess: r => {
              self.setTimeout(() => {
                (0, F.qplStartProductView)("Deeplink");
                if (n) {
                  (0, j.addUtmToChat)(r.id, n);
                }
                _.DrawerManager.openDrawerRight(Q.default.createElement(I.ProductDetailsFlowLoadable, {
                  chat: r,
                  productInfo: {
                    productId: t,
                    businessOwnerJid: e
                  },
                  refreshCarousel: true
                }), {
                  transition: "slide-left",
                  uim: L.UIM.Manager.getTop(),
                  newDrawerContext: a
                });
              }, 100);
            },
            msgText: null
          }), {
            transition: "modal-flow"
          });
        })(e, a, r);
        X(V.DEEP_LINK_TYPE.DEEP_LINK_PRODUCT, n);
        return true;
      }
    case "MSG_SEND":
      {
        c.Cmd.closeStatusViewer();
        const e = t.data;
        const {
          text: l,
          phone: s,
          type: d,
          customURL: f,
          conversionTuple: p,
          utm: m
        } = e;
        const v = e.ctwaContextLinkData;
        const y = f != null || d === "business_profile";
        if (s || y) {
          const t = a != null && (0, u.smbClickToChatLoggingEnabled)() ? {
            handleOnce() {
              new E.DeepLinkMsgSentWamEvent({
                deepLinkAction: W.DEEP_LINK_ACTION.MSG_SENT,
                deepLinkSessionId: a
              }).commit();
            }
          } : undefined;
          T.ModalManager.open(Q.default.createElement(P.OpenChatFlow, (0, r.default)({}, function (e) {
            let {
              phone: t,
              customURL: n,
              url: a,
              lid: r
            } = e;
            if (r != null && (0, O.testLidWaMeLinkEnabled)()) {
              const e = (0, K.createWid)(r);
              if (e.isLid() && t != null) {
                return {
                  chatId: e,
                  pnForLid: (0, K.createWid)(t)
                };
              }
            }
            if (t != null) {
              return {
                chatId: (0, K.createWid)(t)
              };
            }
            return {
              customURL: (0, o.default)(n, "customURL"),
              fallbackURL: a
            };
          }(e), {
            msgText: l,
            onSuccess: e => {
              var t;
              if (p) {
                (0, h.handleChatConversationOpenedWithNewMessage)(e, p);
              }
              if (y) {
                (0, g.logClickOnCustomURL)(e);
                (0, g.logMessageSentByCustomURL)(e);
              }
              if (m) {
                (0, j.addUtmToChat)(e.id, m);
              }
              if ((t = e.contact.businessProfile) === null || t === undefined ? undefined : t.isBizBot3p) {
                (0, i.logBizBot3pDeepLinkClickEvent)();
              }
              if (l) {
                e.urlText = true;
              }
              e.urlNumber = true;
              if (y) {
                _.DrawerManager.openDrawerRight(Q.default.createElement(b.InfoFlowLoadable, {
                  chat: e,
                  key: `info-${e.id.toString()}`,
                  profileEntryPoint: z.PROFILE_ENTRY_POINT.CUSTOM_URL_LINK
                }), {
                  transition: "slide-left",
                  focusType: M.FocusType.TABBABLE
                });
              }
            },
            ctwaContextLinkData: v,
            sendLogAttributes: t
          })), {
            transition: "modal-flow"
          });
          X(v ? V.DEEP_LINK_TYPE.DEEP_LINK_CTWA : V.DEEP_LINK_TYPE.DEEP_LINK_CHAT, n, a);
        } else {
          T.ModalManager.open(Q.default.createElement(x.SendMsgMultiModalLoadable, {
            msgText: l,
            urlText: true
          }), {
            transition: "modal-flow"
          });
          X(V.DEEP_LINK_TYPE.DEEP_LINK_MSG_FORWARD, n);
        }
        return true;
      }
    case "PUSH_NOTIFICATION":
      return true;
    case "CREATE_COMMUNITY":
      {
        if (!(0, f.communitiesCreationEnabled)()) {
          return false;
        }
        c.Cmd.closeStatusViewer();
        _.DrawerManager.openDrawerLeft(Q.default.createElement(w.NewCommunityFlowLoadable, null), {
          focusType: M.FocusType.TABBABLE
        });
        const {
          entrypointType: e
        } = t.data;
        d.UiCommunityCreationAction.startSession((0, d.getDeeplinkEntrypointType)(e));
        d.UiCommunityCreationAction.enter(U.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.DEEP_LINK);
        X(V.DEEP_LINK_TYPE.DEEP_LINK_CREATE_COMMUNITY, n);
        return true;
      }
    case "NEWSLETTER":
      c.Cmd.closeStatusViewer();
      (0, A.execNewsletterApiCmd)(t.data);
      X(V.DEEP_LINK_TYPE.DEEP_LINK_CHANNEL, n);
      return true;
    case "AVATAR_STICKERPACK":
      {
        var v;
        const e = t.data;
        const n = (v = e.url) !== null && v !== undefined ? v : "";
        window.location.replace(n);
        return true;
      }
    case "ADVERTISE":
      {
        if (!(0, S.isSMB)()) {
          return false;
        }
        const e = (0, l.getActiveAccountInfo)();
        if (e == null) {
          return false;
        }
        const {
          campaignId: n
        } = t.data;
        (0, s.handleAdCreation)({
          activeAccountInfo: e,
          lwiEntryPoint: q.LWI_ENTRY_POINT.SMB_HOME_BANNER,
          sourceAdCreationType: "whatsapp_smb_web_ad_creation_home_banner",
          waCampaignId: n
        });
        return true;
      }
    case "MANAGE_ADS":
      {
        if (!(0, S.isSMB)()) {
          return false;
        }
        const e = (0, l.getActiveAccountInfo)();
        if (e == null) {
          return false;
        }
        switch (t.trigger) {
          case "chatListBanner":
            (0, s.handleManageAds)(e, "whatsapp_smb_web_manage_ads_chat_list_banner", Y.MANAGE_ADS_ENTRY_POINT.SMB_CHAT_LIST_CTWA_BANNER);
            break;
          default:
            t.trigger;
            (0, s.handleManageAds)(e, "whatsapp_smb_web_manage_ads_native", Y.MANAGE_ADS_ENTRY_POINT.SMB_NATIVE_ADS_MANAGEMENT);
        }
        return true;
      }
    case "MESSAGE_YOURSELF":
      try {
        const e = (0, B.getMeUser)();
        (0, y.findChat)(e, "newChatFlow").then(e => {
          c.Cmd.openChatFromUnread(e).then(t => {
            if (t) {
              p.ComposeBoxActions.focus(e);
            }
          });
        });
      } catch (e) {
        __LOG__(4, undefined, new Error())`Opening self chat failed with exceptions`;
      }
      return true;
    default:
      t.resultType;
      return false;
  }
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../app/670983.js"));
var l = require("./113428.js");
var i = require("../app/434554.js");
var u = require("../app/72696.js");
var s = require("./628445.js");
var c = require("../app/780549.js");
var d = require("./440067.js");
var f = require("../app/174834.js");
var p = require("../app/877171.js");
var m = require("./834110.js");
var h = require("./762559.js");
var g = require("./68351.js");
var E = require("./624478.js");
var v = require("./786134.js");
var _ = require("../app/900316.js");
var y = require("../app/581354.js");
var C = a(require("./757926.js"));
var b = require("./81095.js");
var M = require("../app/299950.js");
var S = require("../app/94602.js");
var T = require("../app/114850.js");
var w = require("./219548.js");
var A = require("./491860.js");
var P = require("../app/489891.js");
var O = require("../app/190274.js");
var k = require("../app/932523.js");
var D = require("../app/242677.js");
var I = require("./639793.js");
var R = require("../app/316348.js");
var N = require("../app/555622.js");
var x = require("./215913.js");
var L = require("../app/238669.js");
var j = require("../app/7184.js");
var B = require("../app/459857.js");
var F = require("./887222.js");
var G = require("../app/455915.js");
var U = require("./135516.js");
var W = require("./801542.js");
var H = require("../app/632726.js");
var V = require("./583324.js");
var q = require("./846377.js");
var Y = require("./27224.js");
var z = require("./679281.js");
var K = require("../app/669050.js");
var Q = a(require("../vendor/667294.js"));
function X(e, t, n) {
  const a = t ? H.DEEP_LINK_OPEN_FROM.DEEP_LINK_EXTERNAL : H.DEEP_LINK_OPEN_FROM.DEEP_LINK_WA_LINK_CLICK;
  new v.DeepLinkOpenWamEvent({
    deepLinkOpenFrom: a,
    deepLinkType: e,
    deepLinkSessionId: n
  }).commit();
}
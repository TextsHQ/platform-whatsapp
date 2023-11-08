var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDetailImageSizeForTextSize = function (e) {
  return (0, v.getElectronCompatibleStyles)(e).detailImageSize;
};
exports.getListHeightForTextsize = function (e) {
  return (0, v.getElectronCompatibleStyles)(e).height;
};
exports.getTextsizeClassForScale = function (e) {
  return (0, v.getElectronCompatibleStyles)(e).classname;
};
exports.handleManageAds = exports.handleAdCreation = undefined;
exports.openChat = function (e, t) {
  return (0, g.findChat)(e, "chatListUtils").then(e => t ? f.Cmd.openChatAt(e, t, d.ChatEntryPoint.Chatlist).then(t => {
    if (t) {
      p.ComposeBoxActions.focus(e);
    }
    return e;
  }) : e !== c.ChatCollection.getActive() ? f.Cmd.openChatFromUnread(e, d.ChatEntryPoint.Chatlist).then(t => {
    if (t) {
      p.ComposeBoxActions.focus(e);
    }
    return e;
  }) : (p.ComposeBoxActions.focus(e), e));
};
var r = a(require("../vendor/348926.js"));
var o = require("./445693.js");
var l = require("./848394.js");
var i = a(require("./383921.js"));
var u = require("../app/72696.js");
var s = require("./788291.js");
var c = require("../app/351053.js");
var d = require("../app/338042.js");
var f = require("../app/780549.js");
var p = require("../app/877171.js");
var m = require("../app/753233.js");
var h = a(require("../app/395767.js"));
var g = require("../app/581354.js");
var E = require("../app/114850.js");
var v = require("../app/121232.js");
var _ = require("../app/625786.js");
var y = require("../app/390737.js");
var C = require("./282952.js");
var b = require("../vendor/548360.js");
var M = a(require("../vendor/667294.js"));
exports.handleAdCreation = e => {
  let {
    activeAccountInfo: t,
    lwiEntryPoint: n,
    sourceAdCreationType: a,
    waCampaignId: l
  } = e;
  const u = (0, o.logAdCreationEntryTap)({
    lwiEntryPoint: n,
    userHasLinkedFbPage: t.hasFacebookPage,
    waCampaignId: l
  });
  const c = (0, o.getLwiAdsIdentityTypeFromActiveAccountInfo)(t);
  (0, o.logAdCreationNuxScreen)(C.LWI_SCREEN_ACTION.LWI_ACTION_VIEW, c, t.hasFacebookPage);
  const d = function () {
    var e = (0, r.default)(function* () {
      (0, o.logAdCreationNuxScreen)(C.LWI_SCREEN_ACTION.LWI_ACTION_NUX_CONTINUE_TAPPED, c, t.hasFacebookPage);
      try {
        const e = yield (0, s.getWhatsappAdCreationUrl)(t, a, u);
        (0, m.openExternalLink)(e);
      } catch (e) {
        (() => {
          const e = (0, h.default)("OK");
          y.ToastManager.open(M.default.createElement(_.Toast, {
            action: {
              dismiss: true,
              actionText: e
            },
            msg: b.fbt._("Something went wrong. Please try again.", null, {
              hk: "2fHFsq"
            }),
            id: (0, _.genId)()
          }));
        })();
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  E.ModalManager.open(M.default.createElement(i.default, {
    onOK: d,
    onClose: () => (0, o.logAdCreationNuxScreen)(C.LWI_SCREEN_ACTION.LWI_ACTION_CANCEL_DIALOG_BUTTON_TAPPED, c, t.hasFacebookPage),
    onLearnMore: () => (0, o.logAdCreationNuxScreen)(C.LWI_SCREEN_ACTION.LWI_ACTION_LEARN_MORE_TAPPED, c, t.hasFacebookPage),
    isPagelessAd: t.type === "whatsapp"
  }));
};
exports.handleManageAds = (e, t, n) => {
  if (e == null) {
    return;
  }
  if (t !== "whatsapp_smb_web_manage_ads_native" && (0, u.adManagementEnabled)()) {
    return void (0, l.maybeOpenAdsManagementScreen)(e);
  }
  (0, o.logManageAdsEntryPointTap)(n);
  const a = (0, s.getWhatsappManageAdsUrl)(e, t);
  (0, m.openExternalLink)(a);
};
var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = [];
  for (const a of e) {
    let e;
    switch (a.name) {
      case "cta_url":
        e = y(a, t);
        break;
      case "quick_reply":
        e = C(a, t);
        break;
      case "cta_call":
        e = b(a, t);
        break;
      case "cta_catalog":
        e = M(a);
    }
    if (e != null) {
      n.push(e);
    }
  }
  return n;
};
var r = require("../app/72696.js");
var o = require("./261609.js");
var l = a(require("./824877.js"));
var i = require("../app/753233.js");
var u = require("./341875.js");
var s = require("../app/163755.js");
var c = require("./479935.js");
var d = require("../app/114850.js");
var f = require("../app/61113.js");
var p = require("./752652.js");
var m = require("./461424.js");
var h = require("../app/498703.js");
var g = require("./822674.js");
var E = require("./735543.js");
var v = require("./831246.js");
var _ = a(require("../vendor/667294.js"));
function y(e, t) {
  if (e.data.url != null) {
    return {
      label: e.data.label,
      onClick: () => {
        if ((0, r.isPremiumMessagesUrlCtaDialogEnabled)()) {
          if (e.data.url == null) {
            return;
          }
          d.ModalManager.open(_.default.createElement(u.ExternalLinkPopup, {
            url: e.data.url,
            merchantUrl: e.data.merchantUrl,
            onOkClick: () => {
              S(e, t);
            }
          }), {
            transition: "modal-flow"
          });
        } else {
          if (e.data.url == null) {
            return;
          }
          (0, i.openExternalLink)(e.data.url);
          S(e, t);
        }
      },
      Icon: c.HsmLinkIcon
    };
  }
}
function C(e, t) {
  const n = (0, s.getChat)(t.unsafe());
  const a = t.unsafe();
  return {
    label: e.data.label,
    Icon: m.ReplyChatIcon,
    disabled: e.data.disabled,
    onClick: () => {
      var r;
      var l;
      (0, h.sendTextMsgToChat)(n, (r = e.data) === null || r === undefined ? undefined : r.label, {
        quotedMsg: a,
        selectedIndex: e.index,
        selectedId: (l = e.data) === null || l === undefined ? undefined : l.selectionId
      });
      S(e, t);
      const i = f.MsgCollection.get(t.id);
      if (i != null) {
        (0, o.markInteractiveButtonClicked)(i, e.index);
      }
    }
  };
}
function b(e, t) {
  var n;
  return {
    label: (n = e.data) === null || n === undefined ? undefined : n.label,
    onClick: () => {
      (0, l.default)();
      S(e, t);
    },
    Icon: p.PhoneIcon
  };
}
function M(e) {
  return {
    label: e.data.label,
    onClick: () => {
      if (e.data.catalogUrl != null) {
        (0, i.openExternalLink)(e.data.catalogUrl);
      }
    }
  };
}
function S(e, t) {
  var n;
  if ((0, r.isPremiumMessagesClickLoggingEnabled)() && t.bizSource === "smb_promo") {
    new g.SmbPaidMessagesButtonLoggerWamEvent({
      businessPhoneNumber: Number(t.from.user),
      pmButtonCount: (n = t.buttons) === null || n === undefined ? undefined : n.length,
      pmButtonEventType: E.PM_BUTTON_EVENT_TYPE.CLICK,
      pmButtonIndex: e.index,
      pmButtonType: T(e),
      pmServerCampaignId: t.pmCampaignId
    }).commit();
  }
}
function T(e) {
  switch (e.name) {
    case "cta_url":
      return v.PM_BUTTON_TYPE.CTA_URL;
    case "cta_call":
      return v.PM_BUTTON_TYPE.CTA_CALL;
    case "quick_reply":
      return v.PM_BUTTON_TYPE.QUICK_REPLY;
    case "cta_catalog":
      return v.PM_BUTTON_TYPE.CTA_CATALOG;
  }
}
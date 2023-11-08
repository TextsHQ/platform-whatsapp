var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, p.systemMessageActionTextStylingEnabled)();
  switch (e.subtype) {
    case "identity":
      {
        const n = e.body == null ? null : o.ContactCollection.get(e.body);
        if (n != null && (0, s.getIsMe)(n)) {
          __LOG__(4, undefined, new Error(), true)`formatE2ENotification: receive identity notification of self`;
          SEND_LOGS("SelfIdentityNotificationError");
          const n = (0, c.getChat)(e.unsafe());
          if (n.isUser) {
            const e = n.contact ? (0, u.getFormattedName)(n.contact) : (0, m.widToFormattedUser)(n.id);
            if (t) {
              return h.fbt._("Your security code with {contactName} changed", [h.fbt._param("contactName", e)], {
                hk: "3L6p6w"
              });
            } else {
              return h.fbt._("Your security code with {contactName} changed. Click to learn more", [h.fbt._param("contactName", e)], {
                hk: "1o9Lm1"
              });
            }
          }
          if (n.isGroup) {
            if (t) {
              return h.fbt._("Your security code with all participants changed", null, {
                hk: "CcgyS"
              });
            } else {
              return h.fbt._("Your security code with all participants changed. Click to learn more", null, {
                hk: "2TU1ss"
              });
            }
          } else if (n.isBroadcast) {
            if (t) {
              return h.fbt._("Your security code with all recipients changed", null, {
                hk: "47xclR"
              });
            } else {
              return h.fbt._("Your security code with all recipients changed. Click to learn more", null, {
                hk: "3O1NOU"
              });
            }
          } else {
            return "";
          }
        }
        const r = n ? (0, u.getFormattedName)(n) : (0, m.widToFormattedUser)(e.body);
        if (t) {
          return h.fbt._("Your security code with {contactName} changed", [h.fbt._param("contactName", r)], {
            hk: "3L6p6w"
          });
        } else {
          return h.fbt._("Your security code with {contactName} changed. Click to learn more", [h.fbt._param("contactName", r)], {
            hk: "1o9Lm1"
          });
        }
      }
    case "device":
      return (0, l.default)(e);
    case "encrypt":
      {
        const n = e.id.remote;
        if (g.default.isGroup(n)) {
          if ((0, a.isSupportGroup)((0, c.getMaybeChat)(e.unsafe()))) {
            return (0, d.SupportChatSystemMessage)();
          } else if (_.default.isGroupCallEnabled()) {
            if (t) {
              return h.fbt._("Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them", null, {
                hk: "3WwhU8"
              });
            } else {
              return h.fbt._("Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more", null, {
                hk: "2dl4hq"
              });
            }
          } else if (t) {
            return h.fbt._("Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them", null, {
              hk: "2qNjw6"
            });
          } else {
            return h.fbt._("Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more", null, {
              hk: "LojC1"
            });
          }
        }
        if ((0, i.default)(n.user)) {
          return (0, d.SupportChatSystemMessage)();
        }
        if (g.default.isBroadcast(n)) {
          if (t) {
            return h.fbt._("Messages you send to this broadcast list are secured with end-to-end encryption", null, {
              hk: "b7tbb"
            });
          } else {
            return h.fbt._("Messages you send to this broadcast list are secured with end-to-end encryption. Click to learn more", null, {
              hk: "32QB16"
            });
          }
        }
        if ((0, f.isMeAccount)(n)) {
          if (t) {
            return h.fbt._("Messages to yourself are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.", null, {
              hk: "UX8Fu"
            });
          } else {
            return h.fbt._("Messages to yourself are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more", null, {
              hk: "4GekJf"
            });
          }
        }
        if (_.default.isVoiceCallEnabled() || _.default.isVideoCallEnabled()) {
          if (t) {
            return h.fbt._("Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them", null, {
              hk: "3UPpwH"
            });
          } else {
            return h.fbt._("Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more", null, {
              hk: "1EIpRa"
            });
          }
        } else if (t) {
          return h.fbt._("Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them", null, {
            hk: "35hYgI"
          });
        } else {
          return h.fbt._("Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more", null, {
            hk: "bvNOZ"
          });
        }
      }
    case "encrypt_now":
      if (t) {
        return h.fbt._("Messages and calls are now end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them", null, {
          hk: "2K6DCP"
        });
      } else {
        return h.fbt._("Messages and calls are now end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more", null, {
          hk: "3Hq7Op"
        });
      }
    case "e2e_identity_unavailable":
      return h.fbt._("Security code notifications are no longer available for this chat.", null, {
        hk: "3mV4bQ"
      });
    case "chat_psa":
      if (t) {
        return h.fbt._("This is an official account of WhatsApp", null, {
          hk: "3E51UM"
        });
      } else {
        return h.fbt._("This is an official account of WhatsApp. Click to learn more", null, {
          hk: "41q3Wg"
        });
      }
    default:
      return "";
  }
};
var i = r(require("./143589.js"));
var a = require("./374660.js");
var o = require("./177938.js");
var s = require("./660666.js");
var l = r(require("./36851.js"));
var u = require("./714574.js");
var c = require("./163755.js");
var d = require("./666836.js");
var p = require("./108590.js");
var f = require("./459857.js");
var _ = r(require("./571256.js"));
var g = r(require("./124928.js"));
var m = require("./931019.js");
var h = require("../vendor/548360.js");
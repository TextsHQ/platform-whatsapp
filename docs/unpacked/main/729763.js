var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatBspModalText = g;
exports.formatFbModalText = h;
exports.formatNotificationTemplateModalText = function (e) {
  const {
    id: t
  } = e;
  switch (e.subtype) {
    case "non_verified_transition":
      return p.fbt._("The business account for {businessName} has registered as a standard user account and may no longer belong to the business.", [p.fbt._param("businessName", (0, i.default)(e))], {
        hk: "4h1D7O"
      });
    case "unverified_transition":
      return p.fbt._("The business account you're chatting with may belong to {businessName}. WhatsApp hasn't verified their name yet.", [p.fbt._param("businessName", (0, i.default)(e))], {
        hk: "1vU79m"
      });
    case "verified_transition":
      return p.fbt._("To help you connect with businesses, we have verified that the business account you're chatting with belongs to {businessName}.", [p.fbt._param("businessName", (0, i.default)(e))], {
        hk: "3ncr69"
      });
    case "verified_low_unknown":
      return p.fbt._("The business account you're chatting with may belong to {businessName}. WhatsApp hasn't verified their name yet.", [p.fbt._param("businessName", (0, i.default)(e))], {
        hk: "251pdp"
      });
    case "verified_high":
      return p.fbt._("To help you connect with businesses, we have verified that the business account you're chatting with belongs to {businessName}.", [p.fbt._param("businessName", (0, i.default)(e))], {
        hk: "1ANY7B"
      });
    case "verified_initial_unknown":
      return p.fbt._("{businessName} may be a business account, but WhatsApp hasn't verified their name yet.", [p.fbt._param("businessName", e.displayName())], {
        hk: "YC0Z7"
      });
    case "verified_initial_low":
      return p.fbt._("WhatsApp has made changes to the business account types. \"Confirmed Business\" will now be labeled as \"Business Account\".", null, {
        hk: "48HVkg"
      });
    case "verified_initial_high":
      return p.fbt._("WhatsApp has made changes to the business account types. \"Verified Business\" will now be labeled as \"Official Business Account\".", null, {
        hk: "3y1yjN"
      });
    case "verified_transition_any_to_none":
      return p.fbt._("This account was previously a business account and has now registered as a standard account. It may no longer belong to the business.", null, {
        hk: "iKnlG"
      });
    case "verified_transition_any_to_high":
      return p.fbt._("WhatsApp has made changes to the business account types. \"Verified Business\" will now be labeled as \"Official Business Account\".", null, {
        hk: "1gfHmP"
      });
    case "verified_transition_high_to_low":
      return p.fbt._("WhatsApp is no longer able to verify that this is the account for \"{businessName}\".", [p.fbt._param("businessName", (0, i.default)(e))], {
        hk: "2alCpP"
      });
    case "verified_transition_high_to_unknown":
      return p.fbt._("WhatsApp is no longer able to verify that this is the account for \"{businessName}\".", [p.fbt._param("businessName", (0, i.default)(e))], {
        hk: "2NnID9"
      });
    case "verified_transition_unknown_to_low":
      return p.fbt._("WhatsApp has made changes to the business account types. This \"Confirmed Business\" will now be labeled as \"Business Account\".", null, {
        hk: "2RO5Xf"
      });
    case "verified_transition_low_to_unknown":
      return p.fbt._("WhatsApp is no longer able to confirm that this is the account for \"{businessName}\".", [p.fbt._param("businessName", (0, i.default)(e))], {
        hk: "3jlMCP"
      });
    case "verified_transition_none_to_low":
      return p.fbt._("This account has registered as a business account and WhatsApp has confirmed that this is the account for \"{businessName}\".", [p.fbt._param("businessName", (0, i.default)(e))], {
        hk: "F1WCI"
      });
    case "verified_transition_none_to_unknown":
      return p.fbt._("{businessName} registered as a business account, but WhatsApp hasn't verified their name yet.", [p.fbt._param("businessName", e.displayName())], {
        hk: "1loJxA"
      });
    case "biz_verified_transition_top_to_bottom":
      return p.fbt._("WhatsApp is no longer able to verify that this is the official business account of \"{businessName}\".", [p.fbt._param("businessName", (0, i.default)(e))], {
        hk: "TtuFv"
      });
    case "biz_verified_transition_bottom_to_top":
      return p.fbt._("WhatsApp has verified that this is the official business account of \"{businessName}\".", [p.fbt._param("businessName", (0, i.default)(e))], {
        hk: "CIwer"
      });
    case "biz_intro_top":
      {
        const n = (0, i.default)(e);
        const a = d.default.isOfficialBizAccount(t.remote);
        if ((0, o.default)(t.remote, n)) {
          if (a) {
            return p.fbt._("This is the official business account of \"WhatsApp\".", null, {
              hk: "3Oudrr"
            });
          } else {
            return p.fbt._("WhatsApp has verified that this is the official business account of \"{businessName}\".", [p.fbt._param("businessName", n)], {
              hk: "mx1Ah"
            });
          }
        } else if (a) {
          return p.fbt._("This is the official business account of \"WhatsApp\". This account is saved with a different name in your address book.", null, {
            hk: "2QPmzI"
          });
        } else {
          return p.fbt._("WhatsApp has verified that this is the official business account of \"{businessName}\". This account is saved with a different name in your address book.", [p.fbt._param("businessName", n)], {
            hk: "s52gx"
          });
        }
      }
    case "biz_intro_bottom":
      return p.fbt._("\"{businessName}\" registered as a business account, but WhatsApp hasn’t verified their name yet.", [p.fbt._param("businessName", (0, f.default)(t.remote))], {
        hk: "220kAG"
      });
    case "biz_name_change":
      return p.fbt._("WhatsApp has verified that this official business account changed its name and now uses the name \"{businessName}\".", [p.fbt._param("businessName", (0, i.default)(e))], {
        hk: "1IAfpu"
      });
    case "biz_move_to_consumer_app":
      return p.fbt._("This account was previously a business account but has now registered as a standard account and may no longer belong to the business.", null, {
        hk: "nbUPf"
      });
    case "biz_two_tier_migration_top":
      {
        const n = (0, i.default)(e);
        if ((0, o.default)(t.remote, n)) {
          return p.fbt._("WhatsApp has verified that this is the official business account of \"{businessName}\".", [p.fbt._param("businessName", n)], {
            hk: "26nFGU"
          });
        } else {
          return p.fbt._("WhatsApp has verified that this is the official business account of \"{businessName}\". This account is saved with a different name in your address book.", [p.fbt._param("businessName", n)], {
            hk: "4EwqTR"
          });
        }
      }
    case "biz_two_tier_migration_bottom":
      return p.fbt._("\"{businessName}\" registered as a business account, but WhatsApp hasn’t verified their name yet.", [p.fbt._param("businessName", (0, f.default)(t.remote))], {
        hk: "26jT9r"
      });
    case "blue_msg_bsp_fb_to_bsp_premise":
    case "blue_msg_bsp_fb_unverified_to_bsp_premise_verified":
    case "blue_msg_bsp_fb_verified_to_bsp_premise_unverified":
    case "blue_msg_bsp_premise_unverified":
    case "blue_msg_bsp_premise_verified":
    case "blue_msg_consumer_to_bsp_premise_unverified":
    case "blue_msg_self_fb_to_bsp_premise":
    case "blue_msg_self_fb_unverified_to_bsp_premise_verified":
    case "blue_msg_self_fb_verified_to_bsp_premise_unverified":
    case "blue_msg_self_premise_to_bsp_premise":
    case "blue_msg_unverified_to_bsp_premise_verified":
    case "blue_msg_verified_to_bsp_premise_unverified":
      return p.fbt._("WhatsApp secures messages while they're being delivered to and from the companies that store and manage this chat for {businessName}. Contact {businessName} for more information on their privacy practices.", [p.fbt._param("businessName", (0, i.default)(e))], {
        hk: "IO6XA"
      });
    case "blue_msg_consumer_to_self_premise_unverified":
      return p.fbt._("This chat is with a business account.", null, {
        hk: "39HnTA"
      });
    case "blue_msg_bsp_fb_to_self_fb":
    case "blue_msg_bsp_fb_unverified":
    case "blue_msg_bsp_fb_unverified_to_self_fb_verified":
    case "blue_msg_bsp_fb_verified":
    case "blue_msg_bsp_fb_verified_to_self_fb_unverified":
    case "blue_msg_consumer_to_bsp_fb_unverified":
    case "blue_msg_consumer_to_self_fb_unverified":
    case "blue_msg_self_fb_unverified":
    case "blue_msg_to_bsp_fb":
    case "blue_msg_to_self_fb":
    case "blue_msg_unverified_to_bsp_fb_verified":
    case "blue_msg_unverified_to_self_fb_verified":
    case "blue_msg_verified_to_bsp_fb_unverified":
    case "blue_msg_verified_to_self_fb_unverified":
      return p.fbt._("WhatsApp secures messages while they're being delivered to and from Facebook, where this chat is stored and managed for {businessName}. Contact {businessName} for more information on their privacy practices.", [p.fbt._param("businessName", (0, i.default)(e))], {
        hk: "3a6lZG"
      });
    case "blue_msg_self_fb_verified":
      {
        const t = (0, r.getIsInternalNumber)((0, l.getChat)(e).id.user);
        const n = (0, i.default)(e);
        if (t) {
          return p.fbt._("WhatsApp secures messages while they're being delivered to and from Facebook, where this chat is stored and managed for {businessName}.", [p.fbt._param("businessName", n)], {
            hk: "4agYvQ"
          });
        } else {
          return p.fbt._("WhatsApp secures messages while they're being delivered to and from Facebook, where this chat is stored and managed for {businessName}. Contact {businessName} for more information on their privacy practices.", [p.fbt._param("businessName", n)], {
            hk: "3a6lZG"
          });
        }
      }
    case "blue_msg_self_premise_unverified":
      return p.fbt._("{businessName} is registered as a business account.", [p.fbt._param("businessName", (0, i.default)(e))], {
        hk: "1kOspT"
      });
    case "blue_msg_self_premise_verified":
      {
        const n = (0, i.default)(e);
        if ((0, o.default)(t.remote, n)) {
          if ((0, u.isBlueStringsEnabled)()) {
            return p.fbt._("{businessName} is a verified account.", [p.fbt._param("businessName", n)], {
              hk: "Qa2Aq"
            });
          } else {
            return p.fbt._("{businessName} is registered as an official business account.", [p.fbt._param("businessName", n)], {
              hk: "3l7ere"
            });
          }
        } else if ((0, u.isBlueStringsEnabled)()) {
          return p.fbt._("{businessName} is a verified account. It's saved as a different name in your contacts.", [p.fbt._param("businessName", n)], {
            hk: "4rCejH"
          });
        } else {
          return p.fbt._("{businessName} is registered as an official business account. The business is saved as a different name in your contacts.", [p.fbt._param("businessName", n)], {
            hk: "164TVi"
          });
        }
      }
    case "blue_msg_bsp_fb_verified_to_self_premise_unverified":
    case "blue_msg_bsp_premise_verified_to_self_premise_unverified":
    case "blue_msg_self_fb_verified_to_self_premise_unverified":
    case "blue_msg_verified_to_unverified":
      if ((0, u.isBlueStringsEnabled)()) {
        return p.fbt._("{businessName} is no longer a verified account.", [p.fbt._param("businessName", (0, i.default)(e))], {
          hk: "1RjdJf"
        });
      } else {
        return p.fbt._("{businessName} is now registered as a business account, instead of an official business account.", [p.fbt._param("businessName", (0, i.default)(e))], {
          hk: "2ZxUyL"
        });
      }
    case "blue_msg_bsp_fb_unverified_to_self_premise_verified":
    case "blue_msg_bsp_premise_unverified_to_self_premise_verified":
    case "blue_msg_self_fb_unverified_to_self_premise_verified":
    case "blue_msg_unverified_to_verified":
      {
        const n = (0, i.default)(e);
        if ((0, o.default)(t.remote, n)) {
          if ((0, u.isBlueStringsEnabled)()) {
            return p.fbt._("This chat is with{businessName}'s verified account.", [p.fbt._param("businessName", n)], {
              hk: "1OVVX9"
            });
          } else {
            return p.fbt._("This chat is with the official business account of {businessName}.", [p.fbt._param("businessName", n)], {
              hk: "2bAocp"
            });
          }
        } else if ((0, u.isBlueStringsEnabled)()) {
          return p.fbt._("This chat is with {businessName}'s verified account. The account is saved as a different name in your contacts.", [p.fbt._param("businessName", n)], {
            hk: "2hN0oo"
          });
        } else {
          return p.fbt._("This chat is with the official business account of {businessName}. The business is saved as a different name in your contacts.", [p.fbt._param("businessName", n)], {
            hk: "3H9EF"
          });
        }
      }
    case "biz_privacy_mode_init_fb":
    case "biz_privacy_mode_to_fb":
    case "biz_me_account_type_is_hosted":
      return h((0, s.getIsIAS)(e), (0, s.getIsCAPISupport)(e));
    case "biz_privacy_mode_init_bsp":
    case "biz_privacy_mode_to_bsp":
      return g();
    case "order_ephemeral_exemption":
      return p.fbt._("Orders and payments will not disappear from this chat.", null, {
        hk: "2X8Q4i"
      });
    default:
      return null;
  }
};
exports.formatWaChatSecurityModalText = function () {
  return m.default.createElement(m.default.Fragment, null, p.fbt._("This is a secure, official chat from WhatsApp. We use it to share tips, make announcements and let you know about new features.", null, {
    hk: "4bMaVh"
  }), m.default.createElement("br", null), m.default.createElement("br", null), p.fbt._("We'll never ask for your personal information.", null, {
    hk: "4j2h0R"
  }));
};
var r = require("../app/513592.js");
var o = a(require("./426292.js"));
var l = require("../app/163755.js");
var i = a(require("./567250.js"));
var u = require("../app/97858.js");
var s = require("../app/787742.js");
var c = require("../app/666836.js");
var d = a(require("../app/124928.js"));
var f = a(require("../app/151502.js"));
var p = require("../vendor/548360.js");
var m = a(require("../vendor/667294.js"));
function h() {
  let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  if (e) {
    return m.default.createElement(m.default.Fragment, null, p.fbt._("This is the official chat of WhatsApp Surveys.", null, {
      hk: "2PAott"
    }), m.default.createElement("br", null), m.default.createElement("br", null), p.fbt._("Taking surveys is optional.", null, {
      hk: "k34wJ"
    }), m.default.createElement("br", null), m.default.createElement("br", null), p.fbt._("If you choose to participate, your responses will be kept private. To learn more about how we use and protect your survey responses, tap Learn More.", null, {
      hk: "EGSKJ"
    }));
  } else if (t) {
    return m.default.createElement(m.default.Fragment, null, (0, c.SupportChatSecurityModalText)(), m.default.createElement("br", null), m.default.createElement("br", null), (0, c.SupportChatLearnMoreLinkText)());
  } else {
    return m.default.createElement(m.default.Fragment, null, p.fbt._("You are always in control of the conversation. You can stop chatting with this business or block them at any time.", null, {
      hk: "47gPiG"
    }), m.default.createElement("br", null), m.default.createElement("br", null), p.fbt._("WhatsApp secures your messages and calls with this business.", null, {
      hk: "3dAXlL"
    }), m.default.createElement("br", null), m.default.createElement("br", null), p.fbt._("For details about how this chat is secured, click Learn More.", null, {
      hk: "1yOc3i"
    }));
  }
}
function g() {
  return m.default.createElement(m.default.Fragment, null, p.fbt._("You are always in control of the conversation. You can stop chatting with this business or block them at any time.", null, {
    hk: "47gPiG"
  }), m.default.createElement("br", null), m.default.createElement("br", null), p.fbt._("WhatsApp secures your messages and calls with this business.", null, {
    hk: "3dAXlL"
  }), m.default.createElement("br", null), m.default.createElement("br", null), p.fbt._("For details about how this chat is secured, click Learn More.", null, {
    hk: "1yOc3i"
  }));
}
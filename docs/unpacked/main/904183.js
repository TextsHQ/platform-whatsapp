var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const {
    templateParams: n,
    id: a
  } = e;
  switch (e.subtype) {
    case "non_verified_transition":
      return T.fbt._("The business account you were chatting with is now a standard account. Click for more info.", null, {
        hk: "yLpjx"
      });
    case "unverified_transition":
      return T.fbt._("The business account you're chatting with is now unverified. Click for more info.", null, {
        hk: "1XWyaA"
      });
    case "verified_transition":
      return T.fbt._("The business account you're chatting with is now verified. Click for more info.", null, {
        hk: "39seL2"
      });
    case "verified_low_unknown":
      return T.fbt._("This chat is with an unverified business account. Click for more info.", null, {
        hk: "1VMDKu"
      });
    case "verified_high":
      return T.fbt._("This chat is with a verified business account. Click for more info.", null, {
        hk: "2VqWpM"
      });
    case "verified_initial_unknown":
      return T.fbt._("This chat may be with a business account. Click for more info.", null, {
        hk: "1O95s1"
      });
    case "verified_initial_low":
      return T.fbt._("This chat is with the business account for \"{businessName}\". Click for more info.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "3tp5BB"
      });
    case "verified_initial_high":
      return T.fbt._("This chat is with the verified business account for \"{businessName}\". Click for more info.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "3njPfq"
      });
    case "verified_transition_any_to_none":
      return T.fbt._("This business account has now registered as a standard account. Click for more info.", null, {
        hk: "16Zzqr"
      });
    case "verified_transition_any_to_high":
      return T.fbt._("The business account you're chatting with is now verified as \"{businessName}\". Click for more info.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "3iqLWH"
      });
    case "verified_transition_high_to_low":
      return T.fbt._("The business account you're chatting with is no longer verified as \"{businessName}\". Click for more info.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "16qvHt"
      });
    case "verified_transition_high_to_unknown":
      return T.fbt._("The business account you're chatting with is no longer verified as \"{businessName}\". Click for more info.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "2OKWqQ"
      });
    case "verified_transition_unknown_to_low":
      return T.fbt._("The business account you're chatting with belongs to \"{businessName}\".", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "FQQxQ"
      });
    case "verified_transition_low_to_unknown":
      return T.fbt._("The business account you're chatting with is no longer confirmed as \"{businessName}\". Click for more info.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "32q3K"
      });
    case "verified_transition_none_to_low":
      return T.fbt._("This account has registered as a business account. Click for more info.", null, {
        hk: "2j3bow"
      });
    case "verified_transition_none_to_unknown":
      return T.fbt._("This chat may be with a business account. Click for more info.", null, {
        hk: "10JcC"
      });
    case "change_number":
      {
        const t = n[0];
        const a = n[2];
        const r = u.ContactCollection.get(t);
        const o = r != null && (0, s.getIsMyContact)(r) ? (0, m.getFormattedName)(r) : (0, M.widToFormattedUser)(t);
        const l = b.default.equals((0, h.getChat)(e).id, t);
        const i = b.default.equals((0, h.getChat)(e).id, a);
        if (l || i) {
          return T.fbt._("{name} changed their phone number to a new number.", [T.fbt._param("name", o)], {
            hk: "2D0P7f"
          });
        } else {
          return T.fbt._("{name} changed their phone number. You're currently chatting with their new number.", [T.fbt._param("name", o)], {
            hk: "3G9LoK"
          });
        }
      }
    case "sender_invite":
      {
        const t = (0, p.getFormattedName)(e.from, true);
        if (n.length > 0 && n[0] === "true") {
          return T.fbt._("{receiver_name} accepted your invite to join WhatsApp", [T.fbt._param("receiver_name", t)], {
            hk: "2pgGE8"
          });
        } else {
          return T.fbt._("{receiver_name} is new to WhatsApp", [T.fbt._param("receiver_name", t)], {
            hk: "1zZEXp"
          });
        }
      }
    case "receiver_invite":
      {
        const t = (0, p.getFormattedName)(e.from, true);
        return T.fbt._("We let {sender_name} know you joined!", [T.fbt._param("sender_name", t)], {
          hk: "3xyya5"
        });
      }
    case "masked_thread_created":
      return T.fbt._("Your phone number is not shared in this chat. Businesses who have your number in their contacts will be able to see it. Click to learn more", null, {
        hk: "1rbBV1"
      });
    case "cag_masked_thread_created":
      return T.fbt._("This chat has added privacy for your phone number. Click to learn more.", null, {
        hk: "1qV2MB"
      });
    case "payment_transaction_status_update_failed":
      return T.fbt._("Your payment to {receiverName} {relativeTime} couldn't complete.", [T.fbt._param("receiverName", (0, S.default)(n[0])), T.fbt._param("relativeTime", i.Clock.paymentTimestampStr(e.t))], {
        hk: "2uTf8B"
      });
    case "payment_transaction_request_cancelled":
      {
        const t = n[0];
        const a = (0, S.default)(t);
        const r = n[1];
        const o = parseInt(n[2], 10);
        const l = c.formatAmount1000(r, o);
        if (e.id.fromMe) {
          return T.fbt._({
            "*": "You canceled your payment request to {contactName} for {currencyAndAmount}",
            _1: "You canceled your payment request to {contactName} for {currencyAndAmount}"
          }, [T.fbt._plural(o / 1000), T.fbt._param("contactName", a), T.fbt._param("currencyAndAmount", l)], {
            hk: "1N4mPG"
          });
        } else {
          return T.fbt._({
            "*": "{contactName} canceled their payment request for {currencyAndAmount}",
            _1: "{contactName} canceled their payment request for {currencyAndAmount}"
          }, [T.fbt._plural(o / 1000), T.fbt._param("contactName", a), T.fbt._param("currencyAndAmount", l)], {
            hk: "289pJ0"
          });
        }
      }
    case "payment_transaction_status_update_refunded":
      return T.fbt._("Your payment to {receiverName} was refunded {relativeTime}.", [T.fbt._param("receiverName", (0, S.default)(n[0])), T.fbt._param("relativeTime", i.Clock.paymentTimestampStr(e.t))], {
        hk: "42qv2X"
      });
    case "payment_transaction_status_update_refund_failed":
      return T.fbt._("Your payment to {receiverName} {relativeTime} couldn't complete.", [T.fbt._param("receiverName", (0, S.default)(n[0])), T.fbt._param("relativeTime", i.Clock.paymentTimestampStr(e.t))], {
        hk: "21U7dS"
      });
    case "payment_transaction_status_receiver_pending_setup":
      {
        const e = n[0];
        const t = (0, S.default)(e);
        const a = n[1];
        const r = parseInt(n[2], 10);
        const o = c.formatAmount1000(a, r);
        return T.fbt._({
          "*": "{senderName} sent you {currencyAndAmount}. Use WhatsApp on your phone to accept this transaction.",
          _1: "{senderName} sent you {currencyAndAmount}. Use WhatsApp on your phone to accept this transaction."
        }, [T.fbt._plural(r / 1000), T.fbt._param("senderName", t), T.fbt._param("currencyAndAmount", o)], {
          hk: "301Haw"
        });
      }
    case "payment_transaction_status_receiver_success_after_hiccup":
      return T.fbt._("{senderName}'s payment {relativeTime} is complete.", [T.fbt._param("senderName", (0, S.default)(n[0])), T.fbt._param("relativeTime", i.Clock.paymentTimestampStr(e.t))], {
        hk: "SGq8Q"
      });
    case "payment_action_account_setup_reminder":
      return T.fbt._("To receive a payment from {senderName}, set up your payment account on your phone.", [T.fbt._param("senderName", (0, S.default)(n[0]))], {
        hk: "39GH1E"
      });
    case "payment_action_send_payment_reminder":
      return T.fbt._("You can now send {receiverName} a payment.", [T.fbt._param("receiverName", (0, S.default)(n[0]))], {
        hk: "2CBgpU"
      });
    case "payment_action_send_payment_invitation":
      return T.fbt._("You notified {receiverName} that you are trying to send a payment.", [T.fbt._param("receiverName", (0, S.default)(n[0]))], {
        hk: "2bDhDU"
      });
    case "payment_action_request_declined":
      {
        const t = n[0];
        const a = (0, S.default)(t);
        const r = n[1];
        const o = parseInt(n[2], 10);
        const l = c.formatAmount1000(r, o);
        if (e.id.fromMe) {
          return T.fbt._({
            "*": "You declined {contactName}'s payment request for {currencyAndAmount}.",
            _1: "You declined {contactName}'s payment request for {currencyAndAmount}."
          }, [T.fbt._plural(o / 1000), T.fbt._param("contactName", a), T.fbt._param("currencyAndAmount", l)], {
            hk: "1ZD5KI"
          });
        } else {
          return T.fbt._({
            "*": "{contactName} declined your payment request for {currencyAndAmount}.",
            _1: "{contactName} declined your payment request for {currencyAndAmount}."
          }, [T.fbt._plural(o / 1000), T.fbt._param("contactName", a), T.fbt._param("currencyAndAmount", l)], {
            hk: "1boIUo"
          });
        }
      }
    case "payment_action_request_expired":
      {
        const e = n[0];
        const t = (0, S.default)(e);
        const a = n[1];
        const r = (0, S.default)(a);
        const o = n[2];
        const l = parseInt(n[3], 10);
        const i = c.formatAmount1000(o, l);
        if ((0, C.isMeAccount)(e)) {
          return T.fbt._({
            "*": "Your payment request to {receiverName} for {currencyAndAmount} expired.",
            _1: "Your payment request to {receiverName} for {currencyAndAmount} expired."
          }, [T.fbt._plural(l / 1000), T.fbt._param("receiverName", r), T.fbt._param("currencyAndAmount", i)], {
            hk: "3WKSv9"
          });
        } else {
          return T.fbt._({
            "*": "{senderName}'s payment request for {currencyAndAmount} to you expired.",
            _1: "{senderName}'s payment request for {currencyAndAmount} to you expired."
          }, [T.fbt._plural(l / 1000), T.fbt._param("senderName", t), T.fbt._param("currencyAndAmount", i)], {
            hk: "1VHTfR"
          });
        }
      }
    case "payment_invite_account_set_up":
      {
        const e = n[0];
        return T.fbt._("{invitee} has set up payments", [T.fbt._param("invitee", (0, S.default)(e))], {
          hk: "2lHBxW"
        });
      }
    case "biz_verified_transition_top_to_bottom":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("{businessName} is no longer a verified account. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "Tjtjz"
        });
      } else {
        return T.fbt._("This chat is no longer with the official business account of \"{businessName}\". Click for more info.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "15cVpy"
        });
      }
    case "biz_verified_transition_bottom_to_top":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("{businessName} is now a verified account. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "2pqxre"
        });
      } else {
        return T.fbt._("This chat is now with the official business account of \"{businessName}\". Click for more info.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "2t2lXH"
        });
      }
    case "biz_intro_top":
      {
        const t = e.id.remote;
        if (b.default.isOfficialBizAccount(t)) {
          if ((0, E.isBlueStringsEnabled)()) {
            return T.fbt._("This chat is with WhatsApp's verified account. Click for more info.", null, {
              hk: "1C2m1p"
            });
          } else {
            return T.fbt._("This chat is with the official business account of \"WhatsApp\". Click for more info.", null, {
              hk: "1nWt8Z"
            });
          }
        } else if ((0, E.isBlueStringsEnabled)()) {
          return T.fbt._("This chat is with {businessName}'s verified account. Click for more info.", [T.fbt._param("businessName", (0, g.default)(e))], {
            hk: "2H7ge6"
          });
        } else {
          return T.fbt._("This chat is with the official business account of \"{businessName}\". Click for more info.", [T.fbt._param("businessName", (0, g.default)(e))], {
            hk: "KRO22"
          });
        }
      }
    case "biz_intro_bottom":
      return T.fbt._("This chat is with a business account. Click for more info.", null, {
        hk: "NOsnP"
      });
    case "biz_name_change":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("This business changed its name to \"{businessName}\". Click for more info.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "1WOIGV"
        });
      } else {
        return T.fbt._("This official business account changed its name to \"{businessName}\". Click for more info.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "3ACt4d"
        });
      }
    case "biz_move_to_consumer_app":
      return T.fbt._("This business account has now registered as a standard account. Click for more info.", null, {
        hk: "1k39GT"
      });
    case "biz_two_tier_migration_top":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("This chat is with {businessName}'s verified account. Click for more info.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "1Rhoye"
        });
      } else {
        return T.fbt._("This chat is with the official business account of \"{businessName}\". Click for more info.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "jDir7"
        });
      }
    case "biz_two_tier_migration_bottom":
      return T.fbt._("This chat is with a business account. Click for more info.", null, {
        hk: "jSYUU"
      });
    case "blue_msg_bsp_fb_to_bsp_premise":
      return T.fbt._("{businessName} no longer uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "dcaPK"
      });
    case "blue_msg_bsp_fb_to_self_fb":
      return T.fbt._("{businessName} now only uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "44oTS3"
      });
    case "blue_msg_bsp_fb_to_self_premise":
      return T.fbt._("{businessName} no longer uses Facebook or other companies to manage its WhatsApp conversations.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "PHES2"
      });
    case "blue_msg_bsp_fb_unverified":
      return T.fbt._("This chat is with a business account that uses Facebook and other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", null, {
        hk: "2xddIM"
      });
    case "blue_msg_bsp_fb_unverified_to_bsp_premise_verified":
      {
        const t = (0, g.default)(e);
        if ((0, d.default)(a.remote, t)) {
          if ((0, E.isBlueStringsEnabled)()) {
            return T.fbt._("{businessName} is no longer a verified account.", [T.fbt._param("businessName", t)], {
              hk: "EGcqm"
            });
          } else {
            return T.fbt._("{businessName} is now registered as an official business account. This business no longer uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", t)], {
              hk: "1OexG0"
            });
          }
        } else if ((0, E.isBlueStringsEnabled)()) {
          return T.fbt._("{businessName} is now a verified account, but it's saved as a different name in your contacts. This business no longer uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", t)], {
            hk: "3rLQgn"
          });
        } else {
          return T.fbt._("{businessName} is now registered as an official business account, but it's saved as a different name in your contacts. This business no longer uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", t)], {
            hk: "4arvoG"
          });
        }
      }
    case "blue_msg_bsp_fb_unverified_to_self_fb_verified":
      {
        const t = (0, g.default)(e);
        if ((0, d.default)(a.remote, t)) {
          if ((0, E.isBlueStringsEnabled)()) {
            return T.fbt._("{businessName} is now a verified account and only uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", t)], {
              hk: "2BCQBs"
            });
          } else {
            return T.fbt._("{businessName} is now registered as an official business account that only uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", t)], {
              hk: "297aTJ"
            });
          }
        } else if ((0, E.isBlueStringsEnabled)()) {
          return T.fbt._("{businessName} is now a verified account, but it's saved as a different name in your contacts. This business only uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", t)], {
            hk: "VnsE0"
          });
        } else {
          return T.fbt._("{businessName} is now registered as an official business account, but it's saved as a different name in your contacts. This business only uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", t)], {
            hk: "3iPREE"
          });
        }
      }
    case "blue_msg_bsp_fb_unverified_to_self_premise_verified":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("{businessName} is now a verified account. This business no longer uses Meta or other companies to manage its WhatsApp conversations. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "1f0KZl"
        });
      } else {
        return T.fbt._("{businessName} is now registered as an official business account. This business no longer uses Facebook or other companies to manage its WhatsApp conversations. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "3xdlPw"
        });
      }
    case "blue_msg_bsp_fb_verified":
      {
        const t = (0, g.default)(e);
        if ((0, d.default)(a.remote, t)) {
          if ((0, E.isBlueStringsEnabled)()) {
            return T.fbt._("This chat is with {businessName}'s verified account. This account uses Meta and other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [T.fbt._param("businessName", t)], {
              hk: "ZVJse"
            });
          } else {
            return T.fbt._("This chat is with the official business account of {businessName}. This business uses Facebook and other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [T.fbt._param("businessName", t)], {
              hk: "26Ni9o"
            });
          }
        } else if ((0, E.isBlueStringsEnabled)()) {
          return T.fbt._("This chat is with {businessName}'s verified account, but it's saved as a different name in your contacts. This business uses Meta and other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [T.fbt._param("businessName", t)], {
            hk: "lcALa"
          });
        } else {
          return T.fbt._("This chat is with the official business account of {businessName}, but it's saved as a different name in your contacts. This business uses Facebook and other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [T.fbt._param("businessName", t)], {
            hk: "4sL2ht"
          });
        }
      }
    case "blue_msg_bsp_fb_verified_to_bsp_premise_unverified":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("{businessName} is no longer a verified account and no longer uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "c75Vy"
        });
      } else {
        return T.fbt._("{businessName} is no longer an official business account and it no longer uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "4l3wy7"
        });
      }
    case "blue_msg_bsp_fb_verified_to_self_fb_unverified":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("{businessName} is no longer a verified account and now only uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "2EG7N"
        });
      } else {
        return T.fbt._("{businessName} is no longer an official business account and it now only uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "2E4Cr2"
        });
      }
    case "blue_msg_bsp_fb_verified_to_self_premise_unverified":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("{businessName} is no longer a verified account and no longer uses Meta or other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "cYrzP"
        });
      } else {
        return T.fbt._("{businessName} is no longer an official business account and it no longer uses Facebook or other companies to manage its WhatsApp conversations. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "3yeAJD"
        });
      }
    case "blue_msg_bsp_premise_to_self_premise":
      return T.fbt._("{businessName} no longer uses other companies to manage its WhatsApp conversations.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "BwSEx"
      });
    case "blue_msg_bsp_premise_unverified":
      return T.fbt._("This chat is with a business account that uses other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", null, {
        hk: "196kMD"
      });
    case "blue_msg_bsp_premise_unverified_to_self_premise_verified":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("{businessName} is now a verified account and no longer uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "D4N5Q"
        });
      } else {
        return T.fbt._("{businessName} is now registered as an official business account. This business no longer uses other companies to manage its WhatsApp conversations. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "1rY5J2"
        });
      }
    case "blue_msg_bsp_premise_verified":
      {
        const t = (0, g.default)(e);
        if ((0, d.default)(a.remote, t)) {
          if ((0, E.isBlueStringsEnabled)()) {
            return T.fbt._("This chat is with {businessName}'s verified account. This account uses other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [T.fbt._param("businessName", t)], {
              hk: "209kwp"
            });
          } else {
            return T.fbt._("This chat is with the official business account of {businessName}. This business uses other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [T.fbt._param("businessName", t)], {
              hk: "RnZGQ"
            });
          }
        } else if ((0, E.isBlueStringsEnabled)()) {
          return T.fbt._("This chat is with {businessName}'s verified account, but it's saved as a different name in your contacts. This account uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", t)], {
            hk: "1n5uwo"
          });
        } else {
          return T.fbt._("This chat is with the official business account of {businessName}, but it's saved as a different name in your contacts. This business uses other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [T.fbt._param("businessName", t)], {
            hk: "1mJ4O4"
          });
        }
      }
    case "blue_msg_bsp_premise_verified_to_self_premise_unverified":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("{businessName} is no longer a verified account and no longer uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "2SXNo8"
        });
      } else {
        return T.fbt._("{businessName} is no longer an official business account and it no longer uses other companies to manage its WhatsApp conversations. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "3vyb9n"
        });
      }
    case "blue_msg_consumer_to_bsp_fb_unverified":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("{businessName} is now a verified account that uses Meta and other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "DGTPU"
        });
      } else {
        return T.fbt._("{businessName} is now registered as a business account that uses Facebook and other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "1mplAw"
        });
      }
    case "blue_msg_consumer_to_bsp_premise_unverified":
      return T.fbt._("{businessName} is now registered as a business account that uses other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "1Lg2Ln"
      });
    case "blue_msg_consumer_to_self_fb_unverified":
      return T.fbt._("{businessName} is now registered as a business account that uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "fVfG9"
      });
    case "blue_msg_consumer_to_self_premise_unverified":
      return T.fbt._("{businessName} is now registered as a business account. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "25gNuS"
      });
    case "blue_msg_self_fb_to_bsp_premise":
      return T.fbt._("{businessName} now uses other companies instead of Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "3goxbh"
      });
    case "blue_msg_self_fb_to_self_premise":
      return T.fbt._("{businessName} no longer uses Facebook to manage its WhatsApp conversations.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "22ka0Y"
      });
    case "blue_msg_self_fb_unverified":
      return T.fbt._("This chat is with a business account that uses Facebook to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", null, {
        hk: "BnVcY"
      });
    case "blue_msg_self_fb_unverified_to_bsp_premise_verified":
      {
        const t = (0, g.default)(e);
        if ((0, d.default)(a.remote, t)) {
          if ((0, E.isBlueStringsEnabled)()) {
            return T.fbt._("{businessName} is now a verified account and now uses other companies instead of Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", t)], {
              hk: "1AXuKZ"
            });
          } else {
            return T.fbt._("{businessName} is now registered as an official business account. This business now uses other companies instead of Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", t)], {
              hk: "2PMRlL"
            });
          }
        } else if ((0, E.isBlueStringsEnabled)()) {
          return T.fbt._("{businessName} is now a verified account, but it's saved as a different name in your contacts. This account now uses other companies instead of Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", t)], {
            hk: "2yeBUn"
          });
        } else {
          return T.fbt._("{businessName} is now registered as an official business account, but it's saved as a different name in your contacts. This business now uses other companies instead of Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", t)], {
            hk: "27sgHC"
          });
        }
      }
    case "blue_msg_self_fb_unverified_to_self_premise_verified":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("{businessName} is now a verified account and no longer uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "2R7Yfx"
        });
      } else {
        return T.fbt._("{businessName} is now registered as an official business account. This business no longer uses Facebook to manage its WhatsApp conversations. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "2BxZaJ"
        });
      }
    case "blue_msg_self_fb_verified":
      {
        const t = (0, g.default)(e);
        const n = (0, r.getIsInternalNumber)((0, h.getChat)(e).id.user);
        if ((0, d.default)(a.remote, t)) {
          if (n) {
            return T.fbt._("This chat is with the official account of {businessName}. This account uses Facebook to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [T.fbt._param("businessName", t)], {
              hk: "2khRW"
            });
          } else {
            return T.fbt._("This chat is with the official business account of {businessName}. This business uses Facebook to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [T.fbt._param("businessName", t)], {
              hk: "2eH8ov"
            });
          }
        } else if (n) {
          return T.fbt._("This chat is with the official account of {businessName}, but it's saved as a different name in your contacts. This account uses Facebook to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [T.fbt._param("businessName", t)], {
            hk: "3avPYT"
          });
        } else {
          return T.fbt._("This chat is with the official business account of {businessName}, but it's saved as a different name in your contacts. This business uses Facebook to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [T.fbt._param("businessName", t)], {
            hk: "1v1qGq"
          });
        }
      }
    case "blue_msg_self_fb_verified_to_bsp_premise_unverified":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("{businessName} is no longer a verified account. The account uses other companies instead of Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "2siI3M"
        });
      } else {
        return T.fbt._("{businessName} is no longer an official business account. This business uses other companies instead of Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "2pw2kX"
        });
      }
    case "blue_msg_self_fb_verified_to_self_premise_unverified":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("{businessName} is no longer a verified account and no longer uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "c75Vy"
        });
      } else {
        return T.fbt._("{businessName} is no longer an official business account and it no longer uses Facebook to manage its WhatsApp conversations. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "20NrmG"
        });
      }
    case "blue_msg_self_premise_to_bsp_premise":
      return T.fbt._("{businessName} now uses other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "3Kt1r4"
      });
    case "blue_msg_self_premise_unverified":
      return T.fbt._("This chat is with a business account. Click to learn more.", null, {
        hk: "2dhxdN"
      });
    case "blue_msg_self_premise_verified":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("This chat is with {businessName}'s verified account. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "KFdPd"
        });
      } else {
        return T.fbt._("This chat is with the official business account of {businessName}. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "3xYVEJ"
        });
      }
    case "blue_msg_to_bsp_fb":
      return T.fbt._("{businessName} now uses Facebook and other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "3moaZo"
      });
    case "blue_msg_to_consumer":
      return T.fbt._("{businessName} is no longer registered as a business account.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "1qYJk3"
      });
    case "blue_msg_to_self_fb":
      return T.fbt._("{businessName} now uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", (0, g.default)(e))], {
        hk: "FFVKC"
      });
    case "blue_msg_unverified_to_bsp_fb_verified":
      {
        const t = (0, g.default)(e);
        if ((0, d.default)(a.remote, t)) {
          if ((0, E.isBlueStringsEnabled)()) {
            return T.fbt._("{businessName} is now a verified account that uses Meta and other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", t)], {
              hk: "DGTPU"
            });
          } else {
            return T.fbt._("{businessName} is now registered as an official business account that uses Facebook and other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", t)], {
              hk: "2ADBSN"
            });
          }
        } else if ((0, E.isBlueStringsEnabled)()) {
          return T.fbt._("{businessName} is now a verified account, but it's saved as a different name in your contacts. This account uses Meta and other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more", [T.fbt._param("businessName", t)], {
            hk: "4dIq4H"
          });
        } else {
          return T.fbt._("{businessName} is now registered as an official business account, but it's saved as a different name in your contacts. This business uses Facebook and other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", t)], {
            hk: "1RYriC"
          });
        }
      }
    case "blue_msg_unverified_to_bsp_premise_verified":
      {
        const t = (0, g.default)(e);
        if ((0, d.default)(a.remote, t)) {
          if ((0, E.isBlueStringsEnabled)()) {
            return T.fbt._("{businessName} is now a verified account that uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", t)], {
              hk: "3yVPVL"
            });
          } else {
            return T.fbt._("{businessName} is now registered as an official business account that uses other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", t)], {
              hk: "4vY8TF"
            });
          }
        } else if ((0, E.isBlueStringsEnabled)()) {
          return T.fbt._("{businessName} is now a verified account, but it's saved as a different name in your contacts. This business uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click here to learn more.", [T.fbt._param("businessName", t)], {
            hk: "47p08"
          });
        } else {
          return T.fbt._("{businessName} is now registered as an official business account, but it's saved as a different name in your contacts. This business uses other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", t)], {
            hk: "4Asief"
          });
        }
      }
    case "blue_msg_unverified_to_self_fb_verified":
      {
        const t = (0, g.default)(e);
        if ((0, d.default)(a.remote, t)) {
          if ((0, E.isBlueStringsEnabled)()) {
            return T.fbt._("{businessName} is now a verified account that uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click here to learn more.", [T.fbt._param("businessName", t)], {
              hk: "1M1vud"
            });
          } else {
            return T.fbt._("{businessName} is now registered as an official business account that uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", t)], {
              hk: "1B2Vda"
            });
          }
        } else if ((0, E.isBlueStringsEnabled)()) {
          return T.fbt._("{businessName} is now a verified account, but it's saved as a different name in your contacts. This account uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click here to learn more.", [T.fbt._param("businessName", t)], {
            hk: "3fHpg1"
          });
        } else {
          return T.fbt._("{businessName} is now registered as an official business account, but it's saved as a different name in your contacts. This business uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", t)], {
            hk: "rRdk0"
          });
        }
      }
    case "blue_msg_unverified_to_verified":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("{businessName} is now a verified account. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "1p8Dxd"
        });
      } else {
        return T.fbt._("{businessName} is now registered as an official business account. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "2tnxMX"
        });
      }
    case "blue_msg_verified_to_bsp_fb_unverified":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("{businessName} is no longer a verified account and now uses Meta and other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "2I1ehp"
        });
      } else {
        return T.fbt._("{businessName} is no longer an official business account and now uses Meta and other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "4wWf"
        });
      }
    case "blue_msg_verified_to_bsp_premise_unverified":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("{businessName} is no longer a verified account and now uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "S9ajI"
        });
      } else {
        return T.fbt._("{businessName} is no longer an official business account and it now uses other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "3A3koW"
        });
      }
    case "blue_msg_verified_to_self_fb_unverified":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("{businessName} is no longer a verified account and now uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "19LVEY"
        });
      } else {
        return T.fbt._("{businessName} is no longer an official business account and it now uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "1StTSm"
        });
      }
    case "blue_msg_verified_to_unverified":
      if ((0, E.isBlueStringsEnabled)()) {
        return T.fbt._("{businessName} is no longer a verified account. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "tLHbJ"
        });
      } else {
        return T.fbt._("{businessName} is no longer registered as an official business account. Click to learn more.", [T.fbt._param("businessName", (0, g.default)(e))], {
          hk: "1Agjw1"
        });
      }
    case "biz_privacy_mode_init_fb":
      if ((0, v.getIsCAPISupport)(e)) {
        return (0, _.SupportChatSystemMessage)();
      } else {
        return T.fbt._("This business uses a secure service from Meta to manage this chat. Click to learn more.", null, {
          hk: "3wvGOC"
        });
      }
    case "biz_privacy_mode_to_fb":
      if ((0, v.getIsIAS)(e)) {
        return T.fbt._("WhatsApp Surveys uses a secure service from Meta to manage this chat. Click to learn more.", null, {
          hk: "49GQ04"
        });
      } else {
        return T.fbt._("This business is now using a secure service from Meta to manage this chat. Click to learn more.", null, {
          hk: "BRJIE"
        });
      }
    case "biz_privacy_mode_init_bsp":
      return T.fbt._("This business works with other companies to manage this chat. Click to learn more.", null, {
        hk: "VbOOZ"
      });
    case "biz_privacy_mode_to_bsp":
      return T.fbt._("This business is now working with other companies to manage this chat. Click to learn more.", null, {
        hk: "2vEnTy"
      });
    case "block_contact":
      if (n[0] === "true") {
        return T.fbt._("You blocked this contact", null, {
          hk: "4GeKEc"
        });
      } else {
        return T.fbt._("You unblocked this contact", null, {
          hk: "1cRMeM"
        });
      }
    case "disappearing_mode_update":
      return (0, f.formatEphemeralSetting)(e);
    case "disappearing_mode":
      return (0, f.getDefaultDisappearingModeSystemMessageText)(e);
    case "disappearing_mode_unsupported":
      return (0, f.getDMUnsupportedSystemMessageText)();
    case "chat_assignment":
      {
        const e = n[0];
        if (!(0, o.chatAssignmentSystemMessagesEnabled)() || !(0, l.canAssignChats)() || (0, o.chatAssignmentNewChatlistLabelEnabled)() && t === true) {
          return T.fbt._("Chat assigned to {agent_name}", [T.fbt._param("agent_name", e)], {
            hk: "3QbGFe"
          });
        } else {
          return T.fbt._("Chat assigned to {agent_name}. Click to change", [T.fbt._param("agent_name", e)], {
            hk: "2UhQVi"
          });
        }
      }
    case "chat_assignment_unassign":
      if (!(0, o.chatAssignmentSystemMessagesEnabled)() || !(0, l.canAssignChats)() || (0, o.chatAssignmentNewChatlistLabelEnabled)() && t === true) {
        return T.fbt._("Chat was unassigned", null, {
          hk: "26UCcQ"
        });
      } else {
        return T.fbt._("Chat was unassigned. Click to change", null, {
          hk: "1kSMGn"
        });
      }
    case "order_ephemeral_exemption":
      return T.fbt._("Orders and payments will not disappear from this chat. Click to learn more.", null, {
        hk: "2n9avt"
      });
    case "bot_init":
      return T.fbt._("Messages are generated by AI from Meta. Some may be inaccurate or inappropriate. You can improve the quality by sending feedback. Click to learn more.", null, {
        hk: "2MN2dK"
      });
    case "bot_invoke_disclaimer":
      return T.fbt._("Only messages that mention @Meta AI are sent to Meta. Meta can't read any other messages in this chat. Some responses may be inaccurate or inappropriate. Click to learn more.", null, {
        hk: "b1m4d"
      });
    case "biz_bot_1p_disclosure":
      return T.fbt._("AI from Meta receives chats and generates messages for this business. Click to learn more.", null, {
        hk: "31JmZ2"
      });
    case "biz_bot_3p_disclosure":
      return T.fbt._("This AI is from a third-party developer. Meta receives your AI chats to improve its AI quality. Tap to learn more.", null, {
        hk: "ZogaV"
      });
    case "change_username":
      {
        var w;
        const t = (w = e.templateParams[0]) === null || w === undefined ? undefined : w.toString();
        return T.fbt._("User changed their username to {newUsername}", [T.fbt._param("newUsername", t)], {
          hk: "2t0on4"
        });
      }
    case "saga_init":
      return T.fbt._("WhatsApp Support uses AI from Meta to generate some messages. Click to learn more.", null, {
        hk: "3IOtxb"
      });
    case "biz_account_type_changed_to_hosted":
    case "biz_me_account_type_is_hosted":
      return T.fbt._("", null, {
        hk: "2oMCnd"
      });
    default:
      if (y.UA.isElectron) {
        return T.fbt._("You received a message on your phone, but your version of WhatsApp Desktop doesn't support it.", null, {
          hk: "mhBjl"
        });
      } else {
        return T.fbt._("You received a message on your phone, but your version of WhatsApp Web doesn't support it.", null, {
          hk: "4mqP2W"
        });
      }
  }
};
var r = require("../app/513592.js");
var o = require("../app/72696.js");
var l = require("../app/560861.js");
var i = require("../app/63014.js");
var u = require("../app/177938.js");
var s = require("../app/660666.js");
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = w(t);
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
}(require("../app/27578.js"));
var d = a(require("./426292.js"));
var f = require("../app/730514.js");
var p = require("../app/436355.js");
var m = require("../app/714574.js");
var h = require("../app/163755.js");
var g = a(require("./567250.js"));
var E = require("../app/97858.js");
var v = require("../app/787742.js");
var _ = require("../app/666836.js");
var y = require("../app/368170.js");
var C = require("../app/459857.js");
var b = a(require("../app/124928.js"));
var M = require("../app/931019.js");
var S = a(require("../app/151502.js"));
var T = require("../vendor/548360.js");
a(require("../vendor/667294.js"));
function w(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (w = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
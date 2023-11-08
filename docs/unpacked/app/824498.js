var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultFutureproofMsgText = c;
exports.formatUnknownMsgNotification = function (e) {
  if (e.futureproofType === a.MSG_TYPE.REACTION) {
    return s.fbt._("You received a reaction. Update your version of WhatsApp to see reactions.", null, {
      hk: "2TMRfc"
    });
  }
  switch (e.subtype) {
    case "phone":
      return u(e);
    case "phone_only_feature":
      return s.fbt._("This message can't be shown on WhatsApp Web. Open WhatsApp on your phone to view.", null, {
        hk: "FDBoF"
      });
    default:
      return l(e);
  }
};
exports.formatUnknownMsgText = function (e) {
  if (e.futureproofType === a.MSG_TYPE.REACTION) {
    if ((0, i.getIsSentByMe)(e)) {
      return s.fbt._("To see reactions, restart WhatsApp on your computer. If you still do not see them, update your app.", null, {
        hk: "eNtuK"
      });
    } else {
      return s.fbt._("You received a reaction. Update your version of WhatsApp to see reactions.", null, {
        hk: "2TMRfc"
      });
    }
  }
  if (e.futureproofType === a.MSG_TYPE.PROTOCOL && e.futureproofSubtype === "message_edit") {
    if ((0, i.getIsSentByMe)(e)) {
      return s.fbt._("You sent an edited message. You can see it if you're on the latest version of WhatsApp.", null, {
        hk: "3QpvZj"
      });
    } else {
      return s.fbt._("You received an edited message. You can see it if you're on the latest version of WhatsApp.", null, {
        hk: "229dIu"
      });
    }
  }
  if (e.futureproofType === a.MSG_TYPE.KEEP_IN_CHAT) {
    if ((0, i.getIsSentByMe)(e)) {
      return c(e);
    } else {
      return s.fbt._("A message in this chat was kept from disappearing.", null, {
        hk: "1gqzBa"
      });
    }
  }
  if (e.futureproofType === a.MSG_TYPE.PIN_MESSAGE) {
    if ((0, i.getIsSentByMe)(e)) {
      return s.fbt._("You used pinned messages in this chat. Upgrade to the latest version of WhatsApp on this device to use pinned messages here too.", null, {
        hk: "wvVUr"
      });
    } else {
      return s.fbt._("Pinned messages were used in this chat. Upgrade to the latest version of WhatsApp to see and use pinned messages too.", null, {
        hk: "1Krp4J"
      });
    }
  }
  if ((0, i.getIsSentByMe)(e)) {
    return c(e);
  }
  switch (e.subtype) {
    case "phone":
      return u(e);
    case "phone_only_feature":
      if (o.UA.isElectron) {
        return s.fbt._("This message can't be shown on WhatsApp Desktop. Open WhatsApp on your phone to view.", null, {
          hk: "1zBLXU"
        });
      } else {
        return s.fbt._("This message can't be shown on WhatsApp Web. Open WhatsApp on your phone to view.", null, {
          hk: "FDBoF"
        });
      }
    default:
      return c(e);
  }
};
var i = require("./787742.js");
var a = require("./373070.js");
var o = require("./368170.js");
var s = require("../vendor/548360.js");
r(require("../vendor/667294.js"));
function l(e) {
  if ((0, i.getIsNewsletterMsg)(e)) {
    return s.fbt._("You received a channel update on your phone, but your version of WhatsApp Web doesn't support it.", null, {
      hk: "4hHhBA"
    });
  } else {
    return s.fbt._("You received a message on your phone, but your version of WhatsApp Web doesn't support it.", null, {
      hk: "4mqP2W"
    });
  }
}
function u(e) {
  if ((0, i.getIsNewsletterMsg)(e)) {
    return s.fbt._("You received a channel update, but your version of WhatsApp doesn't support it.", null, {
      hk: "3XRGam"
    });
  } else {
    return s.fbt._("You received a message, but your version of WhatsApp doesn't support it.", null, {
      hk: "3WD27"
    });
  }
}
function c(e) {
  if ((0, i.getIsSentByMe)(e)) {
    return function (e) {
      if ((0, i.getIsNewsletterMsg)(e)) {
        return s.fbt._("You sent a channel update from your phone, but your version of WhatsApp Web doesn't support it", null, {
          hk: "2Ddocr"
        });
      } else {
        return s.fbt._("You sent a message from your phone, but your version of WhatsApp Web doesn't support it.", null, {
          hk: "4jbsbU"
        });
      }
    }(e);
  } else if (o.UA.isElectron) {
    return function (e) {
      if ((0, i.getIsNewsletterMsg)(e)) {
        return s.fbt._("You received a channel update on your phone, but your version of WhatsApp Desktop doesn't support it.", null, {
          hk: "3nTp5N"
        });
      } else {
        return s.fbt._("You received a message on your phone, but your version of WhatsApp Desktop doesn't support it.", null, {
          hk: "mhBjl"
        });
      }
    }(e);
  } else {
    return l(e);
  }
}
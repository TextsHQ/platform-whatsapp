var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, d.useMsgValues)(e.msg.id, [u.getType, u.getIsVcardOverMmsDocument]);
  const a = (e => {
    try {
      return (0, l.getMsgMediaType)(e);
    } catch (e) {
      return null;
    }
  })(e.msg);
  let f;
  let p;
  switch (a) {
    case l.MEDIA_TYPES.VIDEO:
      f = s.fbt._("Video Unavailable", null, {
        hk: "3col2J"
      });
      p = s.fbt._("Can't play this video because it's no longer on your phone.", null, {
        hk: "3Y1pT3"
      });
      break;
    case l.MEDIA_TYPES.GIF:
      f = s.fbt._("GIF Unavailable", null, {
        hk: "38hdRE"
      });
      p = s.fbt._("Can't view this GIF because it's no longer on your phone.", null, {
        hk: "38IUt"
      });
      break;
    case l.MEDIA_TYPES.AUDIO:
      f = s.fbt._("Voice Message Unavailable", null, {
        hk: "35KrIi"
      });
      p = s.fbt._("Can't play this Voice Message because it's no longer on your phone.", null, {
        hk: "3J3NDW"
      });
      break;
    case l.MEDIA_TYPES.IMAGE:
      f = s.fbt._("Photo Unavailable", null, {
        hk: "1TqqR4"
      });
      p = s.fbt._("Can't view this photo because it's no longer on your phone.", null, {
        hk: "3Z3aAt"
      });
      break;
    case l.MEDIA_TYPES.DOCUMENT:
      if (n) {
        f = s.fbt._("Contact Unavailable", null, {
          hk: "4cR9XP"
        });
        p = s.fbt._("Can't view this contact because it's no longer on your phone.", null, {
          hk: "2eybvc"
        });
        break;
      }
      f = s.fbt._("Document Unavailable", null, {
        hk: "1XCaqh"
      });
      p = s.fbt._("Can't download this document because it's no longer on your phone.", null, {
        hk: "oqFEP"
      });
      break;
    case l.MEDIA_TYPES.STICKER:
      f = s.fbt._("Sticker Unavailable", null, {
        hk: "3mn4b1"
      });
      p = s.fbt._("Can't download this sticker because it's no longer on your phone.", null, {
        hk: "2kqs5M"
      });
      break;
    default:
      f = s.fbt._("Media Message Unavailable", null, {
        hk: "2clKs2"
      });
      __LOG__(4, undefined, new Error(), true)`type: ${a}`;
      SEND_LOGS("MediaMissingModal: unexpected message type");
  }
  return c.default.createElement(r.ConfirmPopup, {
    title: f,
    onOK: () => {
      i.ModalManager.close();
    },
    okText: (0, o.default)("OK")
  }, p);
};
var r = require("../app/103440.js");
var o = a(require("../app/395767.js"));
var l = require("../app/708761.js");
var i = require("../app/114850.js");
var u = require("../app/787742.js");
var s = require("../vendor/548360.js");
var c = a(require("../vendor/667294.js"));
var d = require("./871210.js");
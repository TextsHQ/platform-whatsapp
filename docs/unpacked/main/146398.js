var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHandlers = function (e, t) {
  return {
    handleMsgInfoClick: () => {
      i.Cmd.msgInfoDrawer((0, v.unproxy)(e));
    },
    handleOpenContactChat: () => {
      const t = e.author;
      const n = (0, l.getOneToOneContactFromGroupContact)(t);
      (0, p.findChat)(n, "msgHandlerOpenContact").then(function (e) {
        i.Cmd.openChatFromUnread(e).then(t => {
          if (t) {
            u.ComposeBoxActions.focus(e);
          }
        });
      });
    },
    handleOpenWebSearchFlow: () => {
      var t;
      g.ModalManager.open(b.default.createElement(y.default, {
        messageText: (t = e.body) !== null && t !== undefined ? t : ""
      }), {
        transition: "modal-flow"
      });
    },
    handleOpenEphemeralInfoPopup: () => {
      const t = e.ephemeralDuration || 0;
      const n = (0, d.getDisappearingMessageOutOfSyncInfoStringKic)(t);
      g.ModalManager.open(b.default.createElement(s.ConfirmPopup, {
        onOK: () => {
          g.ModalManager.close();
        }
      }, n), {
        transition: "modal-flow"
      });
    },
    handleOpenBizPrivacyInfoPopup: () => {
      const {
        bizPrivacyStatus: t
      } = e;
      if (t != null) {
        g.ModalManager.open(b.default.createElement(s.ConfirmPopup, {
          onOK: () => {
            g.ModalManager.close();
          }
        }, (0, o.getBizPrivacyInfoString)(t)), {
          transition: "modal-flow"
        });
      }
    },
    handleOpenEphemeralExemptionInfoPopup: () => {
      const e = (0, C.getOrderEphemeralExemptionInfoString)();
      const t = (0, C.getLearnMorerderEphemeralExemptionButtonString)();
      g.ModalManager.open(b.default.createElement(s.ConfirmPopup, {
        cancelText: t,
        onCancel: () => {
          h.default.open((0, f.getEphemeralFaqUrl)());
        },
        onOK: () => {
          g.ModalManager.close();
        }
      }, e), {
        transition: "modal-flow"
      });
    },
    handleViewAllRepliesClick: () => {
      const n = (0, E.getQuotedMsgObj)(e);
      if (n) {
        c.DrawerManager.openDrawerRight(b.default.createElement(_.ViewAllRepliesDrawerLoadable, {
          rootMsg: (0, r.default)(n.unsafe(), "qm.unsafe()"),
          replyMsg: e
        }), {
          transition: "slide-left",
          uim: t,
          focusType: m.FocusType.TABBABLE,
          noFocus: true
        });
      }
    }
  };
};
var r = a(require("../app/670983.js"));
var o = require("./934609.js");
var l = require("../app/374660.js");
var i = require("../app/780549.js");
var u = require("../app/877171.js");
var s = require("../app/103440.js");
var c = require("../app/900316.js");
var d = require("../app/896971.js");
var f = require("../app/258105.js");
var p = require("../app/581354.js");
var m = require("../app/299950.js");
var h = a(require("../app/524173.js"));
var g = require("../app/114850.js");
var E = require("../app/592978.js");
var v = require("../app/163139.js");
var _ = require("./119109.js");
var y = a(require("./653564.js"));
var C = require("./963352.js");
var b = a(require("../vendor/667294.js"));
var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatContextMenuItemPin = function (e) {
  let {
    chat: t
  } = e;
  function n() {
    return (n = (0, r.default)(function* (e) {
      if (!e || (yield (0, l.getNumChatsPinned)()) < 3) {
        i.Cmd.pinChat((0, f.unproxy)(t), e);
      } else if (o.ChatCollection.filter(e => {
        var t;
        return e.shouldAppearInList && ((t = e.pin) !== null && t !== undefined ? t : 0) > 0;
      }).length >= 3) {
        c.ModalManager.open(h.default.createElement(u.ConfirmPopup, {
          onOK: () => c.ModalManager.close(),
          okText: (0, s.default)("OK")
        }, m.fbt._("You can only pin up to 3 chats.", null, {
          hk: "4fuJ1z"
        })));
      } else {
        c.ModalManager.open(h.default.createElement(u.ConfirmPopup, {
          title: m.fbt._("You can only pin up to 3 chats", null, {
            hk: "2EThOp"
          }),
          onOK: () => {
            (0, l.unpinAll)();
            c.ModalManager.close();
          },
          okText: m.fbt._("Unpin All", null, {
            hk: "1C9Xfc"
          }),
          onCancel: () => c.ModalManager.close(),
          cancelText: m.fbt._("Cancel", null, {
            hk: "H0gNq"
          })
        }, h.default.createElement(p.TextDiv, {
          theme: "muted"
        }, m.fbt._("Some of your pinned chats can't be seen on this device. To pin a different chat, unpin all chats first.", null, {
          hk: "33NEQP"
        }))));
      }
    })).apply(this, arguments);
  }
  if (t.canPin()) {
    return h.default.createElement(d.default, {
      key: "pin",
      onPinOrUnpin: function () {
        return n.apply(this, arguments);
      },
      chat: t
    });
  }
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/351053.js");
var l = require("./341237.js");
var i = require("../app/780549.js");
var u = require("../app/103440.js");
var s = a(require("../app/395767.js"));
var c = require("../app/114850.js");
var d = a(require("./413333.js"));
var f = require("../app/163139.js");
var p = require("../app/180519.js");
var m = require("../vendor/548360.js");
var h = a(require("../vendor/667294.js"));
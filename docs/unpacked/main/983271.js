var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUSPENDED_GROUP_SUPPORT_TAG = undefined;
exports.getSuspendedFaqUrl = g;
exports.openExitAndDeleteGroupModal = function (e) {
  s.ModalManager.open(m.default.createElement(o.default, {
    chat: e
  }), {
    transition: "modal-flow"
  });
};
exports.openSuspendedGroupMediaDownloadFailureModal = function () {
  s.ModalManager.open(m.default.createElement(c.default, null), {
    transition: "modal-flow"
  });
};
exports.openSuspendedGroupModal = function (e) {
  const t = () => {};
  const n = () => {};
  s.ModalManager.open(m.default.createElement(d.default, {
    title: p.fbt._("Group unavailable", null, {
      hk: "3XmS1y"
    }),
    onSupportClicked: () => {
      s.ModalManager.close();
      s.ModalManager.open(m.default.createElement(r.default, {
        onCancel: t,
        onSend: n,
        supportTag: h,
        entityId: e
      }), {
        transition: "modal-flow"
      });
    },
    onDismissClicked: () => {
      s.ModalManager.close();
    },
    showSupportBtn: true
  }, p.fbt._("This group is no longer available. Please contact WhatsApp Support for help.", null, {
    hk: "Al9PB"
  }), " ", E), {
    transition: "modal-flow"
  });
};
exports.openSuspendedGroupModalV2 = function (e) {
  s.ModalManager.open(m.default.createElement(f.default, {
    chat: e
  }), {
    transition: "modal-flow"
  });
};
exports.openTerminatedGroupOrNotMemberModal = function () {
  s.ModalManager.open(m.default.createElement(d.default, {
    title: p.fbt._("Group unavailable", null, {
      hk: "3XmS1y"
    }),
    onDismissClicked: () => {
      s.ModalManager.close();
    },
    showSupportBtn: false
  }, p.fbt._("This group is no longer available.", null, {
    hk: "1mhNss"
  }), " ", E), {
    transition: "modal-flow"
  });
};
var r = a(require("./695681.js"));
var o = a(require("./891531.js"));
var l = require("../app/753233.js");
var i = require("../app/258105.js");
var u = a(require("../app/932325.js"));
var s = require("../app/114850.js");
var c = a(require("../app/241995.js"));
var d = a(require("./193245.js"));
var f = a(require("./526561.js"));
var p = require("../vendor/548360.js");
var m = a(require("../vendor/667294.js"));
const h = "group-suspend-appeal";
exports.SUSPENDED_GROUP_SUPPORT_TAG = h;
function g() {
  return `${i.FAQ_BASE_URL}/cxt/?entrypointid=group-no-longer-available&platform=web&lang=${u.default.getLocale()}`;
}
const E = m.default.createElement(l.ExternalLink, {
  href: g(),
  testid: "learn-more-link"
}, p.fbt._("Learn more", null, {
  hk: "2JIdcX"
}));
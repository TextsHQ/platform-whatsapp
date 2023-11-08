var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VoipPendingRequest = y;
exports.VoipRequestPhoneNumber = _;
exports.displayPhoneNumberHidingModal = function (e, t) {
  if (!e.id.isLid()) {
    return void __LOG__(4, undefined, new Error())`displayPhoneNumberHidingModal invalid call`;
  }
  let n;
  if (t != null) {
    n = t === true ? h.PNH_ENTRY_POINT_TYPE.VIDEO : h.PNH_ENTRY_POINT_TYPE.AUDIO;
  }
  if (e.phoneNumber == null) {
    if ((0, l.getCanRequestPhoneNumber)(e)) {
      if (n != null) {
        (0, i.logPnhRequestRevealActionHelper)(m.PNH_CHAT_TYPE_TYPE.CTWA, g.PNH_MESSAGE_CHAT_PARTY.BIZ, p.PNH_ACTION_TYPE.REQUEST_DIALOG_APPEAR, n);
      }
      u.ModalManager.open(v.default.createElement(_, {
        entryPoint: n
      }));
    } else {
      u.ModalManager.open(v.default.createElement(y, null));
    }
  } else if (e.shareOwnPn !== true) {
    u.ModalManager.open(v.default.createElement(d.SharePhoneNumberRestrictedActionModal, {
      entryPoint: n
    }));
  }
};
exports.shouldDisplayPhoneNumberHidingModal = function (e) {
  if (!e.id.isLid()) {
    return false;
  }
  if (!(0, s.isCtwaConsumerUiEnabled)() && e.phoneNumber != null) {
    return false;
  }
  return e.phoneNumber == null || e.shareOwnPn !== true;
};
var r = require("../app/351053.js");
var o = require("../app/103440.js");
var l = require("../app/660666.js");
var i = require("../app/543081.js");
var u = require("../app/114850.js");
var s = require("../app/525119.js");
var c = require("./942319.js");
var d = require("./775523.js");
var f = require("../app/163139.js");
var p = require("../app/334724.js");
var m = require("../app/1373.js");
var h = require("../app/126246.js");
var g = require("../app/262553.js");
var E = require("../vendor/548360.js");
var v = a(require("../vendor/667294.js"));
function _(e) {
  const t = E.fbt._("Request phone number?", null, {
    hk: "2gp7T7"
  });
  const n = E.fbt._("Send Request", null, {
    hk: "1w6Qjw"
  });
  return v.default.createElement(o.ConfirmPopup, {
    title: t,
    onOK: () => {
      const t = r.ChatCollection.getActive();
      if (t) {
        if (e.entryPoint != null) {
          (0, i.logPnhRequestRevealActionHelper)(m.PNH_CHAT_TYPE_TYPE.CTWA, g.PNH_MESSAGE_CHAT_PARTY.BIZ, p.PNH_ACTION_TYPE.SEND_REQUEST, e.entryPoint);
        }
        (0, c.sendRequestPhoneNumber)((0, f.unproxy)(t));
      }
      u.ModalManager.close();
    },
    onCancel: () => u.ModalManager.close(),
    okText: n,
    okButtonType: "secondary"
  }, E.fbt._("This person's phone number is not shared. To call them, you need to request their number.", null, {
    hk: "29QzfS"
  }));
}
function y() {
  const e = E.fbt._("Can't make call", null, {
    hk: "3j4cus"
  });
  return v.default.createElement(o.ConfirmPopup, {
    title: e,
    onOK: () => u.ModalManager.close(),
    okButtonType: "secondary"
  }, E.fbt._("This person hasn't shared their number with you yet.", null, {
    hk: "4hSloY"
  }));
}
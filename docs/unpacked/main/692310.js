var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupOpenAddParticipantFlow = function (e, t, n) {
  const a = (0, l.getGroupSizeLimit)(e.groupType);
  if ((e == null ? undefined : e.participants.length) >= a) {
    const e = d.fbt._("Can't add more than {max} participants", [d.fbt._param("max", a)], {
      hk: "3Vkijk"
    });
    c.ToastManager.open(f.default.createElement(s.Toast, {
      msg: e,
      id: p
    }));
  } else {
    const e = f.default.createElement(o.default, {
      chat: (0, u.unproxy)(t),
      pushTransition: "none",
      popTransition: "none",
      communityName: n
    });
    i.ModalManager.open(e, {
      transition: "modal-flow"
    });
  }
};
var r = require("../app/328620.js");
var o = a(require("./775025.js"));
var l = require("../app/97858.js");
var i = require("../app/114850.js");
var u = require("../app/163139.js");
var s = require("../app/625786.js");
var c = require("../app/390737.js");
var d = require("../vendor/548360.js");
var f = a(require("../vendor/667294.js"));
const p = (0, r.genId)("max_participant_toast");
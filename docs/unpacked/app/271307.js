var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGroup = function (e, t, n, r) {
  let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  let a = arguments.length > 5 ? arguments[5] : undefined;
  return M(e, t, n, r, undefined, i, a);
};
exports.sendForNeededAddRequest = A;
var i = r(require("../vendor/81109.js"));
var a = require("./122583.js");
var o = require("./287461.js");
var s = require("./328620.js");
var l = require("./12643.js");
var u = require("./984330.js");
var c = require("./780549.js");
var d = require("./877171.js");
var p = require("./177938.js");
var f = require("./581354.js");
var _ = require("./247355.js");
var g = require("./853441.js");
var m = require("./446474.js");
var h = require("./115948.js");
var y = require("./390737.js");
var E = require("./669050.js");
var S = r(require("./286816.js"));
var v = require("../vendor/548360.js");
var T = r(require("../vendor/667294.js"));
function M(e, t, n, r) {
  let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : (0, s.genId)();
  let p = arguments.length > 5 ? arguments[5] : undefined;
  let b = arguments.length > 6 ? arguments[6] : undefined;
  let C = r.map(e => e.id);
  if ((0, o.getABPropConfigValue)("lid_groups_new_group_creation")) {
    const e = new Map();
    C.forEach(t => {
      e.set(t, (0, l.getCurrentLid)(t));
    });
    const t = [];
    e.forEach((e, n) => {
      if (e == null) {
        t.push(n);
      }
    });
    if (!(t.length > 0)) {
      C = Array.from(e.values()).filter(Boolean);
    }
  }
  const P = (0, _.createGroup)(e, C, p, b).then(e => ({
    gid: (0, E.toGroupWid)(e.wid),
    participants: e.participants.map(e => ({
      userWid: e.wid,
      code: e.error != null ? e.error.toString() : "200",
      invite_code: e.invite_code,
      invite_code_exp: e.invite_code_exp
    }))
  }));
  const O = new s.ActionType(v.fbt._("Creating group", null, {
    hk: "L9d8Y"
  }));
  const I = P.then(t => {
    A(t, e, undefined);
    return new s.ActionType(v.fbt._("Created group", null, {
      hk: "bTK31"
    }));
  }).catch((0, a.filteredCatch)(u.ServerStatusCodeError, e => e.status === 406 ? new s.ActionType(S.default._("Couldn't create group.", null, {
    hk: "UcEWI"
  }).toString() + " " + S.default._("Please enter a shorter subject.", null, {
    hk: "2MV4dU"
  }).toString()) : e.status === 412 ? new s.ActionType(v.fbt._("You can't create this group because the community is full.", null, {
    hk: "2OuzmM"
  })) : e.status === 429 ? new s.ActionType(S.default._("Couldn't create group.", null, {
    hk: "UcEWI"
  }).toString() + " " + S.default._("You've created too many groups too quickly. Try again later.", null, {
    hk: "2fN2Us"
  }).toString()) : new s.ActionType(v.fbt._("Couldn't create group.", null, {
    hk: "UcEWI"
  })))).catch(() => {
    __LOG__(3)`models:chatCollection:createGroup dropped`;
    return new s.ActionType(v.fbt._("Couldn't create group.", null, {
      hk: "UcEWI"
    }), {
      actionText: v.fbt._("Try again.", null, {
        hk: "262nZi"
      }),
      actionHandler: () => M(e, t, n, r, i, p)
    });
  });
  y.ToastManager.open(T.default.createElement(s.ActionToast, {
    id: i,
    initialAction: O,
    pendingAction: I
  }));
  return P.then(r => {
    if (b == null && r.gid) {
      (0, f.findChat)(r.gid, "createGroupAction").then(t => {
        c.Cmd.openChatBottom(t).then(e => {
          if (e) {
            d.ComposeBoxActions.focus(t);
          }
        });
        if (e === "") {
          (0, g.sendQueryGroup)(r.gid).finally(() => {});
        }
      });
    }
    if (t && n) {
      const e = m.ProfilePicThumbCollection.gadd(r.gid);
      return (0, h.setProfilePic)(e, t, n).then(() => r.gid);
    }
    return r.gid;
  }).catch((0, a.filteredCatch)(u.ServerStatusCodeError, () => {}));
}
function A(e, t, n, r) {
  if (!e.participants) {
    return;
  }
  const a = r || e.gid;
  if (!a) {
    __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
    SEND_LOGS("Group add request was provided with undefined gid");
  }
  const o = [];
  e.participants.forEach(e => {
    if (e.code !== "403") {
      return;
    }
    const t = p.ContactCollection.gadd(e.userWid, {
      silent: true
    });
    o.push((0, i.default)((0, i.default)({}, e), {}, {
      contact: t
    }));
  });
  if (o.length > 0 && a) {
    c.Cmd.openGroupsV4InviteRequestFlow(o, a, t, n);
  }
}
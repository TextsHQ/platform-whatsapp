var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t,
    displayAuthor: n
  } = e;
  const [a, b, M, S, T, w, A, P, O, k, D, I, R] = (0, C.useMsgValues)(e.msg.id, [h.getId, h.getInviteCode, h.getInviteCodeExp, h.getInviteGrp, h.getInviteGrpName, h.getInviteGrpJpegThum, o.getSenderObj, h.getComment, h.getIsSentByMe, h.getIsGroupMsg, h.getIsPSA, h.getIsGroupsV4InviteExpired, h.getType]);
  const N = () => {
    m.ModalManager.open(y.default.createElement(l.default, {
      msg: t,
      source: "invite_link"
    }));
  };
  const x = I;
  const L = y.default.createElement(E.default, {
    size: 49,
    thumb: w
  });
  const j = P ? y.default.createElement("div", {
    className: i.default.caption
  }, y.default.createElement(d.default, {
    msg: t.unsafe(),
    spacer: true,
    trusted: (0, g.isTrusted)(t.unsafe())
  })) : null;
  const B = x ? null : y.default.createElement(s.BubbleActions, {
    items: [{
      label: O ? _.fbt._("View invite", null, {
        hk: "1iTWkT"
      }) : _.fbt._("Join group", null, {
        hk: "2gMvM5"
      }),
      onClick: N,
      testid: "invite-v4-open-invite"
    }],
    theme: P ? undefined : s.BubbleActionsTheme.NO_DIVIDER
  });
  const F = !x || !j;
  const G = F ? y.default.createElement("div", {
    className: i.default.meta
  }, y.default.createElement(f.Meta, {
    msg: t
  })) : null;
  const U = P ? _.fbt._("WhatsApp group invite", null, {
    hk: "Yox1t"
  }) : y.default.createElement(v.default, {
    msg: t.unsafe()
  }, _.fbt._("WhatsApp group invite", null, {
    hk: "Yox1t"
  }));
  let W;
  if (x) {
    const e = j ? _.fbt._("Invite Expired", null, {
      hk: "1TFgKg"
    }) : y.default.createElement(v.default, {
      msg: t.unsafe()
    }, _.fbt._("Invite Expired", null, {
      hk: "1TFgKg"
    }));
    W = y.default.createElement("div", {
      className: i.default.status
    }, e);
  }
  return y.default.createElement(p.default, {
    msg: t,
    displayAuthor: n,
    hideMeta: F
  }, y.default.createElement(c.default, {
    contact: A,
    msg: t.unsafe(),
    className: (0, r.classnamesConvertMeToStylexPlease)({
      [i.default.expired]: x,
      [i.default.noCaption]: !j,
      [i.default.container]: true
    })
  }, y.default.createElement("div", {
    className: i.default.linkPreview
  }, y.default.createElement(u.default, {
    description: U,
    isInvite: true,
    isSentByMe: O,
    onClick: x ? undefined : N,
    thumbnail: L,
    title: T,
    theme: x ? "extended" : undefined,
    isLoading: false
  })), W, j, G), B);
};
var r = require("../app/396574.js");
var o = require("../app/163755.js");
var l = a(require("./942752.js"));
var i = a(require("./151204.js"));
var u = a(require("./428543.js"));
var s = require("./20493.js");
var c = a(require("./902538.js"));
var d = a(require("./371878.js"));
var f = require("./789955.js");
var p = a(require("./398685.js"));
var m = require("../app/114850.js");
var h = require("../app/787742.js");
var g = require("../app/435711.js");
var E = a(require("../app/145632.js"));
var v = a(require("./809958.js"));
var _ = require("../vendor/548360.js");
var y = a(require("../vendor/667294.js"));
var C = require("./871210.js");
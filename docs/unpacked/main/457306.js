var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/177938.js");
var o = require("../app/660666.js");
var l = require("./146749.js");
var i = require("../app/690495.js");
var u = a(require("../app/469733.js"));
var s = require("../app/714574.js");
var c = require("../app/163755.js");
var d = require("./20493.js");
var f = a(require("./902538.js"));
var p = require("./789955.js");
var m = a(require("./19805.js"));
var h = a(require("./398685.js"));
var g = require("../app/114850.js");
var E = require("../app/787742.js");
var v = require("./775523.js");
var _ = require("../app/676345.js");
var y = require("../app/126246.js");
var C = require("../vendor/548360.js");
var b = a(require("../vendor/667294.js"));
var M = a(require("../app/156720.js"));
var S = require("./871210.js");
const T = {
  container: {
    textAlign: "qfejxiq4",
    position: "g0rxnol2",
    alignItems: "gndfcl4n",
    marginTop: "if44n927",
    marginEnd: "isg5rw3j",
    marginBottom: "bn7x0pqn",
    marginStart: "heai6z19",
    borderTopStartRadius: "llnowng2",
    borderTopEndRadius: "ap6veyk2",
    borderBottomEndRadius: "hwxn6iyz",
    borderBottomStartRadius: "dtx25v1e",
    backgroundColor: "ky53r25y"
  },
  icon: {
    marginTop: "hymafltn",
    marginEnd: "q471nw87",
    marginBottom: "g105fvfm",
    marginStart: "a3oefunm"
  },
  username: {
    fontWeight: "hnx8ox4h"
  },
  text: {
    marginTop: "dj1c3cmq",
    marginEnd: "bugiwsl0",
    marginBottom: "brac1wpa",
    marginStart: "a3oefunm"
  },
  meta: {
    position: "lhggkp7q",
    end: "f9uipba7",
    bottom: "s7ynmu90"
  }
};
const w = () => {
  g.ModalManager.open(b.default.createElement(v.SharePhoneNumberRestrictedActionModal, {
    entryPoint: y.PNH_ENTRY_POINT_TYPE.PN_REQUEST
  }));
};
var A = e => {
  const [t, n, a] = (0, S.useMsgValues)(e.msg.id, [E.getTo, E.getIsSentByMe, c.getSenderObj]);
  const g = b.default.createElement(l.DialpadGreenIcon, null);
  if (n) {
    const n = r.ContactCollection.gadd(t);
    const a = (0, o.getIsMyContact)(n) ? (0, s.getFormattedName)(n) : (0, s.getFormattedPhone)(n);
    const l = C.fbt._("You requested {person-name} to share their phone number.", [C.fbt._param("person-name", b.default.createElement("span", {
      className: (0, M.default)(T.username)
    }, a))], {
      hk: "oLIhV"
    });
    return b.default.createElement(h.default, {
      msg: e.msg,
      displayAuthor: false,
      testid: "request-phone-number-modal-sender"
    }, b.default.createElement(i.FlexRow, {
      align: "center",
      xstyle: T.container
    }, b.default.createElement(u.default, {
      xstyle: T.icon
    }, g), b.default.createElement(u.default, {
      xstyle: T.text
    }, b.default.createElement(m.default, {
      msg: e.msg.unsafe()
    }, l))));
  }
  const v = r.ContactCollection.gadd(a);
  const y = (0, o.getIsMyContact)(v) ? (0, s.getFormattedName)(v) : (0, s.getFormattedPhone)(v);
  const A = C.fbt._("{person-name} requested you to share your phone number.", [C.fbt._param("person-name", b.default.createElement("span", {
    className: (0, M.default)(T.username)
  }, y))], {
    hk: "4zqOt6"
  });
  const P = C.fbt._("Share phone number", null, {
    hk: "4shIOZ"
  });
  const O = b.default.createElement(d.BubbleActions, {
    items: [{
      label: P,
      onClick: w,
      disabled: v.shareOwnPn,
      testid: "share-phone-number-button"
    }],
    theme: d.BubbleActionsTheme.NO_DIVIDER
  });
  return b.default.createElement(h.default, {
    msg: e.msg,
    displayAuthor: false,
    hideMeta: true,
    testid: "request-phone-number-modal-receiver"
  }, b.default.createElement(i.FlexRow, {
    xstyle: [T.container, _.uiPadding.bottom5]
  }, b.default.createElement(u.default, {
    xstyle: T.icon
  }, g), b.default.createElement(f.default, {
    xstyle: T.text,
    contact: e.msg.senderObj,
    msg: e.msg.unsafe()
  }, b.default.createElement("div", null, A), b.default.createElement("div", {
    className: (0, M.default)(T.meta)
  }, b.default.createElement(p.Meta, {
    msg: e.msg
  })))), O);
};
exports.default = A;
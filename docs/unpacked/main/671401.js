var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    contact: t
  } = e;
  const n = (0, h.default)();
  const [a, E] = (0, m.useContactValues)(t.id, [o.getId, s.getFormattedName]);
  const v = (0, g.useModelValues)(e.parentGroupChat, ["id", "formattedTitle"]);
  const _ = f.fbt._("Remove {contact-name} from community and groups?", [f.fbt._param("contact-name", p.default.createElement(l.EmojiText, {
    direction: "auto",
    text: E
  }))], {
    hk: "4iQ4t8"
  });
  const y = f.fbt._("Remove {contact-name} from community and groups?", [f.fbt._param("contact-name", E)], {
    hk: "3cRuWN"
  });
  const C = f.fbt._("By removing {contact-name} from \"{community-name}\" they will exit and lose access to all groups that they belong to in this community, including those they created. {=m7}", [f.fbt._param("contact-name", p.default.createElement(l.EmojiText, {
    direction: "auto",
    text: E
  })), f.fbt._param("community-name", p.default.createElement(l.EmojiText, {
    direction: "auto",
    text: v.formattedTitle
  })), f.fbt._implicitParam("=m7", p.default.createElement(i.ExternalLink, {
    href: (0, u.getRemoveFromCommunityFaqUrl)()
  }, f.fbt._("Learn more", null, {
    hk: "47igAz"
  })))], {
    hk: "1NmKSL"
  });
  return p.default.createElement(r.ConfirmPopup, {
    ref: n,
    title: _,
    onOK: () => {
      (0, d.default)(v, t);
      c.ModalManager.close();
    },
    onCancel: () => {
      c.ModalManager.close();
    },
    okText: f.fbt._("Remove", null, {
      hk: "3sEfU8"
    }),
    ariaLabel: y
  }, C);
};
var r = require("../app/103440.js");
var o = require("../app/660666.js");
var l = require("../app/305521.js");
var i = require("../app/753233.js");
var u = require("../app/258105.js");
var s = require("../app/714574.js");
var c = require("../app/114850.js");
var d = a(require("./700286.js"));
var f = require("../vendor/548360.js");
var p = a(require("../vendor/667294.js"));
var m = require("../app/379811.js");
var h = a(require("../app/401715.js"));
var g = require("../app/655241.js");
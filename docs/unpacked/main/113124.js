var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = e.fromMe ? d.fbt._("Get Started With Disappearing Messages", null, {
    hk: "293cLq"
  }) : d.fbt._("Disappearing messages are turned on in this chat", null, {
    hk: "GfWv5"
  });
  const n = d.fbt._("For more privacy and storage, all new messages will disappear for everyone in this chat after the selected duration.", null, {
    hk: "1QYhZP"
  });
  let a;
  a = e.fromMe ? d.fbt._("This setting does not affect your existing chats or any messages already saved to your device. Remember, people may find other ways to save messages.", null, {
    hk: "Lj7oV"
  }) : f.default.createElement(f.default.Fragment, null, d.fbt._("This setting does not affect your existing chats or any messages already saved to your device. Remember, people may find other ways to save messages.", null, {
    hk: "Lj7oV"
  }), " ", f.default.createElement(o.ExternalLink, {
    href: (0, l.getEphemeralFaqUrl)()
  }, d.fbt._("Learn more", null, {
    hk: "1rcCLt"
  })));
  return f.default.createElement(f.default.Fragment, null, f.default.createElement(i.FlexRow, {
    align: "center",
    justify: "center"
  }, f.default.createElement(s.LottieAnimation, {
    loop: true,
    autoplay: true,
    data: r.default,
    xstyle: p.animation
  })), f.default.createElement(i.FlexRow, {
    align: "center",
    justify: "center"
  }, f.default.createElement(u.default, {
    xstyle: p.badge
  }, d.fbt._("NEW", null, {
    hk: "zkHRf"
  }))), f.default.createElement(c.TextHeader, {
    xstyle: p.header
  }, t), f.default.createElement(c.TextParagraph, {
    xstyle: p.paragraph
  }, n), f.default.createElement(c.TextParagraph, {
    xstyle: p.paragraph
  }, a));
};
var r = a(require("./824367.js"));
var o = require("../app/753233.js");
var l = require("../app/258105.js");
var i = require("../app/690495.js");
var u = a(require("../app/469733.js"));
var s = require("./617267.js");
var c = require("../app/180519.js");
var d = require("../vendor/548360.js");
var f = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const p = {
  badge: {
    backgroundColor: "aquyuamc",
    borderTopStartRadius: "boajuire",
    borderTopEndRadius: "o93wvyfv",
    borderBottomEndRadius: "i5w8n1e6",
    borderBottomStartRadius: "cnpay6qi",
    color: "qiqvuef5",
    fontSize: "dsh4tgtl",
    marginTop: "iy2cu22y",
    paddingTop: "eujn52yf",
    paddingEnd: "abxuf49s",
    paddingBottom: "ckm995li",
    paddingStart: "mhcwslh8",
    textTransform: "ofejerhi"
  },
  header: {
    fontSize: "p9fp32ui",
    lineHeight: "pvbam5uh",
    marginTop: "iy2cu22y"
  },
  animation: {
    height: "ptxfukc7",
    width: "hp5m5kpu"
  },
  paragraph: {
    marginTop: "iy2cu22y"
  }
};
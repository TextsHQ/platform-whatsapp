var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, f.useModelValues)(e.groupMetadata, ["participants", "parentGroup", "id"]);
  const {
    parentGroup: n
  } = t;
  if (!n) {
    __LOG__(4, undefined, new Error())`CommunityAnnouncementsMsgBar null parent`;
    return null;
  }
  return c.default.createElement(u.default, {
    onClick: () => {
      r.Cmd.openCommunityHome(n);
    },
    xstyle: p.wrapper
  }, c.default.createElement(o.FlexRow, {
    align: "center",
    justify: "center"
  }, c.default.createElement(l.default, null, c.default.createElement("span", {
    className: (0, d.default)(p.text)
  }, s.fbt._("Only {=m2} can send messages", [s.fbt._implicitParam("=m2", c.default.createElement(u.default, {
    onClick: e => {
      e.stopPropagation();
      (0, i.handleMsgAdmin)(t, s.fbt._("Message community admin", null, {
        hk: "3iQt8Y"
      }));
    },
    xstyle: p.adminBtn
  }, s.fbt._("community admins", null, {
    hk: "1BMn5k"
  })))], {
    hk: "3K7pgV"
  })))));
};
var r = require("../app/780549.js");
var o = require("../app/690495.js");
var l = a(require("../app/469733.js"));
var i = require("./387304.js");
var u = a(require("../app/625903.js"));
var s = require("../vendor/548360.js");
var c = a(require("../vendor/667294.js"));
var d = a(require("../app/156720.js"));
var f = require("../app/655241.js");
const p = {
  wrapper: {
    width: "ln8gz9je",
    marginTop: "j07hyc8x",
    marginBottom: "tng8x1zc"
  },
  text: {
    whiteSpace: "bbv8nyr4"
  },
  adminBtn: {
    color: "o0rubyzf"
  }
};
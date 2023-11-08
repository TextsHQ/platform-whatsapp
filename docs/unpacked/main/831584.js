var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    numMore: t,
    viewAll: n = false,
    fromNewsletter: a = false,
    onClick: m,
    xstyle: h,
    ariaLabel: g
  } = e;
  const E = d.default.createElement(i.FlexRow, {
    align: "center",
    justify: "center",
    xstyle: p.iconWrapper
  }, n ? null : d.default.createElement(u.default, {
    transparent: true
  }, d.default.createElement(o.DownIcon, {
    color: s.SvgColorProp.SECONDARY
  })));
  let v = c.fbt._({
    "*": "{count} more",
    _1: "1 more"
  }, [c.fbt._plural(t, "count")], {
    hk: "RB4fm"
  });
  if (n) {
    v = c.fbt._("View all ({more})", [c.fbt._param("more", v)], {
      hk: "cPsDN"
    });
    if (a) {
      v = (0, r.getViewAllChannelFollowersText)();
    }
  }
  return d.default.createElement(l.DrawerButtonSimple, {
    ariaLabel: g,
    icon: E,
    xstyle: [p.container, h],
    onClick: m
  }, d.default.createElement("div", {
    className: (0, f.default)(p.text, n && p.textAlt)
  }, v));
};
var r = require("./949359.js");
var o = require("./957546.js");
var l = require("./36045.js");
var i = require("../app/690495.js");
var u = a(require("./802211.js"));
var s = require("../app/220584.js");
var c = require("../vendor/548360.js");
var d = a(require("../vendor/667294.js"));
var f = a(require("../app/156720.js"));
const p = {
  container: {
    height: "q1n4p668",
    width: "ln8gz9je",
    paddingStart: "ddw6s8x9",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    color: "pm5hny62",
    ":hover": {
      backgroundColor: "os03hap6"
    }
  },
  iconWrapper: {
    width: "fujhy7ri"
  },
  text: {
    flexGrow: "ggj6brxn",
    textAlign: "ljrqcn24"
  },
  textAlt: {
    color: "jq3rn4u7"
  }
};
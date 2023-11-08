var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsCheckList = function (e) {
  return o.default.createElement("div", {
    className: (0, l.default)(i.container)
  }, e.children);
};
exports.SettingsCheckListItem = function (e) {
  const {
    checkboxRightAligned: t = false,
    hidden: n = false
  } = e;
  const a = o.default.createElement("label", {
    className: (0, l.default)(i.label, e.disabled === true && i.labelDisabled),
    htmlFor: e.id
  }, e.children);
  const s = o.default.createElement("div", {
    className: (0, l.default)(t ? i.controlRightAligned : i.control, e.disabled === true && i.controlDisabled)
  }, o.default.createElement(r.CheckBox, {
    id: e.id,
    onChange: e.onChange,
    checked: e.checked,
    disabled: e.disabled
  }));
  if (t) {
    if (n) {
      return null;
    } else {
      return o.default.createElement(u, {
        disabled: e.disabled,
        checkboxRightAligned: t
      }, a, s);
    }
  }
  return o.default.createElement(u, {
    disabled: e.disabled
  }, s, a);
};
exports.SettingsCheckListSection = u;
var r = require("./468926.js");
var o = a(require("../vendor/667294.js"));
var l = a(require("../app/156720.js"));
const i = {
  container: {
    boxSizing: "cm280p3y",
    paddingBottom: "r219jyu0",
    marginTop: "ignnouf6",
    marginStart: "dl2ettod",
    fontSize: "f8jlpxt4",
    lineHeight: "r5qsrrlp"
  },
  section: {
    display: "p357zi0d",
    paddingBottom: "r219jyu0",
    marginEnd: "poiibwu2",
    fontSize: "f8jlpxt4",
    lineHeight: "r5qsrrlp"
  },
  sectionDisabled: {
    pointerEvents: "m62443ks"
  },
  sectionControlRightAligned: {
    display: "p357zi0d",
    paddingTop: "hc2u0oym",
    paddingBottom: "myel2vfb",
    fontSize: "bze30y65",
    lineHeight: "r5qsrrlp"
  },
  label: {
    flexGrow: "ggj6brxn",
    flexShrink: "m0h2a7mj",
    flexBasis: "rjo8vgbg",
    transitionProperty: "cr6d9hz6",
    transitionDuration: "p4t1lx4y",
    transitionTimingFunction: "pu4k07i0"
  },
  controlRightAligned: {
    display: "p357zi0d",
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    alignItems: "gndfcl4n",
    marginStart: "bv1sdm6y",
    transitionProperty: "cr6d9hz6",
    transitionDuration: "p4t1lx4y",
    transitionTimingFunction: "pu4k07i0"
  },
  control: {
    display: "l7jjieqr",
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    marginEnd: "spjzgwxb",
    verticalAlign: "kbne4t5p",
    transitionProperty: "cr6d9hz6",
    transitionDuration: "p4t1lx4y",
    transitionTimingFunction: "pu4k07i0"
  },
  controlDisabled: {
    opacity: "p2rjqpw5"
  },
  labelDisabled: {
    color: "hp667wtd",
    opacity: "ebu6xrgy"
  }
};
function u(e) {
  return o.default.createElement("div", {
    className: (0, l.default)(e.checkboxRightAligned === true ? i.sectionControlRightAligned : i.section, e.disabled === true && i.sectionDisabled)
  }, e.children);
}
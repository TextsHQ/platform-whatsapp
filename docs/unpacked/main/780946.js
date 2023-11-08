Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EphemeralOptionsSection = function (e) {
  const {
    reverse: t,
    initialDuration: n,
    onChange: f
  } = e;
  const [p, m] = (0, d.useState)(n);
  const h = (0, d.useRef)();
  const g = (0, d.useMemo)(() => (0, l.getDefaultEphemeralityDurations)(t), [t]);
  const E = g.map(e => d.default.createElement(i.RadioWithLabel, {
    theme: i.RadioWithLabelThemeEnum.LARGE,
    key: e.value,
    name: "duration",
    value: e.value,
    label: e.label,
    checked: e.value === p,
    onChange: () => {
      t = e.value;
      m(t);
      return void f(t);
      var t;
    }
  }));
  if ((0, a.getABPropConfigValue)("dm_additional_durations")) {
    const e = (0, l.getAdditionalEphemeralityDurations)(t);
    E.splice(E.length - 1, 0, d.default.createElement(i.RadioWithLabel, {
      key: "additional-durations",
      value: "additional-duration",
      name: "duration",
      checked: e.some(e => e.value === p),
      label: d.default.createElement(u.WAWebSelectDropdown, {
        ref: h,
        defaultLabel: c.fbt._("More options...", null, {
          hk: "I5N33"
        }),
        selectedItemId: `${p}`,
        items: e.map(e => ({
          id: `${e.value}`,
          primary: e.label.toString(),
          primaryDetail: e.type === "dev" ? d.default.createElement(o.DevOnlyBadge, null) : null,
          detail: p === e.value ? d.default.createElement(r.CheckmarkIcon, {
            color: s.SvgColorProp.TEAL
          }) : null
        })),
        onChangeSelectedItem: e => {
          const t = parseInt(e, 10);
          m(t);
          f(t);
        },
        testid: "additional-durations-dropdown"
      }),
      onChange: () => {
        var e;
        if (!((e = h.current) === null || e === undefined)) {
          e.open();
        }
      }
    }));
  }
  return d.default.createElement("div", null, E);
};
var a = require("../app/287461.js");
var r = require("../app/731971.js");
var o = require("./807078.js");
var l = require("./741917.js");
var i = require("./695431.js");
var u = require("../main-chunk/80301.js");
var s = require("../app/220584.js");
var c = require("../vendor/548360.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
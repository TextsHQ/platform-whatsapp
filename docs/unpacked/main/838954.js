var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    title: t,
    countryCode: n,
    countries: a,
    onSave: v
  } = e;
  const [C, b] = (0, g.useState)("");
  const [M, S] = (0, g.useState)(n || "");
  const T = (0, g.useCallback)(() => {
    f.ModalManager.close();
    v(M);
  }, [M, v]);
  const w = (0, g.useCallback)(e => {
    S(e.target.value);
  }, []);
  return g.default.createElement(d.Modal, {
    type: d.ModalTheme.Box
  }, g.default.createElement(l.default, {
    theme: "settings"
  }, g.default.createElement(u.DrawerHeader, {
    title: t,
    type: u.DRAWER_HEADER_TYPE.POPUP,
    onCancel: () => f.ModalManager.close()
  }), g.default.createElement(i.default, null, g.default.createElement(s.FlexColumn, {
    align: "stretch"
  }, g.default.createElement(c.default, {
    shrink: 0,
    xstyle: _.search
  }, g.default.createElement(r.IconSection, {
    Icon: m.SearchIcon,
    theme: r.IconSectionTheme.NoMarginSmallGutter,
    content: g.default.createElement(p.RichTextField, {
      value: C,
      editable: true,
      inputPlaceholder: h.fbt._("Search…", null, {
        hk: "rSmJp"
      }),
      onChange: e => b(e.text),
      focusOnMount: true,
      theme: "text-input",
      lowProfile: true
    })
  })), g.default.createElement(c.default, {
    xstyle: _.formWrapper,
    grow: 1
  }, g.default.createElement("form", {
    className: (0, E.default)(_.form)
  }, g.default.createElement("ol", null, a.filter(e => {
    let [t, n] = e;
    return t.toLowerCase().includes(C.toLowerCase()) || n.toString().toLowerCase().includes(C.toLowerCase());
  }).map(e => {
    let [t, n, a, r] = e;
    return g.default.createElement(y, {
      selectedCountryCode: M,
      countryCode: t,
      label: n,
      description: a,
      xstyle: r,
      onChange: w,
      key: t
    });
  })))))), g.default.createElement(s.FlexRow, {
    justify: "end",
    xstyle: _.footer
  }, g.default.createElement(c.default, null, g.default.createElement(o.default, {
    type: "primary",
    onClick: T,
    className: (0, E.default)(_.submitButton)
  }, h.fbt._("Save", null, {
    hk: "2AH950"
  }))))));
};
var r = require("./107755.js");
var o = a(require("../app/692629.js"));
var l = a(require("./908081.js"));
var i = a(require("./324093.js"));
var u = require("./626194.js");
var s = require("../app/690495.js");
var c = a(require("../app/469733.js"));
var d = require("../app/118612.js");
var f = require("../app/114850.js");
var p = require("./202391.js");
var m = require("../main-chunk/447514.js");
var h = require("../vendor/548360.js");
var g = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
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
var E = a(require("../app/156720.js"));
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const _ = {
  inputWrapper: {
    display: "p357zi0d",
    alignSelf: "o2es7gts",
    paddingEnd: "iffbo4e8"
  },
  formWrapper: {
    overflowY: "ag5g9lrv"
  },
  form: {
    paddingTop: "qomlamqu",
    paddingEnd: "f9ovudaz",
    paddingBottom: "bxcbqipq",
    paddingStart: "gx1rr48f"
  },
  search: {
    backgroundColor: "amaavye1",
    paddingTop: "emrlamx0",
    paddingEnd: "bcymb0na",
    paddingBottom: "aiput80m",
    paddingStart: "e8k79tju"
  },
  option: {
    paddingTop: "emrlamx0",
    paddingEnd: "bcymb0na",
    paddingBottom: "aiput80m",
    paddingStart: "e8k79tju"
  },
  label: {
    display: "f804f6gw",
    fontSize: "fe5nidar"
  },
  description: {
    color: "hp667wtd",
    fontSize: "enbbiyaj",
    lineHeight: "t4tp0euv"
  },
  footer: {
    paddingTop: "emrlamx0",
    paddingEnd: "itegkywt",
    paddingBottom: "aiput80m",
    paddingStart: "rppts313",
    backgroundColor: "lkjmyc96",
    borderTop: "swyb62mu"
  },
  submitButton: {
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka"
  },
  cursorPointer: {
    cursor: "ajgl1lbb"
  }
};
function y(e) {
  let {
    selectedCountryCode: t,
    countryCode: n,
    label: a,
    description: r,
    xstyle: o,
    onChange: l
  } = e;
  return g.default.createElement("li", {
    className: (0, E.default)(_.option, _.cursorPointer, o)
  }, g.default.createElement(s.FlexRow, {
    align: "center"
  }, g.default.createElement(c.default, {
    xstyle: _.inputWrapper
  }, g.default.createElement("input", {
    id: n,
    value: n,
    type: "radio",
    name: "countryCode",
    checked: n === t,
    className: (0, E.default)(_.cursorPointer),
    onChange: l
  })), g.default.createElement(c.default, {
    grow: 1
  }, g.default.createElement("label", {
    htmlFor: n,
    className: (0, E.default)(_.label, _.cursorPointer)
  }, a), r !== undefined ? g.default.createElement("label", {
    htmlFor: n,
    className: (0, E.default)(_.description, _.cursorPointer)
  }, r) : null)));
}
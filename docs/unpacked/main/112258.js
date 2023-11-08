var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    legalEntityDetails: t,
    onSave: n
  } = e;
  const [a, _] = (0, E.useState)(t == null ? undefined : t.entityType);
  const [b, M] = (0, E.useState)(t == null ? undefined : t.entityTypeCustom);
  const [S, T] = (0, E.useState)(t == null ? undefined : t.isRegistered);
  (0, E.useEffect)(() => {
    if (a !== (t == null ? undefined : t.entityType)) {
      M("");
      T(false);
    }
  }, [a, t == null ? undefined : t.entityType]);
  const w = (0, E.useCallback)(() => {
    m.ModalManager.close();
    n(a, b, S);
  }, [a, b, S, n]);
  const A = (0, E.useCallback)(e => {
    _(e.target.value);
  }, []);
  const P = (0, E.useCallback)(e => T(e.target.checked), []);
  const O = E.default.createElement(C, {
    value: S,
    label: g.fbt._("Registered Business", null, {
      hk: "3N1x9I"
    }),
    inputType: "checkbox",
    xstyle: y.indentedOption,
    onChange: P
  });
  return E.default.createElement(p.Modal, {
    type: p.ModalTheme.Box
  }, E.default.createElement(u.default, {
    theme: "settings"
  }, E.default.createElement(c.DrawerHeader, {
    title: g.fbt._("Business Type", null, {
      hk: "48J73B"
    }),
    type: c.DRAWER_HEADER_TYPE.POPUP,
    onCancel: () => m.ModalManager.close()
  }), E.default.createElement(s.default, null, E.default.createElement("form", {
    className: (0, v.default)(y.form)
  }, E.default.createElement("ol", null, E.default.createElement(C, {
    id: o.businessTypeOptions.limitedLiabilityPartnership,
    value: a,
    label: g.fbt._("Limited liability partnership", null, {
      hk: "2dwmwU"
    }),
    onChange: A
  }), E.default.createElement(C, {
    id: o.businessTypeOptions.soleProprietorship,
    value: a,
    label: g.fbt._("Sole proprietorship", null, {
      hk: "2N7jks"
    }),
    onChange: A
  }), E.default.createElement(C, {
    id: o.businessTypeOptions.partnership,
    value: a,
    label: g.fbt._("Partnership", null, {
      hk: "ZeckL"
    }),
    onChange: A
  }), a === o.businessTypeOptions.partnership && O, E.default.createElement(C, {
    id: o.businessTypeOptions.publicCompany,
    value: a,
    label: g.fbt._("Public Company", null, {
      hk: "1YuMvC"
    }),
    onChange: A
  }), E.default.createElement(C, {
    id: o.businessTypeOptions.privateCompany,
    value: a,
    label: g.fbt._("Private Company", null, {
      hk: "WL0uU"
    }),
    onChange: A
  }), E.default.createElement(C, {
    id: o.businessTypeOptions.other,
    value: a,
    label: g.fbt._("Other", null, {
      hk: "3zua5D"
    }),
    onChange: A
  }), a === o.businessTypeOptions.other && E.default.createElement(E.default.Fragment, null, E.default.createElement("div", {
    className: (0, v.default)(y.indentedOption)
  }, E.default.createElement(h.RichTextField, {
    value: b,
    editable: true,
    maxLength: i.COMPLIANCE_INFO_LENGTH.ENTITY_TYPE_CUSTOM,
    inputPlaceholder: g.fbt._("Label", null, {
      hk: "3MRMvC"
    }),
    showRemaining: true,
    onChange: e => {
      let {
        text: t
      } = e;
      return M(t);
    },
    theme: "text-input",
    lowProfile: true
  })), O)))), E.default.createElement(d.FlexRow, {
    justify: "end",
    xstyle: y.footer
  }, E.default.createElement(f.default, null, E.default.createElement(l.default, {
    type: "primary",
    onClick: w,
    disabled: a === o.businessTypeOptions.other && !(0, r.existsFieldIgnoreHardEnforcement)(b),
    className: (0, v.default)(y.submitButton)
  }, g.fbt._("Save", null, {
    hk: "2AH950"
  }))))));
};
var r = require("../app/637842.js");
var o = require("../app/817649.js");
var l = a(require("../app/692629.js"));
var i = require("../app/676594.js");
var u = a(require("./908081.js"));
var s = a(require("./324093.js"));
var c = require("./626194.js");
var d = require("../app/690495.js");
var f = a(require("../app/469733.js"));
var p = require("../app/118612.js");
var m = require("../app/114850.js");
var h = require("./202391.js");
var g = require("../vendor/548360.js");
var E = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
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
var v = a(require("../app/156720.js"));
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const y = {
  inputWrapper: {
    display: "p357zi0d",
    alignSelf: "o2es7gts",
    paddingEnd: "iffbo4e8"
  },
  form: {
    paddingTop: "pxvlsfnc",
    paddingEnd: "bcymb0na",
    paddingBottom: "n3bptxsn",
    paddingStart: "e8k79tju"
  },
  label: {
    display: "f804f6gw",
    paddingTop: "emrlamx0",
    paddingEnd: "f9ovudaz",
    paddingBottom: "aiput80m",
    paddingStart: "gx1rr48f",
    fontSize: "fe5nidar"
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
  indentedOption: {
    marginStart: "dl2ettod"
  },
  cursorPointer: {
    cursor: "ajgl1lbb"
  }
};
function C(e) {
  let {
    id: t,
    value: n,
    label: a,
    inputType: r = "radio",
    xstyle: o,
    onChange: l
  } = e;
  const i = t || a;
  return E.default.createElement("li", {
    className: (0, v.default)(y.cursorPointer, o)
  }, E.default.createElement(d.FlexRow, {
    align: "center"
  }, E.default.createElement(f.default, {
    xstyle: y.inputWrapper
  }, E.default.createElement("input", {
    id: i,
    value: i,
    type: r,
    name: "entityType",
    checked: r === "radio" ? n === i : n,
    className: (0, v.default)(y.cursorPointer),
    onChange: l
  })), E.default.createElement(f.default, {
    grow: 1
  }, E.default.createElement("label", {
    htmlFor: i,
    className: (0, v.default)(y.label, y.cursorPointer)
  }, a))));
}
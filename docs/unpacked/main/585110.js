var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextDropdownMenu = function (e) {
  const {
    popover: t
  } = g((0, r.default)((0, r.default)({}, e), {}, {
    initHandling: "contextmenu"
  }));
  return t;
};
exports.Dropdown = function (e) {
  const {
    popover: t
  } = h(e);
  return t;
};
exports.DropdownMenu = function (e) {
  const {
    popover: t
  } = g(e);
  return t;
};
Object.defineProperty(exports, "PopoverAlignment", {
  enumerable: true,
  get: function () {
    return i.PopoverAlignment;
  }
});
Object.defineProperty(exports, "PopoverPosition", {
  enumerable: true,
  get: function () {
    return i.PopoverPosition;
  }
});
exports.useDropdown = h;
exports.useDropdownMenu = g;
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/690495.js");
var i = require("../app/411342.js");
var u = require("../app/676345.js");
var s = require("./913290.js");
var c = require("./470855.js");
var d = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const f = ["children", "initHandling", "material"];
const p = ["children", "onSelect", "menuRef", "maxHeight", "minWidth", "initialActiveOptionId", "initHandling", "material"];
const m = {
  container: {
    borderTopStartRadius: "boajuire",
    borderTopEndRadius: "o93wvyfv",
    borderBottomEndRadius: "i5w8n1e6",
    borderBottomStartRadius: "cnpay6qi",
    backgroundColor: "rf2f03pv",
    boxShadow: "o8gxb310",
    color: "fkbpgrx9",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  material: {
    borderTopStartRadius: "nl2xi1ke",
    borderTopEndRadius: "r2bxqa8h",
    borderBottomEndRadius: "jyp9psb5",
    borderBottomStartRadius: "n1nfpgil"
  }
};
function h(e) {
  const {
    children: t,
    initHandling: n,
    material: a
  } = e;
  const s = (0, o.default)(e, f);
  const p = a === true || (0, c.supportsMaterialDesign)();
  return (0, i.usePopoverElement)((0, r.default)((0, r.default)({}, s), {}, {
    initHandling: n != null ? n : "click",
    dismissable: true,
    element: d.default.createElement(l.FlexItem, {
      xstyle: [m.container, p && m.material, !p && u.uiPadding.vert8]
    }, t)
  }));
}
function g(e) {
  const {
    children: t,
    onSelect: n,
    menuRef: a,
    maxHeight: l,
    minWidth: i,
    initialActiveOptionId: u,
    initHandling: c,
    material: f
  } = e;
  const m = (0, o.default)(e, p);
  const g = h((0, r.default)((0, r.default)({}, m), {}, {
    initHandling: c != null ? c : "click",
    dismissable: true,
    material: f,
    children: d.default.createElement(s.WDSMenu, {
      ref: a,
      material: f,
      maxHeight: l,
      minWidth: i,
      initialActiveOptionId: u,
      onSelect: (e, t) => {
        let {
          type: a
        } = t;
        if (!(n == null)) {
          n(e);
        }
        if (["multi-select", "submenu", "switch"].includes(a) === false) {
          g.hidePopover();
        }
      }
    }, t)
  }));
  return g;
}
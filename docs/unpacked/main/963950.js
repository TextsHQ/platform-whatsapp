var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LIST_BUTTON_HEIGHT = undefined;
exports.ListButton = function (e) {
  const {
    onClick: t,
    children: n,
    id: a,
    testid: s
  } = e;
  const [c, d] = (0, i.default)(e.active, a != null ? a : "");
  return l.default.createElement(r.FlexRow, {
    ref: c,
    xstyle: [u.container, d && u.active, !d && u.hover],
    align: "center",
    justify: "center",
    testid: s
  }, l.default.createElement(o.default, {
    xstyle: u.button,
    onClick: t
  }, n));
};
var r = require("../app/690495.js");
var o = a(require("../app/625903.js"));
var l = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var i = a(require("../main-chunk/928361.js"));
exports.LIST_BUTTON_HEIGHT = 60;
const u = {
  container: {
    height: "k45dudtp",
    fontSize: "enbbiyaj",
    color: "jq3rn4u7",
    backgroundColor: "ihvf49ua"
  },
  hover: {
    ":hover": {
      backgroundColor: "os03hap6"
    }
  },
  active: {
    backgroundColor: "i16jpgpt"
  },
  button: {
    width: "ln8gz9je",
    height: "ppled2lx"
  }
};
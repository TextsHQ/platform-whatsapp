var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, i.useIsDarkTheme)() ? o.PnhDisplayNameDarkIcon : l.PnhDisplayNameIcon;
  return u.default.createElement("div", {
    className: (0, s.default)(c.container)
  }, u.default.createElement("div", {
    className: (0, s.default)([c.phoneNumber, c.textOverflow, e.pictureWid != null ? c.withCustomImage : c.noCustomImage])
  }, e.pictureWid != null && u.default.createElement(r.DetailImage, {
    id: e.pictureWid,
    size: 24,
    xstyle: c.customImage
  }), u.default.createElement("div", {
    className: (0, s.default)(c.textOverflow),
    dir: "ltr"
  }, e.displayName)), u.default.createElement(t, {
    directional: true
  }));
};
var r = require("../app/23641.js");
var o = require("./953804.js");
var l = require("./868690.js");
var i = require("../app/667738.js");
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
const c = {
  container: {
    position: "g0rxnol2"
  },
  phoneNumber: {
    position: "lhggkp7q",
    fontWeight: "hnx8ox4h",
    fontSize: "enbbiyaj",
    lineHeight: "hp2ib53p",
    color: "cpkabmy0",
    zIndex: "jnl3jror"
  },
  textOverflow: {
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    whiteSpace: "le5p0ye3",
    textOverflow: "lhj4utae"
  },
  noCustomImage: {
    top: "me3ayyum",
    start: "pl8jymf4",
    maxWidth: "k3ksrb77"
  },
  withCustomImage: {
    top: "bznece5b",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    flexDirection: "sap93d0t",
    start: "guo0zu0m",
    width: "b9qf7owj",
    maxWidth: "i8dpc0xa",
    backgroundColor: "ovutvysd"
  },
  customImage: {
    minWidth: "mhp1pqu9",
    marginInlineEnd: "qvpkcwl6"
  }
};
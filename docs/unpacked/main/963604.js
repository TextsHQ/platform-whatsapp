var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingIndicator = function (e) {
  return r.default.createElement("div", {
    className: (0, o.default)(l.barContainer),
    role: "progressbar"
  }, e.loading && r.default.createElement(r.default.Fragment, null, r.default.createElement("span", {
    className: (0, o.default)(l.movingBarCommon, l.movingBar1)
  }), r.default.createElement("span", {
    className: (0, o.default)(l.movingBarCommon, l.movingBar2)
  })));
};
exports.loadingIndicatorStyles = undefined;
var r = a(require("../vendor/667294.js"));
var o = a(require("../app/156720.js"));
const l = {
  barContainer: {
    position: "g0rxnol2",
    width: "ln8gz9je",
    height: "f4pf1esu",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    backgroundColor: "qqhth2cz",
    borderEnd: "pdo9fnbd",
    borderStart: "hqx4twni"
  },
  movingBarCommon: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    bottom: "jxacihee",
    start: "tkdu00h0",
    width: "gofbmt1g",
    backgroundColor: "bq39o27w",
    transitionProperty: "bo8jc6qi",
    transitionDuration: "hswow7x1",
    transitionTimingFunction: "lu2z1zfr",
    transformOrigin: "o12a8ak1",
    display: "f804f6gw",
    animationDuration: "dn50c4kw",
    animationTimingFunction: "ls0cxkps",
    animationIterationCount: "tkmeqcnu"
  },
  movingBar1: {
    animationName: "pewhpk3o"
  },
  movingBar2: {
    animationName: "rnigfn14"
  }
};
const i = l;
exports.loadingIndicatorStyles = i;
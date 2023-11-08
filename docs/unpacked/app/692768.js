var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BotCommandMutatorComponent = function (e) {
  let {
    children: t = ""
  } = e;
  return o.default.createElement(i.Clickable, {
    as: "span",
    xstyle: s.link,
    onClick: () => {
      a.ComposeBoxActions.paste(null, `${String(t)} `, {
        insertLeadingSpace: true
      });
    }
  }, t);
};
var i = require("./950987.js");
var a = require("./877171.js");
var o = r(require("../vendor/667294.js"));
r(require("./156720.js"));
const s = {
  link: {
    color: "o0rubyzf"
  }
};
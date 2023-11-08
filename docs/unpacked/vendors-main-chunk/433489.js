var r = require("../vendor/667294.js");
let i = r.createContext(null);
exports.LexicalComposerContext = i;
exports.createLexicalComposerContext = function (e, t) {
  let n = null;
  if (e != null) {
    n = e[1];
  }
  return {
    getTheme: function () {
      if (t != null) {
        return t;
      } else if (n != null) {
        return n.getTheme();
      } else {
        return null;
      }
    }
  };
};
exports.useLexicalComposerContext = function () {
  let e = r.useContext(i);
  if (e == null) {
    throw Error("Minified Lexical error #8; visit https://lexical.dev/docs/error?code=8 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");
  }
  return e;
};
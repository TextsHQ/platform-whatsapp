var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WapParser = undefined;
var i = r(require("./415227.js"));
var a = require("./466202.js");
exports.WapParser = class {
  constructor(e, t) {
    this._name = e;
    this._parser = t;
  }
  parse(e) {
    const t = new a.ParsableWapNode(this._name, e);
    try {
      return {
        success: this._parser(t)
      };
    } catch (e) {
      if (e instanceof a.XmppParsingFailure) {
        return {
          error: e
        };
      }
      throw e;
    }
  }
  parseOrThrow(e) {
    const t = this.parse(e);
    if (t.error) {
      throw (0, i.default)(String(t.error));
    }
    return t.success;
  }
};
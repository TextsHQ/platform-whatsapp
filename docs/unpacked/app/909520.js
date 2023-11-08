var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./840669.js");
var a = r(require("./24824.js"));
var o = require("./419272.js");
var s = r(require("./881205.js"));
class l extends s.default {
  constructor(e, t) {
    super(new a.default(i.initialize, o.IdbMetaInfoTable), {
      primaryIndex: o.metaInfoPrimaryIndex,
      dateIndex: o.metaInfoDateIndex,
      sizeIndex: o.metaInfoSizeIndex,
      maxSize: e,
      dispose: t
    });
  }
}
exports.default = l;
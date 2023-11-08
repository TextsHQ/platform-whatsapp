Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.metaInfoSizeIndex = exports.metaInfoPrimaryIndex = exports.metaInfoDateIndex = exports.IdbMetaInfoTable = undefined;
var r = require("./149254.js");
var i = require("./322511.js");
exports.metaInfoPrimaryIndex = "id";
const a = "timestamp";
exports.metaInfoDateIndex = a;
const o = "size";
exports.metaInfoSizeIndex = o;
const s = "lru-media-meta-info";
const {
  addColumn: l,
  addUserDefinedPrimaryKey: u,
  addIndex: c
} = (0, i.columnBuilder)();
(0, r.getStorage)().add(s).version((0, r.getStorage)().versions.version(1), [u("id"), l(a), c(a)]).version((0, r.getStorage)().versions.version(2), [l(o)]).view(e => ({
  id: e.id,
  timestamp: e.timestamp,
  size: e.size || 0
}));
const d = (0, r.getStorage)().table(s);
exports.IdbMetaInfoTable = d;
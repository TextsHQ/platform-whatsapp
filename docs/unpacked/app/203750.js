Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storePrimaryIndex = exports.storeDataIndex = exports.IdbArrayBufferTable = undefined;
var r = require("./149254.js");
var i = require("./322511.js");
const a = "id";
exports.storePrimaryIndex = a;
const o = "data";
exports.storeDataIndex = o;
const s = "lru-media-array-buffer";
const {
  addColumn: l,
  addUserDefinedPrimaryKey: u
} = (0, i.columnBuilder)();
(0, r.getStorage)().add(s).version((0, r.getStorage)().versions.version(0), [u(a), l(o)]).view(e => ({
  id: e.id,
  data: e.data
}));
const c = (0, r.getStorage)().table(s);
exports.IdbArrayBufferTable = c;
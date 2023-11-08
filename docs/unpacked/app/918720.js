var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PRIMARY_KEY_TYPE = exports.INDEX_TYPE = exports.ENCRYPTED_VALUE_TYPE = undefined;
exports.cloneSchema = function (e) {
  return {
    name: e.name,
    columns: e.columns.map(e => (0, i.default)({}, e)),
    indexes: e.indexes.map(d),
    encryptedColumns: (0, i.default)({}, e.encryptedColumns || {}),
    deleted: e.deleted
  };
};
exports.emptySchema = function (e) {
  return {
    name: e,
    columns: [],
    indexes: [],
    encryptedColumns: {}
  };
};
exports.findIndex = function (e, t) {
  return e.indexes.findIndex(e => function (e, t) {
    if (e.type !== t.type) {
      return false;
    }
    switch (e.type) {
      case l.SIMPLE:
      case l.ARRAY:
      case l.UNIQUE:
        (0, o.default)(t.type === e.type, "Index types are not equal");
        return e.column === t.column;
      case l.COMPOSITE:
        (0, o.default)(t.type === e.type, "Index types are not equal");
        return e.columns.length === t.columns.length && !e.columns.some(e => !t.columns.includes(e));
    }
    throw (0, a.default)(`cannot compare unknown indexes of types: ${e.type}, ${t.type}`);
  }(t, e));
};
exports.freezeSchema = function (e) {
  return Object.freeze({
    name: e.name,
    columns: Object.freeze(e.columns.map(Object.freeze)),
    indexes: Object.freeze(e.indexes.map(c)),
    encryptedColumns: Object.freeze((0, i.default)({}, e.encryptedColumns || {})),
    deleted: e.deleted
  });
};
exports.indexContainsColumn = function (e, t) {
  switch (e.type) {
    case l.SIMPLE:
    case l.ARRAY:
    case l.UNIQUE:
      return e.column === t;
    case l.COMPOSITE:
      return !!e.columns.find(e => e === t);
  }
  throw (0, a.default)(`cannot check indexes of unknown index type: ${e.type}`);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("./556869.js"));
var o = r(require("../vendor/441143.js"));
const s = Object.freeze({
  AUTO_INCREMENT: "auto-increment",
  USER_DEFINED: "user-defined",
  COMPOSITE: "composite"
});
exports.PRIMARY_KEY_TYPE = s;
const l = Object.freeze({
  SIMPLE: "simple",
  COMPOSITE: "composite",
  ARRAY: "array",
  UNIQUE: "unique"
});
exports.INDEX_TYPE = l;
const u = Object.freeze({
  STRING: "String",
  ARRAY_BUFFER: "ArrayBuffer"
});
function c(e) {
  switch (e.type) {
    case l.SIMPLE:
      return Object.freeze({
        type: l.SIMPLE,
        column: e.column
      });
    case l.ARRAY:
      return Object.freeze({
        type: l.ARRAY,
        column: e.column
      });
    case l.COMPOSITE:
      return Object.freeze({
        type: l.COMPOSITE,
        columns: Object.freeze(e.columns.map(Object.freeze))
      });
    case l.UNIQUE:
      return Object.freeze({
        type: l.UNIQUE,
        column: e.column
      });
  }
  throw (0, a.default)(`cannot freeze index of unknown type: ${e.type}`);
}
function d(e) {
  switch (e.type) {
    case l.SIMPLE:
      return {
        type: l.SIMPLE,
        column: e.column
      };
    case l.UNIQUE:
      return {
        type: l.UNIQUE,
        column: e.column
      };
    case l.COMPOSITE:
      return {
        type: l.COMPOSITE,
        columns: e.columns.map(e => e)
      };
    case l.ARRAY:
      return {
        type: l.ARRAY,
        column: e.column
      };
  }
  throw (0, a.default)(`cannot clone unknown index type: ${e.type}`);
}
exports.ENCRYPTED_VALUE_TYPE = u;
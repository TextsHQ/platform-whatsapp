Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendDocumentWamEvent = undefined;
var r = require("./901032.js");
var i = require("./679190.js");
const {
  NUMBER: a
} = r.TYPES;
const o = (0, r.defineEvents)({
  SendDocument: [2172, {
    documentSize: [1, a],
    documentType: [2, i.DOCUMENT_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.SendDocumentWamEvent = o;
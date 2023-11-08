Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiVcardValidationErrorCode = exports.MultiVcardMessageValidationError = undefined;
var r = require("./177205.js");
const i = require("../vendor/76672.js")({
  EMPTY_LIST: "contacts_array_empty_list",
  INVALID_LIST_SIZE: "contacts_array_invalid_list_size"
});
exports.MultiVcardValidationErrorCode = i;
class a extends r.MessageValidationError {
  constructor() {
    super(...arguments);
    this.name = "MultiVcardMessageValidationError";
  }
}
exports.MultiVcardMessageValidationError = a;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./556869.js"));
var a = r(require("../vendor/441143.js"));
exports.default = class {
  constructor(e) {
    (0, a.default)((e == null ? undefined : e.intentionallyUsePrivateConstructor) === true, "Please use only WAWebStorageMutationBuilder.js to create mutations");
    (0, a.default)(this.constructor.name !== "Mutation", "Cannot instantiate abstract class Mutation");
  }
  validate() {
    throw (0, i.default)("Subclasses of Mutation must implement `validate`");
  }
  apply() {
    throw (0, i.default)("Subclasses of Mutation must implement `apply`");
  }
};
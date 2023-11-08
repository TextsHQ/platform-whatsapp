Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NuxBanner = exports.ExtendableNuxBanner = undefined;
var a = require("../vendor/667294.js");
class r extends a.Component {
  constructor() {
    super(...arguments);
    this.getElement = () => {
      __LOG__(4, undefined, new Error(), true)`NuxBanner: getElement is not implemented`;
      SEND_LOGS("nux-banner-get-element-not-implemented");
      return null;
    };
  }
  static shouldShow() {
    return false;
  }
}
exports.ExtendableNuxBanner = r;
exports.NuxBanner = class extends r {};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterLoadingStageManager = exports.NewsletterLoadingStage = undefined;
var r = require("./481173.js");
var i = require("./382849.js");
const a = require("../vendor/76672.js").Mirrored(["None", "Loading", "Finished", "Failed"]);
exports.NewsletterLoadingStage = a;
class o extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.stage = (0, i.prop)(a.None);
  }
  start() {
    this.stage = a.Loading;
  }
  fail() {
    this.stage = a.Failed;
  }
  end() {
    this.stage = a.Finished;
  }
}
o.Proxy = "newsletterLoadingStage";
const s = new ((0, r.defineModel)(o))({
  id: "1"
});
exports.NewsletterLoadingStageManager = s;
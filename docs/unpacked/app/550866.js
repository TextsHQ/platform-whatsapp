Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLServerError = undefined;
class n extends Error {
  constructor(e) {
    super();
    this.name = "GraphQLServerError";
    this.source = e;
  }
}
exports.GraphQLServerError = n;
const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "newsletter_id"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexUnmuteNewsletterJobMutation",
    selections: r = [{
      alias: null,
      args: [{
        kind: "Variable",
        name: "newsletter_id",
        variableName: "newsletter_id"
      }],
      concreteType: "XWA2NewsletterMutationResponse",
      kind: "LinkedField",
      name: "xwa2_newsletter_unmute_v2",
      plural: false,
      selections: [{
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "id",
        storageKey: null
      }, {
        alias: null,
        args: null,
        concreteType: "XWA2NewsletterState",
        kind: "LinkedField",
        name: "newsletter_state",
        plural: false,
        selections: [{
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null
        }],
        storageKey: null
      }],
      storageKey: null
    }],
    type: "Mutation",
    abstractKey: null
  },
  kind: "Request",
  operation: {
    argumentDefinitions: n,
    kind: "Operation",
    name: "WAWebMexUnmuteNewsletterJobMutation",
    selections: r
  },
  params: {
    id: "6068417879924485",
    metadata: {},
    name: "WAWebMexUnmuteNewsletterJobMutation",
    operationKind: "mutation",
    text: null
  }
};
var n;
var r;
t.hash = "738b82285745063182abee7941b0c4d1";
module.exports = t;
const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "newsletter_id"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexJoinNewsletterJobMutation",
    selections: a = [{
      alias: null,
      args: [{
        kind: "Variable",
        name: "newsletter_id",
        variableName: "newsletter_id"
      }],
      concreteType: "XWA2NewsletterMutationResponse",
      kind: "LinkedField",
      name: "xwa2_newsletter_join_v2",
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
    name: "WAWebMexJoinNewsletterJobMutation",
    selections: a
  },
  params: {
    id: "9926858900719341",
    metadata: {},
    name: "WAWebMexJoinNewsletterJobMutation",
    operationKind: "mutation",
    text: null
  }
};
var n;
var a;
t.hash = "09b01f6f422b2f2c3311450da0e2748e";
module.exports = t;
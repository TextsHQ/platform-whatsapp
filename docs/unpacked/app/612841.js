const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "newsletter_id"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexMuteNewsletterJobMutation",
    selections: r = [{
      alias: null,
      args: [{
        kind: "Variable",
        name: "newsletter_id",
        variableName: "newsletter_id"
      }],
      concreteType: "XWA2NewsletterMutationResponse",
      kind: "LinkedField",
      name: "xwa2_newsletter_mute_v2",
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
    name: "WAWebMexMuteNewsletterJobMutation",
    selections: r
  },
  params: {
    id: "6274038279359549",
    metadata: {},
    name: "WAWebMexMuteNewsletterJobMutation",
    operationKind: "mutation",
    text: null
  }
};
var n;
var r;
t.hash = "dbbfd2ad518ec50bff1397524e9108a7";
module.exports = t;
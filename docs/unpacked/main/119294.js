const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "input"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexFetchNewsletterMessageReactionSenderListJobQuery",
    selections: a = [{
      alias: null,
      args: [{
        kind: "Variable",
        name: "input",
        variableName: "input"
      }],
      concreteType: "XWA2NewsletterReactionSenderListResponse",
      kind: "LinkedField",
      name: "xwa2_newsletters_reaction_sender_list",
      plural: false,
      selections: [{
        alias: null,
        args: null,
        concreteType: "XWA2NewsletterReactionWithSenders",
        kind: "LinkedField",
        name: "reactions",
        plural: true,
        selections: [{
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reaction_code",
          storageKey: null
        }, {
          alias: null,
          args: null,
          concreteType: "XWA2NewsletterSubscriberConnection",
          kind: "LinkedField",
          name: "sender_list",
          plural: false,
          selections: [{
            alias: null,
            args: null,
            concreteType: "XWA2NewsletterSubscriberEdge",
            kind: "LinkedField",
            name: "edges",
            plural: true,
            selections: [{
              alias: null,
              args: null,
              concreteType: "XWA2User",
              kind: "LinkedField",
              name: "node",
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
                kind: "ScalarField",
                name: "profile_pic_direct_path",
                storageKey: null
              }],
              storageKey: null
            }],
            storageKey: null
          }],
          storageKey: null
        }],
        storageKey: null
      }],
      storageKey: null
    }],
    type: "Query",
    abstractKey: null
  },
  kind: "Request",
  operation: {
    argumentDefinitions: n,
    kind: "Operation",
    name: "WAWebMexFetchNewsletterMessageReactionSenderListJobQuery",
    selections: a
  },
  params: {
    id: "9861047013937816",
    metadata: {},
    name: "WAWebMexFetchNewsletterMessageReactionSenderListJobQuery",
    operationKind: "query",
    text: null
  }
};
var n;
var a;
t.hash = "be6a65e8ecc6d4535ed06f56851b9500";
module.exports = t;
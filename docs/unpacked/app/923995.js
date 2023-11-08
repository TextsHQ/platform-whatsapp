const t = {
  fragment: {
    argumentDefinitions: [],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexFetchAllNewslettersMetadataJobQuery",
    selections: o = [{
      alias: null,
      args: null,
      concreteType: "XWA2Newsletter",
      kind: "LinkedField",
      name: "xwa2_newsletter_subscribed",
      plural: true,
      selections: [n = {
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
        name: "state",
        plural: false,
        selections: [r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null
        }],
        storageKey: null
      }, {
        alias: null,
        args: null,
        concreteType: "XWA2NewsletterThreadMetadata",
        kind: "LinkedField",
        name: "thread_metadata",
        plural: false,
        selections: [{
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creation_time",
          storageKey: null
        }, {
          alias: null,
          args: null,
          concreteType: "XWA2NewsletterName",
          kind: "LinkedField",
          name: "name",
          plural: false,
          selections: i = [n, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null
          }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "update_time",
            storageKey: null
          }],
          storageKey: null
        }, {
          alias: null,
          args: [{
            kind: "Literal",
            name: "type",
            value: "IMAGE"
          }],
          concreteType: "XWA2Picture",
          kind: "LinkedField",
          name: "picture",
          plural: false,
          selections: a = [n, r, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "direct_path",
            storageKey: null
          }],
          storageKey: "picture(type:\"IMAGE\")"
        }, {
          alias: "preview",
          args: [{
            kind: "Literal",
            name: "type",
            value: "PREVIEW"
          }],
          concreteType: "XWA2Picture",
          kind: "LinkedField",
          name: "picture",
          plural: false,
          selections: a,
          storageKey: "picture(type:\"PREVIEW\")"
        }, {
          alias: null,
          args: null,
          concreteType: "XWA2NewsletterDescription",
          kind: "LinkedField",
          name: "description",
          plural: false,
          selections: i,
          storageKey: null
        }, {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "invite",
          storageKey: null
        }, {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "handle",
          storageKey: null
        }, {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "verification",
          storageKey: null
        }, {
          alias: null,
          args: null,
          concreteType: "XWA2NewsletterThreadSettings",
          kind: "LinkedField",
          name: "settings",
          plural: false,
          selections: [{
            alias: null,
            args: null,
            concreteType: "XWA2NewsletterReactionCodesSetting",
            kind: "LinkedField",
            name: "reaction_codes",
            plural: false,
            selections: [{
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "value",
              storageKey: null
            }],
            storageKey: null
          }],
          storageKey: null
        }],
        storageKey: null
      }, {
        alias: null,
        args: null,
        concreteType: "XWA2NewsletterViewerMetadata",
        kind: "LinkedField",
        name: "viewer_metadata",
        plural: false,
        selections: [{
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "mute",
          storageKey: null
        }, {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "role",
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
    argumentDefinitions: [],
    kind: "Operation",
    name: "WAWebMexFetchAllNewslettersMetadataJobQuery",
    selections: o
  },
  params: {
    id: "6388546374527196",
    metadata: {},
    name: "WAWebMexFetchAllNewslettersMetadataJobQuery",
    operationKind: "query",
    text: null
  }
};
var n;
var r;
var i;
var a;
var o;
t.hash = "6d461e2a636d51214f1273d489147742";
module.exports = t;
const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "newsletter_input"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexCreateNewsletterJobMutation",
    selections: s = [{
      alias: null,
      args: [{
        kind: "Variable",
        name: "newsletter_input",
        variableName: "newsletter_input"
      }],
      concreteType: "XWA2Newsletter",
      kind: "LinkedField",
      name: "xwa2_newsletter_create",
      plural: false,
      selections: [r = {
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
        selections: [i = {
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
          concreteType: "XWA2NewsletterName",
          kind: "LinkedField",
          name: "name",
          plural: false,
          selections: a = [r, {
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
          args: null,
          concreteType: "XWA2NewsletterDescription",
          kind: "LinkedField",
          name: "description",
          plural: false,
          selections: a,
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
          selections: o = [r, i, {
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
          selections: o,
          storageKey: "picture(type:\"PREVIEW\")"
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
          kind: "ScalarField",
          name: "subscribers_count",
          storageKey: null
        }, {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creation_time",
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
    type: "Mutation",
    abstractKey: null
  },
  kind: "Request",
  operation: {
    argumentDefinitions: n,
    kind: "Operation",
    name: "WAWebMexCreateNewsletterJobMutation",
    selections: s
  },
  params: {
    id: "6234210096708695",
    metadata: {},
    name: "WAWebMexCreateNewsletterJobMutation",
    operationKind: "mutation",
    text: null
  }
};
var n;
var r;
var i;
var a;
var o;
var s;
t.hash = "f7f25dc04a65d75ef492e13ca1349f2d";
module.exports = t;
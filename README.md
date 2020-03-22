# graphql-vue-lab

This is a research project on how to integrate varies framework including graphql.

the associated graphql backend project is https://github.com/smallcampus/graphql-koa-lab

To get started:
`npm run codegen:graphql`
`npm run serve`

Feature:

+ Typescript
+ Apollo + Graphql
+ Vue auto routing
+ Composition API

TODO:

+ Try vue auto routing
+ Try gql with apollo
+ Try graphql code generator with typescript + operations
+ Try declartive form generation with graphql introspection
+ Try vue composition API

Note:
If you have updated the data model at the backend, you have to manually copy the graphql/schema.graphql from backend project to the root directory of this project (overwrite), and then run `npm run codegen:graphql` again.

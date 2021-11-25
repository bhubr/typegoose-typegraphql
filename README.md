# Typegoose + TypeGraphQL

## Généralités

* [Building Type Safe Backend Apps with Typegoose and TypeGraphQL](https://www.velotio.com/engineering-blog/type-safe-backend-apps-with-typegoose-typegraphql)

## Exemple

Depuis la doc officielle : <https://github.com/MichalLytek/type-graphql/tree/v1.0.0/examples/typegoose>

## Questions

Dans `user.ts` :

```typescript
import { prop, Ref } from '@typegoose/typegoose'
import { ObjectType, Field, ID } from 'type-graphql'
import Project from './project'
import Issue from './issue'

@ObjectType()
export default class User {
  @Field(type => ID)
  public _id!: string;

  @prop()
  @Field()
  public name!: string;

  @prop()
  @Field()
  public email!: string;

  @prop({ ref: () => Project })
  public projects!: Ref<Project>[];

  @prop({ ref: () => Issue })
  public authoredIssues!: Ref<Issue>[];

  @prop({ ref: () => Issue })
  public assignedIssues!: Ref<Issue>[];
}
```

Pour lier `User` et `Issue` (par exemple relation `authoredIssues`) :

* Avec Typegoose : `public authoredIssues!: Ref<Issue>[];`
* Avec TypeGraphQL : `public authoredIssues!: Issue[];`

## Mutations & Queries

### Query &raquo; Get all users



### Mutation &raquo; Create issue

```
mutation($authorId: ID!, $title: String!, $content: String!) {
  createIssue(authorId: $authorId, title: $title, content: $content) {
    _id
    title
    author {
      _id
      name
    }
  }
}
```

Variables :

```json
{
  "authorId": "619f19239f9dd055a9267cf0",
  "title": "My new issue #1",
  "content": "Description of issue #1"
}
```
import { prop, Ref } from '@typegoose/typegoose'
import { ObjectType, Field, ID } from 'type-graphql'
import Project from './project'
import Issue from './issue'

@ObjectType()
export default class User {
  @Field(type => ID)
  public _id!: string;

  @Field()
  @prop()
  public name!: string;

  @Field()
  @prop()
  public email!: string;

  @prop({ ref: () => Project })
  public projects!: Ref<Project>[];

  @Field(type => [Issue])
  @prop({ type: () => Issue, default: [] })
  public authoredIssues!: Issue[];

  @prop({ ref: () => Issue })
  public assignedIssues!: Ref<Issue>[];
}

import { prop, Ref } from '@typegoose/typegoose'
import { ObjectType, Field, ID } from 'type-graphql'
import Project from './project'
import User from './user'

@ObjectType()
export default class Issue {
  @Field(type => ID)
  public _id!: string;

  @Field()
  @prop()
  public title!: string;

  @Field()
  @prop()
  public content!: string;

  @prop({ ref: () => Project })
  public project: Ref<Project>;

  @Field(type => User)
  @prop({ ref: () => User })
  public author: Ref<User>;

  @prop({ ref: () => User })
  public assignee: Ref<User>;
}

import { prop, Ref } from '@typegoose/typegoose'

export class Issue {
  @prop()
  public title!: string;

  @prop()
  public content!: string;

  @prop({ ref: () => User })
  public author: Ref<User>;

  @prop({ ref: () => User })
  public assignee: Ref<User>;
}

export class Project {
  @prop()
  public name!: string;

  @prop()
  public description?: string;

  @prop({ ref: () => User })
  public users!: Ref<User>[];
}

export class User {
  @prop()
  public name!: string;

  @prop()
  public email!: string;

  @prop({ ref: () => Project })
  public projects!: Ref<Project>[];

  @prop({ ref: () => Issue })
  public authoredIssues!: Ref<Issue>[];

  @prop({ ref: () => Issue })
  public assignedIssues!: Ref<Issue>[];
}
import { prop, Ref } from '@typegoose/typegoose'
import User from './user';
import Issue from './issue'

export default class Project {
  @prop()
  public name!: string;

  @prop()
  public description?: string;

  @prop({ ref: () => User })
  public users!: Ref<User>[];

  @prop({ ref: () => Issue })
  public issues!: Ref<Issue>[];
}

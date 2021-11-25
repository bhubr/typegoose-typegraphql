import { getModelForClass } from '@typegoose/typegoose';
import User from './user';
import Issue from './issue'
import Project from './project'

export { User, Issue, Project };
export const UserModel = getModelForClass(User);
export const ProjectModel = getModelForClass(Project);
export const IssueModel = getModelForClass(Issue);
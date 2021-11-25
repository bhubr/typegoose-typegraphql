import mongoose from 'mongoose';
import { getModelForClass } from '@typegoose/typegoose';
import { Project, Issue, User } from './models';

const ProjectModel = getModelForClass(Project);
const IssueModel = getModelForClass(Issue);
const UserModel = getModelForClass(User);

async function bootstrap() {
  await mongoose.connect('mongodb://localhost:27017/bugtracker_typegoose');

  // Create project
  const proj = new ProjectModel({
    name: `Another project ${Date.now()}`,
  });
  const res = await proj.save();

  // Create issue and add to project
  const issue = new IssueModel({
    title: `Issue #${Date.now()}`,
  });
  const res2 = await issue.save();
  res.issues.push(res2);

  await res.save();

  const projects = await ProjectModel.find();

  // Create users
  const user1 = new UserModel({
    email: `john${Date.now()}@typegoose.io`,
    name: 'John Typegoose',
  });
  const u1 = await user1.save();
  const user2 = new UserModel({
    email: `jane${Date.now()}@typegoose.io`,
    name: 'Jane Typegoose',
  });
  const u2 = await user2.save();

  // Assign author & assignee to issue
  issue.author = u1;
  issue.assignee = u2;

  await issue.save();

  // Add users to project
  res.users.push(u1);
  res.users.push(u2);
  await res.save();
  await u1.save();
  await u2.save();
}

bootstrap();

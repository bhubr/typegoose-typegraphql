import 'reflect-metadata';
import mongoose from 'mongoose';
// import { ProjectModel, IssueModel, UserModel } from './models';
import createServer from './create-server';

async function bootstrap() {
  await mongoose.connect('mongodb://localhost:27017/bugtracker_typegoose');

  // // Create project
  // const proj = new ProjectModel({
  //   name: `Another project ${Date.now()}`,
  // });
  // const res = await proj.save();

  // // Create issue and add to project
  // const issue = new IssueModel({
  //   title: `Issue #${Date.now()}`,
  // });
  // const res2 = await issue.save();
  // res.issues.push(res2);

  // await res.save();

  // // Create users
  // const user1 = new UserModel({
  //   email: `john${Date.now()}@typegoose.io`,
  //   name: 'John Typegoose',
  // });
  // const u1 = await user1.save();
  // const user2 = new UserModel({
  //   email: `jane${Date.now()}@typegoose.io`,
  //   name: 'Jane Typegoose',
  // });
  // const u2 = await user2.save();

  // // Assign author & assignee to issue
  // issue.author = u1;
  // issue.assignee = u2;

  // await issue.save();

  // // Add users to project
  // res.users.push(u1);
  // res.users.push(u2);
  // await res.save();
  // await u1.save();
  // await u2.save();

  const server = await createServer();
  const { url } = await server.listen();
  console.log(`Apollo Server up & running: ${url}`);
}

bootstrap();

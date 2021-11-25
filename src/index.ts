import mongoose from 'mongoose';
import { getModelForClass } from '@typegoose/typegoose';
import { Project } from './models';

const ProjectModel = getModelForClass(Project);

async function bootstrap() {
  await mongoose.connect('mongodb://localhost:27017/bugtracker_typegoose');
  
  const proj = new ProjectModel({ name: 'My new project' });
  const res = await proj.save();
  console.log(res);
}

bootstrap()
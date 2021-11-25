import { Resolver, Query, Mutation, Arg, ID } from 'type-graphql'

import { User, UserModel, Issue, IssueModel } from '../models'

@Resolver()
export default class MainResolver {
  // eslint-disable-next-line class-methods-use-this
  @Query(returns => [User])
  async users() {
    const users = await UserModel.find();
    return users;
  }

  @Mutation(returns => Issue)
  async createIssue(
    @Arg("title") title: string,
    @Arg("content") content: string,
    @Arg("authorId", type => ID) authorId: string,
  ) {
    const author = await UserModel.findById(authorId);
    if (!author) {
      throw new Error(`Author ${authorId} not found`);
    }
    console.log('createIssue >> found author', author);
    const issue = await IssueModel.create({ title, content, author });
    author.authoredIssues.push(issue);
    await author.save();
    return issue;
  }
}
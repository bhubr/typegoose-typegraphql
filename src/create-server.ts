import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import MainResolver from './resolvers';

async function createServer(): Promise<ApolloServer> {
  const schema = await buildSchema({
    resolvers: [MainResolver],
  })
  const server = new ApolloServer({
    schema,
  });
  return server;
}

export default createServer
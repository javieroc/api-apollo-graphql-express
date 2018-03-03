import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import cors from 'cors';
import schema from './schema';

const app = express();

app.use(cors('*'));

const buildOptions = async () => (
  {
    schema,
    formatError: error => error.originalError,
  }
);

app.use(
  '/api/graphql',
  bodyParser.json(),
  graphqlExpress(buildOptions),
);

app.use(
  '/graphiql',
  graphiqlExpress({ endpointURL: '/api/graphql' }),
);

export default app;

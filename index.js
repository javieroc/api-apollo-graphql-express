import Debug from 'debug';
import config from './config';
import app from './app';

const { port } = config;
const debug = new Debug('api-graphql');

app.listen(port, () => {
  debug(`API rest corriendo en http://localhost:${port}`);
});

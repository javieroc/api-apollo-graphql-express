import mongoose from 'mongoose';
import Debug from 'debug';
import config from './config';
import app from './app';

const { port, mongoUrl } = config;
const debug = new Debug('api-graphql');

mongoose.connect(mongoUrl);

app.listen(port, () => {
  debug(`API rest corriendo en http://localhost:${port}`);
});

import mongoose from 'mongoose';
import Debug from 'debug';
import { port, mongoUrl } from './config';
import app from './app';

const debug = new Debug('api-graphql');

mongoose.connect(mongoUrl);

app.listen(port, () => {
  debug(`API rest corriendo en http://localhost:${port}`);
});

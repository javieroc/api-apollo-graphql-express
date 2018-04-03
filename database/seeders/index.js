import mongoose from 'mongoose';
import SpotSeeder from './SpotSeeder';
import UserSeeder from './UserSeeder';
import { mongoUrl } from '../../config';

mongoose.connect(mongoUrl);

const seed = async () => {
  await UserSeeder();
  await SpotSeeder();
};

seed().then(() => {
  console.log('Finished seeders.');
  mongoose.connection.close();
});

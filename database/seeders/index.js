import mongoose from 'mongoose';
import PlaceSeeder from './PlaceSeeder';
import UserSeeder from './UserSeeder';
import { mongoUrl } from '../../config';

mongoose.connect(mongoUrl);

const seed = async () => {
  await UserSeeder();
  await PlaceSeeder();
};

seed().then(() => {
  console.log('Finished seeders.');
  mongoose.connection.close();
});

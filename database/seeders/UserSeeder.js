import casual from 'casual';
import { hashSync as hash } from 'bcryptjs';
import { User } from '../models';

const UserSeeder = async () => {
  const promises = Array(20).fill().map(() => User.create({
    firstName: casual.first_name,
    lastName: casual.last_name,
    location: {
      type: 'Point',
      coordinates: [
        casual.longitude,
        casual.latitude,
      ],
    },
    email: casual.email,
    avatar: `https://robohash.org/${casual.integer(1, 40)}`,
    address: casual.address,
    city: casual.city,
    password: hash('secret', 10),
  }));

  await Promise.all(promises);
};

export default UserSeeder;

import casual from 'casual';
import { hashSync as hash } from 'bcryptjs';
import { User } from '../models';

const UserSeeder = async () => {
  const promises = Array(20).fill().map(() => User.create({
    firstName: casual.first_name,
    lastName: casual.last_name,
    email: casual.email,
    avatar: `https://robohash.org/${casual.integer(1, 40)}`,
    address: casual.address,
    password: hash('secret', 10),
  }));

  await Promise.all(promises);
};

export default UserSeeder;

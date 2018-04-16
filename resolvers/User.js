import Debug from 'debug';
import {
  hashSync as hash,
  compareSync as comparePasswords,
} from 'bcryptjs';
import { User } from '../database/models';
import { createToken, handleError } from '../services';

const debug = new Debug('api-graphql:user');

const userResolver = {
  Mutation: {
    login: async (parent, { loginData }) => {
      const { email, password } = loginData;
      const user = await User.findOne({ email });

      if (!user) {
        throw handleError('email', 'Invalid email');
      }

      if (!comparePasswords(password, user.password)) {
        throw handleError('password', 'Invalid password');
      }

      const token = await createToken(user);
      return {
        user,
        token,
      };
    },
    register: async (parent, { registerData }) => {
      try {
        const {
          email, password, ...others
        } = registerData;
        const avatar = `https://robohash.org/${email}/?size=200x200`;
        const user = await User.create({
          ...others,
          email,
          avatar,
          password: password ? hash(password, 10) : '',
        });

        const token = await createToken(user);
        return {
          user,
          token,
        };
      } catch (error) {
        debug('Error to create a new user');
        throw error;
      }
    },
  },
};

export default userResolver;

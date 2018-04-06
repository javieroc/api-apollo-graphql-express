import { merge } from 'lodash';
import userResolver from './User';
import spotResolver from './Spot';

const resolvers = merge(userResolver, spotResolver);

export default resolvers;

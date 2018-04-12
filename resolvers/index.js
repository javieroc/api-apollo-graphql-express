import { merge } from 'lodash';
import userResolver from './User';
import placeResolver from './Place';

const resolvers = merge(userResolver, placeResolver);

export default resolvers;

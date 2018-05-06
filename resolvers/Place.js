import { Place } from '../database/models';

const placeResolver = {
  Query: {
    places: async (parent, args) => {
      const { cursor } = args;
      const first = args.first || 6;
      const filter = args.filter || '';

      const options = {
        $or: [
          { name: new RegExp(filter, 'i') },
          { description: new RegExp(filter, 'i') },
          { address: new RegExp(filter, 'i') },
        ],
      };

      if (cursor) {
        options._id = { $lt: cursor };
      }

      const places = await Place.find(options)
        .sort({ _id: -1 })
        .limit(first)
        .populate('user');

      const edges = places.map(place => ({
        cursor: place._id,
        node: place,
      }));

      let hasNextPage = false;
      const endCursor = places.length > 0 ? places[places.length - 1]._id : '';
      if (endCursor) {
        const restRows = await Place.count(options)
          .sort({ _id: -1 })
          .lt('_id', endCursor);

        if (restRows > 0) {
          hasNextPage = true;
        }
      }

      return {
        edges,
        pageInfo: {
          endCursor,
          hasNextPage,
        },
      };
    },
    place: (parent, { id }) => Place.findById(id).populate('user'),
  },
};

export default placeResolver;

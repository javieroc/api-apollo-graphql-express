import { Place } from '../database/models';

const placeResolver = {
  Query: {
    places: async (_, args) => {
      const cursor = args.cursor ? Buffer.from(args.cursor, 'base64').toString('ascii') : 'a';
      const first = args.first ? args.first : 6;

      const places = await Place.find()
        .sort({ name: 'asc' })
        .gt('name', cursor)
        .limit(first)
        .populate('user');

      const edges = places.map(place => ({
        cursor: Buffer.from(place.name).toString('base64'),
        node: place,
      }));

      const total = await Place.count();

      let hasNextPage = false;
      let endCursor = places.length > 0 ? places[places.length - 1].name : '';
      if (endCursor) {
        const restRows = await Place.count()
          .sort({ name: 'asc' })
          .gt('name', endCursor);

        endCursor = Buffer.from(endCursor).toString('base64');
        if (restRows > 0) {
          hasNextPage = true;
        }
      }

      return {
        total,
        edges,
        pageInfo: {
          endCursor,
          hasNextPage,
        },
      };
    },
  },
};

export default placeResolver;

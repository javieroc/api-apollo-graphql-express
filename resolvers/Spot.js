import { Spot } from '../database/models';

const spotResolver = {
  Query: {
    spots: async (_, args) => {
      const cursor = args.cursor ? Buffer.from(args.cursor, 'base64').toString('ascii') : 'a';
      const first = args.first ? args.first : 6;

      const spots = await Spot.find()
        .sort({ name: 'asc' })
        .gt('name', cursor)
        .limit(first);

      const edges = spots.map(spot => ({
        cursor: Buffer.from(spot.name).toString('base64'),
        node: spot,
      }));

      const total = await Spot.count();

      let hasNextPage = false;
      let endCursor = spots.length > 0 ? spots[spots.length - 1].name : '';
      if (endCursor) {
        const restRows = await Spot.count()
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

export default spotResolver;

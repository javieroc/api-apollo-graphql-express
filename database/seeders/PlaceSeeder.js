import casual from 'casual';
import _ from 'lodash';
import { Place, User } from '../models';

const numbers = [...Array(50).keys()];

const PlaceSeeder = async () => {
  const user = await User.findOne();
  const promises = Array(20).fill().map(() => {
    const shuffled = _.shuffle(numbers);
    return Place.create({
      name: casual.city,
      user: user._id,
      description: casual.sentences(3),
      address: casual.address,
      phone: casual.phone,
      photos: Array(9).fill().map((_, i) => ({
        src: `https://picsum.photos/800/240?image=${shuffled[i]}`,
        width: casual.integer(2, 3),
        height: casual.integer(1, 2),
      })),
      rating: casual.integer(1, 5),
      location: {
        lat: casual.latitude,
        lng: casual.longitude,
      },
    });
  });

  await Promise.all(promises);
};

export default PlaceSeeder;

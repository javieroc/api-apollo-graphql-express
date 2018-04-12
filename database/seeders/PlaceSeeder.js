import casual from 'casual';
import { Place, User } from '../models';

const PlaceSeeder = async () => {
  const user = await User.findOne();
  const promises = Array(10).fill().map(() => Place.create({
    name: casual.city,
    user: user._id,
    description: casual.sentences(3),
    address: casual.address,
    phone: casual.phone,
    photos: [
      `https://picsum.photos/360/240?image=${casual.integer(1, 50)}`,
      `https://picsum.photos/360/240?image=${casual.integer(1, 50)}`,
      `https://picsum.photos/360/240?image=${casual.integer(1, 50)}`,
    ],
    rating: casual.integer(1, 5),
    location: {
      lat: casual.latitude,
      lng: casual.longitude,
    },
  }));

  await Promise.all(promises);
};

export default PlaceSeeder;

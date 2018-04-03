import casual from 'casual';
import { Spot } from '../models';

const SpotSeeder = async () => {
  const promises = Array(10).fill().map(() => Spot.create({
    name: casual.city,
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
    price: casual.integer(100, 300),
  }));

  await Promise.all(promises);
};

export default SpotSeeder;

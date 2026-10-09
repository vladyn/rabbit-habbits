import type { ImageSourcePropType } from 'react-native';

export type Rabbit = {
  name: string;
  picture: ImageSourcePropType;
  habits: string[];
};

export const rabbits: Rabbit[] = [
  {
    name: 'Pip',
    picture: require('../../assets/rabbits/pip.png'),
    habits: ['Nibble fresh greens', 'Explore the garden', 'Rest in a cozy corner'],
  },
  {
    name: 'Mochi',
    picture: require('../../assets/rabbits/mochi.png'),
    habits: ['Hop through the grass', 'Snack on clover', 'Take an afternoon nap'],
  },
  {
    name: 'Clover',
    picture: require('../../assets/rabbits/clover.png'),
    habits: ['Collect soft leaves', 'Watch the morning sun', 'Curl up before bedtime'],
  },
];

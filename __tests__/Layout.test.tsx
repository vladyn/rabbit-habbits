import { render } from '@testing-library/react-native';
import { Stack } from 'expo-router';

import RootLayout from '../app/_layout';

jest.mock('expo-router', () => ({
  Stack: jest.fn(() => null),
}));

test('provides a stack for navigation to the rabbit detail view', async () => {
  await render(<RootLayout />);

  expect(Stack).toHaveBeenCalled();
});

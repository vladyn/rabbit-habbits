import { render, screen } from '@testing-library/react-native';
import { useLocalSearchParams } from 'expo-router';

import RabbitDetail from '../app/rabbit/[id]';

jest.mock('expo-router', () => ({
  useLocalSearchParams: jest.fn(),
  Stack: { Screen: () => null },
}));

test('shows only the rabbit selected by the route', async () => {
  jest.mocked(useLocalSearchParams).mockReturnValue({ id: '2' });
  await render(<RabbitDetail />);

  expect(screen.getByText('Meet Mochi')).toBeTruthy();
  expect(screen.getByText('Snack on clover')).toBeTruthy();
  expect(screen.queryByText('Meet Pip')).toBeNull();
  expect(screen.queryByText('Meet Clover')).toBeNull();
});

test('shows a useful message for an unknown rabbit', async () => {
  jest.mocked(useLocalSearchParams).mockReturnValue({ id: '999' });
  await render(<RabbitDetail />);

  expect(screen.getByText('Rabbit not found')).toBeTruthy();
});

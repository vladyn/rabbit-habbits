import { render, screen } from '@testing-library/react-native';

import App from '../App';

test('shows a dark movie list with artwork and descriptions', async () => {
  await render(<App />);

  expect(screen.getByTestId('movie-screen')).toHaveStyle({ backgroundColor: '#090d16' });
  expect(screen.getByText('Movie Night')).toBeTruthy();
  expect(screen.getByText('The Last Observatory')).toBeTruthy();
  expect(screen.getByText('A lone astronomer discovers a signal hidden in the northern lights.')).toBeTruthy();
  expect(screen.getByLabelText('The Last Observatory poster')).toBeTruthy();
  expect(screen.getByText('Midnight Current')).toBeTruthy();
  expect(screen.getByLabelText('Midnight Current poster')).toBeTruthy();
  expect(screen.getByText('The Glass Garden')).toBeTruthy();
  expect(screen.getByLabelText('The Glass Garden poster')).toBeTruthy();
});

import { render } from '@testing-library/react-native';

import App from '../App';

test('shows the Rabbit Habits starter screen', async () => {
  const screen = await render(<App />);

  expect(screen.getByText('Rabbit Habits')).toBeTruthy();
  expect(screen.getByText('Your new habit tracker starts here.')).toBeTruthy();
});

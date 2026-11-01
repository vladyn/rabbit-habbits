import { render, screen } from '@testing-library/react-native';

import { RabbitProfile } from '@/components/RabbitProfile';
import { rabbits } from '@/data/rabbits';

test('shows a rabbit and its habits at the requested picture size', async () => {
  await render(<RabbitProfile rabbit={rabbits[0]} pictureSize={240} />);

  expect(screen.getByText('Meet Pip')).toBeTruthy();
  expect(screen.getByText('Nibble fresh greens')).toBeTruthy();
  expect(screen.getByText('Explore the garden')).toBeTruthy();
  expect(screen.getByText('Rest in a cozy corner')).toBeTruthy();
  expect(screen.getByLabelText('Pip the rabbit').props.style).toEqual(
    expect.arrayContaining([{ width: 240, height: 240 }]),
  );
});

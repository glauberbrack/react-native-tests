import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '../../../src/screens/Home';

jest.useFakeTimers();

describe('render successfully', () => {
  it('renders button successfully', async () => {
    const { getByText } = render(<Home />);

    await getByText("Let's go!");
  });

  it('change text when button is clicked', async () => {
    const { getByText } = render(<Home />);

    const button = await getByText("Let's go!");

    // Verify the text before the button is clicked
    await getByText('Hello, there!');

    fireEvent.press(button);

    // Verify the text right after the button is clicked
    await getByText('How you doing?');
  });
});

import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import User from '../../../src/screens/User';

jest.useFakeTimers();

describe('render successfully', () => {
  it('call github api on page load', async () => {
    const { getByText } = render(<User />);

    const button = await getByText('Get username');

    // Insert a delay for the request finished
    jest.advanceTimersByTime(1000);

    // When we have a function that change the state,
    // using the fireEvent, sometimes we need to use act
    await act(() => fireEvent.press(button));

    await getByText('Glauber Brack');
  });
});

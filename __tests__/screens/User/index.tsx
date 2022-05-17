import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import nock from 'nock';
import User from '../../../src/screens/User';

jest.useFakeTimers();

// The ideia of nock is: any request to this specific endpoint
// will ALWAYS returns to me the same response.
// We can return any status code and property as we desire.
nock('https://api.github.com').get('/users/glauberbrack').reply(200, {
  name: 'Glauber Brack',
});

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

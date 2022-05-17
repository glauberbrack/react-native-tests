// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('render successfully', () => {
  it('renders App screen', () => {
    const { toJSON } = render(<App />);

    expect(toJSON()).toMatchSnapshot();
  });
});

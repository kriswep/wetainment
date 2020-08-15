import React from 'react';
import { render } from 'react-testing-library';
import Index from '../index-page';

test('legal stuff is there', () => {
  const { getByText } = render(
    <Index pageContext={{ group: [], index: 0, first: true, last: true }} />,
  );

  expect(getByText(/privacy/i)).toBeDefined();
  expect(getByText(/imprint/i)).toBeDefined();
});

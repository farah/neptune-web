import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import { Plus } from '@transferwise/icons';
import CircularButton from './CircularButton';

describe('CircularButton', () => {
  afterEach(() => {
    cleanup();
  });

  describe('defaults', () => {
    it('renders the button', () => {
      const { getByText } = render(
        <CircularButton icon={<Plus />} onClick={jest.fn()}>
          Add money
        </CircularButton>,
      );

      getByText('Add money');
    });
  });
});

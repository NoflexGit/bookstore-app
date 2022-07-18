import { render } from '@testing-library/react';

import BooksSlider from './BooksSlider';

describe('BooksSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BooksSlider />);
    expect(baseElement).toBeTruthy();
  });
});

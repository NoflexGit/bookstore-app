import { render } from '@testing-library/react';

import BookCard from './BookCard';

describe('BookCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BookCard />);
    expect(baseElement).toBeTruthy();
  });
});

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('button works', () => {
    const mockFn = jest.fn();

    render(<Button onClick={mockFn}>Click</Button>);

    fireEvent.click(screen.getByText('Click'));

    expect(mockFn).toHaveBeenCalledTimes(1);
});

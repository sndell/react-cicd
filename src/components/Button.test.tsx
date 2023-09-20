import { render, userEvent } from '../utils/test-utils';
import { Button } from './Button';
import { describe, expect, it, vi } from 'vitest';

describe('Button', () => {
  it('Render the correct label', () => {
    const { getByText } = render(<Button label="Click me 420420" />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('Calls onClick when the button is clicked', async () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Button label="Click me" onClick={handleClick} />
    );
    await userEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});

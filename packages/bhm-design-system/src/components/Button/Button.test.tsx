import { composeStories } from '@storybook/react';
import * as stories from './Button.stories';
import { render, screen } from '../../utils/testing';

const { Default } = composeStories(stories);

describe('Button', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Default />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render its children', () => {
    render(<Default>Click me</Default>);

    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });
});

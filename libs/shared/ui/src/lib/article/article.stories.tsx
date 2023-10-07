import type { Meta, StoryObj } from '@storybook/react';
import { Article } from './article';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Article> = {
  component: Article,
  title: 'Article',
  args: {
    headline: 'My Headline',
    description: 'My Description',
    author: 'Samy Rahmani',
    dateModified: new Date(),
    datePublished: new Date(),
    image: 'https://picsum.photos/200/300',
    body: `
    <h1>Hello, world!</h1>
    <p>This is an article</p>
    `,
  },
};
export default meta;
type Story = StoryObj<typeof Article>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Article!/gi)).toBeTruthy();
  },
};

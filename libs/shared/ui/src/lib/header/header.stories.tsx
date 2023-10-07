import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Header } from './header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Header',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    logo: 'Osmium OSS',
    items: [
      {
        label: 'Item 1',
        href: '/',
      },
      {
        label: 'Item 2',
        href: '/',
      },
      {
        label: 'Item 3',
        href: '/',
      },
    ],
    children: <button type="button">CTA Button</button>,
  },
  decorators: [
    (Story) => (
      <div className="h-screen">
        <Story />
        {[...Array(50)].map((i) => (
          <p key={i}>i</p>
        ))}
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Header!/gi)).toBeTruthy();
  },
};

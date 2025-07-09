import type { Meta, StoryObj } from "@storybook/react";

import { Component } from "../components/component";

const meta = {
  title: "Primitives/Component",
  component: Component,
  args: {
    hidden: false,
  },
  render: (args) => <Component {...args} />,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

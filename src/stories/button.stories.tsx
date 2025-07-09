import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Button } from "../components/button";
import { Spinner } from "../icons/spinner";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    onClick: fn(),
  },
  argTypes: {
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    loadingText: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const States: Story = {
  render: (args) => (
    <Grid>
      <Button {...args}>default</Button>
      <Button {...args} disabled>
        disabled
      </Button>
      <Button loading {...args} loadingText={undefined}>
        without loading text
      </Button>
      <Button loading loadingText="loading..." {...args}>
        with loading text
      </Button>
    </Grid>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <Grid>
      <Button {...args}>default</Button>
      <Button {...args} variant="primary">
        primary
      </Button>
      <Button {...args} variant="secondary">
        secondary
      </Button>
      <Button {...args} variant="tertiary">
        tertiary
      </Button>
    </Grid>
  ),
};
export const Sizes: Story = {
  render: (args) => (
    <Grid>
      <Button {...args} size="sm">
        sm
      </Button>
      <Button {...args} size="md">
        md
      </Button>
      <Button {...args} size="lg">
        lg
      </Button>
    </Grid>
  ),
};

export const Icons: Story = {
  render: (args) => (
    <Grid>
      <Button
        {...args}
        icon={<Spinner size={14} strokeWidth={2} />}
        iconPosition="before"
      >
        with icon before
      </Button>
      <Button
        {...args}
        icon={<Spinner size={14} strokeWidth={2} />}
        iconPosition="after"
      >
        with icon after
      </Button>
      <Button
        {...args}
        icon={<Spinner size={14} strokeWidth={2} />}
        aria-label="foo"
      />
    </Grid>
  ),
};

const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: "inline-flex",

        gap: "0.5rem",
      }}
    >
      {children}
    </div>
  );
};

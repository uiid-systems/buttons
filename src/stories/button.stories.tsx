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

export const Variants: Story = {
  parameters: {
    // pseudo: {
    //   hover: ["#hover"],
    //   focus: ["#focus"],
    //   active: "#active",
    // },
  },
  render: (args) => {
    const variants = [
      { variant: undefined, label: "default" },
      { variant: "inverted" as const, label: "inverted" },
      { variant: "primary" as const, label: "primary" },
      { variant: "secondary" as const, label: "secondary" },
      { variant: "tertiary" as const, label: "tertiary" },
    ];

    return (
      <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
        {variants.map((variant) => (
          <Grid key={variant.variant}>
            <span
              style={{
                minWidth: "6em",
                fontSize: "0.875rem",
                fontWeight: "700",
                textAlign: "right",
                marginRight: "0.5rem",
                color: "var(--shade_halftone)",
              }}
            >
              {variant.label}
            </span>
            <Button {...args} variant={variant.variant}>
              default
            </Button>
            <Button {...args} variant={variant.variant} disabled>
              disabled
            </Button>
            <Button {...args} variant={variant.variant} loading>
              loading
            </Button>
            <Button {...args} variant={variant.variant} fill="ghost">
              ghost
            </Button>
          </Grid>
        ))}
      </div>
    );
  },
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
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      {children}
    </div>
  );
};

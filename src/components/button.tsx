import { Spinner } from "../icons/spinner";

import "../styles/button.css";

type BaseButtonProps = Omit<React.ComponentProps<"button">, "aria-label"> & {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  loadingText?: string;
};

type ButtonWithIconOnly = BaseButtonProps & {
  icon: React.ReactNode;
  iconPosition?: undefined;
  "aria-label": string;
};

type ButtonWithPositionedIcon = BaseButtonProps & {
  icon?: React.ReactNode;
  iconPosition: "before" | "after";
  "aria-label"?: string;
};

type ButtonWithoutIcon = BaseButtonProps & {
  icon?: undefined;
  iconPosition?: undefined;
  "aria-label"?: string;
};

type ButtonProps =
  | ButtonWithIconOnly
  | ButtonWithPositionedIcon
  | ButtonWithoutIcon;

export const Button = ({
  variant,
  size = "md",
  loading = false,
  loadingText,
  icon,
  iconPosition,
  disabled,
  onClick,
  onKeyDown,
  children,
  "aria-label": ariaLabel,
  ...props
}: ButtonProps) => {
  if (icon && !iconPosition && !ariaLabel) {
    throw new Error(
      "Please provide an aria-label for an icon button with no iconPosition."
    );
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if ((disabled || loading) && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
    }
    onKeyDown?.(e);
  };

  return (
    <button
      data-loading={loading}
      aria-label={loading ? loadingText ?? "Loading..." : ariaLabel}
      data-toretto="button"
      data-variant={variant}
      data-size={size}
      aria-disabled={disabled || loading}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <span data-toretto="button-loading" aria-hidden={!loading}>
        {loadingText ?? <Spinner size={14} strokeWidth={2} />}
      </span>
      <span data-toretto="button-content" aria-hidden={loading}>
        {icon && iconPosition === "before" && icon}
        {icon && iconPosition !== "before" && iconPosition !== "after"
          ? icon
          : children}
        {icon && iconPosition === "after" && icon}
      </span>
    </button>
  );
};

Button.displayName = "Button";

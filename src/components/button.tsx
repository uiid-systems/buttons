import { Spinner } from "../icons/spinner";
import type { ButtonProps } from "../types";

export const Button = ({
  variant,
  size = "md",
  fill = "solid",
  loading,
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
      data-uiid="button"
      /** variants */
      data-variant={variant}
      data-size={size}
      data-fill={fill}
      data-loading={loading ? "true" : undefined}
      /** accessibility */
      aria-label={loading ? loadingText ?? "Loading..." : ariaLabel}
      aria-disabled={disabled || loading ? "true" : undefined}
      /** events */
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {loading !== undefined && (
        <span data-uiid="button-loading" aria-hidden={!loading}>
          {loadingText ?? <Spinner size={14} strokeWidth={2} />}
        </span>
      )}
      <span data-uiid="button-content" aria-hidden={loading}>
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

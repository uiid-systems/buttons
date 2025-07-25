import "./spinner.css";

interface SpinnerProps {
  foregroundColor?: string;
  backgroundColor?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export const Spinner = ({
  foregroundColor = "var(--shade_background)",
  backgroundColor = "transparent",
  size = 24,
  strokeWidth = 2,
  className = "",
}: SpinnerProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${circumference * 0.3} ${circumference}`;

  return (
    <svg
      data-uiid="spinner"
      className={`animate-spin ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
    >
      {/* Background circle */}
      <circle
        data-uiid="spinner-background"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={backgroundColor}
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
        vectorEffect="non-scaling-stroke"
      />

      {/* Foreground arc */}
      <circle
        data-uiid="spinner-foreground"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        style={{ stroke: foregroundColor }}
        strokeLinecap="butt"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={circumference * 0.75}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};
Spinner.displayName = "Spinner";

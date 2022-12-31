import { ComponentPropsWithoutRef } from "react";
import classNames from "classnames";

type ButtonBase = ComponentPropsWithoutRef<"button"> & {
  rounded?: boolean;
  outline?: boolean;
};

type ButtonProps = ButtonBase &
  (
    | { primary?: never; secondary?: never; success?: never; warning?: never; danger?: never }
    | {
        primary: boolean;
        secondary?: never;
        success?: never;
        warning?: never;
        danger?: never;
      }
    | {
        primary?: never;
        secondary: boolean;
        success?: never;
        warning?: never;
        danger?: never;
      }
    | {
        primary?: never;
        secondary?: never;
        success: boolean;
        warning?: never;
        danger?: never;
      }
    | {
        primary?: never;
        secondary?: never;
        success?: never;
        warning: boolean;
        danger?: never;
      }
    | {
        primary?: never;
        secondary?: never;
        success?: never;
        warning?: never;
        danger: boolean;
      }
  );

function Button({ children, outline, rounded, className, ...rest }: ButtonProps) {
  const isPrimary = "primary" in rest;
  const isSecondary = "secondary" in rest;
  const isSuccess = "success" in rest;
  const isWarning = "warning" in rest;
  const isDanger = "danger" in rest;

  delete rest.primary &&
    delete rest.secondary &&
    delete rest.success &&
    delete rest.warning &&
    delete rest.danger;

  const classes = classNames("flex items-center px-3 py-1.5 border [&>svg]:mr-1", className, {
    "border-blue-500 bg-blue-500 text-white": isPrimary,
    "border-gray-900 bg-gray-900 text-white": isSecondary,
    "border-green-500 bg-green-500 text-white": isSuccess,
    "border-yellow-400 bg-yellow-400 text-white": isWarning,
    "border-red-500 bg-red-500 text-white": isDanger,
    "rounded-full": rounded,
    "bg-white ": outline,
    "text-blue-500": isPrimary && outline,
    "text-gray-500": isSecondary && outline,
    "text-green-500": isSuccess && outline,
    "text-yellow-500": isWarning && outline,
    "text-red-500": isDanger && outline,
  });
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;

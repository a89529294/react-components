import { ComponentPropsWithoutRef, ReactNode } from "react";
import classNames from "classnames";

type Props = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  className?: string;
};
function Panel(props: Props) {
  const { children, className, ...rest } = props;
  return (
    <div className={classNames("border rounded p-3 shadow bg-white w-full", className)} {...rest}>
      {children}
    </div>
  );
}

export default Panel;

import classNames from "classnames";
import { ComponentPropsWithoutRef, MouseEvent } from "react";

import useNavigation from "../hooks/useNavigation";

type Props = ComponentPropsWithoutRef<"a"> & {
  to: string;
  activeClassName: string;
};
function Link({ to, children, className, activeClassName, ...rest }: Props) {
  const { currentPath, navigate } = useNavigation();

  const handleClick = (e: MouseEvent) => {
    if (e.ctrlKey || e.metaKey) return;
    e.preventDefault();
    navigate(to);
  };

  const classes = classNames("text-blue-500", className, to === currentPath && activeClassName);
  return (
    <a className={classes} onClick={handleClick} href={to} {...rest}>
      {children}
    </a>
  );
}

export default Link;

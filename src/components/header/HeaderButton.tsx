import { NavLink } from "react-router-dom";
import { ReactElement } from "react";

function HeaderButton({
  to,
  text,
}: {
  to: string;
  text: string;
}): ReactElement {
  return (
    <NavLink
      to={to}
      className="text-sm font-medium text-foreground transition-colors hover:text-primary dark:text-foreground-dark dark:hover:text-primary-dark"
    >
      {text}
    </NavLink>
  );
}

export default HeaderButton;

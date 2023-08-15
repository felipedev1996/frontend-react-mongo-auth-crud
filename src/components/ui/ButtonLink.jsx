import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children,classname,onClick }) => (
  <Link to={to} className={classname}
  onClick={onClick}>
    {children}
  </Link>
);

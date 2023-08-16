import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children ,classname}) => (
  <Link to={to} {...classname} >
    {children}
   
  </Link>
);

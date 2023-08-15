import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  // console.log(isAuthenticated, user)

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg ">
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/tasks" : "/"}>Time Manager</Link>
      </h1>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>Welcome {user.username}</li>
            {/* <li>
              <Button to="/add-task">Add Task</Button>
            </li> */}
            <li>
              <Button>
                <Link to="/" onClick={() => logout()}>
                  Logout
                </Link>
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className={
                  "text-blue-500 hover:text-blue-600 font-bold py-2 px-4 rounded"
                }
              
                 
                
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className={
                  "text-blue-500 hover:text-blue-600 font-bold py-2 px-4 rounded"
                }
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

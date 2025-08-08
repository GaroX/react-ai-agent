import logo from "../assets/logo.svg";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-gray-800">
          <img src={logo} alt="Logo" className="h-8" />
        </a>

        <div>
          {isAuthenticated ? (
            <>
              <button
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Log Out
              </button>
            </>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
export default Navbar;


import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../components/Navbar";
import UserTable from "../components/UserTable";
import LoadingSpinner from "../components/LoadingSpinner";

const AuthLayout = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        {isAuthenticated ? (
          <>
            <UserTable />
          </>
        ) : (
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700 dark:text-indigo-300">
              Welcome
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;

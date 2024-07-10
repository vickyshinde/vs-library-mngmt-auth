import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import SignIn from "./components/SignIn";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import { useAuth } from "./context/AuthContext";
import Home from "./components/Home";

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  return auth.isAuthenticated ? children : <Navigate to="/" />;
};

const App = () => {
  const auth = useAuth();
  console.log("🚀 ~ RequireAuth ~ auth.isAuthenticated:", auth.isAuthenticated)
  // console.log("🚀 ~ App ~ auth:", auth)
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {auth.isAuthenticated ? (
              <li>
                <Link to="/books">Book List</Link>
              </li>
            ) : (
              <li>
                <Link to="/sign-up">Sign In</Link>
              </li>
            )}
          </ul>
        </nav>
        {auth.isAuthenticated && (
          <div>
            <p>Welcome, {auth.user.username}</p>
            <button onClick={auth.signOut}>Sign Out</button>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          {!auth.isAuthenticated && (
            <Route path="/sign-up" element={<SignIn />} />
          )}
          <Route
            path="/books"
            element={
              <RequireAuth>
                <BookList />
              </RequireAuth>
            }
          />
          <Route
            path="/books/:id"
            element={
              <RequireAuth>
                <BookDetail />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

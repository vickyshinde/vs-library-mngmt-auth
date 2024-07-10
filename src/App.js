import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import { useAuth } from './context/AuthContext';

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  return auth.isAuthenticated ? children : <Navigate to="/" />;
};

const App = () => {
  const auth = useAuth();
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Sign In</Link>
              </li>
              {auth.isAuthenticated && (
                <li>
                  <Link to="/books">Book List</Link>
                </li>
              )}
            </ul>
          </nav>
          {auth.isAuthenticated && (
            <button onClick={auth.signOut}>Sign Out</button>
          )}

          <Routes>
            <Route path="/" element={<SignIn />} />
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

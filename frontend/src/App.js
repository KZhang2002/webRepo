import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from './pages/Browse';
import Listing from './pages/Listing';
import Profile from './pages/Profile';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Header from "./components/header/Header";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function RoutesWrapper(props) {
  const ProtectedRoute = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };
  return <>
    {props.isLoggedIn ? <Header setIsLoggedIn={props.setIsLoggedIn} /> : <></>}
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="signup" element={<SignUp setIsLoggedIn={props.setIsLoggedIn} />} />
      <Route path="login" element={<Login setIsLoggedIn={props.setIsLoggedIn} />} />
      <Route path="profile" element={
        <ProtectedRoute isLoggedIn={props.isLoggedIn}><Profile /></ProtectedRoute>
      } />
      <Route path="listing" element={
        <ProtectedRoute isLoggedIn={props.isLoggedIn}><Listing /></ProtectedRoute>
      } />
      <Route path="browse" element={
        <ProtectedRoute isLoggedIn={props.isLoggedIn}><Browse /></ProtectedRoute>
      } />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </>
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div style={{ height: "100vh" }}>
      <BrowserRouter>
        <RoutesWrapper setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;

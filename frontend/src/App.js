import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from './pages/Browse';
import Listing from './pages/Listing';
import Profile from './pages/Profile';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";

const ProtectedRoute = (props) => {
  if (!props.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return props.children;
};

function RoutesWrapper(props) {
  return <>
    {props.isLoggedIn ? <Header setIsLoggedIn={props.setIsLoggedIn} /> : <></>}
    <Routes>
      <Route path="/" exact element={<Navigate to="/login" replace />} />
      <Route path="signup" element={<SignUp setIsLoggedIn={props.setIsLoggedIn} />} />
      <Route path="login" element={<Login setIsLoggedIn={props.setIsLoggedIn} />} />
      <Route path="profile" element={
        <ProtectedRoute isLoggedIn={props.isLoggedIn} children={<Profile />} />
      } />
      <Route path="listing" element={
        <ProtectedRoute isLoggedIn={props.isLoggedIn} children={<Listing />} />
      } />
      <Route path="browse" element={
        <ProtectedRoute isLoggedIn={props.isLoggedIn} children={<Browse />} />
      } />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </>
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("userProfile") ? true : false)

  return (
    <div style={{ height: "100vh" }}>
      <BrowserRouter>
        <RoutesWrapper setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;

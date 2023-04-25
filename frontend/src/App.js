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
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import User from "./components/user/User";
import { ReviewList } from "./components/listing/ReviewList";
import UserReviews from "./pages/UserReviews";

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
      <Route path="/" exact element={<Navigate to={!props.isLoggedIn ? "/login" : '/browse'} replace />} />
      <Route path="signup" element={<SignUp setUserEmail={props.setUserEmail} setIsLoggedIn={props.setIsLoggedIn} />} />
      <Route path="login" element={<Login setUserEmail={props.setUserEmail} setIsLoggedIn={props.setIsLoggedIn} />} />
      <Route path="profile" element={
        <ProtectedRoute isLoggedIn={props.isLoggedIn} children={<Profile userEmail={props.userEmail} />} />
      } />
      <Route path="user/:email" exact element={
        <ProtectedRoute isLoggedIn={props.isLoggedIn} children={<User />} />
      } />
      <Route path="user/:email/reviews" element={
        <ProtectedRoute isLoggedIn={props.isLoggedIn} children={<UserReviews />} />
      } />
      <Route path="listing/:id" element={
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
  const [userEmail, setUserEmail] = useState("");

  return (
    <div style={{ height: "100vh" }}>
      <BrowserRouter>
        <RoutesWrapper setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} userEmail={userEmail} setUserEmail={setUserEmail}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

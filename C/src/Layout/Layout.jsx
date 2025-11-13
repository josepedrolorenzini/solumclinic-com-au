import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = ({ children , title}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('loggedInUser') ? JSON.parse(localStorage.getItem('loggedInUser')) : null);



       const handleRemoveLogin = () => {
           localStorage.removeItem('loggedInUser');
           setLoggedInUser(null);
           window.location.href = '/';
        }

     useEffect(() => {
                console.log("layout loggedInUser changed:"); ;
                console.log(loggedInUser)
               
            }, [loggedInUser]);

  return (
    <div>
      <header style={headerStyle}>
        <h1>{title? title:currentPath}</h1>
        {loggedInUser ? 
       (<>
         <p>Welcome, {loggedInUser.name}!</p> 
         <Link to="#"
        onClick={handleRemoveLogin}>log out</Link> 
       </>
       )
        : <p>Please log in.</p>}
       
      </header>
      <main style={mainStyle}>{children}</main>
      <Footer />
    </div>
  );
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  padding: "10px",
  textAlign: "center"
};

const mainStyle = {
  padding: "20px"
};


export default Layout;

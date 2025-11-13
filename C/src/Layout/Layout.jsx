import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

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
      <footer style={footerStyle}>
        <p>&copy; 2025 My Application. All rights reserved.</p>
      </footer>
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

const footerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  position: "fixed",
  width: "100%",
  bottom: "0",
  left: "0"
};

export default Layout;

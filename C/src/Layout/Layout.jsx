import React from "react";

const Layout = ({ children , title}) => {
  return (
    <div>
      <header style={headerStyle}>
        <h1>{title}</h1>

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

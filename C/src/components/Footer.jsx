import React from 'react'

function Footer() {
  return (
     <footer style={footerStyle}>
        <p>&copy; 2025 My Application. All rights reserved.</p>
      </footer>
  )
}



const footerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  position: "fixed",
  width: "100%",
  bottom: "0",
  left: "0"
};


export default Footer
import React from "react";
import Header from "./header.jsx";
import Introduction from "./introduction.jsx";
import Footer from "./footer.jsx";
import App from "./app.jsx";
import Note from "./note.jsx";

function Main() {
  return (
    <div>
      <Header />
      <Introduction />
      <Note />
      <App />
      <Footer />
    </div>
  );
}

export default Main;

// xs=mobile screen
// sm=tablet
// md=small monitor
// lg=large monitor

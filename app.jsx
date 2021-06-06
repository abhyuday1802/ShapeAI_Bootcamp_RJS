import React from "react";
import Header from "./header.jsx";
import Introduction from "./introduction.jsx";
import Footer from "./footer.jsx";
import Main from "./main.jsx";
import Note from "./note.jsx";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Note />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

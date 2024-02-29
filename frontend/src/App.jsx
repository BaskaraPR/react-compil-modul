import React from "react";
import Utama from "./pages/main";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Utama />
      </div>
    );
  }
}

export default App;

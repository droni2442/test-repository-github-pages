import React from "react";
import logo from "./assets/logo.webp";

const App = () => {
  return (
    <div className="app">
      <h1>Hello Webpack 🚀</h1>
      <img src={logo} alt="logo" width="200" />
    </div>
  );
};

export default App;
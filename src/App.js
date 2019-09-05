import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import PaymentApp from './conponents/payment/Payment';
import Layout from "./container/Layout";
import AppRouter from "./routing/router";
function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;

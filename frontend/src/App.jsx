import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <div className="bg-[#FDFBD4] h-svh flex flex-col gap-2 md:gap-8">
      <Header />
      <Form />
      
    </div>
  );
}

export default App;

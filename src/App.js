
import React,{useState} from "react";
import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";
import { Switch,Route } from 'react-router-dom'



function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);
  return (
    <>
      <div className="container">
          <Header score={score} />
      </div>
    </>
  )
}

export default App


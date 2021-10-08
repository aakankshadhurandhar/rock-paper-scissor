import React, { useState } from "react";
import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";
import { Switch, Route } from "react-router-dom";

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);
  return (
    <>
      <div className="container">
        <Header score={score} />
        <Switch>
          <Route exact path="/">
            <Play setMyChoice={setMyChoice}></Play>
          </Route>
          <Route path="/game">
            <Game myChoice={myChoice} score={score} setScore={setScore}/>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;

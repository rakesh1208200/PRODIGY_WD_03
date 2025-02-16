import React, { useState } from "react";
import Board from "./components/Board";
import "./styles.css";
const App = () => {
    return (
        <div className="container">
            <h1>Tic Tac Toe</h1>
            <Board />
        </div>
    );
};

export default App;

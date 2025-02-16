import React, { useState } from "react";
import Square from "./Square";
import "../styles.css";
const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6] 
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        if (squares[index] || calculateWinner(squares)) return;

        const newSquares = squares.slice();
        newSquares[index] = isXNext ? "X" : "O";
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? "X" : "O"}`;

    return (
        <div>
            <h2>{status}</h2>
            <div className="board">
                {squares.map((value, index) => (
                    <Square key={index} value={value} onClick={() => handleClick(index)} />
                ))}
            </div>
            <button className="reset-btn" onClick={() => setSquares(Array(9).fill(null))}>
                Reset Game
            </button>
        </div>
    );
};

export default Board;

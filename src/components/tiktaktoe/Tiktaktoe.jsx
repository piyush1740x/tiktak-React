import React, { useState } from "react"; 
import Button from "./Button"; 
import Heading from "./Heading"; 
import Boxes from "./Boxes"; 

const Tiktaktoe = () => {
  const [state, setState] = useState(Array(9).fill(null)); 
  const [currentPlayer, setCurrentPlayer] = useState("🐸"); 
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (state[index] !== null || winner !== null) return; 

    const newState = [...state];
    newState[index] = currentPlayer; 
    setState(newState); 

    const newWinner = calculateWinner(newState); 
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setCurrentPlayer(currentPlayer === "🐸" ? "🪲" : "🐸");
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };


  const resetGame = () => {
    setState(Array(9).fill(null));
    setCurrentPlayer("🐸"); 
    setWinner(null); 
  };

  
  return (
    <div className="container flex flex-col items-center w-[80vw] ">
      <Heading />
      <div className="borad flex items-center justify-center mt-11  w-[80%]">
        <div className="row1 grid grid-rows-3 gap-2">
          <div className="grid grid-cols-3 gap-2">
            <Boxes onClick={() => {handleClick(0)}} value={state[0]} />
            <Boxes onClick={() => {handleClick(1)}} value={state[1]} />
            <Boxes onClick={() => {handleClick(2)}} value={state[2]} />
          </div>
          <div className="row2 grid grid-cols-3 gap-2">
            <Boxes onClick={() => {handleClick(3)}} value={state[3]} />
            <Boxes onClick={() => {handleClick(4)}} value={state[4]} />
            <Boxes onClick={() => {handleClick(5)}} value={state[5]} />
          </div>
          <div className=" row3 grid grid-cols-3 gap-2">
            <Boxes onClick={() => {handleClick(6)}} value={state[6]} />
            <Boxes onClick={() => {handleClick(7)}} value={state[7]} />
            <Boxes onClick={() => {handleClick(8)}} value={state[8]} />
          </div>
        </div>
      </div>
      {winner && <h1 className="mt-5 text-2xl font-bold text-green-700"> Yeee... "{winner}" Won </h1>}
      <Button onClick={resetGame} />
    </div>
  );
};

export default Tiktaktoe;

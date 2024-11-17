import { useState } from "react";
import "./index.css"; 

function RandomNumberGenerator() {
    // State to store the random number
    const [randomNumber, setRandomNumber] = useState(null);

    // Function to generate a new random number
    function generateRandomNumber() {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(randomNum);
    }

    return (
        <div className="container">
            <h1>{randomNumber === null ? "Click to get started" : randomNumber}</h1>
            <button onClick={generateRandomNumber}>Generate Random Number</button>
        </div>
    );
}

export default RandomNumberGenerator;

import React, { useState } from 'react';
import "./Calculator.css";

function Calculator() {
var[input, setInput] = useState(""); 

   var handleClick = (value) => {
        if (value === "C") {
            setInput(""); // clear input
        } else if (value === "=") {
            try {
                setInput(eval(input).toString()); 
            } catch (err) {
                setInput("Error"); 
            }
        } else {
            setInput(input + value); 
        }
    };

    var handleChange = (e) => {
        setInput(e.target.value); 
    };

  var buttons = [
        { label: "7", id: "btn-7" },
        { label: "8", id: "btn-8" },
        { label: "9", id: "btn-9" },
        { label: "/", id: "btn-divide" },
        { label: "4", id: "btn-4" },
        { label: "5", id: "btn-5" },
        { label: "6", id: "btn-6" },
        { label: "*", id: "btn-multiply" },
        { label: "1", id: "btn-1" },
        { label: "2", id: "btn-2" },
        { label: "3", id: "btn-3" },
        { label: "-", id: "btn-subtract" },
        { label: "0", id: "btn-0" },
        { label: ".", id: "btn-dot" },
        { label: "=", id: "btn-equals" },
        { label: "+", id: "btn-add" },
        { label: "C", id: "btn-clear" }
    ];

    return (
        <div className="calculator-wrapper">
            <fieldset className="calculator" id="calculator-fieldset">
    
                <h2 className="calculator-title">MY CALCULATOR</h2>

                <input
                    id="calc-input"
                    className="calc-input"
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="0"
                />

                <div className="buttons-container" id="buttons-container">
                    {buttons.map((btn) => (
                        <button
                            key={btn.id}
                            id={btn.id}
                            className="calc-btn"
                            onClick={() => handleClick(btn.label)}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
            </fieldset>
        </div>
    );
}

export default Calculator;

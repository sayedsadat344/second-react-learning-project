import React from 'react';

const PadButton = ({ pad, padColor, togglePad }) => {

    return (

        <button
            style={{ backgroundColor: padColor }}
            className={`pad-button ${pad.on ? "on" : ""}`}
            onClick={() => togglePad(pad.id)}
        ></button>

    );
};

export default PadButton;
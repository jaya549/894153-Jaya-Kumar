import React from 'react';
import mystyle from "./Components/mystyle.css";
const percentToDecimal = (decimal) => {
    return (
        decimal.toFixed(2) + '%'
    );
}
const calScore = (total, goal) => {
    return (
        percentToDecimal(total / goal)
    );
}

const calculatescore = (props) => {
    return (
        <div className="formatstyle">
            <h1>Student Details</h1>
            <div className="name">
                <span>Name:</span>
                <span>{props.name}</span>
            </div>
            <div className="school">
                <span>School:</span>
                <span>{props.school}</span>
            </div>
            <div className="total">
                <span>Total:</span>
                <span>{props.total}</span>

            </div>
            <div className="marks">
                <span>Marks:</span>
                <span>{calScore(props.total, props.goal)}</span>

            </div>
        </div>
    )
}
export default calculatescore;
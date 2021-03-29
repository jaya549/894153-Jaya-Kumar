
import React, { Component } from 'react';
import Countpeople from './CountPeople.css';
class CountPeople extends Component {

    state = {
        updateEntry: 0,
        updateExit: 0,
        c: 0
    };
    updateEntry = () => {
        this.setState({
            updateEntry: this.state.updateEntry + 1,

            c: this.state.c++
        });
    }

    updateExit = () => {
        this.setState({
            updateExit: this.state.updateExit + 1,

            c: this.state.c++
        });
    }


    render() {
        return (
            <div className="main">
                <div className="login">
                    <button onClick={this.updateEntry}>Login</button><span id="logincount">{this.state.updateEntry}
                    </span>
                </div>
                <div className="exit">
                    <button onClick={this.updateExit}>Exit</button><span id="exitcount">{this.state.updateExit}</span>
                </div>

            </div>
        )
    };




}
export default CountPeople;
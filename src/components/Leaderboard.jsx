// src/Leaderboard.js
import React from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
    return (
        <div className="leaderboard-container">
            <div className="header">
                <div className="nav-left">
                    <h1>ENIGMA</h1>
                </div>
                <div className="nav-right">
                    <a href='#'>LEADERBOARD</a>
                    <a href='#'>CHALLENGES</a>
                    <a href='#'>TEAM</a>
                </div>
            </div>
            <h2 className="main-title">LEADERBOARD</h2>
            <div className="boards">
                <div className="board">
                    <h3 className="rank">NO. 1</h3>
                    <h4>TEAM ALPHA</h4>
                    <hr className="divider" />
                    <div className='box'>
                        <p>TEAM POINTS</p>
                        <p>1000</p>
                    </div>
                    <div className='box'>
                        <p>CTFS SOLVED</p>
                        <p>1000</p>
                    </div>
                </div>
                <div className="board">
                    <h3 className="rank">NO. 2</h3>
                    <h4>ONLYCTFS</h4>
                    <hr className="divider" />
                    <div className='box'>
                        <p>TEAM POINTS</p>
                        <p>1000</p>
                    </div>
                    <div className='box'>
                        <p>CTFS SOLVED</p>
                        <p>1000</p>
                    </div>
                </div>
                <div className="board">
                    <h3 className="rank">NO. 3</h3>
                    <h4>ZETABYTES</h4>
                    <hr className="divider" />
                    <div className='box'>
                        <p>TEAM POINTS</p>
                        <p>1000</p>
                    </div>
                    <div className='box'>
                        <p>CTFS SOLVED</p>
                        <p>1000</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
import React, { Component } from 'react';
import './HomePage.css';
// import { FaSearch } from 'react-icons/fa';
class HomePage extends Component {
    render() {
        return (
        <div className="container">
            <header>
                <div className='navbar'>
                <img src='assets/logo2.jpg' alt='hi' height={80}></img>
                
                <button className='navbut'>ABOUT</button>
                <button className='navbut'>VIEW ALL RECIPES</button>
                <button className='addrecipe'>+ ADD A RECIPE</button>
                <button className='loginbut'>LOGIN / SIGNUP</button>
                </div>
            </header>
            <body>
            <div className="background-container">
                        <img src="assets/homebg.png" alt="bg" className="background-image" />
                        <div className="input-container">
                            {/* <FaSearch className="icon" /> */}
                            
                            <input type="text" className="centered-input" placeholder="Start typing a dish name..." />
                        </div>
                    </div>
            </body>
        </div>
        );
    }
}

export default HomePage;

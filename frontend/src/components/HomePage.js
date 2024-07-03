import React, { Component } from 'react';
import './HomePage.css';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { IoLogOut } from "react-icons/io5";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            meals: [],
            isInputFocused: false,
        };
    }

    handleInputChange = async (e) => {
        const query = e.target.value.toLowerCase();
        this.setState({ query });

        if (query.length > 0) {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
                const meals = response.data.meals || [];
                this.setState({ meals });
            } catch (error) {
                console.error("Error fetching data:", error);
                this.setState({ meals: [] });
            }
        } else {
            this.setState({ meals: [] });
        }
    };

    handleInputFocus = () => {
        this.setState({ isInputFocused: true });
    };

    handleInputBlur = () => {
        this.setState({ isInputFocused: false });
    };

    render() {
        return (
            <div className="container">
                <header>
                    <nav className='navbar'>
                        <img src='assets/logo2.jpg' alt='hi' height={80} className='home-logo'/>
                        <button className='navbut'>ABOUT</button>
                        <button className='navbut'>VIEW ALL RECIPES</button>
                        <button className='addrecipe'>+ ADD A RECIPE</button>
                        <button className='logout-but'><IoLogOut  id='logout-icon'/></button>

                    </nav>
                </header>

                <div className="background-container">
                    <div className='input-wrapper'>
                        <FaSearch id='search-icon' />
                        <input
                            type="text"
                            className="centered-input"
                            placeholder="Start typing a dish name..."
                            value={this.state.query}
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            onBlur={this.handleInputBlur}
                        />
                    </div>
                    {this.state.isInputFocused && this.state.query.length > 0 && this.state.meals.length > 0 && (
                        <div className='results'>
                            {this.state.meals.map((meal) => (
                                <div className="result-item" key={meal.idMeal}>
                                    <img src={meal.strMealThumb} alt={meal.strMeal} className="thumbnail" />
                                    {meal.strMeal}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default HomePage;

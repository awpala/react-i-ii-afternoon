
import React, { Component } from 'react';
import {data} from '../data.js';

import Card from './Card';
import Nav from './Nav';

// const data = require('../data').data;

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data,
            currentCard: 0
        }
    }

    handlePrevious = () => {
        if(this.state.currentCard === 0) {
            this.setState({
                data: data,
                currentCard: this.state.data.length - 1
            });
        } else {
            this.setState({
                data: data,
                currentCard: this.state.currentCard - 1
            });
        }
    }

    handleNext = () => {
        if(this.state.currentCard === this.state.data.length - 1) {
            this.setState({
                currentCard: 0
            });
        } else {
            this.setState({
                currentCard: this.state.currentCard + 1
            });
        }
    }

    render() {
        const { id, name, city, country, employer, title, favoriteMovies } = this.state.data[this.state.currentCard];

        return (
            <main>
                <h1>{`${name.first} ${name.last}`}</h1>
                <section>
                    <p><span>From: </span>{`${city}, ${country}`}</p>
                    <p><span>Job Title: </span>{title}</p>
                    <p><span>Employer: </span>{employer}</p>
                </section>
                <section>
                    <p>Favorite Movies:</p>
                    <ol>
                        <li>{favoriteMovies[0]}</li>
                        <li>{favoriteMovies[1]}</li>
                        <li>{favoriteMovies[2]}</li>
                    </ol>
                </section>
                <div>{`${id} / ${this.state.data.length}`}</div>
                <Nav
                    prevFn={this.handlePrevious}
                    nextFn={this.handleNext}
                />
            </main>
        )
    }
}

export default Main;


import React, { Component } from 'react';
import {data} from '../data.js';

import Card from './Card';
import Nav from './Nav';

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
        return (
            <main>
                <Card
                    cardData = {this.state.data[this.state.currentCard]}
                    dataSize = {this.state.data.length}
                />
                <Nav
                    prevFn={this.handlePrevious}
                    nextFn={this.handleNext}
                />
            </main>
        )
    }
}

export default Main;

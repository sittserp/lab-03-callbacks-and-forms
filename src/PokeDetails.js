import React, { Component } from 'react'
import fetch from 'superagent';

export default class PokeItem extends Component {

    state = {
        list: [],
    }

    componentDidMount = async () => {
        const response = await fetch.get(``);

        this.setState({ list: response.body.results })
    }

    render() {
        return (
            <div className="image-item">
                <div>{this.props.pokemon}</div>
                <img className="pokemon-image" src={this.props.url_image} alt='pokemon' />
                <div>Type 1: {this.props.type_1}</div>
                <div>Type 2: {this.props.type_2}</div>
                <div>Ability 1: {this.props.ability_1}</div>
                <div>Ability 2: {this.props.ability_2}</div>
                <div>Shape: {this.props.shape}</div>
                <div>Attack: {this.props.attack}</div>
                <div>Defense: {this.props.defense}</div>
                <div>Health Points: {this.props.hp}</div>
            </div>
        )
    }
}
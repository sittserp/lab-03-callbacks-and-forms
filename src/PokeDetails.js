import React, { Component } from 'react'
import fetch from 'superagent';

export default class PokeItem extends Component {

    state = {
        list: [],
    }

    componentDidMount = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.props.match.params._id}`);

        this.setState({ list: response.body })
    }

    render() {
        return (
            <div className="image-item">
                <div>{this.state.list.pokemon}</div>
                <img className="pokemon-image" src={this.state.list.url_image} alt='pokemon' />
                <div>Type 1: {this.state.list.type_1}</div>
                <div>Type 2: {this.state.list.type_2}</div>
                <div>Ability 1: {this.state.list.ability_1}</div>
                <div>Ability 2: {this.state.list.ability_2}</div>
                <div>Shape: {this.state.list.shape}</div>
                <div>Attack: {this.state.list.attack}</div>
                <div>Defense: {this.state.list.defense}</div>
                <div>Health Points: {this.state.list.hp}</div>
            </div>
        )
    }
}
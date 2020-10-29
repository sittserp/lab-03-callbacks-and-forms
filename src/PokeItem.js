import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className="image-item">
                <div>{this.props.pokemon}</div>
                <img className="pokemon-image" src={this.props.url_image} alt='pokemon' />
                <div>Type: {this.props.type_1}</div>
                <div>Attack: {this.props.attack}</div>
                <div>Defense: {this.props.defense}</div>
            </div>
        )
    }
}

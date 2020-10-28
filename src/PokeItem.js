import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className="image-item">
                <div>{this.props.pokemon}</div>
                <img className="pokemon-image" src={this.props.url_image} alt='pokemon image' />
                <div>Type: {this.props.type_1}</div>
            </div>
        )
    }
}

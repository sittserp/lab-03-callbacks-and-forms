import React, { Component } from 'react'
import pokeDex from './data.js';
import PokeItem from './PokeItem.js';


export default class PokeList extends Component {

    state = {
        filter: '',
        name: '',
    }

    handleChange = e => {
        this.setState({
            filter: e.target.value
        })
    }

    handleInput = e => {
        this.setState({
            name: e.target.value
        })
    }


    render() {

        const searchedPokemon = pokeDex.filter((item) => {
            if (!this.state.name) return true;
            if (this.state.name === item.pokemon) return true;
            return false;
        })
            .sort((a, b) => {
                if (this.props.order === 'descending') {
                    return b[this.props.sortType] - a[this.props.sortType]
                } else {
                    return a[this.props.sortType] - b[this.props.sortType]
                }
            })

        return (
            <>
                <select onChange={this.handleChange}>
                    <option></option>
                    {pokeDex.map(item => <option value={item.type_1}>{item.type_1}</option>)}
                </select>
                <form>
                    <input onChange={this.handleInput} />
                    <button type='submit' >Search</button>
                </form>
                <div className="pokemon">
                    {
                        searchedPokemon.map(item =>
                            <PokeItem
                                pokemon={item.pokemon}
                                url_image={item.url_image}
                                type_1={item.type_1}
                                attack={item.attack}
                                defense={item.defense}
                            />
                        )
                    }
                </div>
            </>
        )
    }
}
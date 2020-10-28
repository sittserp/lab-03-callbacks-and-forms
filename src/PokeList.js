import React, { Component } from 'react'
import pokeDex from './data.js';
import PokeItem from './PokeItem.js';


export default class PokeList extends Component {

    state = {
        filter: '',
        name: ''
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
        console.log(this.state.name, 'state.name');
    }

    render() {

        const filteredPokemon = pokeDex.filter((item) => {
            if (!this.state.filter) return true;
            if (this.state.filter === item.pokemon) return true;
            return false;
        })

        const searchedPokemon = pokeDex.filter((item) => {
            if (!this.state.name) return true;
            if (this.state.name === item.pokemon) return true;
            return false;
        })

        return (
            <>
                <select onChange={this.handleChange}>
                    <option></option>
                    {pokeDex.map(item => <option value={item.pokemon}>{item.pokemon}</option>)}
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
                            />
                        )
                    }
                </div>
            </>
        )
    }
}
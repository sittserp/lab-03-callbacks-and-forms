import React, { Component } from 'react'
// import pokeDex from './data.js';
import PokeItem from './PokeItem.js';
import fetch from 'superagent';


export default class PokeList extends Component {

    state = {
        list: [],
        filter: '',
        name: '',
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    handleChange = e => {
        this.setState({
            filter: e.target.value
        })

        // this.fetchPokemon();
    }

    handleInput = e => {
        this.setState({
            name: e.target.value
        })
    }

    fetchPokemon = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.state.filter}`);

        this.setState({ list: response.body.results });
    }


    render() {

        const searchedPokemon = this.state.list.filter((item) => {
            if (!this.state.name) return true;
            if (item.pokemon.includes(this.state.name)) return true;
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
                {/* <select onChange={this.handleChange}>
                    <option></option>
                    <option value="types">types</option>
                    <option value="abilities">abilities</option>
                    <option value="shapes">shapes</option>
                    <option value="eggGroups">egg groups</option>
                </select> */}
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleInput} />
                    <button>Search</button>
                </form>
                <div className="pokemon">
                    {
                        this.state.list.length === 0
                            ? 'Fetching Data...'
                            : <div className="pokemon">{searchedPokemon.map(item => <div key={item.pokemon}>
                                <PokeItem
                                    pokemon={item.pokemon}
                                    url_image={item.url_image}
                                    type_1={item.type_1}
                                    attack={item.attack}
                                    defense={item.defense}
                                />
                            </div>
                            )
                            }</div>
                    }</div>
            </>
        )
    }
}
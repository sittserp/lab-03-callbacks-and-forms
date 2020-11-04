import React, { Component } from 'react';
import fetch from 'superagent';
import PokeItem from './PokeItem.js';
import { Link } from 'react-router-dom';

export default class PaginatedList extends Component {
    state = {
        list: [],
        pageNumber: 1
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    handleIncrement = async () => {
        await this.setState({
            pageNumber: this.state.pageNumber + 1,
        })

        await this.fetchPokemon();
    }

    handleDecrement = async () => {
        await this.setState({
            pageNumber: this.state.pageNumber - 1,
        })

        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.pageNumber}&perPage=50`);

        this.setState({
            list: response.body.results
        })
    }


    render() {
        return (
            <div>
                {<button onClick={this.handleDecrement}>Previous</button>}
                {<button onClick={this.handleIncrement}>Next</button>}
                <div className="pokemon">
                    {
                        this.state.list.length === 0
                            ? 'Fetching Data...'
                            : <div className="pokemon">{this.state.list.map(item =>
                                <Link to={`/pagination/${item._id}`}>
                                    <div key={item.pokemon}>
                                        <PokeItem
                                            pokemon={item.pokemon}
                                            url_image={item.url_image}
                                            type_1={item.type_1}
                                            attack={item.attack}
                                            defense={item.defense}
                                        />
                                    </div>
                                </Link>
                            )
                            }</div>
                    }</div>
            </div>
        )
    }
}

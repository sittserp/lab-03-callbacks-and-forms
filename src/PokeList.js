import React, { Component } from 'react'
import pokeDex from './data.js';
import PokeItem from './PokeItem.js';


export default class PokeList extends Component {

    state = {
        filter: ''
    }

    handleChange = e => {
        this.setState({
            filter: e.target.value
        })
    }

    render() {

        const filteredCreatures = pokeDex.filter((item) => {
            if (!this.state.filter) return true;
            if (this.state.filter === item.pokemon) return true;
            return false;
        })

        return (
            <>
                <select onChange={this.handleChange}>
                    <option></option>
                    {pokeDex.map(item => <option value={item.pokemon}>{item.pokemon}</option>)}
                </select>
                <div className="creatures">
                    {
                        filteredCreatures.map(item =>
                            <PokeItem
                                title={item.pokemon}
                                src={item.url_image}
                                description={item.type_1}
                            />
                        )
                    }
                </div>
            </>
        )
    }
}
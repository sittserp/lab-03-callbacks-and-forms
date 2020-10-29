import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <>
                <select onChange={this.props.handleSortType}>
                    <option value="">all</option>
                    <option value="attack">attack</option>
                    <option value="defense">defense</option>
                    <option value="type">type</option>
                </select>
                <select onChange={this.props.handleOrder}>
                    <option value="ascending">ascending</option>
                    <option value="descending">descending</option>
                </select>
            </>
        )
    }
}

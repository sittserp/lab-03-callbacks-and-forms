import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div className="header"> Hi, {this.props.name}, I am the Nav Bar!
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/list">PokeList</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

import React, { Component } from 'react'

export default class Component1 extends Component {
    render() {
        return (
            <div style={c1Style}>
                <h1>Component 1</h1>
                <p>Lorem ipsum dolor sit</p> 
            </div>
        )
    }
}

const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}

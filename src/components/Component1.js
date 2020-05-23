import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

export default function  Component1(){
        return (
            <Spring
            from ={{ opacity: 0 }}
            to ={{ opacity: 1 }}
            >
                {props => (
                    <div style={props}>
                        <div style={c1Style}>
                            <h1>Component 1</h1>
                            <p>Lorem ipsum dolor sit</p> 
                        </div>
                    </div>
                )}
            </Spring>
        )
}

const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}

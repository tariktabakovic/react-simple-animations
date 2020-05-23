import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

export class Component2 extends Component {
    render() {
        return (
            <Spring
            from ={{ opacity: 0}}
            to ={{ opacity: 1}}
            >
                {props => (
                    <div style={props}>
                        <div style={c2Style}>
                            <h1>Component 2</h1>
                            <p>lorem fdsafas fasdfasdf fasdfasdf asdfas
                                fdsaf sdfsa df asdfklasd flkasd f
                                ds
                                fa sdflkajsdfklsa djfasd
                                f sadfl dskfjasdfkljsdaflk </p> 
                        </div>
                    </div>
                )}
            </Spring>
        )
    }
}
const c2Style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem'
}

export default Component2;
import React, { Component } from 'react';

export default class Select extends Component {
    constructor(props, id, options) {
        super(props);

        console.log(props);
    }

    render() {
        return (
            <h1 id={this.props.id}>Menu</h1>
        );
    }
}

export default ({}) => {
    menuOptions = [
        {id: 'ru', value: 'Restaurante Universitário'},
    ];

    return (
        <Select id="teste" options={menuOptions}/>
    )
}

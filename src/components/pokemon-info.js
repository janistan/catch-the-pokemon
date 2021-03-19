import React from 'react';
import Info from '../style/info'

const PokemonInfo = (props) => {
    var { value } = props;

    return (
        <Info className="col-12 col-md-12 p-0">
            {value}
        </Info>
    )
}

export default PokemonInfo;
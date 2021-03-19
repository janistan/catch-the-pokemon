import React from 'react';
import  Attributes from '../style/attributes'


const PokemonAttributes = (props) => {
    var { attributes } = props;
    var { type } = props;
    var attributeColor = null;

    if (type === "moves" ) {
        attributeColor = "green"
    }

    return (
        <Attributes color={attributeColor} className={"pl-3 pr-3 pt-1 pb-2 m-2 ml-0"} >
            <span>{attributes.name}</span>
        </Attributes>
    )
}

export default PokemonAttributes;
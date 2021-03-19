import React from 'react';
import Profile from '../style/profile'

const PokemonProfile = (props) => {
    var { source } = props;
    return (
        <div className="col-12 col-md-12 mb-3">
            <Profile src={source} className="justify-content-center" alt="pokemon-profile"></Profile>
        </div>
    )
}

export default PokemonProfile;
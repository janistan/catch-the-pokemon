
import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import PokemonAttributes from '../components/pokemon-attribute';
import PokemonProfile from '../components/pokemon-profile';
import PokemonInfo from '../components/pokemon-info';
import { TYPE, ABILITIES, NAME, MOVES } from '../components/action-type';
import PokemonCatch from '../components/pokemon-catch';
import AnchorButton from '../style/anchor-tag';
import WrapperColumn from '../style/wrapper-column';
import pokeballLogo from '../assets/pokeball.png';

/**
 * Query to get Pokemon Detail 
 */
export const GET_POKEMON_DETAIL = gql`
query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      abilities {
          ability {
              name
          }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      message
    }
  }
`;

/**
 * 
 * @param {*} name - The name of Pokemon 
 * @returns the detail of Pokemon
 */
function CallQuery(name) {
    return useQuery(GET_POKEMON_DETAIL, {
        variables: {
            "name": name
        },
    });
}


export const PokemonDetails = (props) => {

    var pokemonName = props.match.params.pokemon;
    const { loading, error, data } = CallQuery(pokemonName);
    const [isOpen, setIsOpen] = useState(false);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="col-md-12">
            <div className="row justify-content-center">
                <div className="col-md-3 col-12 ">
                    <div className="col-12 p-5 col-md-12 justify-content-center row m-0">
                        <div className="col-10 col-md-12">
                            <PokemonProfile key={`profile-${data.pokemon.name}`} source={data.pokemon.sprites.front_default}></PokemonProfile>
                        </div>

                    </div>
                    <WrapperColumn className="pokemon-info-wrapper">
                        <PokemonInfo key={`profile-name-${data.pokemon.name}`} value={data.pokemon.name}></PokemonInfo>
                        <AnchorButton className="row col-md-12 col-12 justify-content-center m-0 mb-3" onClick={togglePopup}>
                            <img src={pokeballLogo} alt="pokeball"></img>
                            <div className="ml-2 d-flex align-items-center">CATCH ME</div>
                        </AnchorButton>

                        <div className="col-md-12 p-0">
                            <PokemonInfo key="type" value="Type"></PokemonInfo>
                            {
                                data.pokemon.types.map((data) => (
                                    <PokemonAttributes key={data.type.name} attributes={data.type} type={TYPE} ></PokemonAttributes>
                                ))
                            }
                        </div>

                        <div className="col-md-12 row">
                            <PokemonInfo key={ABILITIES} value={ABILITIES}></PokemonInfo>
                            {
                                data.pokemon.abilities.map((data) => (
                                    <PokemonAttributes key={data.ability.name} attributes={data.ability} type={NAME}></PokemonAttributes>
                                ))
                            }
                        </div>
                    </WrapperColumn>
                </div>

                <div className="col-md-8">
                    <PokemonInfo key={MOVES} value={MOVES}></PokemonInfo>
                    <div className="flex flex-wrap">
                        {
                            data.pokemon.moves.map((data) => (
                                <PokemonAttributes key={data.move.name} attributes={data.move} type={MOVES}></PokemonAttributes>
                            ))
                        }
                    </div>
                </div>

            </div>
            {isOpen && <PokemonCatch handleClose={togglePopup} name={data.pokemon.name} image={data.pokemon.sprites.front_default} />}
        </div >

    )
}


export default PokemonDetails;
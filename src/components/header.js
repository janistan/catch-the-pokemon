
import React from "react";
import { Link } from 'react-router-dom'
import { Logo, Navigation } from '../style/css'
import pokemonListLogo from '../assets/pokemon-logo.png'
import myPokemonLogo from '../assets/my-pokemon.png'
import githubLogo from '../assets/github.jpeg'
import Tooltip from '@material-ui/core/Tooltip';

export default function Header() {
    return (
        <Navigation className="mb-5">
            <Link to={`/`}>
                <Tooltip title="Pokemon List" aria-label="add">
                    <Logo src={pokemonListLogo} className="ml-3" alt="pokemon-list"></Logo>
                </Tooltip>
            </Link>
            <Link to={`/myPokemon`}>
                <Tooltip title="My Pokemon" aria-label="add">
                    <Logo src={myPokemonLogo} className="ml-3" alt="my-pokemon"></Logo>
                </Tooltip>
            </Link>
            <a href={`https://github.com/janistan/catch-the-pokemon`} target="_blank">
                <Tooltip title="GitHub" aria-label="add">
                    <Logo src={githubLogo} className="ml-3" alt="github logo"></Logo>
                </Tooltip>
            </a>
        </Navigation >
    );
}

import React, { Component } from 'react'
import { Modal, Box } from '../style/modal'
import { Input } from '../style/input'
import { Button } from '../style/button'
import pokeballLogo from '../assets/my-pokemon.png'
import pokemonRunLogo from '../assets/pokemon-running.png'

const ERROR_DUPLICATE = "Nickname already in use, please use another name"
const ERROR_EMPTY = "Please fill the nickname"

class PokemonCatch extends Component {
    name;
    isNicknameTouch;
    isNicknameDuplicate;
    isNicknameEmpty;
    isCatched;
    myPokemon;

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.name = props.name;
        this.isNicknameTouch = false;
        this.isNicknameDuplicate = false;
        this.isNicknameEmpty = true;

        var localMyPokemon = localStorage.getItem('myPokemon');
        if (!localMyPokemon) {
            this.myPokemon = [];
        } else {
            this.myPokemon = JSON.parse([localMyPokemon]);
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isCatched = this.catchPokemon();
    }

    /**
     * Handle on element changes, will check duplication of name and set error flag
     * @param {*} event - Event to be handled
     */
    handleChange(event) {
        this.isNicknameTouch = true;
        this.setState({ value: event.target.value });
        if (this.checkDuplicateNickname(this.name, event.target.value.trim())) {
            this.isNicknameDuplicate = true;
        } else {
            this.isNicknameDuplicate = false;
        }
        if (event.target.value === "") {

            this.isNicknameEmpty = true
        } else {
            this.isNicknameEmpty = false;
        }
    }

    /**
     * To save catched Pokemon, with its nickname  
     * @param {*} event - Event to be handled
     */
    handleSubmit(event) {
        var newPokemon = {
            'image': this.props.image,
            'name': this.name,
            'nickname': this.state.value.trim()
        };

        var merged = [...this.myPokemon, newPokemon];
        localStorage.setItem('myPokemon', JSON.stringify(merged));

        this.myPokemon = merged;
        this.props.handleClose();
    }

    /**
     * To check duplication of newly catched Pokemon with existing catched Pokemon
     * @param {*} name - Newly catched Pokemon name
     * @param {*} nickname - Newly catched Pokemon nickname
     * @returns true if it's duplicate, false otherwise
     */
    checkDuplicateNickname(name, nickname) {
        var isDuplicate = false;

        this.myPokemon.forEach((data) => {
            if (data.name === name && data.nickname === nickname) {
                isDuplicate = true;
            }
        });
        return isDuplicate;
    }

    /**
     * To handle with the chance of pokemon being caught, with a 50% chance
     * @returns either 1 or 0
     */
    catchPokemon() {
        if (Math.round(Math.random()) === 1) {
            return (true);
        } else {
            return (false);
        }
    }

    /**
     * To handle error checking
     * @returns true if either name duplicate or nickname empty
     */
    isButtonDisabled() {
        return this.isNicknameDuplicate || this.isNicknameEmpty;
    }

    render() {
        let modalContent;
        if (this.isCatched) {
            modalContent = <div className="row m-0">
                <div className="col-md-12 justify-content-center row col-12 m-0">
                    <img className="col-md-5 col-8" src={pokeballLogo} alt="pokeball" />
                </div>
                <div className="col-md-12">
                    <div className="justify-content-center text-center row m-3">
                        You got me! Please give me a nickname
            </div>
                    <div className="justify-content-center row">
                        <Input type="text" value={this.state.value} onChange={this.handleChange} required={true}></Input>
                    </div>
                    <div className="justify-content-center row m-3">
                        {this.isNicknameDuplicate ? <span>{ERROR_DUPLICATE}</span> : null}
                        {this.isNicknameEmpty ? <span>{ERROR_EMPTY}</span> : null}
                    </div>
                    <div className="justify-content-center row">
                        <Button save onClick={this.handleSubmit} disabled={this.isButtonDisabled()} className="p-2"> Save</Button>
                    </div>
                </div>
            </div>
        } else {
            modalContent = <div className="row m-0">
                <div className="col-md-12 justify-content-center row col-12 m-0">
                    <img className="col-md-5 col-8" src={pokemonRunLogo} alt="pokemon-run" />
                </div>
                <div className="col-md-12">
                    <div className="justify-content-center text-center row m-3">
                        Oops! You missed the pokemon.. Let's catch again!
                 </div>
                    <div className="justify-content-center row">
                        <Button onClick={this.props.handleClose} className="p-2">Close</Button>
                    </div>
                </div>
            </div>
        }
        return (

            <Modal className="p-3" >
                <Box className="col-md-4 col-10">
                    {modalContent}
                </Box>
            </Modal >
        );
    }

}
export default PokemonCatch;
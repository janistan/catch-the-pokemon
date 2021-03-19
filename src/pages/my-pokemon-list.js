import React, { Component } from 'react';
import PokemonCard from '../components/pokemon-card';



class MyPokemonList extends Component {
    name;
    localMyPokemon;
    myPokemon = [];

    constructor(props) {
        super(props);
        this.state = {
            change: false,
            myPokemon: [

            ]
        };

        this.localMyPokemon = localStorage.getItem('myPokemon');
        if (this.localMyPokemon) {
            this.myPokemon = JSON.parse([this.localMyPokemon]);
        } else {
            this.myPokemon = [];
        }

        this.releasePokemon = this.releasePokemon.bind(this);

    }

    /**
     * To release catched Pokemon
     * @param {*} e button element
     */
    releasePokemon(e) {
        var myList = JSON.parse(localStorage.getItem('myPokemon'));
        var name = (e.target.name).split("_");
        this.myPokemon = (myList.filter(data => !(data.name === name[0] && data.nickname === name[1])));
        this.setState({ myPokemon: this.myPokemon });
        localStorage.setItem('myPokemon', JSON.stringify(this.myPokemon));
    }

    render() {
        const isExist = this.myPokemon.length > 0;

        return (
            <div className="col-md-12 col-12 row justify-content-center p-3" > {
                isExist ?
                    (this.myPokemon.map((data) => (
                        <PokemonCard key={`${data.name}_${data.nickname}`}
                        pokemon={data}
                        nickname={data.nickname}
                        actionButton='Release'
                        onRelease={this.releasePokemon}
                    />
                    ))) :
                    'Oops, you don\'t have Pokemon yet'
            } </div>
        )
    }
}

export default MyPokemonList;
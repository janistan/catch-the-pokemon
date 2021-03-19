
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PokemonInfo from './pokemon-info';
import PokemonProfile from './pokemon-profile';
import Card from '../style/card'
import Button from '../style/button'


class PokemonCard extends Component {

  pokemon;
  nickname;
  actionButton;
  onRelease;
  actionButtonContent;
  myPokemon;
  totalOwned;
  localMyPokemon;

  constructor(props) {
    super(props);

    this.pokemon = this.props.pokemon;
    this.nickname = this.props.nickname;
    this.actionButton = this.props.actionButton;
    this.onRelease = this.props.onRelease;
  }

  /**
   * Set data from localStorage
   */
  setFromLocalStorage() {
    var localMyPokemon = localStorage.getItem('myPokemon');
    if (!localMyPokemon) {
      this.myPokemon = [];
    } else {
      this.myPokemon = JSON.parse([localMyPokemon]);
    }
  }

  render() {
    if (this.actionButton === 'Release') {
      this.actionButtonContent =
        <Button
          onClick={this.onRelease}
          name={`${this.pokemon.name}_${this.nickname}`}
          className="p-2">
          {this.actionButton}
        </Button>
    } else if (this.actionButton === 'Owned') {
      this.setFromLocalStorage();
      this.totalOwned = this.myPokemon.filter(data => data.name === this.pokemon.name).length;
      this.actionButtonContent =<Link to={`/pokemon/${this.props.pokemon.name}`}>
          <Button>{this.actionButton} {this.totalOwned}</Button>
        </Link>

    };


    return (
      <Card className="col-md-2 m-3 col-5" >
        <div className="col p-2 text-center">
          <PokemonProfile key={`card-profile-${this.pokemon.name}`} source={this.pokemon.image}></PokemonProfile>
          <PokemonInfo key={`card-info-${this.pokemon.name}`} value={this.pokemon.name}></PokemonInfo>
          {
            this.nickname ?
              <div className="mt-3 mb-3"> nickname : {this.nickname}</div> : null
          }
          <div>
            {this.actionButtonContent}
          </div>
        </div>
      </Card >
    );
  }

}
export default PokemonCard;
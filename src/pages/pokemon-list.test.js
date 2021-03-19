import React from "react";
// import { MockedProvider } from "react-apollo/test-utils";
import TestRenderer from "react-test-renderer";
import wait from "waait";
import { MockedProvider } from '@apollo/client/testing';
import  PokemonList, {GET_POKEMONS}  from './pokemon-list';
import PokemonCard from '../components/pokemon-card';

const mocks = []; // We'll fill this in next

it("should render without error", () => {
  TestRenderer.create(
    <MockedProvider mocks={[]}>
      <PokemonList />
    </MockedProvider>
  );
});

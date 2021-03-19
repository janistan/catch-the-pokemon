import React from "react";
// import { MockedProvider } from "react-apollo/test-utils";
import TestRenderer from "react-test-renderer";
import wait from "waait";
import { MockedProvider } from '@apollo/client/testing';
import PokemonDetails from './pokemon-detail';

const mocks = []; // We'll fill this in next

it("should render without error", () => {
    TestRenderer.create(
        <MockedProvider mocks={[]}>
            <PokemonDetails match={{params: {name: "bulbasaur"}, isExact: true, path: "", url: ""}}/>
        </MockedProvider>
    );
});
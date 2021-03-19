import React from 'react';
import PokemonCard from '../components/pokemon-card';
import { useQuery, gql } from '@apollo/client';
import { Button } from '../style/button';

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;


const gqlVariables = {
  limit: 21,
  offset: 0,
};

const OWNED = 'Owned';

export function PokemonList() {

  var { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;


  const onLoadMore = () => {
    const currentLength = data.pokemons.results.length + 21;
    fetchMore({
      variables: {
        offset: 0,
        limit: currentLength
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult
      }

    })
  }

  return (
    <div className="col-md-12 col-12 row justify-content-center p-3" >
      <div className="col-md-12 col-12 row justify-content-center">
        {
          data.pokemons.results.map((data) => (
            <PokemonCard key={data.image} pokemon={data} actionButton={OWNED} />
          ))
        }
      </div>
      <Button color="#087db5" onClick={onLoadMore} className="p-2 pl-4 pr-4" > load more</Button >
    </div >
  )
}

export default PokemonList;
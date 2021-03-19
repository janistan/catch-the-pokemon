import React from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonDetails from './pages/pokemon-detail';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from './components/header';
import MyPokemonList from './pages/my-pokemon-list';

const stylePage = {
  position: `relative`,
  paddingBottom: `4rem`,
  minHeight: `100vh`
}

const Client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache()
});

function App() {
  const client = Client;
  return (
    <ApolloProvider client={client}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header></Header>
        <div className="" style={stylePage}>
          <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route path="/pokemon/:pokemon" component={PokemonDetails} />
            <Route path="/myPokemon" component={MyPokemonList} />
          </Switch>
          {/* <NavigationMenu /> */}
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}
export default App;
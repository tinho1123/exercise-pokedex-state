import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      index: 0,
    }
  }
    
  handleClick() {
    this.setState((valorAnterior, _props) => ({
      index: valorAnterior.index + 1,
    }))

    if(this.state.index > pokemons.length -2){
      this.setState((valorAnterior, _props) => ({
        index: valorAnterior.index = 0,
      }))
  }
}

    render() {

      return (
            <>
            <button onClick={this.handleClick}>{`Trocar pokemon`}</button>
              <div className="pokedex">   
                  {this.props.pokemons.map((pokemon, index) =>
                  <>
                  {index === this.state.index && <Pokemon key={pokemon.id} pokemon={pokemon} />}
                  </>
                  )}
              </div>
            </>
        );
    }
}

export default Pokedex;
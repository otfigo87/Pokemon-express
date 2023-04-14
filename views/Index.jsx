const React = require('react');

const style = {
    backgroundColor: '#c59696',
    color: '#400303',
    textAlign: 'center',
}
const list = {
  listStyle: "none",
  margin: "10px",
  fontSize: "1.5em"
}
const a = {
  textDecoration: "none", 
  color: "inherit",
  cursor: "pointer",
}

const Index = ({pokemons}) => {
    return (
      <body style={style}>
        <div>
          <h1>Pokemon List</h1>
          <div>
            <ul>
              {pokemons.map((pokemon, i) => (
                <li key={i} style={list}>
                  <a href={`/pokemon/${i}`} style={a}>
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </body>
    );
}

module.exports = Index;
const React = require("react");

const style = {
  backgroundColor: "#c59696",
  color: "#400303",
  textAlign: "center",
};
const a = {
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
};

const Show = ({ pokemons, id }) => {
  return (
    <body style={style}>
      <div>
        <h1>Gotta Catch 'Em All</h1>
        <h2>
          {pokemons[id].name.charAt(0).toUpperCase() + pokemons[id].name.slice(1)}
        </h2>
        <img src={`${pokemons[id].img}.jpg`} alt="Pokemon Image" />
      </div>
      <button>
        <a href="/pokemon" style={a}>BACK</a>
      </button>
    </body>
  );
};

module.exports = Show;

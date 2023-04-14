const React = require('react');

const style = {
  backgroundColor: "#c59696",
  color: "#400303",
  textAlign: "center",
};

const New = () => {
    return (
      <div style={style}>
        <h1>Add your Pokemon</h1>
        <form action="/pokemon" method="post">
          Name: <input type="text" name="name" />
          <br />
          Image: <input type="text" name="img" />
          <br />
          <input type="submit" name="" value="Create Pokemon" />
        </form>
      </div>
    );
}

module.exports = New;
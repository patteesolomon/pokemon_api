const React = require('react');
class Show extends React.Component {
    render ()
    {
        const {pokemons} = this.props;
        return(
            <>
                <h1> - Gotta Catch 'Em All - </h1>
                <h2>{pokemons.name.charAt(0).toUpperCase() + pokemons.name.slice(1)}</h2>
                <img src= {pokemons.img + ".jpg"}/>
                <a href="/pokemon/">Back</a>
            </>
        );
    }
}
module.exports = Show;
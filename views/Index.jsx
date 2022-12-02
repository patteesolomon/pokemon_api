const React = require('react');
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

class Index extends React.Component {
    render () {
        const {pokemon} = this.props;
    return (
        <div>
        <h1 style={myStyle}>Pokemon yay</h1>
        <ul>
        {pokemon.map((pokemon, i) => {
            return (
                <li>
                    <a href={`/pokemon/${i}`}>
                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    </a>
                </li>
            );
        })}
    </ul>
    </div>
    )}
}

module.exports = Index;
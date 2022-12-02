const React = require('react');
const myStyle = {
    color: 'red',
    backgroundColor: '#000090',
    height: '40px',
    translate: '0px -10px'
};

class Index extends React.Component {
    render () {
        const {pokemons} = this.props;
    return (
        <div>
        <h1 style={myStyle}>Pokemon Yay</h1>
        <ul>
        {pokemons.map((pokemons, i) => {
            return (
                <li>
                    <a href={`/pokemon/${i}`}> {pokemons.name.charAt(0).toUpperCase() + pokemons.name.slice(1)}
                    </a>
                </li>
            );
        })}
    </ul>
    </div>
    )}
}

module.exports = Index;
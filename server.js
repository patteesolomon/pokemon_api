const Express = require('express');
const app = Express();
const port = 3000;
const pokemon = require('./models/pokemon.js');


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
    res.render("Index", {
        pokemons : pokemon
    });
});

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {pokemons : pokemon[req.params.id]} );
})

app.listen(port, () => {
    console.log('listening on ' + port);
});
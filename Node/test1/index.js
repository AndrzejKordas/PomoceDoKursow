const express = require('Express');
//instancja aplikacji
const app = express();


//Middelware
app.use('/posty',() => {
    console.log('Middelware');
});



//Routing
app.get('/', (req, res) => {
    res.send('Strona główna');
});

app.get('/posty', (req, res) => {
    res.send('Posty na stronie POST')
});

//nasłuchiwanie
app.listen(5000);

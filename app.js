const http = require('http');
const express = require('express');

const app = express();

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.send('Accueil');
    console.log('Vous etes sur ma page d\'accueil');
});

//Route pour la page d'erreur
app.get('/help', (req, res) => {
    res.status(404).send('Désolé, cette page n\'existe pas.');
    console.error('Erreur 404 du site node js');
});

app.use((req, res, next) => {
    const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    fs.appendFile('JournalNode.log', log, (err) => {
        if (err) console.log(err); console.log('Visite enregistrée');
    });
    next();
});


app.listen(5000);

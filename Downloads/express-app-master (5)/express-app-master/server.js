const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    res.show = (name) => {
        res.sendFile(path.join(__dirname, `/views/${name}`));
    };
    next();
});

app.use(('/user/'), (req, res) => {
    res.show(path.join(__dirname, `views/Forbidden.html`));
});

app.get('/', (req, res) => {
    res.show('Home.html');
});

app.get('/home', (req, res) => {
    res.show('Home.html');
});

app.get('/about', (req, res) => {
    res.show('About.html');
});

app.get('/info', (req, res) => {
    res.show('Info.html');
});

app.use(express.static(path.join(__dirname, '/public')));

app.use((req, res) => {
    res.show(404).sendFile(path.join(__dirname, '/views/NotFound.html'));
});

app.listen(8000, () => {
    console.log('Server is running on port: 8000');
});
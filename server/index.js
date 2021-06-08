const express = require('express');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cros = require('cors');
const PORT = 3001;

const app = express();

const jwtsecreat = 'complextjwttocken';

app.use(cros());

app.use(bodyParser.json()); 

app.post('/login', (req, res) => {
    // Read username and password from request body
    const { username, password } = req.body;

    // Filter user from the users array by username and password
    // const user = users.find(u => { return u.username === username && u.password === password });

    // if (user) {
        // Generate an access token
        const accessToken = jsonwebtoken.sign({ username: username }, jwtsecreat);

        res.json({
            accessToken
        });
    // } else {
    //     res.send('Username or password incorrect');
    // }
});

app.use(jwt({ secret: jwtsecreat, algorithms: ['HS256'] }));

const foods = [
    { id: 1, name: 'food1'},
    { id: 2, name: 'food2'},
    { id: 3, name: 'food3'}
];

app.get('/foods',(req, res) => {
    res.json(foods);
})

app.listen(PORT);
console.log(`app is running on this ${PORT}`);
 
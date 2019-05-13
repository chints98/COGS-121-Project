const express = require ('express');
const app = express();

var path = require('path');

app.use(express.static('static_files'));


// GET function to load Login page

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/static_files/login.html'));
});


// GET function to make sure login works
app.get('/userAccount', function(req, res) {

});


//Fake database has some key attributes.
//1. news headline
//1. Article body
//1. Article image
//1. news headline

const newsDatabase = {
    'headline1':
    {headline: 'Fire kills 5 in San Diego', body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: 'news1Pic.jpg'
    }
}



const userDatabase = {
    'admin': {username: 'admin', password: 'admin'}
}


app.get('/userCred', function(req, res) {
    const lookup = Object.keys(userDatabase)[0]
    const cred = userDatabase[lookup]
    res.send(cred)
});


// GET news data on load (card)
app.get('/articleData', function(req, res) {
    const lookup = Object.keys(newsDatabase)[0]
    console.log(lookup)
    const article = newsDatabase[lookup]
    res.send(article)
});


// GET news data on article page
// Have to change functionality of this a fair bit to present
app.get('/articleDetail:headline', function(req, res) {
    const lookup = newsDatabase[headline]
    console.log(lookup)
    const article = newsDatabase[lookup]
    res.send(article)

});




// start server
app.listen(3000, () => {
    console.log('Server started at http://localhost:3000/');
  });


const express = require('express')
const serverless = require('serverless-http');
const app = express()

// const listened = 3500;

app.use(express.static('public'));

let pageData = {
    title: '/'
}

app.get('/', (req, res) => {
    pageData.title = 'Index'
    res.render('index.ejs', { pageData })
})

app.get('/CV', (req, res) => {
    pageData.title = 'CV'
    res.render('cv.ejs', { pageData })
})

/* Projets */

app.get('/Projets', (req, res) => {
    pageData.title = 'Projets'
    res.render('projets.ejs', { pageData })
})

app.get('/Fazer', (req, res) => {
    pageData.title = 'Fazer'
    res.render('fazer.ejs', { pageData })
})

/* Portfolio */
app.get('/Portfolio', (req, res) => {
    pageData.title = 'Portfolio'
    res.render('portfolio.ejs', { pageData })
})

app.get('/Illustrations', (req, res) => {
    pageData.title = 'Illustrations'
    res.render('illustrations.ejs', { pageData })
})

/* Autre */

app.get('/Contact', (req, res) => {
    pageData.title = 'Contact'
    res.render('contact.ejs', { pageData })
})

/* Error */

app.get('/Error', (req, res) => {
    pageData.title = 'Error'
    res.status(404);
    res.render('error.ejs', { pageData })
})

// app.use(function(req, res) {
//     res.redirect('/Error')
// })

// app.listen(listened, () => {
//     console.log(`Server loaded on port ${listened}`)
// })

module.exports.handler = serverless(app);
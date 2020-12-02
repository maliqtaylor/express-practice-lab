//require core modules
const express = require('express')
const path = require('path')
const studentDb = require('./data/student-db')


//create the express app
const app = express()

//configure the app.set
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//mount routes
app.get('/', (req, res) => {
    res.redirect('home')
});

app.get('/home', (req, res) => {
    res.render('./home')
})

app.get('/students', (req, res) => {
    res.render('./students/index', {
        students: studentDb.getAll()
    })
})

//listen on port 3000
app.listen(3000, () => {
    console.log('listening on port 3000');
})
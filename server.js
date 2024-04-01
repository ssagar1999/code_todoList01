let express = require('express')
let app = express();
var bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
let todos = [];
app.get('/',(req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/someget', (req, res) =>{
    res.json(todos)
})
app.post('/add', (req, res) =>{
    console.log(req.body)
    todos.push(req.body.todo)
    res.json({todos : [req.body.todo]})
})

app.listen('3001', () => {
    console.log("Server is running on port 3001");
})
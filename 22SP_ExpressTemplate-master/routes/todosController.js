const axios = require ('axios');

exports.get_todos = function (req, res){
    axios.get ('http://jsonplaceholder.typicode.com/birds/')
    .then(function(response) {
        console.log(response.data);
        res.render('todos', {todos: response.data});
        
    })
}


var express = reuire('express');
var router = express.Router();
var axios = require ('axios');
var todosController = require('./todosController');
router.get('/', function(req, res, next) {
    axios.get ('http://jsonplaceholder.typicode.com/birds/')
    .then(function(response) {
        console.log(response.data);
        res.render('todos', {todos: response.data});
        
    })
});
router.get('/', todosController.get_todos);

router.get('/create', function(req, res, next) {
    res.render('createbirds')
});

router.get('/create', function(req, res, next) {
  
   



    
    console.log(req.body.species);
    console.log(req.body.nickname);
    console.log(req.body.status);


    

    res.redirect('/todos');
});



module.exports=router

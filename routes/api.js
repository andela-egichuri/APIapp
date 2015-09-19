var express = require('express');
var router = express.Router();

router.route('/users')
	
	//return all users
	.get(function (req, res) {
		res.send({message: 'TODO return all users'});
	})

	//create new user
	.post(function (req, res) {
		res.send({message: 'TODO create new users'});
	});

	

router.route('/users/:id')

	//return a particular user
	.get(function (req, res) {
		res.send({message: 'TODO return user with ID ' + req.params.id});
	})

	//update user
	.put(function (req, res) {
		res.send({message: 'TODO modify user with ID ' + req.params.id});
	})

	//delete user
	.delete(function (req, res) {
		res.send({message: 'TODO delete user with ID ' + req.params.id});
	});

module.exports = router;

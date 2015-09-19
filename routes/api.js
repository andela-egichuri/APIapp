var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');

//trying out APIs

router.route('/contacts')
	
	//return all users
	.get(function (req, res) {
		
		Contact.find(function(err, data){

			if (err) {
				return res.send(500, err);
			}

			return res.send(data);
		});

	})

	//create new user
	.post(function (req, res) {
		
		var contact = new Contact();
		contact.firstName = req.body.firstName;
		contact.lastName = req.body.lastName;
		contact.phone = req.body.phone;
		contact.phone = req.body.phone;
		contact.save(function(err, data){

			if (err) {
				return res.send(500, err);
			}

			return res.json(contact);
		});
	});

	

router.route('/contacts/:id')

	//return a particular user
	.get(function (req, res) {
		Contact.findById(req.params.id, function (err, contact) {
			if (err) {
				res.send(err);
			}
			res.json(contact);
		})
	})

	//update user
	.put(function (req, res) {
		Contact.findById(req.params.id, function (err, contact) {
			if (err) {
				res.send(err);
			}

			contact.firstName = req.body.firstName;
			contact.lastName = req.body.lastName;
			contact.phone = req.body.phone;
			contact.phone = req.body.phone;
			contact.save(function(err, data){

				if (err) {
					return res.send(500, err);
				}

				return res.json(contact);
			});
		});
	})

	//delete user
	.delete(function (req, res) {
		Contact.remove({
			_id: req.params.id
		}, function (err) {
			if (err) {
				res.send(err);
			res.json('Deleted')	
			};
		})
	});

module.exports = router;

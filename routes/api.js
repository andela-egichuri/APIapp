var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');



router.route('/contacts')
	

	.get(function (req, res) {
		
		Contact.find(function(err, data){

			if (err) {
				return res.send(500, err);
			}

			return res.send(data);
		});

	})


	.post(function (req, res) {
		
		var contact = new Contact();
		contact.firstName = req.body.firstName;
		contact.lastName = req.body.lastName;
		contact.phone = req.body.phone;
		contact.email = req.body.email;
		contact.save(function(err, data){

			if (err) {
				return res.send(500, err);
			}

			return res.json(contact);
		});
	});

	

router.route('/contacts/:id')

	.get(function (req, res) {
		Contact.findById(req.params.id, function (err, contact) {
			if (err) {
				res.send(err);
			}
			res.json(contact);
		})
	})

	
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

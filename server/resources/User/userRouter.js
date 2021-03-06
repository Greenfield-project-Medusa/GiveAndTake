var userRouter = require('express').Router();
var userController = require('./UserController');

userRouter.route('/')
	.get(function (req, res) {
		res.json("Not Allowed To Enter Here");
	})

userRouter.route('/login')
	.post(function (req, res) {
		userController.login(req, res);
	})

userRouter.route('/create')
	.post(function (req, res) {
		userController.create(req, res);
	})

userRouter.route('/logout')
	.get(function (req, res) {
		userController.logout(req, res); 
	})

userRouter.route('/loginAuth')
	.get(function (req, res) {
		if (req.session.username) {
			userController.findUser(req, res);
		} else {
			res.json('{firstName: guest, lastName: 1}');
		}
	})

userRouter.route('/addItem')
	.post(function (req, res) {
		userController.addItem(req, res);
	})

userRouter.route('/sendMessage')
	.post(function (req, res) {
		userController.sendMessage(req, res);
	})

module.exports = userRouter;

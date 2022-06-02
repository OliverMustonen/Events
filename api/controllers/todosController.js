const router = require('express').Router();
// const express = require('express');
// const router = express.Router();
const todoModel = require('../models/todos/todoModel');

router.get('/', todoModel.getTodos);
router.get('/:id', todoModel.getOneTodo);

router.post('/', todoModel.saveTodo);

router.patch('/:id', todoModel.updateTodo);

router.delete('/:id', todoModel.deleteTodo);

module.exports = router;

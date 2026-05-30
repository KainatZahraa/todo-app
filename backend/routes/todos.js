const express = require('express');
const router = express.Router();
const {getTodos, createTodo, toggleTodo, deleteTodo} = require('../controllers/todoController');

router.get('/', getTodos);
router.post('/', createTodo);
router.put('/:id', toggleTodo);
router.delete('/:id', deleteTodo);

module.exports = router;

const mongodb = require('mongoose');
const Todo = require('./todoSchema');


exports.getTodos = (req, res) => {
  Todo.find({}, (err, data) => {
    if(err) {
      return res.status(500).json({
        statsuCode: 500,
        status: false,
        message: err.message || 'Something went wrong when fetching the todos'
      })
    }
 
  res.status(200).json(data);
})
}

exports.getOneTodo = (req, res) => {
  Todo.findById(req.params.id)
  // Todo.find({ _id: req.params.id })
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json(err))
}

exports.saveTodo = (req, res) => {
  const todo = new Todo({
    // _id: new mongodb.Types.ObjectId,
    title: req.body.title,
    desc:   req.body.desc,
    date: req.body.date
  })

  todo.save()
  .then(() => {
    res.status(201).json({
      statusCode: 201,
      status: true,
      message: 'Todo created successfully'
    })
  })
  .catch(() => {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Failed to create todo'
    })
  })
}

exports.deleteTodo = (req, res) => {
  Todo.deleteOne({ _id: req.params.id })
  .then(() => {
    res.status(200).json({
      statusCode: 200,
      status: true,
      message: 'Todo deleted'
    })
  })
  .catch(() => {
    res.status(500).json({
      statusCode: 500, 
      status: false,
      message: 'Failed to delete todo'
    })
  })
}

exports.updateTodo = (req, res) => {
  Todo.updateOne({ _id: req.params.id }, req.body)
  .then(() => {
    res.status(200).json({
      statusCode: 200,
      status: true,
      message: 'Todo updated successfully'
    })
  })
  .catch(() => {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Failed to update todo'
    })
  })
}
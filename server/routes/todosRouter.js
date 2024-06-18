const express = require ('express')
const router = express.Router()
const todosController = require ('../controllers/todosController')

router.get("/",todosController.getAllTodos)
router.get("/:id",todosController.getTodoById)
router.post("/",todosController.createNewTodo)
router.delete("/",todosController.deleateTodo)
router.put("/",todosController.updateTodo)

router.put("/steps/:id",todosController.updateTodoStep)

router.put("/complete",todosController.updateTodoComplete)


module.exports = router
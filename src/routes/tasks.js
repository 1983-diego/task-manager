const express = require("express")
const { getAllTasks, getTask, updateTask, createTask, deleteTask } = require("../controllers/tasks")
const router = express.Router()


router.route("/").get(getAllTasks).post(createTask) // router.get("/", getAllTasks)...
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)



module.exports = router
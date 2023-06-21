const Task = require('../models/task')

const getAllTasks = async(req, res ) => {
    try {
        const tasks = await Task.find({})

        return res.json({tasks})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const createTask = async (req, res ) => {
    try {
        const task = await Task.create(req.body)

        return res.status(201).json({task})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

const getTask = async (req, res ) => {
    try {
        const { id } = req.params

        const task = await Task.findOne({_id:id})
        
        if(!task) {
            return res.status(404).json({message: `Task ${id} not found`})
        }

        return res.status(200).json({task})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
    res.json({ id: req.params.id })
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params

        const task = await Task.findOneAndUpdate({_id:id}, req.body,{
            new:true,
            runValidators:true
        })
        
        if(!task) {
            return res.status(404).json({message: `Task ${id} not found`})
        }

        return res.status(200).json({task})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params

        const task = await Task.findOneAndDelete({_id:id})
        
        if(!task) {
            return res.status(404).json({message: `Task ${id} not found`})
        }

        return res.status(200).json({message: `Task deleted`})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
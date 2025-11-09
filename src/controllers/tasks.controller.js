import { Task } from "../models/tasks.model.js";

export const getTasks = async (req, res) => {
    const tasks = await Task.find(
        { user : req.user.id }
    ).populate('user', 'username email');
    res.json(tasks);
};

export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
    res.json(task);
};

export const postTask = async (req, res) => {
    const { title, description, date } = req.body;
    const newTask = new Task({ title, description, date, user:req.user.id });
    const savedTask = await newTask.save();
    res.json(savedTask);
};

export const deleteTask = async (req, res) => {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ message: "Tarea no encontrada" });
    res.json({ message: "Tarea eliminada correctamente" });
};

export const updateTask = async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) return res.status(404).json({ message: "Tarea no encontrada" });
    res.json(updatedTask);
};

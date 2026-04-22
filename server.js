const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage (for production, use a database)
let todos = [
    { id: 1, text: '欢迎使用待办网站', completed: false, createdAt: new Date().toISOString() },
    { id: 2, text: '点击添加新任务', completed: false, createdAt: new Date().toISOString() }
];

// API Routes
app.get('/api/todos', (req, res) => {
    res.json(todos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
});

app.post('/api/todos', (req, res) => {
    const { text } = req.body;
    if (!text || text.trim() === '') {
        return res.status(400).json({ error: '任务内容不能为空' });
    }
    const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString()
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const { text, completed } = req.body;
    const todo = todos.find(t => t.id === parseInt(id));
    if (!todo) {
        return res.status(404).json({ error: '任务不存在' });
    }
    if (text !== undefined) todo.text = text.trim();
    if (completed !== undefined) todo.completed = completed;
    res.json(todo);
});

app.delete('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(t => t.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ error: '任务不存在' });
    }
    todos.splice(index, 1);
    res.json({ success: true });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const getUsers = () => {
    const data = fs.readFileSync('./400_users_data.json', 'utf-8');
    return JSON.parse(data);
};


const saveUsers = (data) => {
    fs.writeFileSync('./400_users_data.json', JSON.stringify(data, null, 2));
};

app.get('/', (req, res) => {
    res.send("Welcome to User API 🚀");
});

app.get('/api/users', (req, res) => {
    const users = getUsers();
    res.json(users);
});


app.get('/api/users/:id', (req, res) => {
    const users = getUsers();
    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});

app.post('/api/users', (req, res) => {
    const users = getUsers();
    const newUser = {
        id: users.length + 1,
        ...req.body
    };

    users.push(newUser);
    saveUsers(users);

    res.status(201).json({ message: "User created", user: newUser });
});


app.put('/api/users/:id', (req, res) => {
    const users = getUsers();
    const id = Number(req.params.id);

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users[index] = { id, ...req.body };
    saveUsers(users);

    res.json({ message: "User fully updated", user: users[index] });
});


app.patch('/api/users/:id', (req, res) => {
    const users = getUsers();
    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    Object.assign(user, req.body);
    saveUsers(users);

    res.json({ message: "User partially updated", user });
});


app.delete('/api/users/:id', (req, res) => {
    let users = getUsers();
    const id = Number(req.params.id);

    const newUsers = users.filter(u => u.id !== id);

    if (users.length === newUsers.length) {
        return res.status(404).json({ message: "User not found" });
    }

    saveUsers(newUsers);

    res.json({ message: "User deleted" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// cap theorem?
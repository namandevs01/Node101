const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/MVC_Project')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));
const PORT = 3000;

const newSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: String, required: true },
});
const User = new mongoose.model('User', newSchema);

app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res)=> {
    const user = await User.find(req.user);
    res.json(user);
})
app.post('/users', async (req, res) => {
    const data = req.body;
    const user = await User.create(data);
    res.json(user);

})
app.listen(PORT, ()=> {
    console.log('Listening on port http://localhost:' + PORT);
})

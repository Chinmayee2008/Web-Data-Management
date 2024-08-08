// server.js (Node.js/Express)

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Fake users database
const users = {
    'user1': 'admin',
    'user2': 'password321',
    // Add more users as needed
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username] === password) {
        // Authentication successful
        res.json({ message: 'Login successful', token: 'your-generated-token' });
    } else {
        // Authentication failed
        res.status(401).json({ message: 'Login failed' });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

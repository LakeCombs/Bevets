const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Route all requests to the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

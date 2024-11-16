

const express = require('express');
const fs = require('fs').promises; // Use promises API for fs
const path = require('path');

const app = express();
app.use(express.json());

app.get('/files', async (req, res) => {
    const files = ['file1.txt', 'file2.txt', 'file3.txt'];
    const resultArray = {};

    try {
        // Read all files asynchronously
        await Promise.all(
            files.map(async (file) => {
                const filePath = path.join(__dirname, 'files', file);
                console.log('file', filePath, file)
                try {
                    const data = await fs.readFile(filePath, 'utf-8');
                    resultArray[file] = data;
                } catch (err) {
                    console.error(`Error reading file ${file}:`, err);
                    resultArray[file] = 'Error reading file';
                }
            })
        );
        res.json({ resultArray });
        res.status(200).send('ok')
    } catch (err) {
        console.error('Error processing files:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

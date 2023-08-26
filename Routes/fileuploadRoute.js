const express = require('express');
const csvParser = require('csv-parser');
const XLSX = require('xlsx');
const Data = require('../Models/dataSchema');
const multer = require('../controllers/multer');
const router = express.Router();

router.post('/upload', multer.single('file'), (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ message: 'No file provided' });
    }

    const filePath = file.path;

    if (file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

        Data.insertMany(sheetData)
            .then(() => {
                res.status(200).json({ message: 'Data uploaded successfully' });
            })
            .catch((err) => {
                console.error('Error inserting data:', err);
                res.status(500).json({ error: 'Internal server error' });
            });
    } else if (file.mimetype === 'text/csv') {
        const results = [];

        require('fs')
            .createReadStream(filePath)
            .pipe(csvParser())
            .on('data', (data) => {
                results.push(data);
            })
            .on('end', () => {
                Data.insertMany(results)
                    .then(() => {
                        res.status(200).json({ message: 'Data uploaded successfully' });
                    })
                    .catch((err) => {
                        console.error('Error inserting data:', err);
                        res.status(500).json({ error: 'Internal server error' });
                    });
            });
    } else {
        return res.status(400).json({ message: 'Unsupported file type' });
    }
});

module.exports = router;

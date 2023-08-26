const multer = require('multer');
const path = require('path');
const XLSX = require('xlsx'); // For XLSX file processing
const csvParser = require('csv-parser'); // For CSV file processing

// Multer Config
module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if (ext !== '.xlsx' && ext !== '.csv') { // Update file extensions
            cb(new Error('File type is not supported'), false);
            return;
        }
        cb(null, true);
    },
});

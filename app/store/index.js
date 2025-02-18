const fs = require('fs');
const path = require('path');

const getData = () => {
    const data = fs.readFileSync(path.join(__dirname, './storage.json'));
    return JSON.parse(data);
};

module.exports = getData;
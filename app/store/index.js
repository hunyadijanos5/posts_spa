const fs = require('fs');
const path = require('path');

const getData = () => {
    console.log('getData', path.join(__dirname, './storage.json'));
    const data = fs.readFileSync(path.join(__dirname, './storage.json'));
    return JSON.parse(data);
};

module.exports = getData;
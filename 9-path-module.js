const path = require('path');

// Will return your seperator
console.log(path.sep)

// Join as the limiter, normalized resulting path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath);
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute)



const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');

const dir = (process.argv.length < 3) ? './' : process.argv[2];

fs.readdir(dir, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        try {
            const abspath = path.resolve(path.join(dir, file));
            const dimensions = sizeOf(abspath);
            console.log(`${file},${dimensions.width},${dimensions.height}`);
        } catch (err) {
            console.log(err);
        }
    });
});
// to readt the file and zip and store

const fs = require("fs");

const zlib = require("zlib");
const gzip = zlib.createGzip();

const readStream = fs.createReadStream(+"./sample.txt", "utf-8");

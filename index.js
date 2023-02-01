// const fs = require('fs');
// const path = require("path")
// const key = fs.readFileSync('../_CertAuth/localhost/localhost.decrypted.key');
// const cert = fs.readFileSync('../_CertAuth/localhost/localhost.crt');

// const express = require('express');
// const app = express();

// // app.get('/', (req, res, next) => {
// //   res.status(200).send('Hello world!a');
// // });

// const https = require('https');
// const server = https.createServer({ key, cert }, app);

// app.get("*", (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, "public", "index.html"))
// })
// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is listening on https://localhost:${port}`);
// });

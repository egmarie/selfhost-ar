const fs = require('fs');
const key = fs.readFileSync('../_CertAuth/localhost/localhost.decrypted.key');
const cert = fs.readFileSync('../_CertAuth/localhost/localhost.crt');

const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('<!DOCTYPE html>Hello world!');
});

const https = require('https');
const server = https.createServer({ key, cert }, app);

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on https://localhost:${port}`);
});
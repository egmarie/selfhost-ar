const path = require("path")
const express = require("express")
// import path from 'path'
// import express from 'express'

const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
  })

app.listen(3000)


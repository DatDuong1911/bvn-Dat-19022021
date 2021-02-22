var express = require('express')
var bodyParser = require('body-parser')
var port = 1911
var app = express()
var path = require("path")
var indexRouter = require("./routers/index")
var userRouter = require("./routers/user")
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static("public"))
app.use("/user", userRouter)


app.use("/", indexRouter)

app.listen(port, function() {
    console.log("0", port);
})
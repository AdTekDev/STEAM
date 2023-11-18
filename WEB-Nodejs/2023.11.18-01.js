
express = require("express")
app = express()
PORT = 80

app.get("/", (req, res) => {
    res.send("day la trang home !")
})

app.get("/gioithieu", (req, res) => {
    res.send("day la trang Gioi Thieu !")
})

app.listen(PORT, () => {
    console.log(`WEB da mo tai CONG ${PORT}`)
})

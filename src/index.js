import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

const port = 3000

app.get("/", (req,res) => {
    res.send("funcionando")

})

app.listen(port, function() {
    console.log(`porta rodando na ${port}`)
})

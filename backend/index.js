import express from "express"
import cors from "cors"
import mongoose from "mongoose"



const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/quizapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})
//book DB
const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    maths: Number,
    science: Number,
    computer: Number,
    english: Number,
    password: String,
    email: String
})
const User = new mongoose.model("users", userSchema)


//routes
app.get("/", (req, res) => {
    User.find((err, data) => {
        if (!err) {
            console.log(data)
            res.send(data);
        }
        else { console.log(err) }
    })



})
app.post("/register", (req, res) => {
    const { i, n, p, em } = req.body
    User.findOne({ email: em }, (err, user) => {
        if (user) {
            res.send({ message: "User already registerd" })
        }
        else {
            const user = new User({
                id: i,
                name: n,
                email: em,
                password: p


            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully submitted" })
                }
            })
        }
    })
}
)

app.post("/searchid", (req, res) => {
    const { id } = req.body

    User.find({ id: id }, (err, user) => {
        if (user) {
            res.send(user)
        }
        else {
            res.send("error in search")
        }

    })
})


app.post("/addmarks", (req, res) => {
    const { i, m, s, c, e } = req.body
    User.findOneAndUpdate({ id: i }, { $set: { maths: m, science: s, computer: c, english: e } }, { new: true }, (err, doc) => {


        if (!err) {
            console.log("Successful updation");
            res.send(doc);
        }
        else {
            console.log(err);
        }

    });


})

app.post("/login", (req, res) => {
    const { em, pass } = req.body
    User.findOne({ email: em }, (err, user) => {
        if (user) {
            if (pass === user.pass) {
                res.send({ message: "Login Successfull", user: user })
            } else {
                res.send({ message: "Password didn't match" })
            }
        } else {
            res.send({ message: "User not registered" })
        }
    })
})



app.listen(5000, () => {
    console.log("Server started at port 5000")
})
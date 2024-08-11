import cors from 'cors';
import express from 'express';
import { connectToDB, db } from "./db.js";

const app = express()
app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
    res.json("server is running successfully!");
})

// app.post('/ast', async(req, res) => {
//     await db.collection("friends").find().toArray()
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })

// app.post('/insert', async(req, res) => {
    
//     await db.collection("friends").insertOne({Name:req.body.name,Team:req.body.team})
//     .then((result)=>{
//         res.json(result)
//     }).catch((e)=>console.log(e))
 
// })

// app.post('/insertmany', async(req, res) => {
//     await db.collection("friends").insertMany(req.body)
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })

// app.post('/findone', async(req, res) => {
//     await db.collection("friends").findOne({Name:"teja"})
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })

// app.post('/findmany', async(req, res) => {
//     await db.collection("friends").find().toArray()
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })

// app.post('/updateone', async(req, res) => {
//     await db.collection("friends").updateOne({Name:"teja"},{$set:{Age:20}})
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })

// app.post('/updateone', async(req, res) => {
//     await db.collection("friends").findOneAndUpdate({Name:"teja"},{$set:{Age:20}})
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })

// app.post('/updatemany', async(req, res) => {
//     await db.collection("friends").updateMany({Age:20},{$set:{Age:25}})
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })

// app.post('/deleteone', async(req, res) => {
//     await db.collection("friends").deleteOne({Name:"teja"})
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })

// app.post('/detemany', async(req, res) => {
//     await db.collection("friends").deleteMany()
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })

app.post('/signin', async(req, res) => {
    await db.collection("friends").findOne({email:req.body.name})
    .then((result)=>{
        if(result?.password===req.body.password){
            res.json({message:"login sucess", values:result})
        } else {
            res.json({error:"user not found"})
        }
    })
    .catch((e)=>console.log(e))
})
app.post('/signup', async (req, res) => {
    try {
        const result = await db.collection("friends").findOne({ email: req.body.email });

        if (result) {
            return res.json({ message: "user already Exists", values: result });
        } else {
            const output = await db.collection("friends").insertOne({
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                phone: req.body.phone
            });

            return res.json({ message: "account created", values: output });
        }
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/students', async (req, res) => {
    try {
        const students = await db.collection("friends").find({}).toArray();
        res.json(students);
    } catch (error) {
        console.log('Error fetching students:', error);
        
    }
});


connectToDB(() => {
    app.listen(9000, () => {
        console.log("server running at 9000");
    })
})
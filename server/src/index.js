const express=require("express");
const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
const route=require("./routes/route")

const app=express();

app.use(express.json());

mongoose.connect("mongodb+srv://Ashutosh1504:mDCukiXFV8gb11wn@cluster0.aqhdgzq.mongodb.net/BackendretryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(()=> console.log("MongoDb is connected"))
    .catch((error)=>console.log(error.message))

app.use("/",route)

app.listen(3000,()=>{
console.log("Express app running on "+3000)
})
import express from "express"
import bodyParser from "body-parser"; 
import axios from "axios";

const app=express();
const port=3000;

const URL="https://v2.jokeapi.dev/joke/";


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index.ejs");
});  //renders Home page

app.post("/", async (req,res)=>{
    const endpoint=req.body.category;
   try{
    const result= await axios.get(URL+endpoint);
    res.render("index.ejs",{content: result.data.setup+".................."+ result.data.delivery});
   } catch(error){
     res.status(400).send(error.message);
   }
} )

app.listen(port,()=>{
  console.log(`Listening at port ${port}`);
})





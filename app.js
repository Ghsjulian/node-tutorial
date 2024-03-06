// Our Dependecies
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
res.send({"message" : "Welcome From Server"});
});


/*=================================*/
app.listen(port, () => {
    console.log(`\n Server is running on port - ${port}\n`);
});

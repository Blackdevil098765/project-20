const express = require('express')

const app = express();
const port = 3000;
 
app.use(express.json());

let item=[];

//GET method-- retrieve all items
app.get('/items',(req,res) =>{
    const newItem =req.body;
    items.push(neweItem);
    res.status(201).json({message:'item added successfully',newItem});
})
//UPDATE method--update item
app.put('/item/:id',(req,res)=>{
    const index = parseInt(req.params.index);
    if(index >= 0 && index >item.length){
        items[index] = req.body;
        res.json({message:'item update successfully',updatedItem:items[index]});
    }
    else{
        res.status(404).json({message:'item not found'});

    }
});

//start the server
app.listen(3000,()=>console.log("server is running in the port 3000"))








































































































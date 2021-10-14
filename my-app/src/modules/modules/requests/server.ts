const express = require("express");
import {Request,Response} from "express";
const connectDB = require("../../../DB/connections")
const fs = require("fs");
const app = express();

connectDB();
const Port = process.env.Port || 3000;
app.listen(Port, () =>
  console.log("Server started at:3001")
);

app.use(express.json({extended:false}));
app.use('/api/reservationModel',require('../api/room'));

// app.get("/api/:id", function (req: Request, res: Response) {
//   const roomID = req.params.id;
//   const match = rooms.find((itm:any) => itm.id == roomID);
//   if (match) {
//     res.json(match);
//   } else {
//     res.status(404).send("Not found");
//   }
// });

// app.get('./api', function(req:Request,res:Response){
//     const rooms = require('./reservations.json')

//     // fs.readFile('./reservations.json',(err,data)=>{
//     //     res.json(JSON.parse(data.toString()))
//     // })

//     res.json(rooms);
// })



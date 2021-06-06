const express = require('express');
const mongoose = require('mongoose');
const Room = require('../../../DB/rooms');
const route = express.Router();
import {Request,Response} from "express";

route.post('/', async(req:Request,res:Response)=>{
    const {roomID,from,to} = req.body;
    let reservation = {};
    reservation.roomID = roomID;
    reservation.from = from;
    reservation.to = to;

    let reservationModel = new Room(reservation);
    await reservationModel.save();
    res.json(reservationModel);
})

module.exports = route;